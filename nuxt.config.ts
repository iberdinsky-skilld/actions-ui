// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxt/content'
  ],
  content: {
    // watch: {
    //   ws: {
    //     port: 4000,
    //     showUrl: true
    //   }
    // }
    watch: false,
  }
})
