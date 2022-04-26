<template>
  <section
    :class="[
      'block',
      'portrait',
      'services-sec',
      'portfolio-sec',
      'artist',
      block.content_position,
    ]"
  >
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-6">
          <div
            v-if="block.image"
            class="headshot image-holder"
            :style="{
              backgroundImage: 'url(' + block.image.url + ')',
            }"
          >
            <span
              v-if="block.image"
              class="visually-hidden"
              role="img"
              :aria-label="block.image.alt"
              >$nbsp;</span
            >
          </div>
          <Buttons v-if="block.buttons" :buttons="block.buttons" />
        </div>
        <div class="col-12 col-lg-6">
          <div class="heading-area">
            <h4 v-if="block.title" class="heading">
              {{ block.title }}
            </h4>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Buttons from '~/components/blocks/includes/buttons.vue'
export default {
  name: 'Portrait',
  components: { Buttons },
  props: {
    block: Object,
  },
}
</script>

<style scoped lang="scss">
.block {
  &.content-left {
    .row {
      flex-direction: row-reverse;
    }
    @media (max-width: 992px) {
      .heading-area {
        right: unset;
        left: unset;
        width: auto;
        margin-top: 20px;
      }
    }
  }
  &.content-right {
    .heading-area {
      right: unset;
      left: -80px;
    }
    @media (max-width: 992px) {
      .heading-area {
        right: unset;
        left: unset;
        width: auto;
        margin-top: 20px;
      }
    }
  }
}
</style>
