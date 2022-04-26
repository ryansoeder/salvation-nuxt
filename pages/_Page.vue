<template>
  <div>
    <template v-if="pageInfo">
      <div v-if="dynamicBlocks" class="blocks">
        <template v-for="(dynamicBlock, index) in dynamicBlocks">
          <Component
            :is="dynamicBlock.blockName"
            :block="dynamicBlock.blockInfo"
            :key="index"
          />
        </template>
      </div>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Page',
  data() {
    return {
      bc: {
        title: 'test title',
        content: 'test content',
      },
    }
  },
  // transition: {
  //   name: 'fade',
  // },
  async fetch({ params, store }) {
    let slug = params.Page
    slug === undefined ? (slug = 'homepage') : (slug = slug)
    await store.dispatch(`page/get_page`, { slug })
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
    dynamicBlocks() {
      return this.blocks.map((block) => {
        let newObj = {
          blockInfo: block,
          blockName: () =>
            import(`~/components/blocks/${block.acf_fc_layout}.vue`),
        }
        return newObj
      })
    },
  },
  watch: {
    '$route.query': '$fetch',
  },
  head() {
    return {
      title: `Tattoo Salvation | ${this.pageInfo.title.rendered}`,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.pageInfo.acf.page_description,
        },
      ],
    }
  },
}
</script>
