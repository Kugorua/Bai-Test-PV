// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  css: ["vuetify/lib/styles/main.sass", "@/assets/styles/main.scss"],

  // devtools: { enabled: true },
  build: {
    transpile: ["vuetify"],
  },

  vite: {
    define: {
      "process.env.DEBUG": false,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "",
          api: "modern-compiler",
        },
      },
    },
  },

  modules: ["@nuxtjs/i18n"],
  i18n: {
    locales: [
      { code: "vi", name: "Vietnamese", iso: "vi-VN", file: "vi.json" },
      { code: "en", name: "English", iso: "en-US", file: "en.json" },
    ],
    defaultLocale: "en",
    lazy: true,
    langDir: "locales/",
  },
});
