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
        selectFoods:[],
        detailShow:false
    },
    getters:{
        //获取属性状态
    },
    mutations:{
        //改变属性状态
        getFoods(state,data){
            state.Allfood=data
        },
        setTab(state,data){
            state.tabshow=data
        },
        setAdddom(state,data){
            state.adddom=data
        },
        setOrder(state,data){         
            if(data.count>0){
                state.selectFoods.push(data)
            }             
        },
        deleteOrder(state,data){
            for(var i=0;i<state.selectFoods.length;i++)
            {
                if(state.selectFoods[i].name==data.name)
                   state.selectFoods.splice(i,1)
            }
        },
        emptyFoodList(state,data){
            state.selectFoods.forEach(food=>{
                food.count=0
            })
            state.selectFoods=data
        },
        setPopupShow(state,data){
            state.popupShow=data
        },
        setDetail(state,data){
            state.detailShow=data

        }
    },
    actions:{
        //应用mutations
    }
})