<template>
<div>
 <div style="width:100%;height:30px;position:fixed;top:0;left:0;z-index:1">
  <van-nav-bar   font-size:80px
  title="商家列表"
  left-text=""
  left-arrow
  @click-left="onClickLeft"/>
 </div>
 <div style="margin-top:68px">
   <div v-for="(shopinfo,index) in RresLst" :key="index" class="indexdiv" >
          <span class="ileft" >
               <div class="imgall">
                    <div class="imgpic"><img :src="shopinfo.pic_url" style="width:70px;" alt="" id=""></div>
                    <div class="imgicon"><img :src="shopinfo.poi_type_icon" style="width:30px;float:left" alt="" id=""></div>
                  </div>
          </span>
          <span class="iright" >
               <div><label>{{shopinfo.name}}</label></div>
                       <div class="middleinfo">
                         <div class="middleimg">
                            <img v-for="(num,index) in parseInt(shopinfo.wm_poi_score)" :key="index" :src="starurl.star[2].src" style="height:10px;padding-left:2px"/>
                            <img v-for="(num,index) in Math.ceil(shopinfo.wm_poi_score)-parseInt(shopinfo.wm_poi_score)" :key="index+'w'" style="height:10px;" :src="starurl.star[1].src"/>
                         </div>
                         <span>月售{{shopinfo.month_sale_num}}</span>
                         <span class="middletime">{{shopinfo.mt_delivery_time}}|{{shopinfo.distance}}</span>
                       </div>
                     <div class="middlezs">
                         <span class="deliver">{{shopinfo.min_price_tip}}</span>|
                         <span class="deliver">{{shopinfo.shipping_fee_tip}}</span>|
                         {{shopinfo.average_price_tip}}
                         </div>
                     <div class="shopinfo" v-for="(count,index) in shopinfo.discounts2" :key="index">
                         <img :src="count.icon_url" style="width:16px">
                         {{count.info}}
                    </div>
          </span>
      </div>
 </div>
</div> 
</template>
<script>
import restaurant from '../../../static/restaurant-list.json'
import star from '../../../static/json/star.json'	
export default {
    data(){
        return{
            resList:[]
        }
    },
    created(){
       this.resList=restaurant.data.poilist
       console.log(restaurant.data.poilist)
    },
   methods: {
    onClickLeft() {
      this.$router.back(-1)
    },
    onClickRight() {
      Toast('按钮');
    }
  },
  computed:{
        starurl(){
            return star
        },
        RresLst(){
            return this.resList.sort(function() {
                return .5 - Math.random();
            });
        }
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
imgall{
        position: relative;
        text-align: center;
        width: 90px;
        height: 93px;
        overflow: hidden;
    }
    .imgpic{
        width: 100px;
        height: 100px;
    }
   .imgicon{
        position: absolute;
        top:0;
        left: 0;
        width:50px;
        height: 50px;
    }
    p[class="shopinfo"] {
    display: block;
    color: darkgrey;
    margin: 0;
    padding: 0
  
}
.indexdiv{
    height:160px;
    border-bottom:1px solid #CCCCCC
}
.ileft{
    width:20%;
    float:left;
    margin-top:5px
}
.iright{
    width:75%;
    float:right;
}
.title-bar{
    height:40px;
    line-height:40px;
    text-align:center
}
.title-bar span{
    display: inline-block;
    position: relative;
    font-weight: 700;
    color: #333;
}
.middleinfo{
   -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    font-size: 12px;
    color: #666;
    margin-top: 0px;
}
.middleimg{
    float:left;
    margin-top: -3px
}
.middlezs{
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    color: #666;
    font-size: 13px;
}
.shopinfo{
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    font-size: 13px;
    color: #b0b0b0;
}
.middletime{
    float: right;
    margin-right: 10px;
    position: relative;
    letter-spacing:2px
}
.deliver{
        margin-right: 10px;
    position: relative;
}
  </style>

