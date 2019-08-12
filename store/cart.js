export const state = () => ({
  products: []
})

export const getters = {
  products(state) {
    return state.products
  },
  count(state) {
    return state.products.length
  }
}

export const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products
  }
}

export const actions = {
  async getCart({ commit }) {
    const res = await this.$axios.$get('/cart')

    commit('SET_PRODUCTS', res.data.products)

    return res
  },
  async destroy({ dispatch }, productId) {
    await this.$axios.$delete(`/cart/${productId}`)
    await dispatch('getCart')
  },
  async update({ dispatch }, { productId, quantity }) {
    await this.$axios.$patch(`/cart/${productId}`, { quantity })
    await dispatch('getCart')
  }
}
