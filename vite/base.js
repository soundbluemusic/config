/**
 * @soundbluemusic/config - Shared Vite configuration
 *
 * Usage in your project's vite.config.ts:
 *
 * import { defineConfig, mergeConfig } from 'vite';
 * import baseConfig from '@soundbluemusic/config/vite';
 * import react from '@vitejs/plugin-react';
 *
 * export default mergeConfig(baseConfig, defineConfig({
 *   plugins: [react()],
 *   // your project-specific config
 * }));
 */

import { defineConfig } from 'vite';

const baseConfig = defineConfig({
  build: {
    target: 'es2020',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
  server: {
    port: 3000,
    strictPort: false,
    open: false,
  },
  preview: {
    port: 4173,
  },
  css: {
    devSourcemap: true,
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
});

export default baseConfig;
