import { getCategories } from '@/api/ext'

const category = {
  state: {
    categories: []
  },

  mutations: {
    SET_CATEGORIES: (state, categories) => {
      state.categories = categories
    }
  },

  actions: {
    // 获取栏目
    nuxtServerInit({ commit }) {
      return new Promise((resolve, reject) => {
        getCategories({ site_id: process.env.SITE_ID }).then(res => {
          const data = res
          if (data.code === 200) {
            commit('SET_CATEGORIES', data.data)
            resolve()
          } else {
            alert(data.message)
            reject({
              message: data.message,
              type: 'error'
            })
          }
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default category
