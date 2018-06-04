import Vue from 'vue'
import Vuex from 'vuex'
import MUTATION from '@/vuex/mutation-types'
import ACTION from '@/vuex/action-types'

/** modelの読み込み */
import Todo from '@/models/todo'

Vue.use(Vuex)

const state = {
  todos: []
}

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
    const todo = new Todo(payload.text)
    state.todos.push(todo)
  }
}

const getters = {
}

const todo = {
  namespaced: true,
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
}

export default todo
