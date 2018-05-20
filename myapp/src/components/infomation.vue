<template>
<div>
  <goodshead :seller="seller"></goodshead>
  <div class="tap">
      <div class="tabTitle" :class="{tabitem:index==selectTab}" v-for="index in menu"  @click="onClick(index)" :key="index">{{index}}</div>
    </div>
    <transition name="food">
      <router-view :deliveryPrice="seller.deliveryPrice" :minPrice="seller.minPrice" :sellers="sellers"></router-view>
    </transition>
</div> 
</template>
<script>
import Seller from '../../static/seller.json'
import Goodshead from './goodshead/goodshead'
export default {
  data(){
    return{
      allData:[],
      menu:['点菜','评价','商家'],
      active: 0,
      selectTab:''
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm=>vm.$store.commit("setTab",false))
  },
  beforeRouteLeave (to, from, next) {
    this.$store.commit("setTab",true)
    next()
  },
  created(){
     this.onClick('点菜')
  },
  components:{
    Goodshead,
  },
  computed:{
    seller(){
     
      return Seller.seller
    },
    goods(){
      return Seller.goods
    },
    sellers(){
      return Seller
    }
  },
  methods:{
    onClick(index,title) {
       this.selectTab=index
       this.$router.push({name:index})
     }
  }
  
}
</script>

  <style>
  .tap{
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    position: relative;
  }
 .tabTitle{
   display: inline;
   flex:1
 }
 .tabitem{
   color: red
 }
 .food-enter-active, .food-leave-active{
  transition: opacity 0.5s;
}
.food-enter, .food-leave-to{
  opacity: 0;
}
  </style>

