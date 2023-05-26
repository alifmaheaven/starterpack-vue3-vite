import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        IconsResolver({
          prefix: 'icon', // <--
        })
      ],
    }),
    Icons({ autoInstall: true }),
  ],
})
