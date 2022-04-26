<template>
  <header>
    <div class="inner-header">
      <div class="">
        <div class="row no-gutters">
          <div class="header-container d-flex align-items-center">
            <a
              href="javascript:void(0)"
              class="sidemenu_btn link"
              id="sidemenu_toggle"
              aria-label="side navigation open"
              @click="showSideMenu = true"
            >
              <span></span>
              <span></span>
              <span></span>
            </a>
          </div>
          <NuxtLink to="/" class="navbar-brand link">
            <img v-if="logo" :src="logo.url" :alt="logo.alt" />
          </NuxtLink>
          <div
            class="header-container menu-container d-flex justify-content-end align-items-center"
          >
            <ul class="main-menu">
              <template v-for="item in menu">
                <li :key="item.ID" v-if="item.menu_item_parent == 0">
                  <NuxtLink
                    v-if="internalLink(item.url)"
                    :to="getSlug(item.url)"
                    >{{ item.title }}</NuxtLink
                  >
                  <a v-else :href="item.url" target="_blank">{{
                    item.title
                  }}</a>
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
          </div>
        </div>
      </div>
    </div>
    <!--Side Nav-->
    <div :class="showSideMenu ? shownClasses : hiddenClasses" ref="side-menu">
      <div class="bg-overlay"></div>
      <div class="inner-wrapper">
        <span
          class="btn-close"
          id="btn_sideNavClose"
          @click="showSideMenu = false"
          ><i></i><i></i
        ></span>
        <div class="container">
          <div class="row w-100 side-menu-inner-content">
            <div class="col-12 col-lg-8 offset-lg-2 nav-icon">
              <nav class="navbar navbar-nav">
                <div class="side-nav-menu">
                  <template v-for="item in menu">
                    <NuxtLink
                      :key="item.ID"
                      class="nav-link home active anim-text-white nav-heading"
                      v-if="
                        item.menu_item_parent == 0 && internalLink(item.url)
                      "
                      :to="getSlug(item.url)"
                      @click="showSideMenu = false"
                      >{{ item.title }}</NuxtLink
                    >
                    <a
                      :key="item.ID + 1"
                      class="nav-link home active anim-text-white nav-heading"
                      v-else-if="item.menu_item_parent == 0"
                      :href="item.url"
                      target="_blank"
                      @click="showSideMenu = false"
                      >{{ item.title }}</a
                    >
                    <template v-for="subItem in menu">
                      <NuxtLink
                        :key="subItem.ID"
                        class="nav-link scroll anim-text-white artist-nav"
                        v-if="
                          subItem.menu_item_parent == item.ID &&
                          internalLink(subItem.url)
                        "
                        :to="getSlug(subItem.url)"
                        @click="showSideMenu = false"
                        >{{ subItem.title }}</NuxtLink
                      >
                      <a
                        :key="subItem.ID"
                        class="nav-link scroll anim-text-white artist-nav"
                        v-else-if="subItem.menu_item_parent == item.ID"
                        :href="subItem.url"
                        target="_blank"
                        @click="showSideMenu = false"
                        >{{ subItem.title }}</a
                      >
                    </template>
                  </template>
                  <span class="menu-line link"
                    ><i aria-hidden="true">/</i></span
                  >
                </div>
              </nav>
            </div>
            <div class="side-menu-footer">
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
            </div>
          </div>
        </div>
      </div>
    </div>
    <a
      id="close_side_menu"
      :class="showSideMenu ? '' : 'closed'"
      href="javascript:void(0);"
      @click="closeMenu"
    ></a>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  props: {
    logo: Object,
    menu: Array,
  },
  data() {
    return {
      showSideMenu: false,
      shownClasses: ['side-menu', 'side-menu-active', 'hidden'],
      hiddenClasses: ['side-menu', 'hidden'],
    }
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
    // sideMenu() {
    //   const sideMenu = document.querySelector('.side-menu')
    //   sideMenu.classList.remove('side-menu-opacity')
    //   sideMenu.classList.add('side-menu-active')
    //   document.querySelector('#close_side_menu').classList.remove('closed')
    // },
    closeMenu() {
      this.showSideMenu = false
    },
  },
}
</script>

<style scoped lang="scss">
.inner-header {
  border-bottom: 1px solid black;
  .row {
    .header-container {
      flex: 1 1;
      &.menu-container {
        @media (max-width: 992px) {
          display: none !important;
        }
      }
    }
  }
}
.navbar-brand .link {
  margin: 0 auto;
}
.main-menu,
.sub-menu {
  list-style-type: none;
  margin: 0;
  padding: 0;
  li:before {
    content: none;
  }
}
.main-menu {
  display: flex;
  justify-content: center;
  li {
    position: relative;
    margin: 0 10px;
    &:hover {
      .sub-menu {
        opacity: 1;
        transform: translateX(0);
        visibility: visible;
      }
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
    .sub-menu {
      opacity: 0;
      background-color: white;
      border: 1px solid black;
      border-top: none;
      padding: 0 20px;
      visibility: hidden;
      transition: 0.3s ease-in-out;
      text-align: left;
      position: absolute;
      top: 59px;
      left: -20px;
      transform: translateX(-10px);
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 35px;
        top: -35px;
        left: 0;
        opacity: 0;
      }
      li {
        margin: 10px 0;
        width: max-content;
      }
    }
    &:last-of-type .sub-menu {
      left: unset;
      right: -20px;
      text-align: right;
      li {
        margin-left: auto;
      }
    }
  }
}

@for $i from 1 through 50 {
  .nav-icon
    .navbar-nav
    .nav-link:nth-child(#{$i}).nuxt-link-active
    ~ .menu-line,
  .nav-icon .navbar-nav .nav-link:nth-child(#{$i}):active ~ .menu-line {
    -webkit-transform: translateY(calc(#{$i}* 100%)) translateY(-100%);
    transform: translateY(calc(#{$i}* 100%)) translateY(-100%);
  }
  // .navbar-nav .nav-link:nth-child(#{$i}):hover ~ .menu-line {
  // 	-webkit-transform: translateY(calc(#{$i}*100%)) translateY(-100%);
  // 	transform: translateY(calc(#{$i}*100%)) translateY(-100%);
  // }
}
</style>
