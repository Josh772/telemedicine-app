import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    extensions: [".js", ".jsx"], // Ensures Vite resolves .jsx files properly
  },
  server: {
    open: true, // Automatically opens the app in the browser
  },
});
