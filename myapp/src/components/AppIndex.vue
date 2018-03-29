<template>
<div>
  <div style=" overflow:scroll">
    <div class="slider">
      <mt-swipe :auto="3000">
      <mt-swipe-item v-for="(item,index) in Img" :key="index">
          <img :src="item.src">
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
    <div style="background:#ebebeb;width:100%;height:16px"></div>
    <index-list></index-list>
  </div>

</div>
</template>

<script>
import IndexList from './indexList'
import imgurl from '../../static/json/img.json'
export default {
  
  name: 'AppIndex',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
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
  },
  computed:{
    Img(){
      console.log(imgurl)
       return imgurl.images
    }
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
