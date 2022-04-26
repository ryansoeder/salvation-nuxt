export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Tattoo Salvation & Piercing Redemption',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'The best tattoos and piercings in Louisillve, KY.' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/vendor/css/bootstrap.min.css',
    '~/vendor/css/bundle.min.css',
    '~/vendor/css/jquery.fancybox.min.css',
    '~/vendor/css/LineIcons.min.css',
    '~/static/styles/global.css',
  ],
  // Transition to run on every page load
  // pageTransition: 'fade',

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/repositories.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    {
      path: '~/components/',
    },
    {
      path: '~/components/blocks',
      extensions: ['vue'],
    },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://tattoo-salvation.local/wp-json/wp/v2',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
