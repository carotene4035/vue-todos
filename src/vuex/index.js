import Vue from 'vue'
import Vuex from 'vuex'
import MUTATION from '@/vuex/mutation-types'
import ACTION from '@/vuex/action-types'

Vue.use(Vuex)

const actions = {
  [ACTION.INCREMENT] ({commit}, payload) {
    commit({
      type: MUTATION.INCREMENT,
      paload: payload
    })
  },
  [ACTION.ADD_TODO] ({commit}, payload) {
    commit({
      type: MUTATION.ADD_TODO,
      text: payload.text
    })
  }
}

const mutations = {
  [MUTATION.INCREMENT] (state, payload) {
    state.count = state.count + payload.amount
  },
  [MUTATION.ADD_TODO] (state, payload) {
    state.todos.push(payload.text)
  }
}

const store = new Vuex.Store({
  /** 状態 */
  state: {
    count: 0,
    /** 違う種類のobjectは同じstateに管理していいのか？実験 */
    todos: []
  },
  /*
   * 状態を変更する
   */
  mutations: mutations,
  /*
   * 非同期処理をする
   */
  actions: actions,
  /*
   * storeの値をfilteringしたりカウントしたりするとき、getternにまとめる
   */
  getters: {

  }
})

export default store
