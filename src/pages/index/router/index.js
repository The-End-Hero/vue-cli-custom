import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import UserCenter from '@/components/UserCenter'
import HomePage from '@/components/HomePage'
import SignIn from '@/components/SignIn'
import Register from '@/components/Register'
import ForgotPassword from '@/components/ForgotPassword'
import SocialRecruitment from '@/components/SocialRecruitment'
import RecruitmentDetails from '@/components/RecruitmentDetails'
import RecruitmentList from '@/components/RecruitmentList'

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
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/ForgotPassword',
      name: 'ForgotPassword',
      component: ForgotPassword
    },
    // {
    //   path: '/SocialRecruitment',
    //   name: 'SocialRecruitment',
    //   component: SocialRecruitment,
    //   children: [
    //     // 当 /user/:id 匹配成功，
    //     // UserHome 会被渲染在 User 的 <router-view> 中
    //     { path: 'details', component: RecruitmentDetails },
    //
    //     // ...其他子路由
    //   ]
    // },
    {
      path: '/SocialRecruitment',
      name: 'SocialRecruitment',
      component: SocialRecruitment,
      children: [
        {
          path: '', component: RecruitmentList
        },
        {
          path: 'details', component: RecruitmentDetails
        },
        {
          path: 'details/:id', component: RecruitmentDetails
        },
      ]
    },
  ]
})
