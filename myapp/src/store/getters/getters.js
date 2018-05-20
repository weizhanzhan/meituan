

export default{
    selectFoodsPrice:state=>{
        var num=0
        state.selectFoods.forEach(food=>{
            num+=food.price*food.count
        })
        return  num
    }
    
}