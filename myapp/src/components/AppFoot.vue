<template>
<div id="AppFoot">

<van-tabbar v-model="active" v-show="isshow">
  <van-tabbar-item icon="shop" to="./">首页</van-tabbar-item>
  <van-tabbar-item icon="chat" to="./findidnex" dot>发现</van-tabbar-item>
  <van-tabbar-item icon="records" to="./orderindex" info="5">订单</van-tabbar-item>
  <van-tabbar-item icon="gold-coin" info="20" to="./mine" >我的</van-tabbar-item>
</van-tabbar>
</div>
</template>

<script>
export default {
  name: 'AppFoot',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      active:0
    }
  },
  computed:{
    isshow(){
      return this.$store.state.tabshow
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
