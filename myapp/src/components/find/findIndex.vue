<template>
  <diV>
      123{{content}}
      <button @click="clc">click</button>
  </diV>
</template>
<script scoped>
import AppFoot from '../../components/AppFoot'
export default {
    name:'findIndex',
    data(){
        return{
            active:1,
            content:0

        }
    },
    components:{
        AppFoot
    },
    computed:{
    
    },
    methods:{
        clc(){
            this.content++
        }
    }
  
}
</script>
<style>

</style>
