export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@clerk/nuxt'
  ],

  clerk: {
    publishableKey: process.env.NUXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    secretKey: process.env.NUXT_CLERK_SECRET_KEY
  },

  typescript: {
    strict: true,
    shim: false
  },

  colorMode: {
    classSuffix: ''
  },

  app: {
    head: {
      title: '生命靈數諮詢',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '專業的生命靈數諮詢服務，幫助您了解自己的天賦與潛能' }
      ]
    }
  }
})