<template>
<div>
<div class="am-g">
  <div class="am-u-lg-6 am-u-md-8 am-u-sm-centered">
    <h3>登录</h3>
    <hr>
    <div class="am-btn-group">
      <a href="#" class="am-btn am-btn-secondary am-btn-sm"><i class="am-icon-github am-icon-sm"></i> Github</a>
      <a href="#" class="am-btn am-btn-success am-btn-sm"><i class="am-icon-google-plus-square am-icon-sm"></i> Google+</a>
      <a href="#" class="am-btn am-btn-primary am-btn-sm"><i class="am-icon-stack-overflow am-icon-sm"></i> stackOverflow</a>
    </div>
    <br>
    <br>

    <form method="post" class="am-form">
      <label for="email">邮箱:</label>
      <input type="email" name="" id="email" value="">
      <br>
      <label for="password">密码:</label>
      <input type="password" name="" id="password" value="">
      <br>
      <label for="remember-me">
        <input id="remember-me" type="checkbox">
        记住密码
      </label>
      <br />
      <div class="am-cf">
        <input type="submit" name="" value="登 录" class="am-btn am-btn-primary am-btn-sm am-fl">
        <input type="submit" name="" value="忘记密码 ^_^? " class="am-btn am-btn-default am-btn-sm am-fr">
      </div>
    </form>
    <hr>
    <p>© 2014 AllMobilize, Inc. Licensed under MIT license.</p>
  </div>
</div>
<div data-am-widget="navbar" class="am-navbar am-cf am-navbar-default "
      id="">
      <ul class="am-navbar-nav am-cf am-avg-sm-4">
          <li >
            <a href="tel:123456789" class="">
                  <span class="am-icon-phone"></span>
                <span class="am-navbar-label">呼叫</span>
            </a>
          </li>
          <li data-am-navbar-share>
            <a href="###" class="">
                  <span class="am-icon-share-square-o"></span>
                <span class="am-navbar-label">分享</span>
            </a>
          </li>
          <li data-am-navbar-qrcode>
            <a href="###" class="">
                  <span class="am-icon-qrcode"></span>
                <span class="am-navbar-label">二维码</span>
            </a>
          </li>
          <li >
            <a href="https://github.com/allmobilize/amazeui" class="">
                  <span class="am-icon-github"></span>
                <span class="am-navbar-label">GitHub</span>
            </a>
          </li>
          <li >
            <a href="http://amazeui.org/getting-started" class="">
                  <span class="am-icon-download"></span>
                <span class="am-navbar-label">下载使用</span>
            </a>
          </li>
          <li >
            <a href="https://github.com/allmobilize/amazeui/issues" class="">
                  <span class="am-icon-location-arrow"></span>
                <span class="am-navbar-label">Bug 反馈</span>
            </a>
          </li>
      </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
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
