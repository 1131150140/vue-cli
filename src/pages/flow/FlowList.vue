<template>
<div class="UserManager">
    <el-row style="height: 100%;">
    <el-col :span="24">
        <div class="userManager">
            <div class="jiegou"><i class="el-icon-d-caret"></i>流程列表   
            <!-- <el-button @click= "xinzengyonghu" class="youfu" size="small" type="primary">新增产品</el-button> -->
            </div>     
        </div>
<el-form :inline="true" :model="formInline" class="demo-form-inline">
   <!-- <el-row class="chuiniubi" >
    <el-form-item label="贷款产品">
      <el-input v-model="formInline.name" size="small"></el-input>
    </el-form-item>
     <el-button type="primary" class="xiayi" @click="chaxun" size="small">查询</el-button>
      <el-button type="danger" size="small" @click="qingkong" class="xiayi" >清空</el-button>
</el-row> -->
 <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="id"
      label="id"
      width="230">
    </el-table-column>
     <el-table-column
      prop="name"
      label="名称"
      >
    </el-table-column>
<el-table-column
fixed="right"
label="操作"
width="200">
<template slot-scope="scope">
   <!-- <el-button @click="handleDelete(scope.row.id,scope.row.name, scope.$index)" type="text" >删除</el-button> -->
    <router-link
            :to="{ path:'/flowEdit', query: {'id': scope.row.id} }"
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
import {financialSchemeList, financialSchemeDel, flowList} from '@/api/index'
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
            name: ''
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
        if (this.formInline.name) {
            this.parms.name = this.formInline.name
        } else {
          delete this.parms.name
        }
        financialSchemeList(this.parms).then(res => {
           res.data.list.forEach(element => {
                element.updateDate = formaTime(element.updateDate)
            });
            this.tableData = res.data.list
            this.total = res.data.total;
        })

      },
    handleDelete (id, name, index) {
        this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'error'
        }).then(() => {
          financialSchemeDel({'id': id, 'name': name}).then(res => {
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
        this.$router.push({'path':'/loanAdd'})                                                              
    },
    getUserAll(str) {
        flowList(str).then(res => {
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
    .userManager{
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
    }
    .el-table__row{
            td{
                height: 36px;
                padding: 0;
            }
        }
     .xiayi{
            margin-top: 4px;
     }
     .youfu{
         float: right;
     }
     .chuiniubi{
         padding: 0 12px;
     }
     
</style>
