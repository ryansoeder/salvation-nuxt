<template>
  <section class="block artist slider">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-lg-4">
          <div class="heading-area long-area">
            <h4 class="heading" v-if="block.title">
              {{ block.title }}
            </h4>
          </div>
        </div>
        <div class="col-12 col-lg-8 position-relative">
          <div>
            <template v-if="block.slides">
              <VueSlickCarousel>
                <div class="item" v-for="row in block.slides" :key="row">
                  <img :src="row.slide.url" :alt="row.slide.alt" />
                </div>
              </VueSlickCarousel>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css' // optional style for arrows & dots
import VueSlickCarousel from 'vue-slick-carousel'

export default {
  name: 'Slider',
  components: {
    VueSlickCarousel,
  },
  props: {
    block: Object,
  },
    data() {
    return {
      settings: {
        arrows: true,
        dots: true,
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 1,
        speed: 500,
        lazyLoad: 'ondemand',
        fade: true,
      },
    }
  },
}
</script>

<style scoped lang="scss">
img {
  object-fit: cover;
  width: 80%;
  @media (max-width: 1300px) {
    width: 90%;
  }
}
</style>
