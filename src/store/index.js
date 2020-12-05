import Vue from 'vue'
import Vuex from 'vuex'
import documents from './documents';
import category from './categoryMenu';
import media from './media';
import auth from '../services/auth.service';
import user from './user';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    lang:'french'
  },
  getters: {
    getUser(state) {
      return state.user
    },
    getLang(state) {
      return state.lang
    },
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user
    },
    SET_LANG(state, lang) {
      state.lang = lang
    },
  },
  actions: {
    setUser({ commit }, user) {
      commit('SET_USER', user)
    },
    setLang({ commit }, lang) {
      commit('SET_LANG', lang)
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
  //   logout({ commit }) {
  //     localStorage.clear()

  //     auth.logout().then(() => {
  //       commit('SET_USER', {})
  //     }).catch(() => {
  //       commit('SET_USER', {})
  //     })
  //   }
   },
  modules: {
    documents,
    category,
    media,
    user
  }
})
