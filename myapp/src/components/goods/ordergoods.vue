<template>
  <div class="goods">
    <div class="goodsmenu" style="bottom:100px">
      <ul>
        <li class="menuitem" v-for="(goodname,index) in goods" :key="index">
          <span class="text">
            {{goodname.name}}
          </span>
          </li>
      </ul>
    </div>
    <div class="goodsinfo">
      <ul>
        <li class="foodlist" v-for="(item,index) in goods" :key="index">
          <div class="ftitle">{{item.name}}</div>
          <ul>
            <li class="food_item" v-for="(food,index) in item.foods" :key="index">
                <div class="ficon">
                  <img width="57" height="57" :src="food.icon" />
                </div>
                <div class="fcontent">
                   <h2 class="fname">{{food.name}}</h2>
                   <p v-if="food.description" class="fdescription">{{food.description}}</p>
                   <div class="extra">
                      <span class="count">月售{{food.sellCount}}</span>
                      <span class="rating">好评率{{food.rating}}%</span>
                    </div>
                    <div class="fprice">
                      <span>￥{{food.price}}</span>
                    </div>
                </div>
                
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Seller from '../../../static/seller.json'
export default {
       data(){
         return{}
       },
       created(){
         console.log(Seller.goods)
       },
       computed:{
         goods(){
           return Seller.goods
         }
       }
}
</script>

<style scoped>
.goods{
  
  display: flex;
  position: absolute;
  width: 100%;
  height: 480px;
  overflow: hidden;
  /* overflow:scroll */
  
}
.goods .goodsmenu{
   flex: 0 20 80px;
   width: 80px;
   background:#f3f5f7;
}
.goods .goodsinfo{
   flex: 1
}
.menuitem{
  display: table;
  height: 54px;
  width: 56px;
  line-height: 14px;
  
}
.text{
  display:table-cell;
  width: 56px;
  vertical-align: middle;
  font-size: 12px;
  /* padding: 0 12px */
  text-align: center
}
.ftitle{
  padding-left: 14px;
  height:26px;
  line-height: 26px;
  border-left: 2px solid #d9dde1;
  font-size: 12px;
  color:rgb(147,153,159);
  background:#f3f5f7;
}
.food_item{
  display: flex;
  margin: 18px;
}
.ficon{
   flex:0 0 57px;
   margin-right: 10px
}
.fcontent{
  flex: 1
}
.fname{
  margin: 2px 0 8px 0;
  height: 14px;
  line-height: 15px;
  font-size: 14px;
  color:rgb(7,17,27)
}
.fdescription{
  margin-top:0px;
  margin-bottom: 8px;
  line-height: 14px;
  font-size: 10px;
  color: rgb(147,153,159)
}
.extra{
  line-height: 10px
}
.count{ margin-bottom: 8px;
  line-height: 14px;
  font-size: 10px;
  color: rgb(147,153,159)}
.rating{ margin-bottom: 8px;
  line-height: 14px;
  font-size: 10px;
  color: rgb(147,153,159)}
.fprice{
  font-weight: 700;
  line-height: 24px;
  font-size: 14px;
  color: rgb(240,20,20)
}
</style>
