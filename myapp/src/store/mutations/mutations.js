export default{
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

    },
    Login(state,data){
        state.loginUser.isLogin=data.islogin
        state.loginUser.info=data.info
        state.loginUser.token=data.token
    }
}