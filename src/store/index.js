import Vue from 'vue'
import Vuex from 'vuex'
import documents from './documents';
import category from './categoryMenu';
import media from './media';
import auth from '../services/auth.service';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {}
  },
  getters: {
    getUser(state) {
      return state.user
    },
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user
    },
  },
  actions: {
    setUser({ commit }, user) {
      commit('SET_USER', user)
    },
    getUser({ commit }) {
      const id = localStorage.getItem('id')
      const token = localStorage.getItem('token')
      return auth.getUser(token, id).then((data) => {
        const user = data.data
        if (user._id) {
          commit('SET_USER', user)
        } else {
          commit('SET_USER', {})
          localStorage.clear()
        }
      });
    },
    logout({ commit }) {
      localStorage.clear()

      auth.logout().then(() => {
        commit('SET_USER', {})
      }).catch(() => {
        commit('SET_USER', {})
      })
    }
  },
  modules: {
    documents,
    category,
    media
  }
})
