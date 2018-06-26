<template>
  <div>
<div>
 <el-form :inline="true" :model="formInline" class="demo-form-inline">
   <el-row >

  <el-col :span="6"><div class="grid-content bg-purple">
    <el-form-item label="客户姓名">
      <el-input v-model="formInline.name" placeholder="客户姓名"></el-input>
    </el-form-item></div></el-col>
 <el-col :span="10"><div class="grid-content bg-purple">
     <el-form-item label="开始结束">
    <div class="block">
        <el-date-picker
          v-model="formInline.riqi"
          type="daterange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :default-time="['00:00:00', '23:59:59']">
        </el-date-picker>
      </div>
    </el-form-item>
    </div></el-col>
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
      prop="vehicleLicense"
      label="车牌">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名">
    </el-table-column>
    <el-table-column
      prop="phone"
      label="手机号">
    </el-table-column>
    <el-table-column
    prop="operator"
    label="续保专员">
  </el-table-column>
  <el-table-column
  prop="series"
  label="车型">
</el-table-column>
<el-table-column
label="保险种类"
width="100">
<template slot-scope="scope">
   <el-tooltip class="item" effect="dark" :content="tableData[scope.$index].insuranceCategorysStr" placement="top">
      <el-button>详情</el-button>
    </el-tooltip>
</template>
</el-table-column>

<el-table-column
prop="vehicleBuyDate"
label="购车日期">
</el-table-column>
<el-table-column
prop="createDate"
label="参保日期">
</el-table-column>
<el-table-column
prop="updateDate"
label="到期日期">
</el-table-column>
<el-table-column
prop="updateDate"
label="最后沟通时间">
</el-table-column>
<el-table-column
prop="updateDate"
label="备注">
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
import {baodanList} from '../../api/index'

    export default {
    data() {
      return {
        formInline: {
          name: '',
          riqi: []
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
              riqi: [],
          }
      },
      handleClick(id) {
        var fromId = this.tableData[id].id;
        this.$router.push({name: 'order/index',query: { deviceId: 123}});
      },
      getbaodanList(str) {
             baodanList(str).then(res => {
              if (res.code == 200) {
                  this.tableData = res.data.list;
                  this.total = res.data.total;
                }  
         })     
      },
      hanlePage(page) {
          this.parms.pageNo = page;
          this.getbaodanList(this.parms)
      }
    },
    mounted() {
            // 调用请求数据的方法
            this.getbaodanList(this.parms)
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
