export default function({ $axios, app }) {
  $axios.onRequest(config => {
    config.timeout = 30000
    config.baseURL = process.env.API_URL
    const token = app.$storage.getUniversal('token')
    if (token !== null || token !== undefined || token !== '') {
      config.headers['Authorization'] = 'Bearer ' + token
    }
    return config
  })

  $axios.onResponse(response => {
    if (response.status === 401) {
      app.$storage.removeUniversal('token')
      return Promise.reject('error')
    } else {
      return response
    }
  })
}
