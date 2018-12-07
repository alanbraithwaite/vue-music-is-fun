import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

let musicApi = Axios.create({
  baseURL: 'https://itunes.apple.com/search?&term=',
  timeout: 4000
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchResults: []

  },
  mutations: {
    setResults(state, results) {
      state.searchResults = results
    },
  },
  actions: {
    search({ commit, dispatch }, query) {
      musicApi.get(query)
        .then(res => {
          let data = res.data.results
          commit('setResults', data)
        })
    },
  }
})
