<template>
<div class="attachmentList">
    <el-row style="height: 100%;">
    <el-col :span="24">
        <div class="userManager">
            <div class="jiegou"><i class="el-icon-d-caret"></i>附件种类列表 <el-button @click= "xinzengyonghu" class="youfu" size="small" type="primary">新增银行</el-button></div>     
        </div>
<el-form :inline="true" :model="formInline" class="demo-form-inline">
   <el-row class="chuiniubi" >
    <el-form-item label="银行名称">
      <el-input v-model="formInline.name" size="small"></el-input>
    </el-form-item>
     <el-button type="primary" class="xiayi" @click="chaxun" size="small">查询</el-button>
      <el-button type="danger" size="small" @click="qingkong" class="xiayi" >清空</el-button>
</el-row>
 <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="id"
      label="编码"
      width="230">
    </el-table-column>
     <el-table-column
      prop="name"
      label="附件名称"
      width="230">
    </el-table-column>
    <el-table-column
      prop="type"
      label="归类">
    </el-table-column>
     <el-table-column
      prop="bankCode"
      label="银行代码">
    </el-table-column>
     <el-table-column
      prop="changeStatus"
      label="提交后是否可修改">
    </el-table-column>
     <el-table-column
      prop="isMore"
      label="是否可以上传多张">
    </el-table-column>
     <el-table-column
      prop="remarks"
      label="备注">
    </el-table-column>
<el-table-column
fixed="right"
label="操作"
width="200">
<template slot-scope="scope">
   <el-button @click="handleDelete(scope.row.id,scope.$index)" type="text" >删除</el-button>
    <router-link
            :to="{ path:'/attachmentEdit', query: {'id': scope.row.id} }"
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
import {findListByName, bankDel, getcompanystructure, getalluser, userDelete, getallusers, edituibyadmin, delId} from '@/api/index'
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
            this.parms.pageNo = 1
        } else {
            delete this.parms.name
        }
        findListByName(this.parms).then(res => {
           res.list.forEach(element => {
                if (element.isMore == '1') {
                    element.isMore = '是'
                } else {
                    element.isMore = '否'
                }
                if (element.changeStatus == '1') {
                    element.changeStatus = '是'
                } else {
                    element.changeStatus = '否'
                }
                element.updateDate = formaTime(element.updateDate)
            });
            this.tableData = res.list
            this.total = res.total;
        })

      },
    handleDelete (id, index) {
        this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'error'
        }).then(() => {
          delId({'id': id}).then(res => {
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
        this.$router.push({'path':'/attachmentAdd'})                                                        
    },
    getUserAll(str) {
        findListByName(str).then(res => {
            res.list.forEach(element => {
               if (element.isMore == '1') {
                    element.isMore = '是'
                } else {
                    element.isMore = '否'
                }
                if (element.changeStatus == '1') {
                    element.changeStatus = '是'
                } else {
                    element.changeStatus = '否'
                }
                element.updateDate = formaTime(element.updateDate)
            })
            this.tableData = res.list
            this.total = res.total;
        })
    },
    hanlePage(page) {
            this.parms.pageNo = page;
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
    .attachmentList{
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
         .el-button{
            margin-top:4px;
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
