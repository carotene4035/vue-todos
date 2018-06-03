import Vue from 'vue'
import Vuex from 'vuex'
import MUTATION from '@/vuex/mutation-types'
import ACTION from '@/vuex/action-types'

/** modelの読み込み */
import Toot from '@/models/toot'

Vue.use(Vuex)

const state = {
  toots: [
    {id: 1, user_id: 1, toot: 'aaa', fav: true},
    {id: 2, user_id: 1, toot: 'aibbb', fav: false},
    {id: 3, user_id: 2, toot: 'ccc', fav: false}
  ]
}

const actions = {
  [ACTION.ADD_TOOT] ({commit}, payload) {
    commit({
      type: MUTATION.ADD_TOOT,
      text: payload.text
    })
  }
}

const mutations = {
  [MUTATION.ADD_TOOT] (state, payload) {
    const count = this.state.toots.length
    const id = count + 1
    const toot = new Toot(id, payload.toot)
    state.toots.push(toot)
  }
}

const getters = {
  all (state) {
    return state.toots
  },
  myToots: (state) => (id) => {
    return state.toots.filter(toot => toot.user_id === id)
  },
  myFavs (state) {
    return state.toots.filter(todo => todo.fav)
  }
}

const toot = new Vuex.Store({
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
})

export default toot
