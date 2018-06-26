<template>
<div class="jibenxinxi">
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
  <el-form-item label="客户编号">
    <el-input v-model="xinxi.applicationFormId" readonly></el-input>
  </el-form-item>
  <el-form-item label="信贷专员">
    <el-input v-model="xinxi.operator" readonly></el-input>
  </el-form-item>
  <el-form-item label="业务部门">
    <el-input v-model="xinxi.department" readonly></el-input>
  </el-form-item>
  
</el-form>
</div>
</template>

<script>
 export default {
    data() {
      return {
        formInline: {}
      }
    },
    props: {
      xinxi: Object
    },
    methods: {
      
    },
    mounted() {
    
    }
  }
</script>

<style scoped>
  .jibenxinxi{
    padding: 0 10px!important;
  }
  .el-form-item{
    width: auto;
}

</style>
