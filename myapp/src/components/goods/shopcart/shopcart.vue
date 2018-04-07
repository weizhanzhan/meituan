<template>
  <div class="shopchart">
    <div class="scontent">
       <div class="chartleft">
           <div class="logowrapper"  @click="num--">
             <div :class="{'isshop':num>0,'slogo':num<1}">
                <img width="24" class="simgs" height="24" :src="shopicon.pic" />
                <div class="totalCount">
                   <span class="counttext">{{num}}</span>
                 </div>
             </div>
           </div>
           <div class="cprice"></div>
           <div class="des"> </div>
       </div>
       <div class="chartright" @click="num++">
          <div class="pay">{{price}}起送</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            shopsvg:{pic: require('./img/shopping_cart.svg'),text:'shopsvg'},
            shopicon:{pic: require('./img/cart.png'),text:'shopicon'},
            num:0,
            price:10
            
        }
    },
    methods:{
    },
    computed:{
       
    },
    updated(){
    }

}
</script>

<style>

.shopchart{
    left: 0;
    bottom: 0;
    position: fixed;
    width: 100%;
    height:46px;
    /* background: #141d27; */
    z-index: 50;
    bottom: 0;
    font-size: 14px;
    color: hsla(0,0%,100%,.4);

}
.scontent{
  display: flex;
  background-color: #141d27;
}
.chartleft{
  flex: 1
}
.chartright{
    flex: 0 0 105px;
    width: 105px;
    text-align: center;
    background:#2b333b
}
.pay{
    height: 48px;
    line-height: 48px;
    font-size: 12px;
    font-weight: 700;
}
.logowrapper{
    display:inline-block;
    position: relative;
    margin: 0 12px;
    top:-10px;
    height:56px;
    width:56px;
    padding: 6px;
    border-radius: 50%;
    box-sizing: border-box;
    vertical-align: top;
    background: #141d27;
    text-align: center
}
.slogo{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    text-align: center;
    background: #2b343c
}
.isshop{
    background: #1296db;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    text-align: center;
}
.simgs{
    color: #2b343c;
    margin-top:10px
}
.cprice{}
.des{}
.totalCount{
    position: absolute;
    right: 0;
    top:0;
    background: red;
    bottom: 30px;
    margin-left:30px;
    height: 16px;
    width: 24px;
    border-radius: 12px 12px;
    line-height: 16px;
    font-size: 9px;
    font-weight: 700;
    color: #fff;   
}
.counttext{
    /* position: fixed;
    margin-bottom: 20px */
}
</style>
