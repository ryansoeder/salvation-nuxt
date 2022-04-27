<template>
  <footer>
    <nav>
      <NuxtLink to="/" v-if="logo">
        <img class="footer-img" :src="logo.url" :alt="logo.alt" />
      </NuxtLink>
      <ul class="footer-menu">
        <template v-for="item in menu">
          <li :key="item.ID" v-if="item.menu_item_parent == 0">
            <NuxtLink v-if="internalLink(item.url)" :to="getSlug(item.url)">{{
              item.title
            }}</NuxtLink>
            <a v-else :href="item.url" target="_blank">{{ item.title }}</a>
            <ul class="sub-menu" v-if="hasSubItems(item.ID)">
              <template v-for="subItem in menu">
                <li
                  :key="subItem.ID"
                  v-if="subItem.menu_item_parent == item.ID"
                >
                  <NuxtLink
                    v-if="internalLink(subItem.url)"
                    :to="getSlug(subItem.url)"
                    >{{ subItem.title }}</NuxtLink
                  >
                  <a v-else :href="subItem.url" target="_blank">{{
                    subItem.title
                  }}</a>
                </li>
              </template>
            </ul>
          </li>
        </template>
      </ul>
    </nav>
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
        <li
          v-if="row.link.url.includes('tiktok')"
          class="menu-item"
          :key="index"
        >
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
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
  props: {
    logo: Object,
    menu: Array,
    social: Array,
  },
  methods: {
    internalLink(url) {
      const newRL = new URL(url)
      if (newRL.hostname === 'tattoo-salvation.local') {
        return true
      } else {
        return false
      }
    },
    getSlug(url) {
      const newRL = new URL(url)
      return newRL.pathname
    },
    hasSubItems(parentID) {
      let subItemFound = false // kick off found flag
      this.menu.forEach((item) => {
        // loop through menu items
        if (item.menu_item_parent != 0 && item.menu_item_parent == parentID) {
          // if an item's parent ID matches the ID passed
          subItemFound = true // flag is true
          return // return early
        }
      })
      return subItemFound
    },
  },
}
</script>

<style scoped lang="scss">
ul,
li {
  padding: 0;
  margin: 0;
  list-style: none;
}
footer {
  border-top: 1px solid black;
  margin-top: 50px;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 850px) {
    flex-direction: column;
    align-items: center;
  }
}
nav {
  display: flex;
  align-items: flex-start;
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
}
.footer-img {
  width: 200px;
  min-width: 150px;
  padding-right: 20px;
}
.footer-menu {
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 700px) {
    margin-top: 20px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    text-align: center;
  }
  > li {
    margin-right: 20px;
  }
  a {
    font-weight: bold;
    color: black;
    margin-right: 20px;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    padding-bottom: 3px;
    &.nuxt-link-exact-active {
      color: #0073e6;
      border-bottom: 1px solid #0073e6;
    }
    &:hover {
      color: #0073e6;
      border-bottom: 1px solid #0073e6;
    }
    &:last-of-type {
      margin-right: unset;
    }
  }
}
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
