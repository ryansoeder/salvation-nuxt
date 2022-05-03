export const state = () => ({
  pages: [],
  page: {},
  blocks: [],
})

export const mutations = {
  SET_PAGES(state, pages) {
    state.pages = pages
  },
  
  SET_PAGE(state, page) {
    state.page = page[0]
    state.blocks = page[0].acf.blocks
  },
}

export const actions = {
  async get_pages({ commit }) {
    const res = await this.$repositories.page.all()
    const { status, data } = res
    if (status === 200) {
      // const { thing } = data
      commit('SET_PAGES', data)
    } else {
      console.log(status)
    }
  },

  async get_page({ commit }, { slug }) {
    const res = await this.$repositories.page.single(slug)
    const { status, data } = res
    if (status === 200) {
      commit('SET_PAGE', data)
    } else {
      console.log(status)
    }
  },
}
