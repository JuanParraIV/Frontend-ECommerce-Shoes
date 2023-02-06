import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import macrosPlugin from 'vite-plugin-babel-macros';
import WindiCSS from 'vite-plugin-windicss'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),macrosPlugin(),WindiCSS(),],
  resolve: {
    alias:[{ find: "@", replacement: path.resolve(__dirname, "src" ) }]
  },
});
