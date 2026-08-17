import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api/gold-api': {
        target: 'https://api.gold-api.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/gold-api/, ''),
        headers: {
          Referer: 'https://api.gold-api.com',
          Origin: 'https://api.gold-api.com',
        }
      },
      '/api/er-api': {
        target: 'https://open.er-api.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/er-api/, ''),
        headers: {
          Referer: 'https://open.er-api.com',
          Origin: 'https://open.er-api.com',
        }
      }
    }
  }
});