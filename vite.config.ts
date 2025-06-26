import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
  build: {
    rollupOptions: {
      maxParallelFileOps: 3, // Limit parallel file operations to avoid EMFILE errors
      cache: false, // Disable build cache to prevent stale file handles
    },
    sourcemap: false, // Disable sourcemaps to reduce file operations (optional)
  },
  resolve: {
    alias: {
      // Optional: Ensure correct resolution for @mui/icons-material
      '@mui/icons-material': '@mui/icons-material',
    },
  },
});