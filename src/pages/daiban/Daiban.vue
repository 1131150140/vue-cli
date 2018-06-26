<template>
  <div>
<div>
    <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="applicationFormId"
      label="订单编号"
      width="220">
    </el-table-column>
    <el-table-column
      prop="createDate"
      label="创建日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="applicationForm.customer.name"
      label="客户姓名">
    </el-table-column>
    <el-table-column
    prop="deptName"
    label="业务部门">
  </el-table-column>
  <el-table-column
  prop="salesman"
  label="业务员姓名">
</el-table-column>
<el-table-column
prop="stepName"
label="当前节点">
</el-table-column>
<el-table-column
prop="applicationForm.statusName"
label="单据状态">
</el-table-column>

<el-table-column
fixed="right"
label="操作"
width="100">
<template slot-scope="scope">
  <el-button @click="handleClick(scope.$index)" type="text" >查看</el-button>
 
</template>
</el-table-column>

  </el-table>
</div>

  <Paging :total.Number = "total" />
</div>
</template>
<script>
import Paging from '../../common/Paging'
import {daibanList} from '../../api/index'

    export default {
    data() {
      return {
        tableData: [],
        total: 0,
        parms: {}
      }
    },
    components: {
      Paging
    },
    methods: {
      handleClick(id) {
        var fromId = this.tableData[id].id;
        this.$router.push({name: 'order/index',query: { deviceId: 123}});
      },
      getdaibanList(str) {
             daibanList(str).then(res => {
              if (res.code == 200) {
                  this.tableData = res.data.list;
                  this.total = res.data.total;
                }  
         })     
      },
      hanlePage(page) {
          this.parms.pageNo = page;
          this.getdaibanList(this.parms)
      }
    },
    mounted() {
            this.getdaibanList(this.parms)
    },
    created() {
      this.$bus.on('page', this.hanlePage)
    },
    beforeDestroy() {
       this.$bus.off('page', this.hanlePage)
    }
  }
</script>
<style scoped>
   .el-table__row td{
     text-align: left;
   }
</style>
