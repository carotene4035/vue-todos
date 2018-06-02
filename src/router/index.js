import Vue from 'vue'
import Router from 'vue-router'
import Todo from '@/pages/Todo'
import Index from '@/pages/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/todos',
      name: 'Todo',
      component: Todo
    },
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
