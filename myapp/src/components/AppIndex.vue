<template>
<div>
  <div>
    <div class="slider">
      <mt-swipe :auto="3000">
      <mt-swipe-item v-for="item in swipeData" :key="item.pic">
          <img :src="item.pic">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <table width="100%" style="margin-top:2%">
      <tr>
        <td  v-for="(img,index) in menuData.slice(0,4)"  height="100px"  align="center"  :key="index">
          <div><img style="width:50px" :src="img.pic"/></div>
          <div>{{img.text}}</div>
        </td>
      </tr>
      <tr>
        <td  v-for="(img,index) in menuData.slice(4,8)"  height="20%"   align="center" :key="index">
          <div><img style="width:50px" :src="img.pic"/></div>
          <div>{{img.text}}</div>
        </td>
      </tr>
    </table>
    <index-list></index-list>
  </div>

</div>
</template>

<script>
import IndexList from './indexList'
export default {
  
  name: 'AppIndex',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      swipeData:[
        {pic: require('../img/1.jpg')},
        {pic: require('../img/2.jpg')},
        {pic: require('../img/3.jpg')}
      ],
      menuData:[
        {pic: require('../img/menuicon/meishi.jpg'),text:'美食'},
        {pic: require('../img/menuicon/chaoshi.jpg'),text:'美团超市'},
        {pic: require('../img/menuicon/shucai.jpg'),text:'生鲜蔬菜'},
        {pic: require('../img/menuicon/tiandian.jpg'),text:'甜点饮品'},
        {pic: require('../img/menuicon/zhuansong.jpg'),text:'美团专送'},
        {pic: require('../img/menuicon/zhengcan.jpg'),text:'正餐优选'},
        {pic: require('../img/menuicon/kuaican.jpg'),text:'快餐小吃'},
        {pic: require('../img/menuicon/hanbao.jpg'),text:'汉堡披萨'},
      ]
    }
  },
  created(){
   
  },
  components:{
    IndexList
  }
}
</script>

<style scoped>
.slider {
  height: 170px;
  font-size: 30px;
  text-align: center;
  overflow: hidden;
}
.slider img {
  width: 100%;
}
</style>
