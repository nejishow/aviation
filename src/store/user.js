import UserService from '../services/auth.service'
export const state = () => ({
  id: null,
  token: null,
  user: []
})
export const getters = {
  getId(state) {
    return state.id
  },
  getToken(state) {
    return state.token
  },
  getUser(state) {
    return state.user
  }
}
export const mutations = {
  SET_ID(state, id) {
    state.id = id
  },
  SET_TOKEN(state, token) {
    state.token = token
  },
  SET_USER(state, user) {
    state.user = user
  }
}
export const actions = {
  login({ commit }, payload) {
    commit('SET_USER', payload.user)
    commit('SET_ID', payload.user._id)
    commit('SET_TOKEN', payload.token)
  },
  logout({ commit }) {
    commit('SET_USER', [])
    commit('SET_ID', null)
    commit('SET_TOKEN', null)
    localStorage.clear()

  },
  getUser({ commit }) {
    return UserService.getUser().then(async (response) => {
      await commit('SET_USER', response.data)
      await commit('SET_ID', localStorage.getItem('id'))
      await commit('SET_TOKEN', localStorage.getItem('token'))
    })
  },
  patchUser({ commit }, payload) {
    return UserService.modifyUser(payload).then((response) => {
      commit('SET_USER', response.data)
    })
  }
}
export default {

  getters,
  actions,
  mutations,
  state
}
