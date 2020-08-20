import Vue from 'vue'
import Vuex from 'vuex'
import documents from './documents';
import category from './categoryMenu';
import media from './media';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    documents,
    category,
    media
  }
})
