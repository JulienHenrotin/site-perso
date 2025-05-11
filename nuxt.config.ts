
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/eslint', '@nuxt/image', 'nuxt-rive'],
  nitro: {
    preset: 'bun'
  },
  ssr: true,
  css: ['~/assets/css/main.css']
})