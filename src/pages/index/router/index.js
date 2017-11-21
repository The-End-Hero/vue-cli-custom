import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import UserCenter from '@/components/UserCenter'
import HomePage from '@/components/HomePage'
import SignIn from '@/components/SignIn'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/UserCenter',
      name: 'UserCenter',
      component: UserCenter
    },
    {
      path: '/HomePage',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/SignIn',
      name: 'SignIn',
      component: SignIn
    },
  ]
})
