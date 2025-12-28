import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // <--- Did you add this import?
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <--- Did you add this function call?
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});