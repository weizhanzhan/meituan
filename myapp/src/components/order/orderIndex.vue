<template>
  <diV>
     <div id="popover" class="mui-popover">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell"><a href="#">Item1</a></li>
            <li class="mui-table-view-cell"><a href="#">Item2</a></li>
            <li class="mui-table-view-cell"><a href="#">Item3</a></li>
            <li class="mui-table-view-cell"><a href="#">Item4</a></li>
            <li class="mui-table-view-cell"><a href="#">Item5</a></li>
        </ul>
        </div>
        <a href="#popover" id="openPopover" class="mui-btn mui-btn-primary mui-btn-block">打开弹出菜单</a>
  </diV>
</template>
<script>
import AppFoot from '../../components/AppFoot'

export default {
    name:'orderIndex',
    data(){
        return{
            active:2
        }
    },
    components:{
        AppFoot
    }
  
}
</script>
<style>

</style>
