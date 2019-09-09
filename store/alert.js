export const state = () => ({
  message: ''
})

export const getters = {
  message(state) {
    return state.message
  }
}

export const mutations = {
  SET_MESSAGE(state, message) {
    state.message = message
  },
  CLEAR(state) {
    state.message = ''
  }
}

export const actions = {
  flash({ commit }, message) {
    commit('SET_MESSAGE', message)
  },
  clear({ commit }) {
    commit('CLEAR')
  }
}
