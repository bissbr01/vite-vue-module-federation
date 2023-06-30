import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import IconsResolver from 'unplugin-icons/resolver'
import federation from "@originjs/vite-plugin-federation";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue'],
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          prefix: 'Icon',
        }),
      ],
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          enabledCollections: ['ep'],
        }),
      ],
      dts: true
    }),
    federation({
      name: 'host-app',
      remotes: {
        'remote-retailing': "http://localhost:5001/assets/remoteEntry.js",
        'remote-inventory': "http://localhost:5002/assets/remoteEntry.js",
      },
      shared: ['vue', 'pinia']
    })
  ],
  build: {
    minify: false,
    target: ["esnext"]
  }
})
