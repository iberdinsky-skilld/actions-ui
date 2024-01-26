import vuetify, { transformAssetUrls } from "vite-plugin-vuetify"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: ["vuetify"]
  },
  devtools: { enabled: false },
  ssr: false, // Disable Server Side rendering
  modules: [
    "@nuxt/content",
    ['@nuxtjs/google-fonts', {
      families: {
        Roboto: true,
      }
    }],
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    }
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
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['jsf-shoelace'].includes(tag),
    },
  }
})
