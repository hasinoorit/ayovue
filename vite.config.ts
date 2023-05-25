/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts({ rollupTypes: true })],
  build: {
    lib: {
      entry: "src/index",
      formats: ["es", "cjs", "iife", "umd"],
      fileName: "index",
      name: "ayovue",
    },
  },
  test: {
    globals: true,
    environment: "happy-dom",
  },
});
