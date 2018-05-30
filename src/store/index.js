import Vue from 'vue'
import Vuex from 'vuex'
import types from './types'

Vue.use(Vuex)

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
  mutations: {
    /** あとでactionを使って書き直し */
    [types.INCREMENT] (state, payload) {
      state.count = state.count + payload.amount
    },
    addtodo (state, todo) {
      state.todos.push(todo)
    }
  },
  /*
   * storeの値をfilteringしたりカウントしたりするとき、getternにまとめる
   */
  getters: {

  }
})

export default store
