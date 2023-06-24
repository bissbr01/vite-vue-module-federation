import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'remote-app',
      filename: 'remoteEntry.js',
      // Modules to expose
      exposes: {
        './App': './src/App.vue',
      },
      shared: ['vue', 'pinia']
    })
  ],
  base: 'http://localhost:5001',
  build: {
    minify: false,
    target: ['esnext']
  }
})
