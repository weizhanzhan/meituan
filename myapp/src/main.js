// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import MintUI from 'mint-ui'
import { NavBar } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import { Tab, Tabs } from 'vant';
import {store} from './store/store'

Vue.use(Tab).use(Tabs);
Vue.use(Tabbar).use(TabbarItem);
Vue.use(NavBar);
Vue.use(MintUI)
Vue.config.productionTip = false
//axios.defaults.baseURL="localhost:8080/"
Vue.prototype.$http=axios
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers['XPS-Version'] = '1.0.0'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})