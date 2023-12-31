// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: process.env.NODE_ENV === 'development' },

  modules: [
    '@sidebase/nuxt-auth',
    '@nuxt/ui',
  ],

  ui : {
    global: true,
  }
})
