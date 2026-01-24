// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  $meta: {
    name: 'core',
  },

  modules: ['@nuxt/eslint', '@nuxt/ui'],
  css: [
    '#layers/core/app/assets/css/main.css',
    // '#layers/core/app/assets/css/reset.css'
  ],

  plugins: [
    '#layers/core/app/plugins/error-handler.ts',
    '#layers/core/app/plugins/loading.client.ts',
  ],

  devtools: {
    enabled: true,
  },

  compatibilityDate: '2026-01-24',

  typescript: {
    typeCheck: true,
    strict: true,
  },

  // vite: {
  //   build: {
  //     target: 'es2020',
  //   },
  // },
})
