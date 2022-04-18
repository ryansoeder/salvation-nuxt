<template>
  <section class="info-sec" id="info">
    <div
      class="container"
      :style="{
        backgroundImage:
          'linear-gradient(rgba(255, 255, 255 , 0.85), rgba(255, 255, 255 , 0.85)), url(' +
          block.image.url +
          ')',
      }"
    >
      <div class="row">
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
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    block: Object,
  },
}
</script>
