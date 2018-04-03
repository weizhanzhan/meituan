<template>
<div>
  <goodshead :seller="seller"></goodshead>
  <goods :goods="goods"></goods>
  
</div> 
</template>
<script>
import Seller from '../../static/seller.json'
import Goodshead from './goodshead/goodshead'
import Goods from './goods/goods'
export default {
  data(){
    return{
      allData:[]
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
    console.log(Seller)
  },
  components:{
    Goodshead,Goods
  },
  computed:{
    seller(){
      return Seller.seller
    },
    goods(){
      return Seller.goods
    }
  }
  
}
</script>

  <style>
 
  </style>

