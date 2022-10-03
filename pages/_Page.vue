<template>
  <div>
    <template v-if="pageInfo">
      <!-- <Transition
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      > -->
      <div v-if="blocks" class="blocks">
        <template v-for="(block, index) in blocks">
          <!-- <Component
            :is="dynamicBlock.blockName"
            :block="dynamicBlock.blockInfo"
            :key="index"
          /> -->
          <NuxtDynamic
            :component="block.acf_fc_layout"
            :block="block"
            hydration="WhenVisible"
            :key="index"
          />
        </template>
      </div>
      <!-- </Transition> -->
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Page',
  async asyncData({ params, store }) {
    let slug = params.Page
    slug === undefined ? (slug = 'homepage') : (slug = slug)
    await store.dispatch('page/get_page', { slug })
  },
  computed: {
    ...mapState({
      pageInfo: (state) => {
        return state.page.page
      },
      blocks: (state) => {
        return state.page.blocks
      },
    }),
  },
  mounted(context) { 
    if (!this.pageInfo) {
      context.error({ statusCode: 404, message: 'oops!' })
    }
  },
  // dynamicBlocks() {
  //   return this.blocks.map((block) => {
  //     let newObj = {
  //       blockInfo: block,
  //       blockName: () =>
  //         import(`~/components/blocks/${block.acf_fc_layout}.vue`),
  //     }
  //     return newObj
  //   })
  // },
  // watch: {
  //   '$route.query': '$fetch',
  // },
  head() {
    return {
      title: `Tattoo Salvation | ${
        this.pageInfo ? this.pageInfo.title.rendered : ''
      }`,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.pageInfo ? this.pageInfo.acf.page_description : '',
        },
      ],
    }
  },
  key(route) {
    return route.fullPath
  },
}
</script>
