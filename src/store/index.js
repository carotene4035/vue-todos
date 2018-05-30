import Vue from 'vue'
import Vuex from 'vuex'
import mutationTypes from './mutation-types'
import actionTypes from './action-types'

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
    [mutationTypes.INCREMENT] (state, payload) {
      state.count = state.count + payload.amount
    },
    [mutationTypes.ADD_TODO] (state, payload) {
      state.todos.push(payload.text)
    }
  },
  actions: {
    [actionTypes.INCREMENT] ({commit}, payload) {
      commit({
        type: mutationTypes.INCREMENT,
        paload: payload
      })
    },
    [actionTypes.ADD_TODO] ({commit}, payload) {
      commit({
        type: mutationTypes.ADD_TODO,
        text: payload.text
      })
    }
  },
  /*
   * storeの値をfilteringしたりカウントしたりするとき、getternにまとめる
   */
  getters: {

  }
})

export default store
