import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import category from './modules/category'
import getters from './getters'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    app,
    user,
    category
  },
  getters
})

export default store
