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
  </div>
</template>

<script>
import headicon from '../../../static/json/headicon'
export default {
   props:["seller"],
   created(){
       console.log(this.seller)
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
</style>
