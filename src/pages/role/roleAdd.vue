<template>
  <div class="companyAdd">
     <div class="guanli">
      <span style="color:#909399" >新增角色</span>
     </div>
     
     <el-form :model="ruleForm"  ref="ruleForm" label-width="100px" class="demo-ruleForm">
       <el-row :gutter="12">
          <el-col :span="10">
           <div @click="dianji" class="dianji">
              <span class="sousuo"><i class="el-icon-search"></i></span>
              <el-form-item label="归属公司" prop="fatherDepartId">
                <el-input size="small" readonly v-model="companyName"></el-input>
              </el-form-item>
           </div>
              
         </el-col>
         <el-col :span="10">
            <el-form-item class="bitian" label="角色名称" prop="name">
                <el-input size="small" v-model="ruleForm.roleName"></el-input>
              </el-form-item>
         </el-col>
       </el-row>

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
      
  <el-form-item label="备注信息" prop="desc">
    <el-input type="textarea" v-model="ruleForm.remark"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm">立即创建</el-button>
    <el-button @click="fanhui">返回上一页</el-button>
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
import {addCompany, getqiyexinxi, getcompanystructure, userroleAdd} from '@/api/index'
export default {
   data() {
     return {
        ruleForm: {
          "departId": "",
          "remark": "",
          "roleName": "",  
          "dataScope": '',
        },
        filterText: '',
        data2: [],
         defaultProps: {
          children: 'children',
          label: 'name'
        },
        dialogFormVisible1: false,
        formLabelWidth: '100px',
        companyName: '',
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
        fanhui() {
          window.history.go(-1)
        },
        dianjixiang(str1, str2, str3) {
          if (str1.type == 'DEPARTMENT') {
              this.open6('请选择公司!');
              return;
          }
          this.dialogFormVisible1 = false;
          this.ruleForm.departId = str1.id;
          this.companyName = str1.name;
        },
      
      submitForm() {
        if (!this.ruleForm.departId) {
            this.open6('请选择归属公司!')
            return false;
        }
        if (!this.ruleForm.roleName) {
            this.open6('请填写角色名称!')
            return false;
        }
        this.ruleForm.dataScope = JSON.stringify(this.dataScope)
        userroleAdd(this.ruleForm).then(res => {
          if (res.code == 200) {
               this.open3('成功添加角色!');
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
        }
    },
  };


</script>

<style lang="less">
.companyAdd {
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
