const resource = '/artist'
export default ($axios) => ({
  all() {
    return $axios.get(`${resource}`)
  },

  single(slug) {
    return $axios.get(`${resource}?slug=${slug}`)
  },
})