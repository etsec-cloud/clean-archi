import path from 'path'

export default defineNuxtConfig({
  alias: {
    "@": path.resolve(__dirname, '.'),
  },
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: [
          ['defineStore', 'definePiniaStore'],
        ],
      },
    ],
  ],
})
