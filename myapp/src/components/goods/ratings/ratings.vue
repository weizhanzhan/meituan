<template>
  <div class="crating">
       <div class="rating-select">
           <div class="rating-select-type">
               <span class="rating-block-positive" @click="selcttype(1)" :class="{ratingactive:selectId==ratingNum.all.id}">全部{{ratingNum.all.num}}</span>
               <span class="rating-block-positive" @click="selcttype(2)" :class="{ratingactive:selectId==ratingNum.like.id}">好评{{ratingNum.like.num}}</span>
               <span class="rating-block-negative" @click="selcttype(3)" :class="{ratingnagetive:selectId==ratingNum.dislike.id}">差评{{ratingNum.dislike.num}}</span>
           </div>
           <div class="rating-select-switch" @click="switchs()">
               <span class="rateiconspan" ><van-icon class="switch_icon"  name="checked" :style="[switchvalue?{color:lookcolor}:'']"  /></span>
               <span class="rating-select-text">只看有内容评价</span>
           </div>
       </div>
       <div class="rating-menu">
           <ul>
               <li v-for="(rate,index) in selectTypeRating" v-if="switchvalue?rate.text!='':rate.text!=undefined" class="rating-items" :key="'b'+index">
                   <div class="rating-items-avatar">
                       <img class="rating-items-avatarimg" :src="rate.avatar">
                   </div>
                   <div class="rating-items-content">
                       <h1 class="rating-items-content-name">{{rate.username}}</h1>
                       <div class="rating-items-content-star">
                           <img width="10" v-for="(img,index) in rate.score"  :key="'c'+index"  :src="stars.star[2].src" /><img v-for="(img,index) in 5-rate.score" width="10" :key="'d'+index" :src="stars.star[0].src" />
                       </div>
                       <p class="rating-items-content-text" v-if="rate.text"> {{rate.text}}</p>
                       <div class="rating-items-recommend">
                           <img v-if="rate.rateType==0"  :src="up.pic" class="recommend-iconclass"/>
                           <span class="recommend-item" v-for="(rec,index) in rate.recommend" :key="index">{{rec}}</span>
                       </div>
                       <div class="recommend-time">{{filterTime(rate.rateTime)}}</div>
                       
                   </div>
               </li>
           </ul>
       </div>

  </div>
</template>

<script>
import star from '../../../../static/json/star.json'
export default {
    props:["rating"],
    data(){
        return{
            selectId:'',
            switchvalue:false,
            lookcolor:'green',
            isType:'',
            up:{pic: require('./img/up.png'),text:'up'},
        }
    },
    created(){
    },
    methods:{
        selcttype(val){
             this.selectId=val
             if(this.selectId==1)
                 this.isType=''
             else if(this.selectId==2)
                 this.isType=0
             else
                 this.isType=1
        },
        switchs(){
            this.switchvalue=!this.switchvalue
        },
        filterTime(val){
            var unixTimestamp = new Date(val) 
            var commonTime = unixTimestamp.toLocaleString()
            return commonTime
        }
    },
    computed:{
        ratingNum(){
            var rnum={
                all:{num:0,id:1},
                like:{num:0,id:2},
                dislike:{num:0,id:3}}
            this.rating.forEach(rate => {
                if(rate.rateType==0)
                   rnum.like.num++
                else
                   rnum.dislike.num++
            });
            rnum.all.num=this.rating.length
            return rnum

        },
        selectTypeRating(){
            
             return this.rating.filter(rate=>{
                 var b=JSON.stringify(rate.rateType)
                 return b.match(this.isType)
            })
        },
        stars(){
          return star
        },
    }
}
</script>

<style>
.rating-select-type{
    padding: 18px 0;
    margin:0 8px;
    font-size: 0;
    position: relative;
    border-bottom: 1px solid rgba(7,17,27,.1);
}
.rating-block-positive{
      display: inline-block;
      padding: 8px 16px;
      margin-left: 8px;
      border-radius: 2px;
      font-size: 12px;
      line-height: 16px;
      color:#4d555d;
      background-color: rgba(0,160,220,.2)
}
.rating-block-negative{
     display: inline-block;
      padding: 8px 16px;
      margin-left: 8px;
      border-radius: 2px;
      font-size: 12px;
      line-height: 16px;
      color:#4d555d;
      background-color: rgba(77,85,93,.2);
}
.ratingactive{
    background-color: #00a0dc;
    color: #fff;
}
.ratingnagetive{
    background-color: #4d555d;
    color: #fff;
}
.rating-select-switch{
    padding: 12px 16px;
    line-height: 24px;
    color: #93999f;
    border-bottom: 1px solid rgba(7,17,27,.1);
}
.rating-select-text{}
.rating-menu{
    padding: 0 18px
}
.rating-items{
    display: flex;
    padding: 18px 0;
    border-bottom: 1px solid rgba(7,17,27,.1);
}
.rating-items-avatar{
    flex:0 0 28px;
    width: 28px;
    margin-right: 12px;
}
.rating-items-avatarimg{
    width: 28px;
    height: 28px;
    border-radius: 50%
}
.rating-items-content{
    position: relative;
    flex: 1;
}
.rating-items-content-name{
    font-size: 10px;
    line-height: 12px;
    color:#07111b;
    margin-bottom: 4px;
}
.rating-items-content-star{
    margin-top: -1rem;
}
.rating-items-content-text{
    line-height: 18px;
    font-size: 14px;
    color: #07111b;
    margin-top: 0px;
    margin-bottom: 8px;
}
.recommend-iconclass{
    width: 9px;
    display: inline-block;
    margin: 0 8px 4px 0;
}
.recommend-item{
    margin-right: 5px;
    padding: 0 6px;
    font-size: 10px;
    border: 1px solid rgba(7,17,27,.1);
    border-radius: 5px;
    color: #93999f;
    background-color: #fff;
}
.recommend-time{
    position: absolute;
    top:0;
    right: 0;
    line-height: 12px;
    font-size: 10px;
    color: #93999f;
}
</style>
