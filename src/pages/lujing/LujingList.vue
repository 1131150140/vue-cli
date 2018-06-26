<template>
    <div class="roleList">
         <div class="jiegou"><i class="el-icon-menu"></i>访问资源列表
          <el-button type="primary" class="tianjiagongs" @click="xizeng">新增</el-button>
         </div>
         <!-- <el-form>
           <el-row :gutter="12">
             <el-col :span="12"><div class="grid-content bg-purple" style="padding-left: 10px;height:38px;">
                <el-form-item label="公司选择">
                <el-select size="small"  placeholder="请选择">
                  <el-option label="完成" value="1"></el-option>
                  <el-option label="进行中" value="2"></el-option>
                  <el-option label="失败" value="-1"></el-option>
                </el-select>
              </el-form-item></div>
              </el-col>
           </el-row>
         </el-form>
          -->
           <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="name"
      label="资源名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="resource"
      label="资源路径">
    </el-table-column>
    <el-table-column
      prop="modifyTime"
      label="创建时间">
    </el-table-column>
   
<el-table-column
fixed="right"
label="操作"
width="100">
<template slot-scope="scope">
   <el-button @click="handleDelete(scope.row.id)" type="text" >删除</el-button>
    <router-link
            :to="{ path:'/lujingEdit', query: {'id': scope.row.id} }"
            tag="span">
   <el-button type="text" >修改</el-button>
    </router-link>
</template>
</el-table-column>

  </el-table>
    </div>
</template>

<script>
import {resourceGetall, resourceDelete} from '@/api/index'
import {formaTime} from '@/assets/utils'
export default {
    data() {
        return {
             tableData: [],
             ruleForm: {}
        }
    },
    methods: {
      getroleList() {
        resourceGetall().then(res => {
             res.datas.forEach(element => {
                element.modifyTime = formaTime(element.modifyTime)
              });
            this.tableData = res.datas;
        })
      },
      xizeng() {
        this.$router.push({path: '/lujingAdd'})
      },
      handleDelete (id) {
        console.log(id)
        this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'error'
        }).then(() => {
          resourceDelete({'id': id}).then(res => {
           if (res.code == 200) {
               this.$message({
                type: 'success',
                message: '删除成功!'
              })
              this.getroleList();
           } else {
              this.$message({
                type: 'info',
                message: res.message
              })
           }
          })
         
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      }
      
    },
    mounted() {
      this.getroleList();
     
    }

}
</script>

<style lang="less">
.roleList{
    .jiegou{
            width: 100%;
            height: 36px;
            line-height: 36px;
            box-sizing: border-box;
            padding-left: 10px;
            border-bottom: 1px solid #e3e3e3;
    }
    .tianjiagongs{
     float: right;
      width: 100px;
      height: 30px;
      padding: 0;
      text-align: center;
      margin-right: 20px;
      
    }
    .el-table__row{
      td{
        height: 36px;
        padding: 0;
      }

    }

}

</style>
