<template>
 <div style="margin-top:5%">
   <el-card>
     <img v-for="(imgurl,index) in img" v-bind:key="index" :src="imgurl.src" class="img" id="real" title="请我吃辣条呀"/>
   </el-card>
</div> 

</template>
<script>


import about from '../../static/json/aboutjson.json'


export default {
  name:'about',
  data(){
     return{
         tit:'about',
         img:about.imges
     }
  },
  methods:{
  
  },
  created(){
     fetch('/apis/toutiao/index?type=&key=b7aa67a60b9569eb48154be0a877f0bf',{
       method:'GET',
     })
       .then(data=>{
          return data.json()
        })
        .then(res=>console.log(res))

   
    //  $.ajax({
    //    type:'get',
    //    async:false,
    //    url:'http://v.juhe.cn/toutiao/index?type=&key=b7aa67a60b9569eb48154be0a877f0bf.jsonp',
    //    dataType:'jsonp',
    //     jsonp:"callback",
    //     jsonpCallback:"success_jsonpCallback",
    //    success:function(data){
        
    //    },
    //    error:function(){
    //      console.log('fail')
    //    }
    //  })
  }
}
 
</script>
<style>
a{
  color:black
}
.img{
  height: 20%;width: 20%;
}
 
</style>