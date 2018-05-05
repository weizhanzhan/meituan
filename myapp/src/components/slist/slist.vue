<template>
<div>
 <div style="width:100%;height:30px;position:fixed;top:0;left:0;z-index:1">
  <van-nav-bar   font-size:80px
  title="商家列表"
  left-text=""
  left-arrow
  @click-left="onClickLeft"/>
 </div>
 <index-list></index-list>

</div> 
</template>
<script>

import IndexList from '../indexList'	
export default {
    data(){
        return{
            resList:[]
        }
    },
    created(){
     //  this.resList=restaurant.data.poilist
    },
   methods: {
    onClickLeft() {
      this.$router.back(-1)
    },
    onClickRight() {
      Toast('按钮');
    }
  },
  components:{
      IndexList
  },
  computed:{
        starurl(){
            return star
        },
        // RresLst(){
        //     return this.resList.sort(function() {
        //         return .5 - Math.random();
        //     });
        // }
    }
}
</script>

  <style>
 .van-nav-bar__title{
    font-size: 17px;
    color: #333;
    font-weight:bold;
    border-bottom: 1px solid rgba(7,17,27,.1);
 }
 .van-nav-bar .van-icon {
    color: #000;
    vertical-align: middle;
    font-weight:bold
}

  </style>

