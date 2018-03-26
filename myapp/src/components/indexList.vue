<template>
  <div>
      <table width=100%>
          <tr v-for="(shopinfo,index) in shopList" :key="index" class="am-panel am-panel-default">
              <td>
                  <div class="imgall">
                    <div class="imgpic"><img :src="shopinfo.pic_url" style="width:100px" alt="" id=""></div>
                    <div class="imgicon"><img :src="shopinfo.poi_type_icon" style="width:30px;float:left" alt="" id=""></div>
                  </div>
             </td>
             <td>
                 <div>
                     <div><h2>{{shopinfo.name}}</h2></div>
                     <div>.....月售{{shopinfo.month_sale_num}}            {{shopinfo.mt_delivery_time}}|{{shopinfo.distance}}</div>
                     <div>{{shopinfo.min_price_tip}}|{{shopinfo.shipping_fee_tip}}|{{shopinfo.average_price_tip}}        美团专送</div>
                     <p class="shopinfo" v-for="(count,index) in shopinfo.discounts2" :key="index">
                         <img :src="count.icon_url" style="width:20px">
                         {{count.info}}</p>
                 </div>
             </td>
          </tr>
      </table>
  </div>
</template>
<script>
export default {
    name:'indexList',
    data(){
        return{
           shopList:[]
        }
    },
    created(){
        this.$http.get('http://localhost:8080/static/index-list.json')
           .then(res=>{
               this.shopList=res.data.data.poilist
              console.log(this.shopList)
           })
    }
  
}
</script>
<style>
.imgall{
        position: relative;
        width: 100px;
        height: 100px;
        overflow: hidden;
    }
    .imgpic{
        width: 100px;
        height: 100px;
    }
   .imgicon{
        position: absolute;
        top:0;
        left: 0;
        width:50px;
        height: 50px;
    }
    p[class="shopinfo"] {
    display: block;
    color: darkgrey;
    margin: 0;
    padding: 0
  
}
</style>
