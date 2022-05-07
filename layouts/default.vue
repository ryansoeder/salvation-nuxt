<template>
  <div class="site-wrapper">
    <TheHeader
      v-if="siteOptions && menu"
      :logo="siteOptions.header_logo"
      :menu="menu"
      :social="siteOptions.social"
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
      `http://content.tattoosalvation.com/wp-json/wp/v2/site_options/`
    )
    const options = await res.json()
    this.siteOptions = await options[0]
    const menuRes = await fetch(
      'http://content.tattoosalvation.com/wp-json/wp/v2/main_menu'
    )
    this.menu = await menuRes.json()
  },
}
</script>

<style scoped>
.site-wrapper {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
}
</style>
