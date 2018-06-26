<template>
    <div class="roleList">
         <div class="jiegou"><i class="el-icon-menu"></i>角色管理
          <el-button type="primary" class="tianjiagongs" @click="xizeng">新增</el-button>
         </div>
         <el-form>
           <el-row :gutter="12">
             <el-col :span="12"><div class="grid-content bg-purple" style="padding-left: 10px;height:38px;">
                <el-form-item label="公司选择">
                <el-select size="small" v-model="companyId"  placeholder="请选择">
                  <el-option v-for="(item,index) in datas" :key="index" :label="item.name" :value="item.id"></el-option>
                 
                </el-select>
              </el-form-item></div>
              </el-col>
           </el-row>
         </el-form>
         
           <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="roleName"
      label="角色名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="createTime"
      label="创建时间">
    </el-table-column>
    <el-table-column
      prop="departName"
      label="所属公司">
    </el-table-column>
    <el-table-column
    prop="remark"
    label="备注信息">
  </el-table-column>
<el-table-column
fixed="right"
label="操作"
width="200">
<template slot-scope="scope">
  <el-button type="text" >
     <router-link :to="{ path: 'roleEdit', query: {roleId: scope.row.id} }"
                       tag="span">
           修改
          </router-link></el-button>
   <el-button @click="handleDelete(scope.row.id)" type="text" >删除</el-button>
   <el-button @click="fenpeiquanxian(scope.row.id)" type="text" >分配权限</el-button>

</template>
</el-table-column>

  </el-table>
   <el-dialog title="分配权限" class="kuangzi"  :visible.sync="dialogFormVisible1">
     <el-button type="primary" size="small" plain @click="quanxuan" >全选/全不选</el-button>
       <el-form >
              <el-tree
                :data="data2"
                show-checkbox
                default-expand-all
                node-key="id"
                ref="tree"
                highlight-current
                :props="defaultProps">
              </el-tree>
       </el-form>
       <div slot="footer" class="dialog-footer">
         <el-button size="small" @click="dialogFormVisible1 = false">取 消</el-button>
          <el-button size="small" @click="baocun">保存</el-button>
       </div>
     </el-dialog>
    </div>

   

</template>

<script>
import {getall, deleterole, getallcompany, getrolesbydepart, getstructure, massPrivilegeForRole, getallroleaccessresource, getallmenuid} from '@/api/index'
import {formaTime} from '@/assets/utils'
export default {
    data() {
        return {
             tableData: [],
             ruleForm: {},
             datas: [],
             companyId: '',
             data2: [],
             data3: [],
             data4: [],
             isChooose: false,
             dialogFormVisible1: false,
             defaultProps: {
                children: 'children',
                label: 'name'
             },
             ruform: {
               roleId: '',
               menuId: []
             }
        }
    },
    methods: {
       open3(str) {
            this.$notify({
            title: '成功',
            message: str,
            type: 'success'
            });
        },
        open6(msg) {
            this.$notify.error({
            title: '错误',
            message: msg
            });
        },
        quanxuan() {
            if (!this.isChooose) {
                 this.$refs.tree.setCheckedKeys([]);
            } else {
                 this.$refs.tree.setCheckedKeys(this.data4);
            }
            this.isChooose = !this.isChooose;
        },
      getroleList() {
        getall().then(res => {
              res.datas.forEach(element => {
                element.createTime = formaTime(element.createTime)
              });
            this.tableData = res.datas;
        })
      },
      xizeng() {
        this.$router.push({path: '/roleAdd'})
      },
      handleDelete (id) {
        this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'error'
        }).then(() => {
          deleterole({'id': id}).then(res => {
           if (res.code == 200) {
               this.$message({
                type: 'success',
                message: '删除成功!'
              })
              this.getroleList();
           }
          })
         
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      },
      getgetallcompany() {
        getallcompany().then(res => {
          this.datas = res.datas;
        })
      },
      getcaidan() {
          getstructure().then(res => {
            this.data2 = res.datas;
          })
      },
      fenpeiquanxian(id) {
        this.ruform.roleId = id;
        this.dialogFormVisible1 = true
       
        getallroleaccessresource( id).then(res => {
          console.log(res)
         let arrs = [];
         if (res.datas.length) {
            res.datas.forEach(item => {
              arrs.push(item.menuId)
            })
         }
         this.data3 = arrs; 
        this.$refs.tree.setCheckedKeys(this.data3);
        })
      },
      quanbuquanxian() {
          getallmenuid().then(res => {
            this.data4 = res.datas;
          })
      },
      baocun() {
          this.ruform.menuId = this.$refs.tree.getCheckedKeys();
          massPrivilegeForRole(this.ruform).then(res => {
            if (res.code == 200) {
              this.open3('成功给该角色分配权限');
              this.dialogFormVisible1 = false
            } else {
              this.open6(res.message)
            }
          })
      }
    },
    mounted() {
      this.getroleList();
      this.getgetallcompany();
      this.getcaidan();
      this.quanbuquanxian();
    },
    watch: {
      companyId(str) {
        getrolesbydepart(str).then(res => {
              res.datas.forEach(element => {
                element.createTime = formaTime(element.createTime)
              });
            this.tableData = res.datas;
        })
      }
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
    .kuangzi{
      height: 800px;
      overflow-y: auto;
    }
    .el-select{
      float: left;
    }

}

</style>
