import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom", // Required for React testing
    globals: true, // Enables global test, expect, etc. (simplifies syntax)
  },
});
