<template>
  <div>
      <van-tabs :active="active" @click="onClick" swipeable>
        <van-tab v-for="index in menu" :title="index"  :key="index">
            <router-view></router-view>
       </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
    data(){
        return{
            menu:['点菜','评价','商家'],
            active: 0
        }
    },
    created(){
         this.$router.push({name:'点菜'})
    },
    methods:{
        onClick(index,title) {
           console.log(index,title)
           this.$router.push({name:title})
        }
    }

}
</script>

<style scoped>

</style>
