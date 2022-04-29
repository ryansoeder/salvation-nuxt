export const state = () => ({
  siteOptions: {},
})

export const mutations = {
  SET_OPTIONS(state, options) {

    state.siteOptions = options[0]
  },
}

export const actions = {
  async get_options({ commit }) {
    console.log('TEST')
    const res = await this.$repositories.options.all()
    const { status, data } = res
    if (status === 200) {
      // const { thing } = data
      commit('SET_OPTIONS', data)
    } else {
      console.log(status)
    }
  },
}
