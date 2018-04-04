<template>
  <div class="header">
      <div class="content">
          <div class="cleft">
              <img width="64" height="64" :src="seller.avatar" />
          </div>
          <div class="cright">
              <div class="name">
                  <span><img width="30" height="18" :src="icon.brand2x.src" alt=""></span>
                  <span>{{seller.name}}</span>
              </div>
              <div class="description">{{seller.description}}/{{seller.deliveryTime}}分钟送达</div>
              <div class="support">
                  <span><img width="12" height="12" :src="icon.decrease12x.src" alt=""></span>
                  <span>{{seller.supports[0].description}}</span>
             </div>
          </div>
      </div>
      <div class="gonggao">
          <span class="brand">
              <img width="22" height="12" :src="icon.bulletin2x.src" />
          </span>
          <span class="text">{{seller.bulletin}}</span>
      </div>
      <div class="back" @click="$router.push('./')">
          <!-- <img width="35"  height="34" :src="back.pic" /> -->
             <img :src="backsvg.pic"  width="20" class="bimg"  height="20" />
      </div>
  </div>
</template>

<script>
import headicon from '../../../static/json/headicon'
export default {
   props:["seller"],
   data(){
       return{
           back:{pic: require('./img/back.png'),text:'返回'},
           backsvg:{pic: require('./img/backsvg.svg'),text:'返回svg'},
       }
   },
   created(){
   },
   computed:{
       icon(){
           return headicon
       }
   }
}
</script>

<style scoped>

.header{
    background: rosybrown;
    color: #fff;
}
.content{
    padding: 24px 12px 18px 24px;
    font-size:0;
    
}
.cleft{
    float: left;
    
}
.cright{
     display:inline-block;
     font-size: 17px;
     margin-left: 16px;
     text-align: left;
}
.name{
    font-size: 16px;
    font-weight: 700;
}
.description{
    font-size: 13px;
}
.support{
    font-size: 10px;
}
.gonggao{
    height: 28px;
    line-height: 28px;
    padding: 0 22px 0 12px;
}
.brand{
   float: left;
   margin-top: -4px
    
}
.text{
    margin-left:30px;
    font-size: 10px;
    display:block;                     /*内联对象需加*/
    /* width:35em; */
    white-space:nowrap;          /* 不换行 */
    overflow:hidden;               /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow:ellipsis;   /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
}
.back{
    position: fixed;
           top: 25px;
    right: 19px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: rgba(0,0,0,.2);
    z-index: 1;
}
.bimg{
    margin-left: 5px;
    margin-top: 3px
}
</style>
