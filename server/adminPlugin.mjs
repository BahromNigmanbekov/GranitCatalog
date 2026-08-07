// Local-only admin API, wired into Vite's dev server via configureServer().
// This code never runs in `vite build` / `vite preview` / production —
// it only exists while `npm run dev` is active on your machine.
//
// To remove the whole temporary dashboard later: delete this file, delete
// the `server/` folder, delete `src/admin/`, remove the adminApiPlugin()
// line from vite.config.ts, and remove the `/admin` route from src/App.tsx.
// src/data/stones.json, src/data/imageDims.json and public/assets/ keep
// every product and photo you added — nothing there gets touched.

import fs from "node:fs";
import path from "node:path";
import formidable from "formidable";
import { imageSize } from "image-size";

const ROOT = process.cwd();
const STONES_JSON = path.join(ROOT, "src/data/stones.json");
const IMG_DIMS_JSON = path.join(ROOT, "src/data/imageDims.json");
const ASSETS_DIR = path.join(ROOT, "public/assets");

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Windows (antivirus, the editor, or Vite's own file watcher on src/**) can
// transiently hold a lock on a file we're about to overwrite. Retry a few
// times instead of failing the whole request over a race that clears itself.
async function writeJsonWithRetry(file, data) {
  const payload = JSON.stringify(data, null, 2) + "\n";
  const RETRYABLE = new Set(["EBUSY", "EPERM", "EACCES"]);
  for (let attempt = 1; attempt <= 5; attempt++) {
    try {
      fs.writeFileSync(file, payload);
      return;
    } catch (err) {
      if (!RETRYABLE.has(err.code) || attempt === 5) throw err;
      await sleep(80 * attempt);
    }
  }
}

function sendJson(res, status, data) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(data));
}

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (c) => chunks.push(c));
    req.on("end", () => {
      const raw = Buffer.concat(chunks).toString("utf8");
      try {
        resolve(raw ? JSON.parse(raw) : {});
      } catch (e) {
        reject(e);
      }
    });
    req.on("error", reject);
  });
}

function slugify(input) {
  return String(input)
    .toLowerCase()
    .replace(/[ʻ'’`ʼ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "item";
}

function uniqueId(base, existingIds) {
  let candidate = base;
  let n = 2;
  while (existingIds.has(candidate)) {
    candidate = `${base}-${n++}`;
  }
  return candidate;
}

export function adminApiPlugin() {
  return {
    name: "granit-admin-api",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url || !req.url.startsWith("/api/")) return next();
        const url = new URL(req.url, "http://localhost");
        const pathname = url.pathname;

        try {
          // ---- stones list ----
          if (pathname === "/api/stones" && req.method === "GET") {
            return sendJson(res, 200, readJson(STONES_JSON));
          }

          if (pathname === "/api/stones" && req.method === "POST") {
            const body = await readJsonBody(req);
            const stones = readJson(STONES_JSON);
            const ids = new Set(stones.map((s) => s.id));
            const id = uniqueId(slugify(body.name), ids);
            const newStone = {
              id,
              name: body.name || "",
              origin: body.origin || "",
              type: body.type || "granit",
              colorFamily: body.colorFamily || "kulrang",
              finish: body.finish || [],
              description: body.description || "",
              specs: body.specs || { thickness: "", formats: "", application: [], hardness: "", absorption: "" },
              images: body.images || [],
              projects: body.projects || [],
              featured: !!body.featured,
            };
            stones.push(newStone);
            await writeJsonWithRetry(STONES_JSON, stones);
            server.ws.send({ type: "full-reload" });
            return sendJson(res, 200, newStone);
          }

          // ---- single stone ----
          const stoneMatch = pathname.match(/^\/api\/stones\/([^/]+)$/);
          if (stoneMatch && req.method === "PUT") {
            const id = decodeURIComponent(stoneMatch[1]);
            const body = await readJsonBody(req);
            const stones = readJson(STONES_JSON);
            const idx = stones.findIndex((s) => s.id === id);
            if (idx === -1) return sendJson(res, 404, { error: "Topilmadi" });
            stones[idx] = { ...stones[idx], ...body, id };
            await writeJsonWithRetry(STONES_JSON, stones);
            server.ws.send({ type: "full-reload" });
            return sendJson(res, 200, stones[idx]);
          }

          if (stoneMatch && req.method === "DELETE") {
            const id = decodeURIComponent(stoneMatch[1]);
            const stones = readJson(STONES_JSON);
            const next = stones.filter((s) => s.id !== id);
            await writeJsonWithRetry(STONES_JSON, next);
            server.ws.send({ type: "full-reload" });
            return sendJson(res, 200, { ok: true });
          }

          // ---- image upload ----
          if (pathname === "/api/upload" && req.method === "POST") {
            fs.mkdirSync(ASSETS_DIR, { recursive: true });
            const existingFiles = new Set(fs.readdirSync(ASSETS_DIR));

            const form = formidable({
              uploadDir: ASSETS_DIR,
              keepExtensions: true,
              maxFileSize: 20 * 1024 * 1024,
              filename: (_name, ext, part) => {
                const original = part.originalFilename || "rasm";
                const base = slugify(path.basename(original, path.extname(original)));
                let candidate = `${base}${ext}`;
                let n = 2;
                while (existingFiles.has(candidate)) {
                  candidate = `${base}-${n++}${ext}`;
                }
                existingFiles.add(candidate);
                return candidate;
              },
            });

            const [, files] = await form.parse(req);
            const fileList = files.file;
            const file = Array.isArray(fileList) ? fileList[0] : fileList;
            if (!file) return sendJson(res, 400, { error: "Fayl topilmadi" });

            const filename = path.basename(file.filepath);
            const publicPath = "/assets/" + filename;

            let dims = [3, 4];
            try {
              const size = imageSize(fs.readFileSync(file.filepath));
              if (size.width && size.height) dims = [size.width, size.height];
            } catch {
              // keep the fallback aspect ratio if the format can't be probed
            }

            const dimsJson = readJson(IMG_DIMS_JSON);
            dimsJson[publicPath] = dims;
            await writeJsonWithRetry(IMG_DIMS_JSON, dimsJson);
            // no full-reload here: uploading is just one step of a larger form
            // submission (main photo + project photos), and reloading mid-submit
            // would abort the rest of it. The stones POST/PUT/DELETE below reload.

            return sendJson(res, 200, { path: publicPath, width: dims[0], height: dims[1] });
          }

          return sendJson(res, 404, { error: "Noma'lum endpoint" });
        } catch (err) {
          console.error("[admin-api]", err);
          return sendJson(res, 500, { error: err && err.message ? err.message : String(err) });
        }
      });
    },
  };
}
