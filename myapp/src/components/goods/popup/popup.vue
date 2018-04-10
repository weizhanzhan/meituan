<template>
   <div class="popup" v-if="show">
    <van-popup v-model="show" position="bottom" style="bottom:46px" :overlay="true">
      内容<br/>
      内容<br/>
      内容<br/>
      内容<br/>
    </van-popup>
  </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    computed:{
        show(){
            return this.$store.state.popupShow
        }
    }
}
</script>

<style>
.popup{
      left: 0;
    bottom: 56px;
    position: fixed;
    width: 100%;
    height:46px;
    /* background: #141d27; */
    color: red;
    z-index: 0;
}
</style>
