<template>
  <div class="Bussiness" ref="bussiness">
    <div class="bussiness-overview">
       <div class="overview-collect">
          <div class="collect-name">{{seller.name}}</div>
          <div class="collect-star">
             <img v-for="(s,index) in seller.deliveryPrice" :key="index" :src="stars.star[2].src"/><img v-for="(s,index) in 5-seller.deliveryPrice" :key="index" :src="stars.star[0].src"/>
             <span class="collect-ratingcount">{{seller.ratingCount}}</span>
          </div>
          <div class="collect-sellcount">月售{{seller.sellCount}}单</div>
          <div class="collect-icon">
            <van-icon name="like" />
            <div class="collect-icon-text">未收藏</div>
          </div>
       </div>
       <div class="overview-param">
          <div class="param-left">
            <span class="param-text">起送价</span>
            <span class="param-price">
              <span class="price-num">{{seller.minPrice}}</span>元
            </span>
          </div>
          <div class="param-mid">
            <span class="param-text">商家配送</span>
            <span class="param-price">
              <span class="price-num">{{seller.deliveryPrice}}</span>元
            </span>
          </div>
          <div class="param-right">
            <span class="param-text">平均配送时间</span>
            <span class="param-price">
              <span class="price-num">{{seller.deliveryTime}}</span>分钟
            </span>
          </div>
       </div>
    </div>
    <div class="bussiness-notice"></div>
    <div class="bussiness-photo"></div>
    <div class="bussiness-info"></div>
  </div>
</template>

<script>
import star from '../../../static/json/star.json'
import Bscroll from 'better-scroll'
export default {
    data(){
      return{
        
      }
    },
    props:['sellers'],
    created(){
      console.log(this.seller)
      this.$nextTick(()=>{
        this.init()
      })
    },
    computed:{
      seller(){
        return this.sellers.seller
      },
      stars(){
        return star
      }
    },
    methods:{
       init(){
        this.menuwrapper=new Bscroll(this.$refs.bussiness,{//定义菜单scroll
             click:true//scroll中会把原生click，prevent掉，我们要打开
           })
        }
    }

}
</script>

<style scoped>
.Bussiness{
  position:fixed;
  top:174px; 
  bottom:0;
  overflow: hidden;
  left: 0;
  width: 100%;
}
.bussiness-overview{
  position: relative;
  padding: 18px;
}
.overview-collect{
  border-bottom: 1px solid rgba(7,17,27,.1);
    padding-bottom: 18px;
}
.collect-name{
  font-size: 16px;
  color:#07111b;
  line-height: 14px;
  margin-bottom: 15px
}
.collect-star{
  display: inline-block;
  margin-right: 12px
}
.collect-ratingcount{
    display: inline-block;
    font-size: 14px;
    color: #07111b;
    line-height: 14px;
}
.collect-sellcount{
  display: inline-block;
  font-size: 14px;
  color: #07111b;
  line-height: 14px;
}
.collect-icon{
  display: inline-block;
  position: absolute;
    top: 18px;
    right: 18px;
    text-align: center;
}
.collect-icon-text{
      font-size: 10px;
    line-height: 10px;
    color: #4d555d;
}
.overview-param{
  padding-top:18px;
  display: flex;
}
.param-left{
  display: inline-block;
  flex: 1;
  text-align: center;
  border-right: 1px solid rgba(7,17,27,.1);
}
.param-text{
  display: block;
     margin-top: 18px;
    margin-bottom: 4px;
    color: #93999f;
    font-size: 10px;
    line-height: 10px;
}
.param-price{
         font-size: 10px;
    color:black;
    font-weight: 200;
    line-height: 24px;
    margin-bottom: 18px;
}
.price-num{
     font-size: 24px;
}
.param-mid{
  display: inline-block;
  flex: 1;
  text-align: center;
  border-right: 1px solid rgba(7,17,27,.1);
}
.param-right{
  display: inline-block;
  flex: 1;
  text-align: center;
}
</style>
