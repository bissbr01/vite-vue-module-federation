import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'remote-retailing',
      filename: 'remoteEntry.js',
      exposes: {
        './BuyNow': './src/components/BuyNow.vue',
        './CartIcon': './src/components/CartIcon.vue',
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
