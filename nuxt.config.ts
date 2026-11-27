// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    '@nuxt/eslint'
  ],
  css: ['~/assets/css/main.css'],
  fonts: {
    families: [
      { name: 'Space Grotesk', provider: 'google' },
      { name: 'JetBrains Mono', provider: 'google' },
      { name: 'Inter', provider: 'google' },
    ],
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            ink: "#e6edf3",
            rule: "#232c36",
            muted: "#7d8896",
            accent: "#3ddc97",
            "on-ink": "#e6edf3",
            "on-ink-muted": "#7d8896",
            card: "#10161d",
            surface: "#0f151c"
          },
          fontFamily: {
            inter: ["Inter", "sans-serif"]
          }
        }
      }
    }
  },

  eslint: {
    
  }
})
