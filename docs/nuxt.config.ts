export default defineNuxtConfig({
  srcDir: 'app',
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
        class: 'antialiased',
      },
      title: 'VueManiaText',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Vue 3 library to display maniaplanet formatted text' }
      ]
    }
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  future: {
    compatibilityVersion: 4,
  },
})
