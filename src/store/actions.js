import axios from 'axios'

const actions = {
  async getOrders ({ commit }) {
    await axios.get('http://localhost:8088/orders').then((response) => {
      commit('getOrders', response.data)
    }).catch((response) => {
      console.log(response)
    })
  },
  async reserve ({ commit }, payload) {
    await axios.put('http://localhost:8088/orders?orderNumber=' + payload.orderNumber, payload).then((response) => {
      commit('storage', [response.data])
    }).catch((response) => {
      console.log(response)
    })
  },
  async storage ({ commit }, payload) {
    await axios.post('http://localhost:8088/orders', payload).then((response) => {
      commit('reserve', [response.data])
    }).catch((response) => {
      console.log(response)
    })
  },
  async confirmReceipt ({ commit }, payload) {
    await axios.put('http://localhost:8088/orders?orderNumber=' + payload.orderNumber, payload).then((response) => {
      commit('storage', [response.data])
    }).catch((response) => {
      console.log(response)
    })
  },
  async addItem ({ commit }, payload) {
    await axios.post('http://localhost:3001/todos', payload).then((response) => {
      commit('addItem', [response.data])
    }).catch((response) => {
      console.log(response)
    })
  },
  async updateItem ({ commit }, payload) {
    await axios.put('http://localhost:3001/todos/' + payload.id, payload).then((response) => {
      commit('updateItem', response.data)
    }).catch((response) => {
      console.log(response)
    })
  },
  async deleteItem ({ commit }, payload) {
    await axios.delete('http://localhost:3001/todos/' + payload.id).then((response) => {
      commit('deleteItem', payload)
    }).catch((response) => {
      console.log(response)
    })
  }
}

export default actions
