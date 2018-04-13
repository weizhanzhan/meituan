<template>
   <div class="popup" v-if="show">
    <van-popup v-model="show" position="bottom" class="pop" :overlay="false">
      <div class="popshop">
         <h1 class="poptitle"> 购物车</h1>
         <span class="popempty">清空</span>
     </div>
      <div class="popcontent" ref="popfood">
         <ul>
            <li  class="popli" v-for="(food,index) in popShopList"  :key="index">
             <div class="popfoodname"> {{food.name}}</div>
             <div class="popcontrol"><control :food="food"></control></div> 
            </li>
         </ul>
     </div>  
    </van-popup>
    <div style="display: block" id="cover"></div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import Control from '../control/control'
export default {
    data(){
        return{
            show:false
        }
    },
    watch:{
        popshow(val){
          this.show=val 
        }
    },
    components:{Control},
    computed:{
        // show(){
        //     return this.$store.state.popupShow
        // }
        popshow(){
             
             return this.$store.state.popupShow
        },
        popShopList(){
            return this.$store.state.selectFoods
        }
    }
}
</script>

<style>

.popup{
      left: 0;
    bottom: 56px;
    position: fixed;
    width: 100%;
    height:46px;
    /* background: #141d27; */
    
    z-index: 0;
}
.pop{
    bottom:46px;
    max-height: 217px;
    position: fixed;
    overflow: hidden;
}
.popshop{
    height: 40px;
    line-height: 40px;
    background-color: #f3f5f7;
    padding: 0 18px;
    border-bottom: 1px solid rgba(7,17,27,.1);
}
.poptitle{
    float: left;
    font-size: 14px;
    color: #07111b;
}
.popempty{
    float: right;
    font-size: 12px;
    color: #00a0dc
}
.popcontent{
    position:relative;
    overflow:scroll;
    max-height:177px;
    bottom:46px;
    top:0px;
      
}
.popli{
    display: flex;
}
.popfoodname{
     flex:0 0 80px;
     display: inline;
} 
.popcontrol{
    flex: 1;
    text-align:right;
    margin-right: 20px;
    display: inline;
}
</style>
