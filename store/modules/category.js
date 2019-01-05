import { getCategories } from '@/api/repos'

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
        getCategories().then(res => {
          commit('SET_CATEGORIES', res)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default category
