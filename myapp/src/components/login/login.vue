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
                type="password"
                placeholder="请输入确认密码"
                required
                @click-icon="register.cpwd = ''"
            />

            <van-field
                v-model="register.email"
                type="email"
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
import qs from 'qs';
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
    console.log(from.path,to.path)
    if(to.path=='/orderindex')
       this.$router.push('/')
    else
       next()
  },
  methods:{
      onClickLeft(){
          this.$router.go(-1)
      },
      isEmail(val){
          var reyx= /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
          return reyx.test(val)
      },
      loginBtn(){
  
          var obj={username:this.username,password:this.password,}
          this.$http.post('http://**********/api/meituan/login',qs.stringify(obj),{
            header:{
                'Content-Type': 'application/json;charset=utf-8'
            }
        }
        )
        .then(res=>{
            if(res.data.state==1){
               Toast.success(res.data.msg);
               this.$store.commit('Login',{
                   islogin:true,
                   info:obj,
                   token:res.data.token
               })
               this.$router.push('./mine')
            }
            else
               Toast.fail(res.data.msg);
        })
         
      },
      registerBtn(){
          console.log(this.register)
        //   var date=Date.parse(new Date())
           var obj={
               username:this.register.name,
               password:this.register.pwd,
               cpassword:this.register.cpwd,
               email:this.register.email
               }
               console.log(this.isEmail(obj.email))
            if(this.isEmail(obj.email)) {
                this.$http.post('http://*********/api/meituan/register',
                        qs.stringify(obj),{
                        header:{
                            'Content-Type': 'application/json;charset=utf-8'
                        }
                     }
                    )
                    .then(res=>{
                        if(res.data.state==1){
                            Toast.success(res.data.msg);
                            this.$router.push('./login')
                        }
                        else
                            Toast.fail(res.data.msg);
                    })
            }
            else
               Toast.fail('邮箱格式不正确');
      }
  }
}
</script>

<style>

</style>
