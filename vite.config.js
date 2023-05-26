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
  // build: {
  //     target: "es2020",
  //     commonjsOptions: {
  //         sourceMap: false
  //     },
  //     rollupOptions: {
  //         // input: {
  //         //     index: "./src/main.js"
  //         // },
  //         /* single
  //         output: {
  //             format: "umd",
  //             strict: false,
  //             chunkFileNames: `[name].[hash].js`,
  //             entryFileNames: "[name].bundle.umd.js",
  //             dir: "dist"
  //         },
  //         */
  //         // array config example
  //         // from rollup: export type InternalModuleFormat = 'amd' | 'cjs' | 'es' | 'iife' | 'system' | 'umd';
  //         output: [
  //             {
  //                 format: 'cjs',
  //                 entryFileNames: "[name].bundle.[format].js",
  //             },
  //             {
  //                 format: 'es',
  //                 entryFileNames: "[name].bundle.[format].js",
  //             },
  //             {
  //                 format: 'umd',
  //                 entryFileNames: "[name].bundle.[format].js",
  //             },
  //         ]
  //     }
  // },
})
