<template>
  <div class="companyAdd">
     <div class="guanli">
      <span style="color:#909399" >密码修改</span>
     </div>
     
     <el-form :model="ruleForm"  ref="ruleForm" label-width="100px" class="demo-ruleForm">
       <el-row>
           <el-col :span="10">
            <el-form-item class="bitian" label="原密码" prop="name">
                <el-input size="small" type="password" placeholder="请输入账号原密码" v-model="ruleForm.oldPassword"></el-input>
              </el-form-item>
         </el-col>
       </el-row>
        <el-row>
           <el-col :span="10">
            <el-form-item class="bitian" label="新密码" prop="name">
                <el-input size="small" placeholder="请输入账号新密码" type="password" v-model="ruleForm.password"></el-input>
              </el-form-item>
         </el-col>
       </el-row>
        <el-row>
           <el-col :span="10">
            <el-form-item class="bitian" label="确认密码" prop="name">
                <el-input size="small" placeholder="请重新输入一遍新密码" type="password" v-model="confromPassword"></el-input>
              </el-form-item>
         </el-col>
       </el-row>
  <el-form-item>
    <el-button type="primary" size="small" @click="submitForm">修改密码</el-button>
    <el-button @click="fanhui" size="small">返回上一页</el-button>
  </el-form-item>
</el-form>

  </div>
 </template>
     

   

<script>
import {changepwd  } from '@/api/index'
export default {
   data() {
     return {
        ruleForm: {
          "password": "",
          "oldPassword": "",
        },
        confromPassword: '',
        formLabelWidth: '100px'

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
      submitForm() {
        if (!this.ruleForm.oldPassword) {
            this.open6('请输入账号原密码')
            return false;
        }
        if (!this.ruleForm.password) {
            this.open6('请输入修改的新密码!')
            return false;
        }
        if (this.ruleForm.password.length < 6 || this.ruleForm.password.length > 15 ) {
            this.open6('请输入密码，密码长度为6到15位之间!');
            return false;
        }
        if (this.ruleForm.password != this.confromPassword) {
            this.open6('两次输入的密码不一致，请重新输入！')
            return false;
        }

        changepwd(this.ruleForm).then(res => {
          if (res.code == 200) {
              this.open3('新密码设置成功，请重新登录!')
              this.$router.push({path: '/'});
          } else {
              this.open6(res.message)
          }
        })
      }
    }
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
