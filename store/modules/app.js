import { getCount } from '@/api/site'

const app = {
  state: {
    sidebar: {
      withoutAnimation: false
    },
    device: 'desktop',
    count: {
      repos: 0,
      developers: 0
    }
  },
  mutations: {
    TOGGLE_DEVICE: (state, device) => {
      state.device = device
    },
    SET_COUNT: (state, count) => {
      state.count = count
    }
  },
  actions: {
    // 获取总数
    nuxtServerInit({ commit }) {
      return new Promise((resolve, reject) => {
        getCount().then(res => {
          commit('SET_COUNT', res)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    toggleSideBar({ commit }) {
      commit('TOGGLE_SIDEBAR')
    },
    closeSideBar({ commit }, { withoutAnimation }) {
      commit('CLOSE_SIDEBAR', withoutAnimation)
    },
    toggleDevice({ commit }, device) {
      commit('TOGGLE_DEVICE', device)
    },
    setLanguage({ commit }, language) {
      commit('SET_LANGUAGE', language)
    },
    setSize({ commit }, size) {
      commit('SET_SIZE', size)
    }
  }
}

export default app
