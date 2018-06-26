<template>
  <div class="UserAdd">
     <div class="guanli">
      <span style="color:#909399" >新增用户</span>
     </div>
     
     <el-form :model="ruleForm"  ref="ruleForm" label-width="100px" class="demo-ruleForm">
       <el-row :gutter="12">
          <el-col :span="10">
           <div @click="dianji"  class="dianji" style="width:405px">
              <span class="sousuo"><i class="el-icon-search"></i></span>
              <el-form-item label="归属机构" prop="fatherDepartId">
                <el-input size="small"  readonly v-model="companyName"></el-input>
              </el-form-item>
           </div>
              
         </el-col>
       </el-row>
         <el-form-item label="用户号码" >
          <el-col :span="10">
            <el-input size="small" class="shesi" v-model="ruleForm.mobile" placeholder="请填写用户手机号作为用户登录账号"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="用户姓名" >
          <el-col :span="10">
            <el-input size="small" class="shesi" v-model="ruleForm.realname" placeholder="请填写用户姓名"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="登录密码" >
          <el-col :span="10">
            <el-input size="small" type="password" class="shesi" v-model="ruleForm.password" placeholder="设置登录密码"></el-input>
          </el-col>
        </el-form-item>
         <el-form-item label="分配角色">
          <el-col :span="10">
            <el-select size="small" @change="selectVal" v-model="ruleForm.roleid" class="shesi"  placeholder="角色选择">
              <el-option v-for="item in tableData" :key="item.id" :label="item.roleName" :value="item.id"></el-option>
             
            </el-select>
          </el-col>
        </el-form-item>
         <div class="xuanzekuang">
            <el-switch
          v-model="dataScope.companyread"
          inactive-text="企业读权限">
        </el-switch>
         <el-switch
          v-model="dataScope.companywrite"
          inactive-text="企业写权限">
        </el-switch>
        <el-switch
          v-model="dataScope.departread"
          inactive-text="部门读权限">
        </el-switch>
        <el-switch
          v-model="dataScope.departwrite"
          inactive-text="部门写权限">
        </el-switch>
         <el-switch
          v-model="dataScope.selfreadwrite"
          inactive-text="子部门读权限">
        </el-switch>
         <el-switch
          v-model="dataScope.subread"
          inactive-text="子部门写权限">
        </el-switch>
         <el-switch
          v-model="dataScope.subwrite"
          inactive-text="自己读写权限">
        </el-switch>
        </div>
    
  <el-form-item>
     
    <el-button type="primary" size="small" @click="submitForm">立即创建</el-button>
    <el-button size="small" @click="fanhui">返回上一页</el-button>
  </el-form-item>
</el-form>
    
    <el-dialog title="归属公司"  :visible.sync="dialogFormVisible1">
       <el-form >
         <el-input
          placeholder="输入关键字进行过滤"
          v-model="filterText">
        </el-input>

        <el-tree
          class="filter-tree"
          :data="data2"
          :props="defaultProps"
          default-expand-all
          @node-click="dianjixiang"
          :filter-node-method="filterNode"
          ref="tree2">
        </el-tree>
        
       </el-form>
       <div slot="footer" class="dialog-footer">
         <el-button @click="dialogFormVisible1 = false">取 消</el-button>
         <el-button type="primary" @click="chaxunyingyingshang">查询</el-button>
       </div>
     </el-dialog>

  </div>

  
  
 </template>
     

   

<script>
import {addCompany, getqiyexinxi, getcompanystructure, userroleAdd, getrolesbydepart, useradd} from '@/api/index'
export default {
   data() {
     return {
        ruleForm: {
          departid: "",
          mobile: "",
          password: "",
          realname: "",
          roleid: '',
          dataScope: '',
        },
        filterText: '',
        data2: [],
         defaultProps: {
          children: 'children',
          label: 'name'
        },
        tableData: [],
        dialogFormVisible1: false,
        formLabelWidth: '100px',
        companyName: '',
        companyId: '',
        dataScope: {
            "companyread":false,
            "companywrite":false,
            "departread":false,
            "departwrite":false,
            "selfreadwrite":false,
            "subread":false,
            "subwrite":false
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
        selectVal(ele) {
          this.tableData.forEach(item => {
              if (item.id == ele) {
                this.dataScope = JSON.parse(item.dataScope);
              }
          })
        },
        fanhui() {
          window.history.go(-1)
        },
        dianjixiang(str1, str2, str3) {
          console.log(str1)
          if (str1.type == 'COMPANY') {
              this.open6('请选择下级部门!');
              return;
          }
          this.dialogFormVisible1 = false;
          this.ruleForm.departid = str1.id;
          this.companyName = str1.name;
          this.companyId = str1.parentId;
        },
      
      submitForm() {
        if (!this.ruleForm.departid) {
            this.open6('请选择归属机构!')
            return false;
        }
        if (!this.ruleForm.mobile) {
            this.open6('请填写用户号码!')
            return false;
        }
         if (!this.ruleForm.realname) {
            this.open6('请填写用户姓名!')
            return false;
        }
        if (!this.ruleForm.password) {
            this.open6('请填写登录密码!')
            return false;
        }
         if (!this.ruleForm.roleid) {
            this.open6('请选择角色!')
            return false;
        }
        this.ruleForm.dataScope = JSON.stringify(this.dataScope)
        useradd(this.ruleForm).then(res => {
          if (res.code == 200) {
               this.open3('成功添加用户!');
          } else {
                this.open6(res.message)
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      dianji() {
        this.dialogFormVisible1 = true;
      },
      chaxunyingyingshang() {

      },
       getxinxi() {
        getcompanystructure().then(res => {
            this.data2 = res.data;
        })
      },
       filterNode(value, data) {
        if (!value) return true;
        return data.name.indexOf(value) !== -1;
      }
    },
     mounted() {
           this.getxinxi();
     },
      watch: {
        filterText(val) {
          this.$refs.tree2.filter(val);
        },
        companyId(val) {
           getrolesbydepart(val).then(res => {
             this.tableData = res.datas;
             console.log(this.tableData)
        })
        }
    },
  };


</script>

<style lang="less">
.UserAdd {
  min-width: 990px;
  .guanli{
    width: 100%;
    height: 36px;
    line-height: 36px;
    padding-left: 14px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
    .tianjiagongs{
      margin-left: auto;
      width: 100px;
      height: 30px;
      padding: 0;
      text-align: center;
      margin-right: 20px;
      
    }
  }
   .xuanzekuang{
    padding-left: 30px;
    padding-bottom: 20px;
  }
  .shesi{
    width: 305px !important;
  }
  .el-textarea__inner{
     width: 70%!important
   }
   .el-dialog{
     width: 360px;
   }
   .el-form-item.is-required .el-form-item__label:before {
      content: '';
    }
    .dianji{
      position: relative;
      .sousuo{
        width: 32px;
        height: 32px;
        display: inline-block;
        position: absolute;
        right: 0;
        top: 4px;
        z-index: 999;
        display: flex;
        align-items: center;
        justify-content: center;
        border-left: 1px solid #dcdfe6;
        i{
         font-size: 24px;
          display: inline-block;
        }
      }

    }
  
}

</style>
