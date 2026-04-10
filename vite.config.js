import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/maat_website_v2/",
  plugins: [tailwindcss()],
  build: {
    outDir: "docs",
    emptyOutDir: false,
  },
});
