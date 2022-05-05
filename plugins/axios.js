// export default function ({ $axios, error: nuxtError }) {
//   $axios.onResponse((response) => {
//     if (response.data.length === 0) {
//         nuxtError({
//             statusCode: 500,
//             message: 'Page not found.'
//         })
//     }
//     if (response.status === 404) {
//       console.log('Oh no it returned a 404')
//     }
//   })
//   $axios.onError((error) => {
//     nuxtError({
//       statusCode: error.response.status,
//       message: error.message,
//     })
//     return Promise.resolve(false)
//   })
// }
