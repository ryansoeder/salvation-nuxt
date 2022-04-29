<template>
  <ul class="social">
    <template v-for="(row, index) in social">
      <li
        v-if="row.link.url.includes('facebook')"
        class="menu-item"
        :key="index"
      >
        <a :href="row.link.url" :target="row.link.target"
          ><span class="visually-hidden" :aria-label="row.link.title"
            >&nbsp;</span
          ><i class="fab fa-facebook-f icon"></i
        ></a>
      </li>
      <li
        v-if="row.link.url.includes('instagram')"
        class="menu-item"
        :key="index"
      >
        <a :href="row.link.url" :target="row.link.target"
          ><span class="visually-hidden" :aria-label="row.link.title"
            >&nbsp;</span
          ><i class="fab fa-instagram icon"></i
        ></a>
      </li>
      <li
        v-if="row.link.url.includes('snapchat')"
        class="menu-item"
        :key="index"
      >
        <a :href="row.link.url" :target="row.link.target"
          ><span class="visually-hidden" :aria-label="row.link.title"
            >&nbsp;</span
          ><i class="fab fa-snapchat icon"></i
        ></a>
      </li>
      <li v-if="row.link.url.includes('tiktok')" class="menu-item" :key="index">
        <a :href="row.link.url" :target="row.link.target"
          ><span class="visually-hidden" :aria-label="row.link.title"
            >&nbsp;</span
          ><i class="fab fa-tiktok icon"></i
        ></a>
      </li>
      <li
        v-if="row.link.url.includes('twitter')"
        class="menu-item"
        :key="index"
      >
        <a :href="row.link.url" :target="row.link.target"
          ><span class="visually-hidden" :aria-label="row.link.title"
            >&nbsp;</span
          ><i class="fab fa-twitter icon"></i
        ></a>
      </li>
      <li
        v-if="row.link.url.includes('youtube')"
        class="menu-item"
        :key="index"
      >
        <a :href="row.link.url" :target="row.link.target"
          ><span class="visually-hidden" :aria-label="row.link.title"
            >&nbsp;</span
          ><i class="fab fa-youtube icon"></i
        ></a>
      </li>
      <li
        v-if="row.link.url.includes('linkedin')"
        class="menu-item"
        :key="index"
      >
        <a :href="row.link.url" :target="row.link.target"
          ><span class="visually-hidden" :aria-label="row.link.title"
            >&nbsp;</span
          ><i class="fab fa-linkedin-in icon"></i
        ></a>
      </li>
    </template>
  </ul>
</template>

<script>
export default {
  name: 'Social',
  props: {
    social: Array,
  },
}
</script>

<style scoped lang="scss">
.social {
  display: flex;
  align-items: flex-start;
  @media (max-width: 850px) {
    margin-top: 20px;
  }
  li {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    margin-right: 10px;
    background: black;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s ease-in-out;
    &:hover {
      background: #0073e6;
    }
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    color: white;
    text-decoration: none;
    transition: 0.3s ease-in-out;
    &:hover {
      color: black;
    }
  }
}
</style>
