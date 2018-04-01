<template>
  <div id="app">
    
   <router-view></router-view>
     <app-foot ></app-foot>
  </div>
</template>

<script>
import AppFoot from './components/AppFoot'
export default {
  name: 'App',
  components:{AppFoot,}
  
}
</script>

<style>
body{
  overflow:scroll
}
</style>
