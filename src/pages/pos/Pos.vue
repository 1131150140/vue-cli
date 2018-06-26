<template>
  <div class="pos">
     <div>
         <el-row>
             <el-col class="order-list" :span='7'>
                

             </el-col>
             <el-col class="order-list" :span='17'>
我是
             </el-col>
         </el-row>
     </div>
  </div>
</template>

<script>
    export default {
        name: 'Pos',
             mounted:function(){
      var orderHeight=document.body.clientHeight;
      document.getElementsByClassName("order-list")[0].style.height=orderHeight+'px';
      document.getElementsByClassName("order-list")[1].style.height=orderHeight+'px';
  }
    }
</script>

<style scoped> 
    .order-list{
        display: inline-block;
        float: left;
    }

</style>

