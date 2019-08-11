export const state = () => ({
  categories: []
})

export const getters = {
  categories(state) {
    return state.categories
  }
}

export const mutations = {
  HYDRATE_CATEGORIES(state, categories) {
    state.categories = categories
  }
}

export const actions = {
  async nuxtServerInit({ commit, dispatch }) {
    const categories = await this.$axios.$get('/categories')

    commit('HYDRATE_CATEGORIES', categories.data)

    if (this.$auth.loggedIn) {
      await dispatch('cart/getCart')
    }
  }
}
