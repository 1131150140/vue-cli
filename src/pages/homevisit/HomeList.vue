<template>
  <div class="orderList">
<div>
 <el-form :inline="true" :model="formInline" class="demo-form-inline biaodashi">
   <el-row >
  <el-col :span="6"><div class="grid-content bg-purple">
    <el-form-item label="订单编号">
    <el-input  v-model="formInline.applicationFormId" placeholder="订单编号"></el-input>
  </el-form-item></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">
    <el-form-item label="姓名">
      <el-input v-model="formInline.name" placeholder="客户姓名"></el-input>
    </el-form-item></div></el-col>

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

      prop="id"
      label="订单编号"
      width="220">
    </el-table-column>
    <el-table-column
      prop="createDate"
      label="创建日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="lenderName"
      label="客户姓名">
    </el-table-column>
    <el-table-column
    prop="creditBankName"
    label="征信银行">
  </el-table-column>
  <el-table-column
  prop="department"
  label="业务部门">
</el-table-column>
<el-table-column
prop="name"
label="业务员姓名">
</el-table-column>
<el-table-column
prop="currentStepName"
label="当前节点">
</el-table-column>
<el-table-column
prop="statusName"
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
import {getOrderList} from '../../api/index'

    export default {
    data() {
      return {
        formInline: {
          applicationFormId: '',
          name: '',
          type: '',
          riqi: []
        },
        tableData: [],
        total: 0,
        parms:{}
      }
    },
    components: {
      Paging
    },
    methods: {
      onSubmit() {
        this.parms = Object.assign({}, this.formInline);
        if (this.parms.riqi.length == 2) {
            this.parms.startData = this.formatDate(this.parms.riqi[0])
            this.parms.endData = this.formatDate(this.parms.riqi[1])
        }
        delete this.parms.riqi;
       this.getOrderList1(this.parms)
      },
      qingkong() {
          this.formInline = {
              applicationFormId: '',
              name: '',
              type: '',
              riqi: []
          }
      },
       formatTen(num) {
        return num > 9 ? (num + "") : ("0" + num);
      },
      formatDate(date) {
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();
        return year + "-" + this.formatTen(month) + "-" + this.formatTen(day);
      },
      handleClick(id) {
        var fromId = this.tableData[id];
        localStorage.setItem('applicationFormId', fromId.id);
        this.$router.push({path: '/homeDetail'})
      },
      getOrderList1(str) {
             getOrderList(str).then(res => {
              if (res.code == 200) {
                  let list = res.data.list;
                  this.total = res.data.total;
                  let arrs = [];
                  list.forEach(element => {
                    let ss = {...element,...element.applicationForm}
                  arrs.push(ss);
                  });
                  this.tableData = arrs;

                }
         })
      },
      hanlePage(page) {
          this.parms.pageNo = page;
          this.getOrderList1(this.parms)
      }
    },
    mounted() {
            // 调用请求数据的方法
            this.getOrderList1({})
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
  .orderList{
   min-width: 1050px;
    overflow-x: auto;
  .el-table__row td{
     text-align: left;
   }
  .el-form-item{
    margin-right: 0!important;
  }
  .biaodashi{
     padding: 10px 10px 0 10px;
  }
  .el-date-editor{
    width: 250px!important;
  }
  .el-input__inner{
    width: 156px;
  }

  }
  

</style>
