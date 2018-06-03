import Vue from 'vue'
import Vuex from 'vuex'

import todo from '@/vuex/modules/todo'
import toot from '@/vuex/modules/toot'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    todo: todo,
    toot: toot
  }
})

export default store
