<template>
  <div class="detail" v-show="detailShow">
      <div class="imgheader"><img class="imgdetail" :src="selectFoodDetail.image"/></div>
      <div class="dcontent">
          <div class="dname">{{selectFoodDetail.name}}</div>
          <div class="ddetail">
              <span class="dcount">月售{{selectFoodDetail.sellCount}}</span>
              <span class="drating">好评率{{selectFoodDetail.rating}}%</span>
          </div>
          <div class="dprice">
              <span class="dsprice">￥{{selectFoodDetail.price}}</span>
          </div>
          <div class="dcontrol">
              <div>
                   <control v-if="selectFoodDetail.count>0" :food="food" ></control>
                   <div  v-if="!selectFoodDetail.count" class="dshopchart" @click="buy(selectFoodDetail)">放入购物车</div>
              </div>
          </div>
      </div>
      <div class="dhr"></div>
      <div class="ddesc">
          <h1 class="ddesc_title">商品介绍</h1>
          <div class="ddesc_content">{{selectFoodDetail.info}}</div>
      </div>
      <div class="dhr"></div>
      <div class="drat">
          <h1 class="drat_title">商品评价</h1>
          <div class="ratings_select">
              <div class="dtype">
                  <span class="block_positive" id="1" :class="{activeColor:isactive==ratAll.All.id}" @click="slect($event)">全部{{ratAll.All.num}}</span>
                  <span class="block_positive" id="2" :class="{activeColor:isactive==ratAll.likes.id}" @click="slect($event)">推荐{{ratAll.likes.num}}</span>
                  <span class="block_negative" id="3" :class="{activeColor:isactive==ratAll.dislikes.id}" @click="slect($event)">吐槽{{ratAll.dislikes.num}}</span>
              </div>
              <div class="switch" @click="switchs()"> 
                    <span ><van-icon class="switch_icon" name="checked" :style="[isSelect? {color:look}:'']" /></span><span>只看有内容的评价</span>
              </div>
          </div>
      </div>
      <div>{{selectFoodDetail.name}}</div><button @click="goback">返回</button>
      
  </div>
</template>

<script>
import Control from '../control/control'
import Vue from 'vue'
export default {
    props:{
        selectFoodDetail:{
            type:Object
        }
    },
    created(){
        this.food=this.selectFoodDetail
    },
    data(){
        return{
          food:'',
          isactive:'',
          look:"green",
          isSelect:false

        }
    },
    methods:{
        goback(){
            this.$store.commit('setDetail',false)
        },
        buy(val){
            console.log(val)
             Vue.set(val,'count',1)
             this.$store.commit("setOrder",val)
           
        },
        slect(val){
            this.isactive=val.target.id
        },
        switchs(){
            this.isSelect=!this.isSelect
        }
    },
    components:{
        Control
    }
    ,
    computed:{
        detailShow(){
            return this.$store.state.detailShow 
        },
        ratAll(){
            var ratings=this.selectFoodDetail.ratings,
            rates={
                likes:{num:0,id:2},
                dislikes:{num:0,id:3},
                All:{num:0,id:1},}
            ratings.forEach(rating => {
                if(rating.rateType==0)
                   rates.likes.num++
                else{
                   rates.dislikes.num++
                }
            });
            rates.All.num=ratings.length
            return rates
        },
    }

}
</script>

<style>
.detail{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    bottom: 46px;
    transform: translateZ(0);
    background: #fff ;
    z-index: 2;
    overflow:scroll;
}
.imgheader{
    position: relative;
    width: 100%;
    height:0;
    padding-top: 100%;
}
.imgdetail{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.dcontent{
    position: relative;
    padding: 18px;
}
.dname{
 line-height: 14px;
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 700;
    color: #07111b;
}
.ddetail{
        margin-bottom: 18px;
    line-height: 25px;
    height: 10px;
    font-size: 0;
}
.dcount{
    display: inline-block;
    font-size: 10px;
    color: #93999f;
}
.drating{
    display: inline-block;
    font-size: 10px;
    color: #93999f;
    margin-left: 12px;
}
.dprice{
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    
}
.dsprice{
    font-size: 14px;
    color: #f01414;
}
.dcontrol{
    position:absolute;
    right: 12px;
    bottom: 24px;
}
.dshopchart{
    position: absolute;
    text-align: center;
    right: 0rem;
    bottom: 0.2rem;
    width: 8rem;
    height: 24px;
    line-height: 24px;
    padding:0 12px;
    box-sizing: border-box;
    border-radius: 12px;
    font-size: 10px;
    background: #ffd161;
    z-index: 10;

}
.dhr{
     width: 100%;
    height: 16px;
    background-color: #ebebeb
}
.ddesc{
    padding: 18px
}
.ddesc_title{
    line-height: 14px;
    margin-bottom: 6px;
    font-size: 14px;
    color: #07111b
}
.ddesc_content{
    padding: 0 8px;
    font-size: 12px;
    font-weight: 200;
    line-height: 24px;
    color: #4d555d;
}
.drat{
    padding: 18px
}
.drat_title{
    line-height: 14px;
    margin-bottom: 6px;
    font-size: 14px;
    color: #07111b
}
.dtype{
    padding: 18px 0;
    position: relative;
}
.block_positive{
   background-color: rgba(0,160,220,.2);
   padding: 8px 12px;
   margin-right: 8px;
    border-radius: 2px;
   font-size: 12px;
   line-height: 16px;
    color: #4d555d;
}
.block_negative{
    background-color: rgba(77,85,93,.2);
    padding: 8px 12px;
    margin-right: 8px;
    border-radius: 2px;
    font-size: 12px;
    line-height: 16px;
    color: #4d555d;
}
.activeColor{
    background:#00a0dc;
        color: #fff
    }
.switch{
    padding: 12px 18px;
    line-height: 24px;
    color: #93999f;
    border-bottom: 1px solid rgba(7,17,27,.1);
}
.switch_icon{
    
}
</style>
