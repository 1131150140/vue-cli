<template>
  <div class="dianzishenhe">
<div>
 <el-form :inline="true" :model="formInline" class="demo-form-inline">
   <el-row >

        <el-col :span="6"><div class="grid-content bg-purple">
    <el-form-item label="订单编号">
      <el-input v-model="formInline.applicationFormId" placeholder="订单编号"></el-input>
    </el-form-item></div></el-col>

  <el-col :span="6"><div class="grid-content bg-purple">
    <el-form-item label="客户姓名">
      <el-input v-model="formInline.name" placeholder="客户姓名"></el-input>
    </el-form-item></div></el-col>

  <!-- <el-col :span="6"><div class="grid-content bg-purple dianziduan">
    <el-form-item label="是否审核">
    <el-select v-model="formInline.type" placeholder="审核状态">
      <el-option label="未审核" value="0"></el-option>
      <el-option label="已审核" value="1"></el-option>
    </el-select>  
  </el-form-item></div></el-col> -->

  <el-col :span="4">
     <el-button type="primary" @click="onSubmit">查询</el-button>
      <el-button type="danger" @click="qingkong">清空</el-button>
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
      prop="applicationFormId"
      label="订单编号"
      width="220">
    </el-table-column>
    <el-table-column
      prop="principalLender"
      label="客户姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="createDate"
      label="申请日期">
    </el-table-column>
    <el-table-column
    prop="carModels"
    label="车型">
  </el-table-column>
  <el-table-column
  prop="preVehiclePrice"
  label="车价">
</el-table-column>
<el-table-column
prop="realLoanFee"
label="垫资金额">
</el-table-column>
<el-table-column
prop="nodeName"
label="当前节点">
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
import {dianziList} from '../../api/index'

    export default {
    data() {
      return {
        formInline: {
          name: '',
          type: '',
          applicationFormId: ''
        },
        tableData: [],
        total: 0,
        parms:{
            
        }
      }
    },
    components: {
      Paging
    },
    methods: {
      onSubmit() {
        this.parms = Object.assign({}, this.formInline);
       this.getdianziList(this.parms)
      },
      qingkong() {
          this.formInline = {
              name: '',
              type: '',
          }
      },
      handleClick(id) {
        var fromId = this.tableData[id].applicationFormId;
        localStorage.setItem('applicationFormId',fromId )
        this.$router.push({path: '/dianziexamine'})
      },
      getdianziList(str) {
             dianziList(str).then(res => {
              if (res.code == 200) {
                  this.tableData = res.data.list;
                  this.total = res.data.total;
                }  
         })     
      },
      hanlePage(page) {
          this.parms.pageNo = page;
          this.getdianziList(this.parms)
      }
    },
    mounted() {
            // 调用请求数据的方法
            this.getdianziList(this.parms)
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
  .dianzishenhe {
    min-width: 990px;
    .el-form-item{
      width: 278px!important;
    }
    
    .el-input__inner, .el-form-item__content, .el-input, .el-select{
      width: 156px!important;
    }
    .dianziduan .el-select{
      width: 120px!important;
    }
  }
   .el-table__row td{
     text-align: left;
   }
</style>
