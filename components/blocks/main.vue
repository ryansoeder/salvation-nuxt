<template>
  <section class="block main info-sec">
    <div class="container-fluid">
      <div :class="['row', 'no-gutters', block.content_position]">
        <div
          class="col-12 col-lg-5 align-items-center justify-content-end nav-icon d-lg-flex"
        >
          <div class="info-wrapper">
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
            <!-- <a
						href="https://www.google.com/maps/place/Tattoo+Salvation+%26+Piercing+Redemption/@38.2329626,-85.7135795,17z/data=!3m1!4b1!4m5!3m4!1s0x88690ccea1ab5f89:0x8680c4ad6cecaa9c!8m2!3d38.232991!4d-85.7114353"
						target="_blank"
						class="btn btn-main rounded-pill"
						>Get directions</a
					> -->
          </div>
          <!-- <div class="sidenav-bottom">
            <div class="social-icons">
              <span
                ><a
                  href="https://www.facebook.com/Tattoo-Salvation-Piercing-Redemption-160398690676881"
                  target="_blank"
                  class="fb"
                  aria-label="link to Tattoo Salvation Facebook"
                  ><i class="fab fa-facebook-f"></i></a
              ></span>
              <span
                ><a
                  href="https://www.instagram.com/tattoosalvation/"
                  target="_blank"
                  class="insta"
                  aria-label="link to Tattoo Salvation Instagram"
                  ><i class="fab fa-instagram"></i></a
              ></span>
            </div>
            <p class="copywrite text-right">&#169; 2020 Megaone</p>
          </div> -->
        </div>
        <div class="col-12 col-lg-7 img-area">
          <div
            class="slider-img position-relative wow slideInRight"
            data-wow-delay=".5s"
          >
            <img :src="block.image.url" :alt="block.image.alt" />
            <!-- <div class="white-overlay"></div> -->
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
}
</script>

<style scoped lang="scss">
.main {
  height: unset;
}
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
