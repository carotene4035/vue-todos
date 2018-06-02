import Vue from 'vue'
import Vuex from 'vuex'
import MUTATION from '@/vuex/mutation-types'
import ACTION from '@/vuex/action-types'

/** modelの読み込み */
import Todo from '@/models/todo'
import Toot from '@/models/toot'

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
  },
  [ACTION.ADD_TOOT] ({commit}, payload) {
    console.log('action')
    console.log(payload)
    commit({
      type: MUTATION.ADD_TOOT,
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
  },
  [MUTATION.ADD_TOOT] (state, payload) {
    const count = this.state.toots.length
    const id = count + 1
    const toot = new Toot(id, payload.toot)
    state.toots.push(toot)
  }
}

const getters = {
  /*
   * storeの値をfilteringしたりカウントしたりするとき、getternにまとめる
   */
  all: function (state) {
    return state.toots
  },
  myToots: (state) => (id) => {
    return state.toots.filter(toot => toot.user_id === id)
  },
  myFavs: function (state) {
    return state.toots.filter(todo => todo.fav)
  }
}

const store = new Vuex.Store({
  /** 状態 */
  state: {
    count: 0,
    /** 違う種類のobjectは同じstateに管理していいのか？実験 */
    todos: [],
    toots: [
      {id: 1, user_id: 1, toot: 'aaa', fav: true},
      {id: 2, user_id: 1, toot: 'aibbb', fav: false},
      {id: 3, user_id: 2, toot: 'ccc', fav: false}
    ]
  },
  getters: getters,
  /*
   * 状態を変更する
   */
  mutations: mutations,
  /*
   * 非同期処理をする
   */
  actions: actions
})

export default store
