import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store=new Vuex.Store({
    state:{
        //设置属性
        tabshow:true,
        adddom:'',
        orderFoods:[],
        popupShow:false
    },
    getters:{
        //获取属性状态
    },
    mutations:{
        //改变属性状态
        setTab(state,data){
            state.tabshow=data
        },
        setAdddom(state,data){
            state.adddom=data
        },
        setOrder(state,data){
            state.orderFoods.push(data)
        },
        deleteOrder(state,data){
            let foods=state.orderFoods
            var index=foods.indexOf(data)
            state.orderFoods.splice(index,1)
        },
        setPopupShow(state,data){
            state.popupShow=data
        }
    },
    actions:{
        //应用mutations
    }
})