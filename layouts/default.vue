<template>
  <div>
    <TheHeader
      v-if="siteOptions && menu"
      :logo="siteOptions.header_logo"
      :menu="menu"
    />
    <main>
      <Nuxt />
    </main>
    <TheFooter
      v-if="siteOptions && menu"
      :logo="siteOptions.footer_logo"
      :menu="menu"
      :social="siteOptions.social"
    />
  </div>
</template>

<script>
// SCRIPTS
// import jquery from '@/static/js/vendor/jquery-3.6.0.min.js'
// import bundleJS from '@/static/js/vendor/bundle.min.js'
// import bootstrapJS from '@/static/js/vendor/bootstrap.min.js'
// import owlJS from '@/static/js/vendor/owl.carousel.min.js'
if (process.browser) {
  const script = require('~/assets/js/script.js')
}

// COMPONENTS
export default {
  name: 'IndexPage',
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
}
</script>
