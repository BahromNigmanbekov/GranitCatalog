import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// @ts-expect-error - plain JS, local-dev-only admin API (see server/adminPlugin.mjs)
import { adminApiPlugin } from "./server/adminPlugin.mjs";

export default defineConfig({
  plugins: [react(), adminApiPlugin()],
});
