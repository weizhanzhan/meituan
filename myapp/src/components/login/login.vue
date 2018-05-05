<template>
  <div>
      <van-nav-bar   font-size:80px
  title="登录注册页"
  left-text=""
  left-arrow
  @click-left="onClickLeft"/>
  <van-tabs v-model="active">
  <van-tab v-for="(item,index) in 2" :key="index" :title="index==1?'注册':'登录'">
    <div v-show="index==0">
        <van-cell-group>
            <van-field
                v-model="username"
                label="用户名"
                icon="clear"
                placeholder="请输入用户名"
                required
                @click-icon="username = ''"
            />

            <van-field
                v-model="password"
                type="password"
                label="密码"
                placeholder="请输入密码"
                required
            />

            <div style="height:30px;width:100%"></div>
             <van-button size="large" type="danger" @click.prevent="loginBtn()">登录</van-button>
            </van-cell-group>
    </div>
    <div v-show="index==1">
        <van-cell-group>
            <van-field
                v-model="register.name"
                label="用户名"
                icon="clear"
                placeholder="请输入用户名"
                required
                @click-icon="register.name = ''"
            />

            <van-field
                v-model="register.pwd"
                type="password"
                label="密码"
                placeholder="请输入密码"
                required
            />
            <van-field
                v-model="register.cpwd"
                label="确认密码"
                icon="clear"
                placeholder="请输入确认密码"
                required
                @click-icon="register.cpwd = ''"
            />

            <van-field
                v-model="register.email"
                type="password"
                label="邮箱"
                placeholder="请输入邮箱"
                required
            />
            <div style="height:30px;width:100%"></div>
            <van-button size="large" type="danger" @click="registerBtn()">注册</van-button>
            </van-cell-group>
    </div>
  </van-tab>
</van-tabs>
  </div>
</template>

<script>
import { Toast } from 'vant';

export default {
    data() {
    return {
      active: 1,
      username:'',
      password:'',
      register:{
          name:'',
          pwd:'',
          cpwd:'',
          email:''
      }
    };
  },
 beforeRouteEnter (to, from, next) {
    next(vm=>vm.$store.commit("setTab",false))
  },
  beforeRouteLeave (to, from, next) {
    this.$store.commit("setTab",true)
    next()
  },
  methods:{
      onClickLeft(){
          this.$router.go(-1)
      },
      loginBtn(){
          console.log(123)
          Toast.success('成功文案');
      },
      registerBtn(){
          Toast.fail('失败文案');
      }
  }
}
</script>

<style>

</style>
