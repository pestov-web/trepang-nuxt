// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    // "nuxt-swiper",
    "@formkit/nuxt",
    // "@nuxtjs/supabase",
    "nuxt-headlessui",
    "nuxt-icon",
    "@nuxtjs/tailwindcss",
  ],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
  },
});
