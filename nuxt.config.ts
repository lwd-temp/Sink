// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxthub/core',
    'shadcn-nuxt',
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
  ],
  routeRules: {
    '/': { prerender: true },
  },
  hub: {
    analytics: true,
    blob: false,
    cache: false,
    database: false,
    kv: true,
    // ai: true,
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  nitro: {
    experimental: {
      // Enable Server API documentation within NuxtHub
      openAPI: true,
    },
  },
  runtimeConfig: {
    siteToken: 'SinkCool',
    previewMode: '',
    slugDefaultLength: '6',
    redirectStatusCode: '301',
    cfAccountId: '',
    cfApiToken: '',
    dataset: 'sink',
    aiModel: '@cf/meta/llama-3-8b-instruct',
    aiPrompt: `You are a URL shortening assistant, please shorten the URL provided by the user into a SLUG. The SLUG information must come from the URL itself, do not make any assumptions. A SLUG is human-readable and should not exceed three words and can be validated using regular expressions {slugRegex} . Only the best one is returned, the format must be JSON reference {"slug": "example-slug"}`,
  },
})
