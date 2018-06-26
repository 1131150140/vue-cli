<template>
<div class="homeDetail">
<el-tabs v-model="activeName" @tab-click="handleClick" >
    <el-tab-pane label="主贷人1" name="first" class="tishi">
        
    </el-tab-pane>
</el-tabs>


</div>
</template>
<script>
 import {jiafangxiangqing} from '@/api/index'

    export default {
    data() {
      return {
        labelPosition: 'right',
        activeName: 'first',
        ss: {
          applicationFormId: ''  
        }
      };
    },
    components: {
       
    },
     methods: {
        open3() {
        this.$notify({
          title: '成功',
          message: '成功新建订单！',
          type: 'success'
        });
      },
      handleClick(tab, event) {
        // console.log(tab, event);
      },
      open6(msg) {
        this.$notify.error({
          title: '错误',
          message: msg
        });
      },
      handleRemove(file, fileList) {
        // console.log(file, fileList);
      }
    },
    mounted() {
            this.ss.applicationFormId = localStorage.getItem('applicationFormId');
            jiafangxiangqing(this.ss).then(res => {
                if (res.code == 200) {
                    console.log(res)
                }
            })
            
    }
  }
</script>
<style lang="less" >
.grid-content {
    text-align: center;
}
.homeDetail{
    width: 990px;
    margin: 0 auto;
.kuandu{
     width: 100%;
    
 }
 .demo-form-inline{
     padding-top: 10px;
 }
 .el-form-item__content{
     width: 70%!important;
 }
 .dinggao{
     height: 174px;
     width: 148px;
     overflow: hidden;
     margin-left: 90px;
     text-align: center;
     &:nth-child(0) {
         margin-left: 0
     }
 }
 
 .xiayi{
     margin-top: 30px;
     text-align: center;
 }
 
 
}
 

</style>
