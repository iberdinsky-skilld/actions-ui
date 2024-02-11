import content from '@originjs/vite-plugin-content'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false, // Disable Server Side rendering
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith('sl-') || ['jsf-shoelace'].includes(tag),
    },
  },
  vite: {
    plugins: [content()]
  },
  nitro: {
    experimental: {
      openAPI: true
    }
  },
  modules: [
    'nuxt-socket-io',
  ],
  io: {
    sockets: [ // Required
      { // At least one entry is required
        name: 'home',
        url: 'http://localhost:3000',
        default: true,
        namespaces: { /* see section below */ }
      },
    ]
  }
})
