<template>
  <div>
    <!-- <div class="reduse" > -->
     <transition name="fade" >
       <img  width="24"  height="24" v-if="countTotal>0" :src="red.pic" @click="goodRed()"/> 
    </transition>

    <div class="ortotal">
        <span v-if="countTotal>0">{{countTotal}}</span>
    </div>
    <div class="fadd" ref="add">
        <img width="24" height="24" :src="add.pic" @click="goodAdd()"/>
    </div>
  </div>
</template>
<script>
export default {
    props:{
        food:{
            type:Object
        }
    },
    created(){

    },
      data(){
          return{
             add:{pic: require('../shopcart/img/add.png'),text:'add'},
             red:{pic: require('../shopcart/img/red.png'),text:'red'},
             countTotal:0
          }
      },
      methods:{
          goodAdd(){
           console.log(this.food)
           this.$store.commit("setAdddom",'') 
           this.$store.commit("setAdddom",this.$refs.add)
           this.$store.commit("setOrder",this.food)
          if(event._constructed)//scroll中会把原生click，prevent掉
           {
             this.ishop=true
             this.countTotal++
           }
           else{//手机端
            this.ishop=true
            this.countTotal++
           } 
            console.log(this.$store.state.adddom)
         },
         goodRed(){
            this.$store.commit("deleteOrder",this.food)
           if(event._constructed)//scroll中会把原生click，prevent掉
           {         
             this.countTotal--
           }
           else{//手机端
            this.countTotal--
           } 
         },
      },
     
}
</script>

<style>
.fade{
  display: inline-block;
}
.fade-enter-active{
  transition: all 0.4s linear;
  opacity: 1;
  transform:rotate(180deg);
  
}
.fade-leave-active {
  transition: all 0.4s linear;
  opacity: 1;
  transform:rotate(0deg);
  }
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translate3d(24px,0,0);
}

.ortotal{
    display: inline-block;
}
.fadd{
 display: inline-block;
}
</style>
