import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import category from './modules/category'
import repos from './modules/repos'
import developer from './modules/developer'
import ecosystem from './modules/ecosystem'
import getters from './getters'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    app,
    user,
    repos,
    category,
    developer,
    ecosystem
  },
  getters
})

export default store
