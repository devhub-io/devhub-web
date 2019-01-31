const ecosystem = {
  actions: {
    getEcosystems({ commit }, params) {
      return this.$axios.$get('/ecosystems', { params })
    },
    getEcosystem({ commit }, slug) {
      return this.$axios.$get(`/ecosystem/${slug}`)
    },
    getEcosystemOutline({ commit }, slug) {
      return this.$axios.$get(`/ecosystem/${slug}/outline`)
    },
    getEcosystemCollectionItems({ commit }, { topic_slug, collection_slug }) {
      return this.$axios.$get(`/ecosystem/${topic_slug}/collection/${collection_slug}/items`)
    }
  }
}

export default ecosystem
