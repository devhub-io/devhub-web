const repos = {
  actions: {
    getTopCategories({ commit }, params) {
      return this.$axios.$get('/category/top', { params })
    },
    getNews({ commit }, params) {
      return this.$axios.$get(`/news`, { params })
    },
    getTopics({ commit }) {
      return this.$axios.$get(`/topics`)
    },
    getTopicRepos({ commit }, { topic, params }) {
      return this.$axios.$get(`/topic/${topic}`, { params })
    },
    getRecommend({ commit }, params) {
      return this.$axios.$get(`/repos/recommend`, { params })
    },
    getHottest({ commit }, params) {
      return this.$axios.$get(`/repos/hottest`, { params })
    },
    getNewest({ commit }, params) {
      return this.$axios.$get(`/repos/newest`, { params })
    },
    getTrend({ commit }, params) {
      return this.$axios.$get(`/repos/trend`, { params })
    },
    getRepos({ commit }, slug) {
      return this.$axios.$get(`/repos/${slug}`)
    },
    getHomeRepos({ commit }) {
      return this.$axios.$get(`/repos/home`)
    },
    getCategoryRepos({ commit }, { slug, params }) {
      return this.$axios.$get(`/repos/category/${slug}`, { params })
    },
    reviewRepos({ commit }, { slug, data }) {
      return this.$axios.$post(`/repos/${slug}/review`, data)
    },
    searchRepos({ commit }, params) {
      return this.$axios.$get(`/repos/search`, { params })
    }
  }
}

export default repos
