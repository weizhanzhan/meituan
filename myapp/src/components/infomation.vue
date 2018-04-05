<template>
<div>
  <goodshead :seller="seller"></goodshead>
  <!-- <goods :goods="goods"></goods> -->
   <van-tabs :active="active" @click="onClick" swipeable>
        <van-tab v-for="index in menu" :title="index"  :key="index">        
       </van-tab>
    </van-tabs>
    <router-view></router-view>
  
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
       active: 0
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
    }
  },
  methods:{
    onClick(index,title) {
           this.$router.push({name:title})
     }
  }
  
}
</script>

  <style>
 
  </style>

