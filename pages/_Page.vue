<template>
  <div>
    <template v-if="pageInfo">
      <!-- <Transition appear name="fade"> -->
        <div v-if="dynamicBlocks" class="blocks">
          <template v-for="(dynamicBlock, index) in dynamicBlocks">
            <Component
              :is="dynamicBlock.blockName"
              :block="dynamicBlock.blockInfo"
              :key="index"
            />
          </template>
        </div>
      <!-- </Transition> -->
    </template>
    <template v-else>
      <NotFound />
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import NotFound from '~/components/NotFound.vue'

export default {
  name: 'Page',
  components: {
    NotFound,
  },
  transition: 'fade',
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
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.blocks {
  margin-top: 90px;
}
</style>
