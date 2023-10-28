import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  define: {
    global: 'window',
  },
  assetsInclude: ['robots.txt'],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
});
