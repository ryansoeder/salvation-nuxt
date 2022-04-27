<template>
  <section class="block main info-sec" :style="{height: windowWidth <= 992 ? 'auto' : blockHeight + 'px'}">
    <div class="container-fluid">
      <div :class="['row', 'no-gutters', block.content_position]">
        <div
          class="col-12 col-lg-5 align-items-center justify-content-end nav-icon d-lg-flex"
        >
          <div class="info-wrapper" ref="infoWrapper">
            <h1 class="heading" v-if="block.title">
              <span v-for="(row, index) in block.title" :key="index"
                >{{ row.line }}<br
              /></span>
            </h1>
            <span v-if="block.tag">{{ block.tag }}</span>
            <h2 v-if="block.subtitle">{{ block.subtitle }}</h2>
            <h3 v-if="block.enable_hours && block.hours_title">
              {{ block.hours_title }}
            </h3>
            <dl v-if="block.enable_hours === true">
              <template v-for="(row, index) in block.hours">
                <dt :key="index">{{ row.days }}</dt>
                <dd>{{ row.hours }}</dd>
              </template>
            </dl>
            <div
              class="content"
              v-if="block.content"
              v-html="block.content"
            ></div>
            <div class="inquiries" v-if="block.enable_buttons && block.buttons">
              <template v-for="(row, index) in block.buttons">
                <a
                  :key="index"
                  :href="row.button.url"
                  :target="row.button.target"
                  class="btn btn-main rounded-pill"
                  >{{ row.button.title }}</a
                >
              </template>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-7 img-area">
          <div
            class="slider-img position-relative wow slideInRight"
            data-wow-delay=".5s"
          >
            <img :src="block.image.url" :alt="block.image.alt" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Buttons from '~/components/blocks/includes/buttons.vue'

export default {
  name: 'Main',
  components: {
    Buttons,
  },
  props: {
    block: Object,
  },
  data() {
    return {
      windowWidth: 0,
      blockHeight: 0,
    }
  },
  mounted() {
    this.handleResize()
    if (process.browser) {
      window.addEventListener('resize', this.handleResize)
    }
  },
  methods: {
    handleResize() {
      if (process.browser) {
        this.blockHeight = this.$refs.infoWrapper.clientHeight
        this.windowWidth = window.innerWidth
      }
    },
  },
}
</script>

<style scoped lang="scss">
.container-fluid {
  padding: 0;
}
.row.no-gutters {
  position: relative;
  @media (max-width: 992px) {
    flex-direction: column-reverse;
  }
  &.content-right {
    flex-direction: row-reverse;
    @media (max-width: 992px) {
      flex-direction: column-reverse;
    }
    .info-wrapper {
      left: unset;
      right: 0;
    }
  }
}
.img-area {
  height: unset;
}
.info-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 150%;
  min-height: 100%;
  padding: 30px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 11;
  background-color: rgba(255, 255, 255, 0.7);
  @media (max-width: 992px) {
    width: 100%;
    position: relative;
    min-height: unset;
  }
  dd {
    -webkit-margin-start: 0;
  }
}
</style>
