<template>
  <div class="orderList">
<div>
 <el-form :inline="true" :model="formInline" class="demo-form-inline biaodashi">
   <el-row >
    <el-form-item label="订单编号">
    <el-input size="small"  v-model="formInline.applicationFormId" placeholder="订单编号"></el-input>
  </el-form-item>
 
    <el-form-item label="姓名">
      <el-input size="small"  v-model="formInline.name" placeholder="客户姓名"></el-input>
    </el-form-item>
 
     <el-form-item label="开始结束">
    <div class="block">
        <el-date-picker
          v-model="formInline.riqi"
          type="daterange"
          size="small"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :default-time="['00:00:00', '23:59:59']">
        </el-date-picker>
      </div>
    </el-form-item>
  </el-row>

    <el-form-item size="small" label="订单状态">
    <el-select v-model="formInline.type" placeholder="订单状态">
      <el-option label="完成" value="1"></el-option>
      <el-option label="进行中" value="2"></el-option>
      <el-option label="失败" value="-1"></el-option>
    </el-select>
  </el-form-item>
     <el-button size="small" type="primary" @click="onSubmit">查询</el-button>
      <el-button size="small" type="danger" @click="qingkong">清空</el-button>
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
  <!-- <el-table-column
  prop="department"
  label="业务部门">
</el-table-column>
<el-table-column
prop="name"
label="业务员姓名">
</el-table-column> -->
<el-table-column
prop="currentStepName"
label="当前节点">
</el-table-column>
<el-table-column
prop="status"
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
import {formaTime} from '@/assets/utils'

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
                  if (fromId.currentStepName == '征信审核'){
                      this.$router.push({path: 'zhenxinshenhe'});
                    }else if (fromId.currentStepUrl == 'billCollection') {//签单采集
                       this.$router.push({path: 'qiandancaiji'});
                    } else if (fromId.currentStepUrl == 'creditRelationMaintain') {//征信维护
                        this.$router.push({path: 'zhenxinweihu'});
                    } else {//资料审核
                         this.$router.push({path: 'ziliaoshenhe'});
                    }

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
                  arrs.forEach(item => {
                    item.createDate = formaTime(item.createDate)
                    if (item.status == '1') {
                        item.status = '进行中'
                    } else if (item.status == '2') {
                        item.statu = '完成'
                    } else if (item.status == '-1') {
                        item.status = '弃单'
                    }
                  })
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
  .el-form-item__content {
    width: 200px!important;
  }

  }
  

</style>
