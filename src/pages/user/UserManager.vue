<template>
<div class="UserManager1">
    <el-row style="height: 100%;">
    <el-col :span="4" style="height: 100%;">
        <div class="zuzhijiegou">
            <div class="jiegou"><i class="el-icon-menu"></i>组织结构</div>
             <el-tree :data="data" default-expand-all :props="defaultProps" @node-click="handleNodeClick"></el-tree>
        </div>

    </el-col>
    <el-col :span="20">
        <div class="userManager">
            <div class="jiegou"><i class="el-icon-d-caret"></i>用户管理   <el-button @click= "xinzengyonghu" class="youfu" size="small" type="primary">新增用户</el-button></div>
            
        </div>
<el-form :inline="true" :model="formInline" class="demo-form-inline">
   <el-row >
    <el-form-item label="姓名">
      <el-input v-model="formInline.realname" size="small" placeholder="用户姓名"></el-input>
    </el-form-item>
    <el-form-item label="手机号">
      <el-input v-model="formInline.mobile" placeholder="手机号码" size="small" ></el-input>
    </el-form-item>
     <el-button type="primary" class="xiayi" @click="chaxun" size="small">查询</el-button>
      <el-button type="danger" size="small" @click="qingkong" class="xiayi" >清空</el-button>
</el-row>
 <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="realname"
      label="用户名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="mobile"
      label="手机号">
    </el-table-column>
     <el-table-column
      prop="departName"
      label="归属机构">
    </el-table-column>
     <el-table-column
      prop="companyName"
      label="归属公司">
    </el-table-column>
    <el-table-column
      prop="createTime"
      label="创建时间">
    </el-table-column>
   
<el-table-column
fixed="right"
label="操作"
width="200">
<template slot-scope="scope">
   <el-button @click="handleDelete(scope.row.id,scope.$index)" type="text" >删除</el-button>
    <router-link
            :to="{ path:'/userEdit', query: {'id': scope.row.id} }"
            tag="span">
   <el-button type="text" >修改</el-button>
    </router-link>
     <el-button @click="handlePassword(scope.row.id,scope.$index)" type="text" >重置密码</el-button>
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
import {getxinxi, getcompanystructure, getalluser, userDelete, getallusers, edituibyadmin} from '@/api/index'
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
          realname: '',
          mobile: ''
        },
        total: 0,
        parms: {
          
        }
      };
    },
    methods: {
      handleNodeClick(data) {
        this.parms.departid = data.id;
        delete this.parms.realname;
        delete this.parms.mobile;
        getallusers(this.parms).then(res => {
            res.datas.forEach(element => {
                element.createTime = formaTime(element.createTime)
            });
            this.tableData = res.datas;
            this.total = res.total;
        })
      },
      qingkong() {
          this.formInline = {
            realname: '',
            mobile: ''
          }
      },
      chaxun() {
        if (!this.formInline.realname && !this.formInline.mobile) {
             this.$message({
                type: 'info',
                message: '请填写搜索条件'
              })
            return false
        }
        if (this.formInline.realname) {
            this.parms.realname = this.formInline.realname
        } else {
          delete this.parms.realname
        }
        if (this.formInline.mobile) {
          this.parms.mobile = this.formInline.mobile
        } else {
          delete this.parms.mobile
        }
        getallusers(this.parms).then(res => {
            res.datas.forEach(element => {
                element.createTime = formaTime(element.createTime)
            });
            this.tableData = res.datas;
        })

      },
      getxinxi() {
        getcompanystructure().then(res => {
            this.data = res.data;
        })
    },
    handleDelete (id, index) {
        this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'error'
        }).then(() => {
          userDelete(id).then(res => {
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
       handlePassword (id, index) {
        this.$confirm('确认要将该用户密码重置到初始状态吗？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'error'
        }).then(() => {
          edituibyadmin({id: id, password : '123456'}).then(res => {
           if (res.code == 200) {
               this.$message({
                type: 'success',
                message: '密码默认成功!'
              })
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
        this.$router.push({'path':'/userAdd'})
    },
    getUserAll(str) {
        getalluser(str).then(res => {
            res.datas.forEach(element => {
                element.createTime = formaTime(element.createTime)
            });
            this.tableData = res.datas;
            this.total = res.total;
        })
    },
    hanlePage(page) {
            this.parms.page = page - 1;
          this.getUserAll(this.parms)
      }
    },
    mounted() {
        this.getxinxi();
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
    .UserManager1{
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
     
</style>
