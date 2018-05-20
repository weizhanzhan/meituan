<template>
  <div>
      <!-- <div class="balance">
          <div class="balance-left">{{orderPrice}}元</div>
          <div class="balance-right">2</div>
      </div> -->
      <van-nav-bar
        title="确认中心"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        />
      <div v-for="(food,index) in orderFood" :key="index">
        <van-card
            :title="food.name"
            :desc="food.description"  
            :num="food.count"
            :price="food.price"
            :thumb="food.icon"
            >
            <div slot="footer">
                <van-button size="mini" @click="add(food)">加一份</van-button>
                <van-button size="mini" @click="red(food)">减一份</van-button>
            </div>
        </van-card>
      </div>
      <van-submit-bar
        :price="orderPrice*100"
        button-text="提交订单"
        @submit="onSubmit"
        />
  </div>
</template>

<script>
export default {
    data(){
        return{
            orderFood:[],
            checked:true
        }
    },
   created(){
       this.orderFood=this.$store.state.selectFoods
   },
   beforeRouteEnter (to, from, next) {
    next(vm=>vm.$store.commit("setTab",false))
    },
    beforeRouteLeave (to, from, next) {
        this.$store.commit("setTab",true)
        next()
    },
    computed:{
        orderPrice(){
            return this.$store.getters.selectFoodsPrice
        }
    },
    methods:{
        onSubmit(){
        },
        onClickLeft(){
            this.$router.go(-1)
        },
        add(val){
           val.count+=1
        },
        red(val){
            if(val.count>1)
                val.count-=1
            else{
                val.count-=1
                this.$store.commit('deleteOrder',val)
            }
        }
    }
}
</script>

<style>
.balance{
     left: 0;
    bottom: 0;
    position: fixed;
    width: 100%;
    height:46px;
    background: blueviolet;
    display: flex;
}
.balance-left{
    flex: 1;
}
.balance-right{
    flex: 0 0 80px;
    width: 80px;
    background: blue
}
.van-nav-bar__text{
    color:black
}
.van-nav-bar .van-icon{
    color:black;
}
</style>
