import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store=new Vuex.Store({
    state:{
        //设置属性
        tabshow:true,
        adddom:'',
        orderFoods:[],
        popupShow:false,
        Allfood:[],
        selectFoods:[]
    },
    getters:{
        //获取属性状态
    },
    mutations:{
        //改变属性状态
        getFoods(state,data){
            console.log(data,'data')
            state.Allfood=data
        },
        setTab(state,data){
            state.tabshow=data
        },
        setAdddom(state,data){
            state.adddom=data
        },
        setOrder(state,data){         
            console.log(data.count,state.Allfood,'vuex')
            if(data.count>0){
                state.selectFoods.push(data)
            }             
        },
        deleteOrder(state,data){
            console.log('执行了一次')
            // let foods=state.orderFoods
            // var index=foods.indexOf(data)
            // state.selectFoods.splice(index,1)
            for(var i=0;i<state.selectFoods.length;i++)
            {
                if(state.selectFoods[i].name==data.name)
                   state.selectFoods.splice(i,1)
            }
        },
        setPopupShow(state,data){
            state.popupShow=data
        }
    },
    actions:{
        //应用mutations
    }
})