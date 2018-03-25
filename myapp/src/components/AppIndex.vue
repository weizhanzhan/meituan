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
    <div>
    </div>
  </div>

</div>
</template>

<script>
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
       // {pic: require('../img/menuicon/meishi.webp')},
     //   {pic: require('../img/menuicon/chaoshi.webp')},
      //  {pic: require('../img/menuicon/shucai.webp')},
      //  {pic: require('../img/menuicon/tiandian.webp')},
      //  {pic: require('../img/menuicon/zhuansong.webp')},
       // {pic: require('../img/menuicon/zhengcan.webp')},
      //  {pic: require('../img/menuicon/kuaican.webp')},
       // {pic: require('../img/menuicon/hanbao.webp')},
      ]
    }
  },
  created(){
    // this.$http.get('/api/api/v1/poi/mget')
    // .then(data=>console.log(data))
    $.ajax({
      url:'https://github.com/bxm0927/vue-meituan/blob/master/mock/seller.json',
      type:'GET',
      dataType:'JSONP',
      success:function(res){
        console.log(res.data)
      }
    })
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
