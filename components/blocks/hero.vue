<template>
  <section
    :class="[
      'block',
      'hero',
      'info-sec',
      block.content_position,
      block.content_position != 'content-center' ? 'piercing-sec' : '',
    ]"
  >
    <div
      class="container"
      :style="{
        backgroundImage:
          block.content_position == 'content-left'
            ? bgGradientLeft
            : block.content_position == 'content-center'
            ? bgGradientCenter
            : bgGradientRight,
      }"
    >
      <div class="row">
        <div class="info-wrapper">
          <h1 class="label" v-if="block.label">{{ block.label }}</h1>
          <h2 class="heading" v-if="block.title && block.label">
            <span v-for="(row, index) in block.title" :key="index"
              >{{ row.line }}<br
            /></span>
          </h2>
          <h1 class="heading" v-else-if="block.title">
            <span v-for="(row, index) in block.title" :key="index"
              >{{ row.line }}<br
            /></span>
          </h1>
          <span v-if="block.tag">{{ block.tag }}</span>
          <h2 class="subtitle" v-if="block.subtitle">{{ block.subtitle }}</h2>
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
          <Buttons v-if="block.buttons" :buttons="block.buttons" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Buttons from '~/components/blocks/includes/buttons.vue'

export default {
  name: 'Hero',
  components: {
    Buttons,
  },
  props: {
    block: Object,
  },
  data() {
    return {
      width: 0,
    }
  },
  computed: {
    bgGradientLeft() {
      if (this.width > 768) {
        return `linear-gradient(to left, rgba(255, 255, 255, .2) 30%, rgba(255, 255, 255, 1)), url(${this.block.image.url})`
      } else {
        return `linear-gradient(to left, rgba(255, 255, 255, .8) 50%, rgba(255, 255, 255, 1)), url(${this.block.image.url})`
      }
    },
    bgGradientCenter() {
      if (this.width > 768) {
        return `linear-gradient(rgba(255, 255, 255 , 0.85), rgba(255, 255, 255 , 0.85)), url(${this.block.image.url})`
      } else {
        return `linear-gradient(rgba(255, 255, 255 , 0.85), rgba(255, 255, 255 , 0.85)), url(${this.block.image.url})`
      }
    },
    bgGradientRight() {
      if (this.width > 768) {
        return `linear-gradient(to right, rgba(255, 255, 255, .2) 30%, rgba(255, 255, 255, 1)), url(${this.block.image.url})`
      } else {
        return `linear-gradient(to right, rgba(255, 255, 255, .8) 50%, rgba(255, 255, 255, 1)), url(${this.block.image.url})`
      }
    },
  },
  mounted() {
    this.handleResize()
    if (process.browser) {
      window.addEventListener('resize', this.handleResize)
    }
  },
  destroyed() {
    if (process.browser) {
      window.removeEventListener('resize', this.handleResize)
    }
  },
  methods: {
    handleResize() {
      if (process.browser) {
        this.width = window.innerWidth
      }
    },
  },
}
</script>

<style scoped lang="scss">
.info-sec {
  .label {
    color: #0073e6;
    font-size: 21px;
  }
  .heading {
    font-size: 4rem;
    line-height: 1;
    @media (max-width: 992px) {
      font-size: 45px;
    }
  }
  .subtitle {
    font-weight: 400;
  }
}

.info-sec.content-center {
  .label {
    margin-bottom: 50px;
    letter-spacing: 2px;
  }
  .row {
    margin-right: unset;
    margin-left: unset;
  }
  .info-wrapper {
    max-width: 800px;
  }
}
.info-sec.content-left,
.info-sec.content-right {
  .info-wrapper {
    text-align: left;
    .buttons {
      align-items: flex-start;
      .btn {
        margin-left: 0;
        margin-right: auto;
      }
    }
  }
}
.info-sec.content-left {
  .row {
    justify-content: flex-start;
  }
}
.info-sec.content-right {
  .row {
    justify-content: flex-end;
  }
}
</style>
