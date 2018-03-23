<template>
  <div id="app">
    <app-foot></app-foot>
   <router-view></router-view>
   
  </div>
</template>

<script>
import AppFoot from './components/AppFoot'
import HelloWorld from './components/HelloWorld'
export default {
  name: 'App',
  components:{AppFoot,HelloWorld}
  
}
</script>

<style>

</style>
