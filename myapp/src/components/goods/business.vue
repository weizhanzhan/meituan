<template>
  <div class="Bussiness" ref="bussiness">
    <div class="bussiness-overview">
       <div class="overview-collect">
          <div class="collect-name">{{seller.name}}</div>
          <div class="collect-star">
             <img v-for="(s,index) in seller.deliveryPrice" :key="index+'a'" :src="stars.star[2].src"/><img v-for="(s,index) in 5-seller.deliveryPrice" :key="index" :src="stars.star[0].src"/>
             <span class="collect-ratingcount">{{seller.ratingCount}}</span>
          </div>
          <div class="collect-sellcount">月售{{seller.sellCount}}单</div>
          <div class="collect-icon" @click="sc()">
            <van-icon  name="like"  :style="[isSc?{color:'red'}:'']" />
            <div class="collect-icon-text">{{isSc?scText[0]:scText[1]}}</div>
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
    
    <div class="cross-line"></div>
    <div class="bussiness-notice">
       <h1 class="notice-title">公告与活动</h1>
       <div class="notice-text">{{seller.bulletin}}</div>
       <ul>
         <li class="notice-li" v-for="(support,index) in seller.supports" :key="index+'b'">
           <img :src="img[support.type].pic"/>
           <span class="notice-support">{{support.description}}</span>
         </li>
       </ul>
    </div>
    <div class="cross-line"></div>
    <div class="bussiness-photo">
      <h1 class="notice-title">商家实景</h1>
      <div class="notice-pic-wrapper"  ref="piclist">
      <ul class="title-pic" ref="picListRef">
        <li class="title-pic-list" >
             <img v-for="(pic,index) in seller.pics" :key="index+'pic'" :src="pic" >
        </li>
      </ul>
      </div>
    </div>

    <div class="cross-line"></div>
    <div class="bussiness-info">
      <h1 class="notice-title">商家信息</h1>
      <ul>
        <li class="info-item" v-for="(info,index) in seller.infos" :key="index+'info'">{{info}}</li>
      </ul>
    </div>
  </div>
  </div>
</template>

<script>
import star from '../../../static/json/star.json'
import Bscroll from 'better-scroll'
export default {
    data(){
      return{
        img:[
          {pic:require('./img/type0.png'),type:0},
          {pic:require('./img/type1.png'),type:1},
          {pic:require('./img/type2.png'),type:2},
          {pic:require('./img/type3.png'),type:3},
          {pic:require('./img/type4.png'),type:4}

        ],
        isSc:false,
        scText:['已收藏','未收藏']
      }
    },
    props:['sellers'],
    created(){
      console.log(this.seller)
      this.$nextTick(()=>{
        this.init()
        this.picinit()
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
       sc(){
         this.isSc=!this.isSc
       },
       init(){
        this.menuwrapper=new Bscroll(this.$refs.bussiness,{//定义菜单scroll
             click:true//scroll中会把原生click，prevent掉，我们要打开
           })
        },
        picinit(){
          // 初始化图片横向滚动
          // 手动设置横向宽度
          const picWidth = 120
          const margin = 6
          let width = (picWidth + margin) * this.seller.pics.length - margin
          this.$refs.picListRef.style.width = width + 'px'

            this.picScroll = new Bscroll(this.$refs.piclist, {
              click: true,
              scrollX: true,
              eventPassthrough: 'vertical'
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
.cross-line{
      width: 100%;
    height: 16px;
    background-color: #ebebeb;
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
.bussiness-notice{
  padding: 18px 18px 0;
}
.notice-title{
    font-size: 14px;
    color: #07111b;
    margin-bottom: 12px;
    line-height: 14px;
}
.notice-text{
  padding: 8px 0 0 12px;
  font-size: 12px;
    line-height: 24px;
    font-weight: 200;
    color: #f01414;
    padding-bottom: 16px;
    border-bottom: 1px solid rgba(7,17,27,.1);
}
.notice-li{
  padding: 16px 12px;
  border-bottom: 1px solid rgba(7,17,27,.1);
}
.notice-li img{
      display: inline-block;
    width: 18px;
    height: 18px;
    margin-right: 4px;
    background-size: 18px 18px;
    /* background-repeat: no-repeat; */
}
.notice-support{
  font-size: 12px;
    line-height: 16px;
    font-weight: 200;
    color: #07111b;
}
.bussiness-photo{
  padding: 18px
}
.notice-pic-wrapper{
      width: 100%;
    overflow: hidden;
    white-space: nowrap;
}
.title-pic-list{
    display: inline-block;
    margin-right: 6px;
    width: 120px;
    height: 90px;
}
.title-pic-list img{
  margin-right: 6px;
      width: 120px;
    height: 90px;
    border-radius: 3px;
}
.title-pic{
  width: 498px
}
.bussiness-info{
  padding: 18px 18px 0;
}
.info-item{
  font-size: 12px;
    line-height: 16px;
    font-weight: 200;
    color: #07111b;
    padding: 16px 12px;
    border-bottom: 1px solid rgba(7,17,27,.1);
}
</style>
