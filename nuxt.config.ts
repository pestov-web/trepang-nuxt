// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  colorMode: {
    preference: "light",
  },
  modules: [
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "nuxt-headlessui",
    "nuxt-icon",
    "@nuxt/ui",
    "nuxt-swiper",
    "vue3-carousel-nuxt",
  ],
  swiper: {
    prefix: "Swiper",
    styleLang: "css",
    modules: ["navigation", "pagination", "autoplay", "effect-creative"], // all modules are imported by default
  },
  // tailwindcss: {
  //   cssPath: "~/assets/css/tailwind.css",
  // },
});
