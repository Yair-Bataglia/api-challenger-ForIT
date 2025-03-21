import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': 'https://api-challenger-forit.onrender.com',
    }
  }
});