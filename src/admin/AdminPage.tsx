import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { Stone, StoneProject } from "../data/stones";
import { TYPE_LABELS } from "../data/stones";
import { ProductForm } from "./ProductForm";
import { stoneToFormValues, stoneProjectsToDrafts, type ProductFormValues, type ProjectDraft } from "./formUtils";
import "./admin.css";

async function readErrorMessage(res: Response, fallback: string): Promise<string> {
  try {
    const body = await res.json();
    if (body && typeof body.error === "string") return `${fallback} (${body.error})`;
  } catch {
    // response wasn't JSON — fall through to the generic message
  }
  return fallback;
}

async function uploadImage(file: File): Promise<{ path: string }> {
  const fd = new FormData();
  fd.append("file", file);
  const res = await fetch("/api/upload", { method: "POST", body: fd });
  if (!res.ok) throw new Error(await readErrorMessage(res, "Rasm yuklashda xatolik yuz berdi."));
  return res.json();
}

async function resolveProjects(drafts: ProjectDraft[]): Promise<StoneProject[]> {
  const resolved: StoneProject[] = [];
  for (const draft of drafts) {
    const image = draft.file ? (await uploadImage(draft.file)).path : draft.image;
    if (!image) continue;
    resolved.push({ image, caption: draft.caption.trim() });
  }
  return resolved;
}

function toStonePayload(
  values: ProductFormValues,
  imagePath: string | null,
  existingImages: string[],
  projects: StoneProject[]
) {
  return {
    name: values.name.trim(),
    origin: values.origin.trim(),
    type: values.type,
    colorFamily: values.colorFamily,
    finish: values.finish.split(",").map((s) => s.trim()).filter(Boolean),
    description: values.description.trim(),
    specs: {
      thickness: values.thickness.trim(),
      formats: values.formats.trim(),
      application: values.application.split(",").map((s) => s.trim()).filter(Boolean),
      hardness: values.hardness.trim(),
      absorption: values.absorption.trim(),
    },
    images: imagePath ? [imagePath] : existingImages,
    projects,
    featured: values.featured,
  };
}

export function AdminPage() {
  const [stones, setStones] = useState<Stone[] | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/stones")
      .then((r) => {
        if (!r.ok) throw new Error("Ma'lumot yuklanmadi. Admin server ishga tushirilganini tekshiring (npm run dev).");
        return r.json();
      })
      .then(setStones)
      .catch((e) => setLoadError(e.message));
  }, []);

  async function handleAdd(values: ProductFormValues, file: File | null, projectDrafts: ProjectDraft[]) {
    let imagePath: string | null = null;
    if (file) imagePath = (await uploadImage(file)).path;
    const projects = await resolveProjects(projectDrafts);
    const res = await fetch("/api/stones", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(toStonePayload(values, imagePath, [], projects)),
    });
    if (!res.ok) throw new Error(await readErrorMessage(res, "Mahsulot qo'shilmadi."));
    // full page reload is triggered by the server (HMR ws) so the new
    // product shows up here and in the catalog automatically
  }

  async function handleEdit(
    id: string,
    values: ProductFormValues,
    file: File | null,
    existingImages: string[],
    projectDrafts: ProjectDraft[]
  ) {
    let imagePath: string | null = null;
    if (file) imagePath = (await uploadImage(file)).path;
    const projects = await resolveProjects(projectDrafts);
    const res = await fetch(`/api/stones/${encodeURIComponent(id)}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(toStonePayload(values, imagePath, existingImages, projects)),
    });
    if (!res.ok) throw new Error(await readErrorMessage(res, "O'zgarishlar saqlanmadi."));
  }

  async function handleDelete(stone: Stone) {
    if (!window.confirm(`"${stone.name}" o'chirilsinmi? Bu amalni ortga qaytarib bo'lmaydi.`)) return;
    const res = await fetch(`/api/stones/${encodeURIComponent(stone.id)}`, { method: "DELETE" });
    if (!res.ok) {
      alert(await readErrorMessage(res, "O'chirishda xatolik yuz berdi."));
      return;
    }
    setStones((prev) => prev?.filter((s) => s.id !== stone.id) ?? null);
  }

  const editingStone = stones?.find((s) => s.id === editingId) ?? null;

  return (
    <div className="admin-page">
      <div className="admin-wrap">
        <div className="admin-topbar">
          <div>
            <p className="admin-eyebrow">Vaqtinchalik boshqaruv paneli</p>
            <h1>Mahsulotlarni tahrirlash</h1>
          </div>
          <Link to="/" className="admin-btn">← Katalogni ko'rish</Link>
        </div>

        {loadError && (
          <p className="admin-error">
            {loadError}
          </p>
        )}

        {editingStone ? (
          <ProductForm
            key={editingStone.id}
            title={`Tahrirlash: ${editingStone.name}`}
            submitLabel="Saqlash"
            initial={stoneToFormValues(editingStone)}
            existingImage={editingStone.images[0]}
            initialProjects={stoneProjectsToDrafts(editingStone)}
            onCancel={() => setEditingId(null)}
            onSubmit={(values, file, projects) => handleEdit(editingStone.id, values, file, editingStone.images, projects)}
          />
        ) : (
          <ProductForm
            title="Yangi mahsulot qo'shish"
            submitLabel="Qo'shish"
            onSubmit={handleAdd}
          />
        )}

        <h2 className="admin-section-title admin-list-title">
          Mavjud mahsulotlar {stones ? `(${stones.length})` : ""}
        </h2>

        {!stones && !loadError && <p className="admin-muted">Yuklanmoqda...</p>}

        <div className="admin-list">
          {stones?.map((stone) => (
            <div className="admin-row" key={stone.id}>
              <img className="admin-row-thumb" src={stone.images[0]} alt={stone.name} />
              <div className="admin-row-info">
                <p className="admin-row-name">{stone.name}</p>
                <p className="admin-row-meta">
                  {TYPE_LABELS[stone.type]} · {stone.origin || "—"}
                  {stone.projects.length > 0 && ` · ${stone.projects.length} ta ish rasmi`}
                </p>
              </div>
              <div className="admin-row-actions">
                <button type="button" className="admin-btn" onClick={() => setEditingId(stone.id)}>
                  Tahrirlash
                </button>
                <button type="button" className="admin-btn admin-btn-danger" onClick={() => handleDelete(stone)}>
                  O'chirish
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
