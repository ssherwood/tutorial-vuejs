import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Users from '@/components/Users'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/users/:teamId',
      name: 'Users',
      component: Users
    }
  ]
})
