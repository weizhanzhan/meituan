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
            // var i=state.orderFoods.indexOf(data)
            // if(i!=-1){
            //     state.orderFoods[i]=[]
            //     state.orderFoods[i]=data
            // }
            // else{
            //     state.orderFoods.push(data)
            // }  
            console.log(data,'vuex')
            if(state.orderFoods.length==0){
                state.orderFoods.push(data)
            }
            else{
            for(var j=0;j<state.orderFoods.length;j++){
                console.log('for')
                if(data.name==state.orderFoods[j].name){
                     console.log('in')
                     state.orderFoods[j]=data
                }
                else{
                    console.log('push')
                    state.orderFoods.push(data)
                }
            } 
        }      
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