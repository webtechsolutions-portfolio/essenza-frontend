import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/essenza-aesthetic/", // <- nazwa repozytorium!
  server: {
    proxy: {
      "/api": "http://localhost:5000",
    },
  },
});
