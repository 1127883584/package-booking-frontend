const mutations = {
  addItem (state, payload) {
    state.items.push(...payload)
  },
  getOrders (state, payload) {
    state.items.push(...payload)
  },
  reserve (state, payload) {
    state.items.push(...payload)
  },
  updateItem (state, payload) {
    for (let i = 0; i < state.items.length; i++) {
      if (state.items[i].id === payload.id) {
        state.items[i] = payload
      }
    }
  },
  deleteItem (state, payload) {
    for (let i = 0; i < state.items.length; i++) {
      if (state.items[i].id === payload.id) {
        state.items.splice(i, 1)
        break
      }
    }
  }
}

export default mutations
