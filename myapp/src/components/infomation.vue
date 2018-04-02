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

