const resource = '/main_menu'
export default ($axios) => ({
  all() {
    return $axios.get(`${resource}`)
  },
})