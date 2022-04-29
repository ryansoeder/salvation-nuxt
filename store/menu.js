export const state = () => ({
  menu: [],
})

export const mutations = {
  SET_MENU(state, data) {
    state.menu = menu
  },
}

export const actions = {
  async get_menu({ commit }) {
    console.log('TEST')
    const res = await this.$repositories.menu.all()
    const { status, data } = res
    if (status === 200) {
      // const { thing } = data
      commit('SET_MENU', data)
    } else {
      console.log(status)
    }
  },
}
