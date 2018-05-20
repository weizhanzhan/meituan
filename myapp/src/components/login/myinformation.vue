<template>
  <div>
     <van-nav-bar   font-size:80px
      title="个人中心"
      left-text=""
      left-arrow
      @click-left="onClickLeft"/>
    <div class="mine-info">
      <div class="cross-item">
        <span class="item-name">头像</span>
        <span class="item-con"><img :src="tx.pic"/></span>
        
      </div>    
      <div v-for="(item,index) in infodata" :key="index">
      <div class="cross-item"  @click="edit(item)">
        <span class="item-name">{{item.text}}</span>
        <span class="item-con">{{info[item.type]}}</span>       
      </div> 
      <div class="cross-line" v-if="item.text=='用户名'"></div>
      </div>
     </div>
      <div class="cross-line"></div>
     <van-button type="primary" bottom-action @click="quit()">退出</van-button>
     <van-popup v-model="editshow">
     <div style="width:25rem;height:15rem">
       <div class="pop-title">{{editValue.text}}</div>
       <div class="pop-num">
         <van-cell-group>
          <van-field v-model="info[editValue.type]" :placeholder='editValue.type' />
        </van-cell-group></div>
       <div class="pop-button">
         <van-button size="normal" @click="save()">修改</van-button>
         <van-button size="normal" @click="editshow=false" >取消</van-button>
       </div>
      
     </div>
   </van-popup>
  </div>
</template>

<script>
import { Dialog } from 'vant';
import { Toast } from 'vant';
import qs from 'qs'
export default {
  data(){
    return{
       tx:{pic:require('./img/tx.jpg')},
       info:{},
       editshow:false,
       editValue:'',
       infodata:[
         {text:'用户名',type:'name'},
         {text:'手机号',type:'mobile'},
         {text:'QQ',type:'qq'},
         {text:'支付密码',type:'paypassword'},
         {text:'登录密码',type:'loginpassword'},
       ]
    }
  },
  methods:{
    onClickLeft(){
      this.$router.go(-1)
    },
    edit(val){
      this.editshow=true
      this.editValue=val
    },
    save(){
      this.editshow=false
      var obj={
        type:this.editValue.type,
        value:this.info[this.editValue.type],
        id:this.info.Iid
      }
      console.log(obj)
      this.$http.post('http://122.152.204.72:8082/api/meituan/edit',qs.stringify(obj))
      .then(res=>{
        console.log(res)
        Toast.success(res.data.msg);
      })
    },
    quit(){      
        this.$store.commit('Login',{
            islogin:false,
            info:'',
            token:''
        })
        Toast.success('退出成功！');
        this.$router.push('./mine')
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log(123)
    next(vm=>{
       vm.$store.commit("setTab",false)
       var islogin=vm.$store.state.loginUser.token
       vm.$http.get('http://122.152.204.72:8082/api/meituan/info/'+islogin)
     .then(res=>{
       vm.info=res.data
       console.log(vm.info)
       
     })
    })
  },
  beforeRouteLeave (to, from, next) {
    this.$store.commit("setTab",true)
    next()
  },

}
</script>

<style>
.mine-info{
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
    display: flex
}


.item-name{
  font-size: 15px;
  flex:1;
  
}
.item-con{
  flex: 0 0 120px;
  width: 120px;
}
.item-con img{
     width: 35px;
     border-radius: 50%
}
.cross-line{
    width: 100%;
    height: 16px;
    background-color: #ebebeb;
}
.pop-button{
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align:center;
}
.pop-title{
    text-align: center;
    padding-left: 0;
    margin-top: 20px;
    margin-bottom: 0;
    font-size: 16px;
    font-weight: 700;
    color: #333;
}
.pop-num{
  color: #999;
    margin: 0;
     margin-top: 20px;
    text-align: center;
    line-height: 36px;
}
</style>
