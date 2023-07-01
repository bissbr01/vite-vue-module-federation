import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import IconsResolver from 'unplugin-icons/resolver'
import federation from "@originjs/vite-plugin-federation";
import Markdown from 'vite-plugin-vue-markdown'
import MarkdownItAnchor from 'markdown-it-anchor'
import MarkdownItPrism from 'markdown-it-prism'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    Markdown({
      markdownItSetup(md) {
        md.use(MarkdownItAnchor)
        md.use(MarkdownItPrism, {
          highlightInlineCode: true,

        })
      },
    }),
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
