import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr({ include: '**/*.svg?react' })],
  resolve: {
    alias: {
      '@labsui/core': resolve(__dirname, '../../packages/labsui/src/index.ts'),
      '@aciolelabs/labs-ui': resolve(__dirname, '../../packages/labsui/src/index.ts'),
    },
  },
  server: {
    port: 5173,
    open: true,
  },
});
