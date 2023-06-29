import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'remote-inventory',
      filename: 'remoteEntry.js',
      exposes: {
        './Inventory': './src/components/Inventory.vue',
      },
      shared: ['vue', 'pinia']
    })
  ],
  base: 'http://localhost:5002',
  build: {
    minify: false,
    target: ['esnext']
  }
})
