import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";
import path from "path";
import UnoCSS from "unocss/vite";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), checker({ typescript: true }), UnoCSS()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
