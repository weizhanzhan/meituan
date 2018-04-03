<template>
<div id="AppFoot">
<!-- <div class="am-g">
 <div data-am-widget="navbar" class="am-navbar am-cf am-navbar-default "
     id="">
  <ul class="am-navbar-nav am-cf am-avg-sm-4">
    <li>
      <router-link to='./'><a href="">
        <span class="am-icon-phone"></span>
        <span class="am-navbar-label">主页</span>
      </a></router-link>
    </li>
    <li data-am-navbar-share>
      <a href="">
        <span class="am-icon-share-square-o"></span>
        <span class="am-navbar-label">发现</span>
      </a>
    </li>
    <li data-am-navbar-qrcode>
      <a href="">
        <span class="am-icon-qrcode"></span>
        <span class="am-navbar-label">订单</span>
      </a>
    </li>
    <li>
      <a href="https://github.com/allmobilize/amazeui">
        <span class="am-icon-github"></span>
        <span class="am-navbar-label">GitHub</span>
      </a>
    </li>
    <li>
      <router-link to="./login"><a href="">
        <span class="am-icon-location-arrow"></span>
        <span class="am-navbar-label">登录</span>
      </a></router-link>
    </li>
  </ul>
</div>
</div> -->
<van-tabbar v-model="active" v-show="isshow">
  <van-tabbar-item icon="shop" to="./">首页</van-tabbar-item>
  <van-tabbar-item icon="chat" to="./findidnex" dot>发现</van-tabbar-item>
  <van-tabbar-item icon="records" to="./orderindex" info="5">订单</van-tabbar-item>
  <van-tabbar-item icon="gold-coin" info="20" to="./login" >我的</van-tabbar-item>
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
