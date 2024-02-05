// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false, // Disable Server Side rendering
  modules: [
    "@nuxt/content",
  ],
  content: {
    // watch: {
    //   ws: {
    //     port: 4000,
    //     showUrl: true
    //   }
    // }
    watch: false
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith('sl-') || ['jsf-shoelace'].includes(tag),
    },
  }
})
