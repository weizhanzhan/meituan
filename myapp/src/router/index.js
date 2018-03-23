import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AppIndex from '@/components/AppIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
       path: '/',
       name: '主页',
       component: AppIndex
    }
    ,
      {
        path: '/login',
       name: 'HelloWorld',
       component: HelloWorld
      }
  ],
  // mode:history
})
