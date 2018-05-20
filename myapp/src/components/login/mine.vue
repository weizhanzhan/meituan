<template>
<div class="mine">
  <div class="mine-top">
    <div class="top-info">
      <div class="avatar-wrapper">
        <img :src="tx.pic" />
      </div>
      <div class="name-wrapper" @click="user.isLogin?$router.push('./info'):$router.push('./login')">
        <span class="mine-name" v-if="!user.isLogin">登录</span>
        <span class="mine-name" v-if="user.isLogin">{{user.info.username}}</span>
        <span class="mine-desc">个人信息></span>
      </div>
    </div>
    <div class="top-operation">
        <i class="iconfont icon-huanfu"></i>
        <i class="iconfont icon-youjian"></i>
        <i class="iconfont icon-shezhi"></i>
     
    </div>
   
  </div>
  <div class="cross-line"></div>
  <div class="mine-important">
    <div class="cross-item">
      <span class="item-icon"><i class="iconfont icon-shoucang1"></i></span>
      <span class="item-name">我的收藏</span>
    </div>
    <div class="cross-item">
      <span class="item-icon"><i class="iconfont icon-zuji"></i></span>
      <span class="item-name">我的足迹</span>
    </div>
    <div class="cross-item">
      <span class="item-icon"><i class="iconfont icon-dizhi"></i></span>
      <span class="item-name">收货地址</span>
    </div>
    <div class="cross-item">
      <span class="item-icon"><i class="iconfont icon-money"></i></span>
      <span class="item-name">余额</span>
    </div>
         
  </div>
  <div class="cross-line"></div>
  <div class="minior">
    <div class="cross-item">
      <span class="item-icon"><i class="iconfont icon-daohangguanyu"></i></span>
      <span class="item-name">关于</span>
    </div>
  </div>
 
</div>
</template>
<script>
export default {
   data(){
      return{
        tx:{pic:require('./img/tx.jpg')}
      }
     },
     components:{

     },
     created(){
       console.log(this.$store.state.loginUser)
     },
     computed:{
       user(){
         return this.$store.state.loginUser
       }
     }
}
</script>

  <style scoped>

.mine{
  width: 100%;
  height: 100%;
  background-color: #ebebeb;
}
.mine-top{
  display: flex;
    position: relative;
    width: 100%;
    height: 120px;
    background-color: #06c1ae;
}
.top-info{
  flex: 2;
  display: flex;
  flex-direction: row;
  margin-top: 40px
}
.avatar-wrapper{
      width: 70px;
    height: 70px;
    margin-left: 20px;
}
.avatar-wrapper img{
      width: 70px;
    height: 70px;
    border-radius: 50%;
}
.name-wrapper{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 55px;
  margin-top: 10px;
  margin-left: 20px
}
.mine-name{
      font-size: 16px;
    color: #fff;
    font-weight: 700;
}
.mine-desc{
      font-size: 16px;
    color: #fcfefe;
}
.top-operation{
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end
}
.iconfont{
  margin-top: 10px;
    margin-right: 15px;
  color: #fff;
    font-size: 18px;
    font-weight: 500;
}
.cross-line{
      width: 100%;
    height: 16px;
    background-color: #ebebeb;
}
.mine-important{
      width: 100%;
    background-color: #fff;
}
.cross-item{
    color: #333;
    height: 44px;
    line-height: 46px;
    background: #fff;
    border-bottom: 1px solid #e4e4e4;
    margin: 0 15px;
    padding: 0 10px;
}
.item-icon{
    display: inline-block;
    width: 30px;
}
.item-icon i{
  font-size: 20px;
  color: #fe970f
}
.item-name{
  font-size: 15px;
  
}
.minior{
      width: 100%;
    background-color: #fff;
}
  </style>

