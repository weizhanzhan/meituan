<template>
  <div class="Allratings" ref="ratings">
    <div>
    <div class="overview">
       <div class="view-left">
          <h1 class="view-score">{{seller.score}}</h1>
          <div class="view-title">综合评分</div>
          <div class="view-rank">高于周边商家{{seller.rankRate}}%</div>
       </div>
       <div class="view-right">
         <div class="view-service">
           <span class="view-service-title">服务态度</span>
           <div class="view-service-img">
             <img v-for="(img,index) in parseInt(seller.serviceScore)" width="15" :key="index" :src="stars.star[2].src" />
             <img v-if="Math.ceil(seller.serviceScore)-parseInt(seller.serviceScore)" width="15" :src="stars.star[1].src" />
           </div>
           <span class="view-service-score">{{seller.serviceScore}}</span></div>  
         <div class="view-goods">
           <span class="view-goods-title">商品评分</span>
           <div class="view-goods-img">
             <img v-for="(img,index) in parseInt(seller.foodScore)" width="15" :key="index" :src="stars.star[2].src" />
             <img v-if="Math.ceil(seller.foodScore)-parseInt(seller.foodScore)" width="15" :src="stars.star[1].src" />
           </div>
           <span class="view-goods-score">{{seller.foodScore}}</span>
          </div>
         <div class="view-delivery">
           <span class="view-delivery-title">送达时间</span>
           <span class="view-delivery-time">{{seller.deliveryTime}}分钟</span>
           </div>
       </div>  
    </div>
    <div class="cross-line"></div>
    <ratings :rating="rating"></ratings>
  </div>
  </div>
</template>

<script>
import star from '../../../static/json/star.json'
import Ratings from '../goods/ratings/ratings'
import Bscroll from 'better-scroll'
export default {
   props:[
        'sellers'
    ],
    created(){
      console.log(this.seller)
        this.$nextTick(()=>{
            this.init()//创建better-scrool
         })
    },
    methods:{
      init(){
        this.menuwrapper=new Bscroll(this.$refs.ratings,{//定义菜单scroll
             click:true//scroll中会把原生click，prevent掉，我们要打开
           })
      }
    },
    computed:{
      seller(){
        return this.sellers.seller
      },
      stars(){
        console.log(star)
        return star
      },
      rating(){
        return this.sellers.ratings
      }
    },
    components:{
       Ratings
    }
    

}
</script>

<style scoped>
.Allratings{
  position:fixed;
  top:174px; 
 
  bottom:0;
  overflow: hidden;
  left: 0;
  width: 100%;
 
  
}
.overview{
  display: flex;
  padding: 18px 0;
}
.view-left{
  flex: 0 0 120px;
  width: 120px;
  text-align: center;
  border-right: 1px solid #ebebeb
}
.view-score{
  line-height: 24px;
  font-size: 24px;
  color:#f90;
  margin-bottom: 6px;
  font-weight: 700
}
.view-title{
  line-height: 12px;
  font-size: 12px;
  color: #07111b;
  margin-bottom: 8px
}
.view-rank{
  line-height: 10px;
  font-size: 10px;
  color: #93999f
}
.view-right{
  flex:1;
  margin: 0 0 0 5px
}
.view-service{
  margin-bottom: 8px;
  line-height: 18px;
  font-size: 0;
  
}
.view-service-img{
      position: relative;
      bottom: 4px;
      display: inline-block;
      margin: 0 12px 0 12px
}
.view-service-title{
     font-size: 12px;
    color: #07111b;
}
.view-service-score{

      font-size: 12px;
      color: #f90;
}
.view-goods{
   margin-bottom: 8px;
  line-height: 18px;
  font-size: 0
}
.view-goods-img{
  position: relative;
      bottom: 4px;
  display: inline-block;
      margin: 0 12px;
}
.view-goods-title{
   font-size: 12px;
    color: #07111b;
}
.view-goods-score{
   font-size: 12px;
      color: #f90;
}
.view-delivery{
  line-height: 18px;
  font-size: 0
}
.view-delivery-title{
   font-size: 12px;
    color: #07111b;
}
.view-delivery-time{
      font-size: 12px;
    margin: 0 12px;
    color: #93999f;
}
.cross-line{
    width: 100%;
    height: 16px;
    background-color: #ebebeb;
}
</style>
