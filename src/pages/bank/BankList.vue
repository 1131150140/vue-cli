<template>
<div class="bankList">
    <el-row style="height: 100%;">
    <el-col :span="24">
        <div class="userManager">
            <div class="jiegou"><i class="el-icon-d-caret"></i>银行管理   <el-button @click= "xinzengyonghu" class="youfu" size="small" type="primary">新增银行</el-button></div>     
        </div>
<el-form :inline="true" :model="formInline" class="demo-form-inline">
   <el-row class="chuiniubi" >
    <el-form-item label="银行名称">
      <el-input v-model="formInline.bankName" size="small"></el-input>
    </el-form-item>
     <el-button type="primary" class="xiayi" @click="chaxun" size="small">查询</el-button>
      <el-button type="danger" size="small" @click="qingkong" class="xiayi" >清空</el-button>
</el-row>
 <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="name"
      label="银行名称"
      width="230">
    </el-table-column>
     <el-table-column
      prop="address"
      label="地址"
      width="230">
    </el-table-column>
    <el-table-column
      prop="updateDate"
      label="更新时间">
    </el-table-column>
<el-table-column
fixed="right"
label="操作"
width="200">
<template slot-scope="scope">
   <el-button @click="handleDelete(scope.row.id,scope.$index)" type="text" >删除</el-button>
    <router-link
            :to="{ path:'/bankEdit', query: {'id': scope.row.id} }"
            tag="span">
   <el-button type="text" >修改</el-button>
    </router-link>
</template>
</el-table-column>
  </el-table>
 <Paging :total.Number = "total" />
</el-form>
 
    </el-col>
</el-row>


</div>
</template>


<script>
import {getbankList, bankDel, getcompanystructure, getalluser, userDelete, getallusers, edituibyadmin} from '@/api/index'
import {formaTime} from '@/assets/utils'
import Paging from '@/common/Paging'
  export default {
    data() {
      return {
        data: [],
        defaultProps: {
          children: 'children',
          label: 'name'
        },
        tableData: [],
        formInline: {
            bankName: ''
        },
        total: 0,
        parms: {
          
        }
      };
    },
    methods: {
      qingkong() {
          this.formInline = {
            name: ''
          }
      },
      chaxun() {   
        if (this.formInline.bankName) {
            this.parms.bankName = this.formInline.bankName
        } else {
          delete this.parms.bankName
        }
        getbankList(this.parms).then(res => {
           res.data.list.forEach(element => {
                element.updateDate = formaTime(element.updateDate)
            });
            this.tableData = res.data.list
            this.total = res.data.total;
        })

      },
    handleDelete (id, index) {
        this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'error'
        }).then(() => {
          bankDel({'id': id}).then(res => {
           if (res.code == 200) {
               this.$message({
                type: 'success',
                message: '删除成功!'
              })
              this.tableData.splice(index, 1)
              
           }
          })
         
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      },

    xinzengyonghu() {
        this.$router.push({'path':'/bankAdd'})                                                              
    },
    getUserAll(str) {
        getbankList(str).then(res => {
            res.data.list.forEach(element => {
                element.updateDate = formaTime(element.updateDate)
            });
            this.tableData = res.data.list
            this.total = res.data.total;
            console.log(this.tableData)
        })
    },
    hanlePage(page) {
            this.parms.page = page - 1;
          this.getUserAll(this.parms)
      }
    },
    mounted() {
        this.getUserAll({});
    },
     created() {
      this.$bus.on('page', this.hanlePage)
    },
    beforeDestroy() {
       this.$bus.off('page', this.hanlePage)
    },
    components: {
        Paging
    }
  };
</script>

<style lang="less">
    .zuzhijiegou{
        border-right: 4px solid #fafafa;
        height: 100%;
        .jiegou{
            width: 100%;
            height: 36px;
            line-height: 36px;
            box-sizing: border-box;
            padding-left: 10px;
        }
       
    }
    .bankList{
         .jiegou{
            width: 100%;
            height: 36px;
            line-height: 36px;
            box-sizing: border-box;
            padding-left: 10px;
        }
        .el-row{
            width: 100%;
        }
        .ceshila {
            width: 220px;
        }
        .xiayi{
            margin-top: 4px;
        }
    }
    .el-table__row{
            td{
                height: 36px;
                padding: 0;
            }
        }
     
     .youfu{
         float: right;
     }
     .chuiniubi{
         padding: 0 12px;
     }
     
</style>
