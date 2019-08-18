export const state = () => ({
  products: [],
  isEmpty: true,
  subtotal: null,
  total: null,
  hasChanged: false
})

export const getters = {
  products(state) {
    return state.products
  },
  count(state) {
    return state.products.length
  },
  isEmpty(state) {
    return state.isEmpty
  },
  subtotal(state) {
    return state.subtotal
  },
  total(state) {
    return state.total
  },
  hasChanged(state) {
    return state.hasChanged
  }
}

export const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products
  },
  SET_EMPTY(state, isEmpty) {
    state.isEmpty = isEmpty
  },
  SET_SUBTOTAL(state, subtotal) {
    state.subtotal = subtotal
  },
  SET_TOTAL(state, total) {
    state.total = total
  },
  SET_HAS_CHANGED(state, hasChanged) {
    state.hasChanged = hasChanged
  }
}

export const actions = {
  async getCart({ commit }) {
    const res = await this.$axios.$get('/cart')

    commit('SET_PRODUCTS', res.data.products)
    commit('SET_EMPTY', res.meta.isEmpty)
    commit('SET_SUBTOTAL', res.meta.subtotal)
    commit('SET_TOTAL', res.meta.total)
    commit('SET_HAS_CHANGED', res.meta.hasChanged)

    return res
  },
  async destroy({ dispatch }, productId) {
    await this.$axios.$delete(`/cart/${productId}`)
    await dispatch('getCart')
  },
  async update({ dispatch }, { productId, quantity }) {
    await this.$axios.$patch(`/cart/${productId}`, { quantity })
    await dispatch('getCart')
  },
  async store({ dispatch }, products) {
    await this.$axios.$post('/cart', { products })
    await dispatch('getCart')
  }
}
