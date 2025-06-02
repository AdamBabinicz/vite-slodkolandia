// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url"; // Dodaj ten import

// Uzyskaj __dirname dla modułów ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  // Jeśli zakładasz, że index.html i src są w folderze 'client'
  root: "client",
  plugins: [react()],
  resolve: {
    alias: {
      // Alias @ będzie teraz odnosił się do 'client/src'
      "@": path.resolve(__dirname, "client/src"),
    },
  },
  build: {
    // Domyślnie Vite zbuduje pliki do 'client/dist'.
    // Ustawienie outDir, aby pasowało do struktury, gdzie serwer jest w głównym 'dist'
    outDir: path.resolve(__dirname, "dist/client"), // Buduje do SweetLand/dist/client
  },
});
