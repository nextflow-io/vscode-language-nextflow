import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root: "src/ui",
  resolve: {
    alias: {
      "@shared": fileURLToPath(new URL("./src/shared", import.meta.url))
    }
  },
  base: "./",
  build: {
    outDir: fileURLToPath(new URL("./build/ui", import.meta.url)),
    emptyOutDir: true,
    assetsDir: "assets",
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith(".ttf")) {
            return "assets/[name][extname]";
          }
          return "assets/[name]-[hash][extname]";
        }
      }
    }
  }
});
