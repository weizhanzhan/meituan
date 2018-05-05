<template>
  <div class="find-index">
      
      <div v-for="(find,index) in findData.data" :key="index" >
        <div class="find-item">
            <div class="item-top">
                <img :src="find.img">
            </div>
            <div class="item-bottom">
                <div class="bottom-title">{{find.title}}</div>
                <div class="bottom-writer">周边生活</div>
                <div class="bottom-view">{{find.view}}人看过</div>
            </div>
        </div>
        <div class="cross-line"></div>
      </div>
      
  </div>
</template>
<script scoped>
import Find from '../../../static/find-list.json'
export default {
    name:'findIndex',
    data(){
        return{
            active:1,
            content:0

        }
    },
    components:{
       
    },
    created(){
    },
    computed:{
       findData(){
           return Find
       }
    },
    methods:{
    }
  
}
</script>
<style>
.find-index{
    margin-bottom: 50px
}
.find-item{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 300px;
    color: #333;
    background-color: #fff;
    padding: 15px;
     box-sizing: border-box;
    margin-bottom: 10px;
}
.item-top{
    width: 100%;
    height: 160px;
    overflow: hidden;
}
.item-top img{
    width: 100%;
    height: 160px;
}
.item-bottom{
    width: 100%;
    height: 100px;
    position: relative;
    margin-top: 10px;
}
.bottom-title{
     font-size: 18px;
    font-weight: 700;
    display: -webkit-box!important;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
.bottom-writer{
    color: #999;
    font-size: 14px;
   
}
.bottom-view{
 
    bottom: 0;
    color: #999;
    font-size: 14px;
}
.cross-line{
    width: 100%;
    height: 16px;
    background-color: #ebebeb;
}
</style>
