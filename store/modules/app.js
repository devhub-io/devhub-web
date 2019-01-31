const app = {
  state: {
    sidebar: {
      withoutAnimation: false
    },
    device: 'desktop',
    count: {
      repos: 0,
      developers: 0
    },
    showLogin: false
  },
  mutations: {
    SET_COUNT: (state, count) => {
      state.count = count
    },
    SHOW_LOGIN: (state, isShow) => {
      state.showLogin = isShow
    }
  },
  actions: {
    // 获取总数
    nuxtServerInit({ commit }) {
      return new Promise((resolve, reject) => {
        this.$axios.$get('/count').then(res => {
          commit('SET_COUNT', res)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    showLoginModal({ commit }) {
      commit('SHOW_LOGIN', true)
    },
    hideLoginModal({ commit }) {
      commit('SHOW_LOGIN', false)
    },

    getSites({ commit }) {
      return this.$axios.$get('/sites')
    },
    getCount({ commit }) {
      return this.$axios.$get('/count')
    },
    feedback({ commit }, data) {
      return this.$axios.$post('/feedback', data)
    }
  }
}

export default app
