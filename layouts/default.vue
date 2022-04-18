<template>
  <div>
    <TheNav
      v-if="siteOptions && menu"
      :logo="siteOptions.header_logo"
      :menu="menu"
    />
    <Nuxt />
  </div>
</template>

<script>
// STYLES
import bootstrap from '~/vendor/css/bootstrap.min.css'
import bundle from '~/vendor/css/bundle.min.css'
import fancybox from '~/vendor/css/jquery.fancybox.min.css'
import LineIcons from '~/vendor/css/LineIcons.min.css'
import styles from '~/static/styles/global.css'

// SCRIPTS
// import jquery from '@/static/js/vendor/jquery-3.6.0.min.js'
// import bundleJS from '@/static/js/vendor/bundle.min.js'
// import bootstrapJS from '@/static/js/vendor/bootstrap.min.js'
// import owlJS from '@/static/js/vendor/owl.carousel.min.js'
if (process.browser) {
  const script = require('~/static/js/script.js')
}

// COMPONENTS
import TheNav from '~/components/TheNav'

export default {
  name: 'IndexPage',
  components: {
    TheNav,
  },
  data() {
    return {
      siteOptions: null,
      menu: null,
    }
  },
  async fetch() {
    const res = await fetch(
      `http://tattoo-salvation.local/wp-json/wp/v2/site_options/`
    )
    const options = await res.json()
    this.siteOptions = await options[0]

    const menuRes = await fetch(
      'http://tattoo-salvation.local/wp-json/wp/v2/main_menu'
    )
    this.menu = await menuRes.json()
  },
  // methods: {
  //   async fetchOptions() {
  //     const res = await fetch(
  //       `http://tattoo-salvation.local/wp-json/wp/v2/site_options/`
  //     )
  //     const options = await res.json()
  //     this.siteOptions = options[0]
  //   },
  // },
  // async created() {
  //   this.fetchOptions()
  // },
}
</script>
