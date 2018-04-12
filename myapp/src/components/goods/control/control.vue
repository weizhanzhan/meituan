<template>
  <div>
    <!-- <div class="reduse" > -->
     <transition name="fade" >
       <img  width="24"  height="24" v-show="thisfood.count>0" :src="red.pic" @click="goodRed()"/> 
    </transition>

    <div class="ortotal">
        <span v-show="thisfood.count>0">{{thisfood.count}}</span>
    </div>
    <div class="fadd" ref="add">
        <img width="24" height="24" :src="add.pic" @click="goodAdd()"/>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
export default {

    props:{
        food:{
            type:Object
        }
    },
     data(){
          return{
             add:{pic: require('../shopcart/img/add.png'),text:'add'},
             red:{pic: require('../shopcart/img/red.png'),text:'red'},
             thisfood:{
               count:0
             },
             num:0
          }
      },
    created(){
        
        for(var key in this.food)
        {
          this.thisfood[key]=this.food[key]
        }
    },
    mounted(){
      
    },
     
      'watch':{
        'this.thisfood'(val){
          console.log(val,'11')
        }
      },
      methods:{
          goodAdd(){
           
           console.log(this.thisfood)
           this.$store.commit("setOrder",this.thisfood)
          if(event._constructed)//scroll中会把原生click，prevent掉
           {
             
             this.num++;
             this.thisfood.count++
           }
           else{//手机端
             this.num++;
             this.thisfood.count++
           } 
         },
         goodRed(){
         //   this.$store.commit("deleteOrder",this.food)
           if(event._constructed)//scroll中会把原生click，prevent掉
           {   
             this.thisfood.count--      
           }
           else{//手机端
             this.thisfood.count--
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
