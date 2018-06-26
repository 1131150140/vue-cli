<template>
  <div class="auditlist">
<div>
 <el-form :inline="true" :model="formInline" class="demo-form-inline">
   <el-row >
  <el-col :span="7"><div class="grid-content bg-purple">
    <el-form-item label="是否审核">
    <el-select v-model="formInline.auditStatus" placeholder="审核状态">
      <el-option label="未审核" value="0"></el-option>
      <el-option label="审核通过" value="1"></el-option>
       <el-option label="审核不通过" value="2"></el-option>
    </el-select>
  </el-form-item></div></el-col>
  <el-col :span="4">
     <el-button type="primary" @click="onSubmit">查询</el-button>
  </el-col>
</el-row>
</el-form>
</div>
<div>
    <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="tApplicationForm.id"
      label="订单编号"
      width="220">
    </el-table-column>
    <el-table-column
      prop="tApplicationForm.createDate"
      label="创建日期"
      >
    </el-table-column>
    <el-table-column
      prop="name"
      label="客户姓名">
    </el-table-column>
    <el-table-column
    prop="tApplicationForm.statusName"
    label="当前节点">
  </el-table-column>
<el-table-column
fixed="right"
label="操作"
width="100">
<template slot-scope="scope">
  <el-button @click="ClickKaika(scope.$index)"  type="text" >开卡</el-button>
 
 
</template>
</el-table-column>

  </el-table>
</div>

  <Paging :total.Number = "total" />
</div>
</template>
<script scoped>
import Paging from '../../common/Paging'
import {kaikaliebiao} from '../../api/index'

    export default {
    data() {
      return {
        formInline: {
            auditStatus: ''
        },
        tableData: [],
        total: 0,
        parms: {
          auditStatus: '0'
        }
      }
    },
    components: {
      Paging
    },
    methods: {
      onSubmit() {
        this.parms = Object.assign({}, this.formInline);
       this.getkaikaliebiao(this.parms)
      },
      ClickKaika(id) {
        localStorage.setItem('applicationFormId', this.tableData[id].tApplicationForm.id);
        this.$router.push({path: '/kaikaluru'})
      },
      getkaikaliebiao(str) {
             kaikaliebiao(str).then(res => {
              if (res.code == 200) {
                  this.tableData = res.data.list;
                  this.total = res.data.total;
              }  
         })     
      },
      hanlePage(page) {
          this.parms.pageNo = page;
          this.getShenheList(this.parms)
      }
    },
    mounted() {
            // 调用请求数据的方法
            this.getkaikaliebiao(this.parms)
    },
    created() {
      this.$bus.on('page', this.hanlePage)
    },
    beforeDestroy() {
       this.$bus.off('page', this.hanlePage)
    }
  }
</script>
<style lang="less">
  .auditlist{
    min-width: 990px;
    overflow-y: auto;
    .el-button+.el-button {
    margin-left: 0;
  }
  }
   .el-table__row td{
     text-align: left;
   }
   .demo-form-inline{
     padding: 10px 10px 0 10px;
   }
   .el-form-item{
     margin-right: 0 !important;
   }
</style>
