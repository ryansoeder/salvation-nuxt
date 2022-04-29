const resource = '/site_options'
export default ($axios) => ({
  all() {
    return $axios.get(`${resource}`)
  },
})