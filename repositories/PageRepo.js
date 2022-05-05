const resource = '/pages'
export default ($axios) => ({
  all() {
    return $axios.get(`${resource}`)
  },

  single(slug) {
    return $axios
      .get(`${resource}?slug=${slug}`)
      // .then((res) => {
      //   if (res.data.length === 0) {
      //     throw { statusCode: 404, message: 'Page not found' }
      //   }
      //   return res
      // })
      // .catch((e) => {
      //   window.onNuxtReady(() => {
      //     $nuxt.error(e)
      //   })
      // })
  },
})
