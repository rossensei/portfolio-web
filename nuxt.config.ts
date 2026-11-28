import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: [
    '@nuxt/fonts',
    '@nuxt/eslint'
  ],
  css: ['~/assets/css/main.css'],
  // fonts: {
  //   families: [
  //     { name: 'Space Grotesk', provider: 'google' },
  //     { name: 'JetBrains Mono', provider: 'google' },
  //     { name: 'Inter', provider: 'google' },
  //   ],
  // },
  eslint: {
    
  }
})
