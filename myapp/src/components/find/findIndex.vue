<template>
  <div style="height:1000%">
      <div class="findindex">
           123{{content}}
      <button @click="clc">click</button>
      </div>
  </div>
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
.findindex{
   border:1px solid red;
  display:flex;
  position:absolute;
  top:10px;
  padding-bottom:150% 
}
</style>
