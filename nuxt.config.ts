export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/eslint', '@nuxt/image', 'nuxt-rive', '@nuxtjs/i18n',],
  nitro: {
    preset: 'static'
  },
  ssr: true,
  css: ['~/assets/css/main.css'],
  ui: {
    theme: {
      colors: ['primary', 'secondary', 'tertiary', 'info', 'success', 'warning', 'error', 'neutral',]
    }
  },

  experimental: {
    typedPages: true
  },


  i18n: {
    defaultLocale: 'fr',
    strategy: 'prefix_except_default',
    locales: [
      { code: 'en', name: 'English', file: 'en.json', language: 'en-US' },
      { code: 'fr', name: 'Français', file: 'fr.json', language: 'fr-FR' }
    ],

    lazy: true,

    langDir: 'locales',

    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  }
})
