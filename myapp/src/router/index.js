import Vue from 'vue'
import Router from 'vue-router'
import AppIndex from '@/components/AppIndex'
import FindIndex from '@/components/find/findIndex'
import OrderIndex from '@/components/order/orderIndex'
import Slist from '@/components/slist/slist'
import Infomation from '@/components/infomation'
import Login from '@/components/login/login'
//二级路由
import OrderGoods from '@/components/goods/ordergoods'
import Evaluate from '@/components/goods/evaluate'
import Business from '@/components/goods/business'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: '主页',component: AppIndex} ,
    {path: '/orderindex',component: OrderIndex},
    {path: '/login',component:Login},
    { path: '/findidnex',name: 'Fidn',component: FindIndex},
    { path: '/slist',name: 'slist',component: Slist},
    { path: '/infomation',name: 'info',component: Infomation,children:[
      {path:'/evaluate',name:'评价',component:Evaluate},
       {path:'/ordergoods',name:'点菜',component:OrderGoods},
      {path:'/business',name:'商家',component:Business},
    ]},
  ],
   mode:'history'
})
