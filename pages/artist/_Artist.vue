<template>
  <div>
    <template v-if="artistInfo">
      <Transition
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <section class="services-sec portfolio-sec artist padding-top">
          <div class="container">
            <div class="row">
              <div class="col-12 col-lg-6">
                <Transition
                  appear
                  enter-active-class="animated slideInLeft"
                  leave-active-class="animated slideOutLeft"
                >
                  <div
                    class="headshot image-holder"
                    :style="{
                      backgroundImage:
                        'url(' + artistInfo.acf.mug_shot.url + ')',
                    }"
                    v-if="artistInfo.acf.mug_shot"
                  >
                    <span
                      v-if="artistInfo.acf.mug_shot"
                      class="visually-hidden"
                      role="img"
                      :aria-label="artistInfo.acf.mug_shot.alt"
                      >$nbsp;</span
                    >
                  </div>
                </Transition>
              </div>
              <div class="col-12 col-lg-6">
                <div class="heading-area">
                  <Transition
                    appear
                    enter-active-class="animated slideInLeft"
                    leave-active-class="animated slideOutLeft"
                  >
                    <h4 v-if="artistInfo.title.rendered" class="heading">
                      {{ artistInfo.title.rendered }}
                    </h4>
                  </Transition>
                </div>
                <Transition
                  appear
                  enter-active-class="animated slideInUp"
                  leave-active-class="animated slideOutUp"
                >
                  <ul
                    class="services-boxes"
                    v-if="
                      artistInfo.acf.instagram_handle ||
                      artistInfo.acf.consultation_form_url ||
                      artistInfo.acf.consultation_email ||
                      artistInfo.acf.bio
                    "
                  >
                    <li
                      v-if="artistInfo.acf.instagram_handle"
                      class="service-card right column-card text-center"
                    >
                      <a
                        v-if="artistInfo.acf.instagram_handle"
                        aria-label="Instagram icon links to artist instagram page"
                        class="icon-holder"
                        :href="
                          'https://www.instagram.com/' +
                          artistInfo.acf.instagram_handle +
                          '/'
                        "
                        target="_blank"
                      >
                        <span><i class="fab fa-instagram"></i></span>
                      </a>
                      <a
                        v-if="artistInfo.acf.instagram_handle"
                        :href="
                          'https://www.instagram.com/' +
                          artistInfo.acf.instagram_handle +
                          '/'
                        "
                        target="_blank"
                        >@{{ artistInfo.acf.instagram_handle }}</a
                      >
                    </li>
                    <li
                      v-if="
                        artistInfo.acf.consultation_form_url ||
                        artistInfo.acf.consultation_email
                      "
                      class="service-card left"
                    >
                      <a
                        v-if="artistInfo.acf.consultation_form_url"
                        class="icon-holder"
                        :href="artistInfo.acf.consultation_form_url"
                        target="_blank"
                        aria-label="envelop icon linking to consultation form"
                      >
                        <i class="lni lni-envelope"></i>
                      </a>
                      <a
                        v-if="artistInfo.acf.consultation_form_url"
                        :href="artistInfo.acf.consultation_form_url"
                        target="_blank"
                        class="btn btn-main rounded-pill"
                        >Consultation w/
                        {{ artistInfo.title.rendered.split(' ')[0] }}</a
                      >
                      <a
                        v-if="artistInfo.acf.consultation_email"
                        class="icon-holder"
                        :href="'mailto:' + artistInfo.acf.consultation_email"
                        target="_blank"
                        aria-label="envelop icon to compose contact email"
                      >
                        <i class="lni lni-envelope"></i>
                      </a>
                      <a
                        v-if="artistInfo.acf.consultation_email"
                        class="btn btn-main rounded-pill"
                        :href="'mailto:' + artistInfo.acf.consultation_email"
                        target="_blank"
                        >{{ artistInfo.acf.consultation_email }}</a
                      >
                    </li>
                    <li
                      v-if="artistInfo.acf.bio"
                      class="service-card left icon-right text-center text-lg-right"
                    >
                      <p
                        v-if="artistInfo.acf.bio"
                        class="text order-2 order-lg-1"
                      >
                        {{ artistInfo.acf.bio }}
                      </p>
                      <div class="icon-holder order-1 order-lg-2">
                        <img
                          class="card-logo"
                          src="~/assets/circle-logo.svg"
                          alt="circular Tattoo Salvation logo"
                        />
                      </div>
                    </li>
                  </ul>
                </Transition>
              </div>
            </div>
          </div>
          <section class="block artist slider">
            <div class="container-fluid">
              <div class="row">
                <div class="col-12 col-lg-4">
                  <div class="heading-area long-area">
                    <Transition
                      appear
                      enter-active-class="animated slideInRight"
                      leave-active-class="animated slideOutRight"
                    >
                      <h4 class="heading" v-if="artistInfo.acf.portfolio_title">
                        {{ artistInfo.acf.portfolio_title }}
                      </h4>
                    </Transition>
                  </div>
                </div>
                <div class="col-12 col-lg-8 position-relative">
                  <div>
                    <Transition
                      appear
                      enter-active-class="animated slideInLeft"
                      leave-active-class="animated slideOutLeft"
                    >
                      <template v-if="artistInfo.acf.portfolio">
                        <VueSlickCarousel v-bind="settings">
                          <div
                            class="item"
                            v-for="(row, index) in artistInfo.acf.portfolio"
                            :key="index"
                          >
                            <img :src="row.url" :alt="row.alt" />
                          </div>
                        </VueSlickCarousel>
                      </template>
                    </Transition>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </Transition>
      <div v-if="blocks" class="blocks">
        <template v-for="(block, index) in block">
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
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css' // optional style for arrows & dots
import VueSlickCarousel from 'vue-slick-carousel'

export default {
  name: 'Artist',
  components: {
    VueSlickCarousel,
  },
  transition: 'default',
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
  async asyncData({ params, store }) {
    let slug = params.Artist
    await store.dispatch(`artist/get_artist`, { slug })
  },
  computed: {
    ...mapState({
      artistInfo: (state) => {
        return state.artist.artist
      },
      blocks: (state) => {
        return state.artist.blocks
      },
    }),
  },
  mounted(context) {
    if (!this.artistInfo) {
      context.error({ statusCode: 404, message: 'oops!' })
    }
  },
  // dynamicBlocks() {
  //   if (this.blocks) {
  //     return this.blocks.map((value) => {
  //       let newObj = {
  //         blockInfo: value,
  //         blockName: () =>
  //           import(`~/components/blocks/${value.acf_fc_layout}.vue`),
  //       }
  //       return newObj
  //     })
  //   }
  // },
  head() {
    return {
      title: `Tattoo Saltation | ${this.artistInfo.title.rendered}`,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.artistInfo.acf.page_description,
        },
      ],
    }
  },
  key(route) {
    return route.fullPath
  },
}
</script>

<style scoped lang="scss">
.heading-area {
  left: -80px;
  @media (max-width: 992px) {
    left: unset;
    width: unset;
    margin-top: 30px;
  }
}
.services-sec .services-boxes .service-card {
  margin-top: 0;
}
.services-sec .services-boxes .service-card.left.icon-right {
  width: 100%;
  margin-top: 0;
}
.services-sec .services-boxes {
  padding: 130px 0 0 20px;
}
.services-sec .services-boxes .service-card {
  float: unset;
  @media (max-width: 768px) {
    margin-bottom: 50px;
  }
}
.services-sec .services-boxes .service-card.right {
  margin-right: 10px;
  margin-left: auto;
  flex-direction: row-reverse;
  @media (max-width: 768px) {
    flex-direction: column;
  }
}
.services-sec .services-boxes .service-card.left {
  margin-bottom: 50px;
}

.block.artist.slider {
  .heading-area {
    left: unset;
  }
  .slick-slider {
    width: 60%;
    @media (max-width: 1300px) {
      width: 70%;
    }
    @media (max-width: 1100px) {
      width: 80%;
    }
    @media (max-width: 992px) {
      width: 60%;
      margin: 0 auto;
    }
    @media (max-width: 650px) {
      width: 80%;
    }
  }
  .item {
    width: 100%;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
}
</style>
