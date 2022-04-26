export const state = () => ({
  artists: [],
  artist: {},
  blocks: [],
})

export const mutations = {
  SET_ARTISTS(state, artists) {
    state.artists = artists
  },
  SET_ARTIST(state, artist) {
    state.artist = artist[0]
    state.blocks = artist[0].acf.blocks
  },
}

export const actions = {
  async get_artists({ commit }) {
    const res = await this.$repositories.artist.all()
    const { status, data } = res
    if (status === 200) {
      // const { thing } = data
      commit('SET_ARTISTS', data)
    } else {
      console.log(status)
    }
  },

  async get_artist({ commit }, { slug }) {
    const res = await this.$repositories.artist.single(slug)
    const { status, data } = res
    if (status === 200) {
      // const { data } = data
      commit('SET_ARTIST', data)
    } else {
      console.log(status)
    }
  },
}