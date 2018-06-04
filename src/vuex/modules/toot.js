import TootAPI from '@/api/toot'
import Toot from '@/models/toot'

const actions = {
  INITIALIZE ({commit}, payload) {
    TootAPI.getAll(response => {
      commit('INITIALIZE', {toots: response.data})
    })
  },
  ADD_TOOT ({commit}, payload) {
    const toot = new Toot({
      content: payload.content
    })
    TootAPI.create(toot, response => {
      this.dispatch('toot/INITIALIZE')
    })
  }
}

const mutations = {
  /** 初期化処理 */
  INITIALIZE (state, payload) {
    state.toots = []

    const toots = payload.toots
    toots.forEach(toot => {
      const tootObj = new Toot(toot)
      state.toots.push(tootObj)
    })
  }
}

const getters = {
  /** storeデータをいい感じに整形するところ */
  allToots: (state) => {
    return state.toots
  },
  myToots: (state) => (id) => {
    return state.toots.filter(toot => toot.user_id === id)
  },
  myFavToots (state) {
    return state.toots.filter(todo => todo.fav)
  }
}

const state = {
  toots: [
  ]
}

const toot = {
  namespaced: true,
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
}

export default toot
