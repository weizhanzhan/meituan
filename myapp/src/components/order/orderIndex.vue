<template>
<div>
  <div v-for="(order,index) in orderFood" :key="index">
    <van-card
        :title="filtername(order.name)"
        desc="香辣爆炒牛肚"  
        num="2"
        :price="order.min_price"
        :thumb="order.pic_url"
        >
  <div slot="footer">
    <van-button size="mini">删除</van-button>
    <van-button size="mini">再来一单</van-button>
  </div>
</van-card>
<div class="cross-line"></div>
  </div>
</div>
</template>
<script>
import AppFoot from '../../components/AppFoot'
import { Toast } from 'vant';

export default {
    name:'orderIndex',
    data(){
        return{
            orderFood:[]

        }
    },
    created(){
        this.$http.get('../../static/index-list.json')
        .then(res=>{

            this.orderFood=res.data.data.poilist
        })
    },
    components:{
        AppFoot
    },
    methods:{
        filtername(val){
            var str=''
            return val.substring(0,4)+"..."
         
        }
    },
    beforeRouteEnter(to,from,next){
        next(vm=>{
            var islogin=vm.$store.state.loginUser.isLogin
            if(islogin)
               next()
            else{
                Toast.fail("尚未登录，请登录！");
                vm.$router.push('/login')
            }
       })
          
    }
  
}
</script>
<style>
.cross-line{
    width: 100%;
    height: 16px;
    background-color: #ebebeb;
}
</style>
