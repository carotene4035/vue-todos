import MUTATION from '@/vuex/mutation-types'
import ACTION from '@/vuex/action-types'

import TootAPI from '@/api/toot'

/** modelの読み込み */
import Toot from '@/models/toot'

const actions = {
  /** ここでapi登録処理を走らせる */
  [ACTION.ADD_TOOT] ({commit}, payload) {
    commit({
      type: MUTATION.ADD_TOOT,
      toot: payload.toot
    })
  },
  INITIALIZE ({commit}, payload) {
    /** api呼び出し */
    TootAPI.getAll(response => {
      commit('INITIALIZE', {toots: response.data})
    })
  }
}

const mutations = {
  /** 初期化処理 */
  INITIALIZE (state, payload) {
    const toots = payload.toots
    toots.forEach(toot => {
      const tootObj = new Toot(toot)
      state.toots.push(tootObj)
    })
  },
  [MUTATION.ADD_TOOT] (state, payload) {
    const count = state.toots.length
    const id = count + 1
    const toot = new Toot(id, payload.toot)
    state.toots.push(toot)
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
    // {id: 1, user_id: 1, toot: 'aaa', fav: true},
    // {id: 2, user_id: 1, toot: 'aibbb', fav: false},
    // {id: 3, user_id: 2, toot: 'ccc', fav: false}
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
