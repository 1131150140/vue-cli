<template>
  <el-table
    :data="xinxi"
    style="width: 100%"
    :row-class-name="tableRowClassName">
    <el-table-column
      prop="customer.name"
      label="姓名"
     >
    </el-table-column>
    <el-table-column
      prop="customer.lenderType"
      label="关系类型"
      >
    </el-table-column>
    <el-table-column
      prop="creditName"
      label="贷款银行">
    </el-table-column>
      <el-table-column
      prop="bankCreditResult"
      label="银行征信结果">
    </el-table-column>
      <el-table-column
      prop="result"
      label="审核结果">
    </el-table-column>
     <el-table-column
      prop="content"
      width="300"
      label="审核内容">
    </el-table-column>
    <el-table-column
      prop="createDate"
      label="征信申请日期">
    </el-table-column>
    
  </el-table>
</template>

<script>
export default {
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 2) {
          return 'success-row';
        }
        return '';
        console.log(row)
      }
    },
    props: {
        xinxi: Array
    },
    data() {
      return {
       
      }
    },
    mounted() {
        console.log(this.xinxi)
    }
  }
</script>

<style scoped>
    .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
  .el-table__row td  {
      text-align: left;
  }
</style>
