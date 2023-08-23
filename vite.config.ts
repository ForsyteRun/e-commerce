/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      'node-fetch': 'isomorphic-fetch',
      assets: `${path.resolve(__dirname, './src/assets/')}`,
      components: `${path.resolve(__dirname, './src/components/')}`,
      hooks: `${path.resolve(__dirname, './src/hooks/')}`,
      modules: `${path.resolve(__dirname, './src/modules/')}`,
      pages: `${path.resolve(__dirname, './src/pages/')}`,
      services: `${path.resolve(__dirname, './src/services/')}`,
      store: `${path.resolve(__dirname, './src/store/')}`,
      types: `${path.resolve(__dirname, './src/types/')}`,
      constants: `${path.resolve(__dirname, './src/constants/')}`,
      styles: `${path.resolve(__dirname, './src/styles/')}`,
      UI: `${path.resolve(__dirname, './src/UI/')}`,
      helpers: `${path.resolve(__dirname, './src/helpers/')}`,
    },
  },
  define: {
    global: {},
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/styles/mixins.scss";',
      },
    },
  },
});
