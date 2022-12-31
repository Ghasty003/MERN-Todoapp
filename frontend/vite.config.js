import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    manifest: true,
    rollupOptions: {
      input: "./src/components/Todos.jsx",
    },
  },
  plugins: [react()],
});
