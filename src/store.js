import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [],
    tableStatus: 0,
    username: ''
  },
  mutations: {
    addItem (state, payload) {
      state.items.push(...payload)
    },
    getOrders (state, payload) {
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
  },
  actions: {
    async getOrders ({ commit }) {
      console.log('asd')
      await axios.get('http://localhost:8088/orders').then((response) => {
        console.log(JSON.stringify(response.data))
        commit('getOrders', response.data)
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
})
