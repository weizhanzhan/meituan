<template>
<div>
  <div class="goods">
     <div class="goodsmenu" ref="goods">
       <ul>
        <li class="menuitem menuhook" v-for="(goodname,index) in goods" :key="index"
         :class="{'current':currentIndex===index}" @click="selectMenu(index,$event)"
        >
          <span class="ftext">
            {{goodname.name}}
          </span>
        </li>
      </ul> 
    </div>
    <div class="goodsinfo" ref="info">
    <ul>
        <li class="foodlist listhook" v-for="(item,index) in goods" :key="index">
          <div class="ftitle">{{item.name}}</div>
          <ul>
            <li class="food_item" v-for="(food,index) in item.foods" :key="index">
                <div class="ficon">
                  <img width="57" height="57" :src="food.icon" />
                </div>
                <div class="fcontent">
                   <h2 class="fname">{{food.name}}</h2>
                   <p v-if="food.description" class="fdescription">{{food.description}}</p>
                   <div class="extra">
                      <span class="count">月售{{food.sellCount}}</span>
                      <span class="rating">好评率{{food.rating}}%</span>
                    </div>
                    <div class="fprice">
                      <span>￥{{food.price}}</span>
                    </div>
                    <div class="fcontrol">
                       <control :food="food"></control>
                    </div>
                </div>              
            </li>
          </ul>
        </li>
      </ul>
    </div>  
  </div>
  <popup></popup>
   <shopchart :ishop="ishop" :deliveryPrice="deliveryPrice"></shopchart>
</div>
</template>

<script>
import Shopchart from './shopcart/shopcart'
import Bscroll from 'better-scroll'
import Seller from '../../../static/seller.json'
import Control from './control/control'
import Popup from './popup/popup'
export default {
  props:[
        'deliveryPrice'
    ],
       data(){
         return{
           listHeight:[],//包括每一个区间的长度
           scrollY:0,
           ishop:false,
           countTotal:0
         }
       },
       created(){
         this.$nextTick(()=>{
            this.init()//创建better-scrool
            this.calculateHeight()//获取所有dom高度
         })
         
       },
       computed:{
         goods(){
           return Seller.goods
         },
         currentIndex(){//求现在位置的索引
           for(let i=0;i<this.listHeight.length;i++){
             let height1=this.listHeight[i]//一个区间的开始
             let height2=this.listHeight[i+1]//一个区间的结束
             if(!height2||(this.scrollY>=height1&&this.scrollY<height2))//如果当前所在高度（scrollY），在区间的开始与结束之间，那么他就在这个索引的区间里面
             {
               return i
             }
           }
           return 0;//如果不在任何区间的话 返回0
         }
       },
       watch:{
       },
       methods:{
        
         selectMenu(index,event){
           if(event._constructed)//scroll中会把原生click，prevent掉
           {
             let foodList =this.$refs.info.getElementsByClassName('listhook')//获取全部的dom
             let el=foodList[index]//定义当前的dom
             this.infowrapper.scrollToElement(el,300)//scroll 跳到当前区间
           }
           else{//手机端
             let foodList =this.$refs.info.getElementsByClassName('listhook')
             let el=foodList[index]
             this.infowrapper.scrollToElement(el,300)
           }
          

         },
         init(){
           this.menuwrapper=new Bscroll(this.$refs.goods,{//定义菜单scroll
             click:true//scroll中会把原生click，prevent掉，我们要打开
           })
           this.infowrapper=new Bscroll(this.$refs.info,{//定义的食品scroll
             probeType:3,//滚动的时候事实告诉我们的位置
             click:true
           })  
           this.infowrapper.on('scroll',pos=>{//滚动的时候可以获取滚动的scrolly  就是当前在那个地方的y 高度
             this.scrollY=Math.abs(Math.round(pos.y))
           })
         },
         calculateHeight(){
            let foodList =this.$refs.info.getElementsByClassName('listhook')//通过父元素获取所有的listhook子元素的class的li，也就是每一组数据
            let height=0;//定义当前位置为0
            this.listHeight.push(height)//先把第一个的位置放进去
            for(let i=0;i<foodList.length;i++)//获取每一个区间的高度
            {
              let item=foodList[i]
              height+=item.clientHeight//第i个区间的长度
              this.listHeight.push(height)//获取每一个区间的高度并加入到总的高度里面
            }
         },
       },
       components:{
         Shopchart,Control,Popup
       }
}
</script>

<style scoped>
.goods{
  display: flex;
  position: fixed;
  top:177px;
  bottom: 46px;
  width: 100%;  
  /* height:65vh;100vh铺满屏幕 */ 
  overflow: hidden; 
  
}
.goodsmenu{
   flex: 0 20 80px;
   width: 80px;
   /* background:#f3f5f7; */
}
.goodsinfo{
   flex: 1;
}
.menuitem{
  display: table;
  height: 54px;
  width: 100%;
  line-height: 14px;
  border-bottom: 1px solid rgb(235, 235, 235);
  
}
.ftext{
  display:table-cell;
  width: 56px;
  vertical-align: middle;
  font-size: 12px;
  /* padding: 0 12px */
  text-align: center
}
.ftitle{
  padding-left: 14px;
  height:26px;
  line-height: 26px;
  border-left: 2px solid #d9dde1;
  font-size: 12px;
  color:rgb(147,153,159);
  background:#f3f5f7;
}
.food_item{
  display: flex;
  margin: 18px;
  border-bottom: 1px solid rgb(235, 235, 235);
  /* height: 90px; */
  padding-bottom: 18px;
  position: relative
}
.ficon{
   flex:0 0 57px;
   margin-right: 10px
}
.fcontent{
  flex: 1
}
.fname{
  margin: 2px 0 8px 0;
  height: 14px;
  line-height: 15px;
  font-size: 14px;
  color:rgb(7,17,27)
}
.fdescription{
  margin-top:0px;
  margin-bottom: 8px;
  line-height: 14px;
  font-size: 10px;
  color: rgb(147,153,159)
}
.extra{
  line-height: 10px
}
.count{ margin-bottom: 8px;
  line-height: 14px;
  font-size: 10px;
  color: rgb(147,153,159)}
.rating{ margin-bottom: 8px;
  line-height: 14px;
  font-size: 10px;
  color: rgb(147,153,159)}
.fprice{
  font-weight: 700;
  line-height: 24px;
  font-size: 14px;
  color: rgb(240,20,20)
}
.fcontrol{
  position:absolute;
  right: 0;
  bottom: 18px
}
.current{
  position: relative;
  z-index: 10;
  background: #fff;
  font-weight: 700
}

</style>
