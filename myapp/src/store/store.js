import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store=new Vuex.Store({
    state:{
        //设置属性
        tabshow:true
    },
    getters:{
        //获取属性状态
    },
    mutations:{
        //改变属性状态
        setTab(state,data){
            state.tabshow=data
        }
    },
    actions:{
        //应用mutations
    }
})