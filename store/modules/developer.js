const developer = {
  actions: {
    getDevelopers({ commit }, params) {
      return this.$axios.$get('/developer/list', { params })
    },
    getDeveloper({ commit }, slug) {
      return this.$axios.$get(`/developer/${slug}`)
    }
  }
}

export default developer
