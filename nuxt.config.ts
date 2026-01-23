// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/ui'],

  // devtools: {
  //   enabled: true
  // },

  routeRules: {
    '/': { prerender: true },
  },

  compatibilityDate: '2026-01-20',

  typescript: {
    typeCheck: true,
    strict: true,
  },
})
