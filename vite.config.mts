import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root: "webview-ui",
  resolve: {
    alias: { "@ext": fileURLToPath(new URL("./src", import.meta.url)) }
  },
  base: "./",
  build: {
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
