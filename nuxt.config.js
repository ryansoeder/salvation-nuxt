require('dotenv').config()

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
      {
        hid: 'description',
        name: 'description',
        content: 'The best tattoos and piercings in Louisillve, KY.',
      },
      {
        name: 'keywords',
        content:
          'tattoo, piercing, tattoos, piercings, tattooing, piercing, louisville, kentucky, ky, traditional, realism, disposable, black, grey, sterile, color',
      },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-TileColor', content: '#2d89ef' },
      { name: 'theme-color', content: '#ffffff' },
      { property: 'og:image', content: '/neon.jpg' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/vendor/css/bootstrap.min.css',
    '~/assets/vendor/css/bundle.min.css',
    '~/assets/vendor/css/jquery.fancybox.min.css',
    '~/assets/vendor/css/LineIcons.min.css',
    '~/assets/global.css',
  ],
  // Transition to run on every page load
  // pageTransition: 'fade',

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/repositories.js', '~/plugins/vee-validate.js'],

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
  buildModules: ['@nuxtjs/google-fonts'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@blokwise/dynamic',
    'vue-sweetalert2/nuxt',
  ],

  sweetalert: {
    confirmButtonColor: '#2b2b2b',
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL:
      process.env.NUXT_ENV_ENVIRONMENT === 'production' ||
      process.env.NUXT_ENV_ENVIRONMENT === 'staging'
        ? 'https://content.tattoosalvation.com/wp-json/wp/v2'
        : 'http://tattoo-salvation.local/wp-json/wp/v2',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: { transpile: ['vee-validate/dist/rules'], fallback: '404.html' },

  googleFonts: {
    families: {
      Roboto: [400, 500, 700],
      Montserrat: [300, 400, 600, 700, 800],
      Raleway: [400],
    },
  },

  // target: 'static',
}
