// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  runtimeConfig: {
    // Private keys are only available on the server
    apiSecret: process.env.NUXT_API_KEY,

    // Public keys that are exposed to the client
    public: {
      apiBaseUrl: process.env.NUXT_API_BASE_URL || '/api'
    }
  }
})
