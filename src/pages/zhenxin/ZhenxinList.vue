<template>
  <div class="zhenxinList">
<div>
 <el-form :inline="true" :model="formInline" class="demo-form-inline">
   <el-row >
 
    <el-form-item label="客户姓名">
      <el-input v-model="formInline.name" size="small" placeholder="客户姓名"></el-input>
    </el-form-item>
 
    <el-form-item label="是否审核">
    <el-select v-model="formInline.type"  size="small" placeholder="审核状态">
      <el-option label="未审核" value="0"></el-option>
      <el-option label="已审核" value="1"></el-option>
    </el-select>
  </el-form-item>
 
     <el-button type="primary"  size="small" @click="onSubmit">查询</el-button>
      <el-button type="danger"  size="small" @click="qingkong">清空</el-button>
 
</el-row>
</el-form>

</div>
<div>
    <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="applicationForm.id"
      label="订单编号"
      width="220">
    </el-table-column>
    <el-table-column
      prop="customer.name"
      label="客户姓名"
      >
    </el-table-column>
    <el-table-column
      prop="customer.idCard"
      label="身份证号">
    </el-table-column>
  <el-table-column
  prop="creditName"
  label="征信银行">
</el-table-column>
<el-table-column
prop="deptName"
label="业务部门">
</el-table-column>
<el-table-column
prop="salesmanName"
label="业务员">
</el-table-column>
<el-table-column
prop="createDate"
label="征信申请日期">
</el-table-column>
<el-table-column
prop="updateDate"
label="征信查询日期">
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
<script scoped>
import Paging from '../../common/Paging'
import {zhenxinList} from '../../api/index'
import {formaTime} from '@/assets/utils'

    export default {
    data() {
      return {
        formInline: {
          name: '',
          type: '0'
        },
        tableData: [],
        total: 0,
        parms:{
            'type': 0
        }
      }
    },
    components: {
      Paging
    },
    methods: {
      onSubmit() {
        this.parms = Object.assign({}, this.formInline);
       this.getZhenxinList(this.parms)
      },
      qingkong() {
          this.formInline = {
              name: '',
              type: '',
          }
      },
      handleClick(id) {
          localStorage.setItem('zhenxinId', this.tableData[id].id);
          this.$router.push({path: 'Zhenxinpanduan'});
      },
      getZhenxinList(str) {
             zhenxinList(str).then(res => {
              if (res.code == 200) {
                  res.data.list.forEach(item => {
                    item.createDate = formaTime(item.createDate)
                    if (item.updateDate) {
                      item.updateDate = formaTime(item.updateDate)
                    }
                  })
                  this.tableData = res.data.list;
                  this.total = res.data.total;
              }  
         })     
      },
      hanlePage(page) {
          this.parms.pageNo = page;
          this.getZhenxinList(this.parms)
      }
    },
    mounted() {
            // 调用请求数据的方法
            console.log('111')
            this.getZhenxinList(this.parms)
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
  .zhenxinList {
    .el-table__row td{
     text-align: left;
   }
   .demo-form-inline{
     padding: 10px 10px 0 10px;
   }
   .el-form-item{
     margin-right: 0 !important;
   }
    .el-button{
            margin-top:4px;
    }


  }
   
</style>
