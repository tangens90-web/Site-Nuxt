export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "vite-example",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  publicRuntimeConfig: {
    axios: {
      baseURL: "https://localhost:3000"
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~assets/style.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["nuxt-vite"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "@nuxt/content","@nuxtjs/sitemap"],
  sitemap: {
    // options
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  router: {
    middleware: "global"
  },

  loading: {
    color: "red",
    height: "5px"
  }
};
