const mutations = {
  addItem (state, payload) {
    state.items.push(...payload)
  },
  changeShow (state, status) {
    state.tableStatus = status
    if (status === 1) {
      for (let i = 0; i < state.items.length; i++) {
        state.items[i].isShow = true
      }
    } else if (status === 2) {
      for (let i = 0; i < state.items.length; i++) {
        state.items[i].isShow = !state.items[i].isSelected
      }
    } else if (status === 3) {
      for (let i = 0; i < state.items.length; i++) {
        state.items[i].isShow = state.items[i].isSelected
      }
    }
  },
  updateItem (state, payload) {
    for (let i = 0; i < state.items.length; i++) {
      if (state.items[i].id === payload.id) {
        state.items[i] = payload
      }
    }
  },
  changeItemIsEditing (state, payload) {
    for (let i = 0; i < state.items.length; i++) {
      if (state.items[i].id === payload.el.id) {
        state.items[i].isEditing = payload.isEdit
      }
    }
  },
  updateUserName (state, payload) {
    state.username = payload
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
