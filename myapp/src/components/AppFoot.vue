<template>
<div id="AppFoot">
<div class="am-g">
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
      <a href="###">
        <span class="am-icon-share-square-o"></span>
        <span class="am-navbar-label">分享</span>
      </a>
    </li>
    <li data-am-navbar-qrcode>
      <a href="###">
        <span class="am-icon-qrcode"></span>
        <span class="am-navbar-label">二维码</span>
      </a>
    </li>
    <li>
      <a href="https://github.com/allmobilize/amazeui">
        <span class="am-icon-github"></span>
        <span class="am-navbar-label">GitHub</span>
      </a>
    </li>
    <li>
      <a href="http://amazeui.org/getting-started">
        <span class="am-icon-download"></span>
        <span class="am-navbar-label">下载使用</span>
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
</div>

</div>
</template>

<script>
export default {
  name: 'AppFoot',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
