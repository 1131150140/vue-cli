<template>
  <div class="companyAdd">
     <div class="guanli">
      <span style="color:#909399" >新增银行</span>
     </div>
     <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
       <el-row :gutter="12">
         <el-col :span="10">
            <el-form-item class="bitian" label="金融方案名称" prop="name">
                <el-input size="small" v-model="ruleForm.name"></el-input>
              </el-form-item>
         </el-col>
       </el-row>
        <el-row :gutter="12">
         <el-col :span="10">
            <el-form-item class="bitian" label="月数" prop="name">
                <el-input size="small" type="number" v-model="ruleForm.monthNumber"></el-input>
              </el-form-item>
         </el-col>
       </el-row>
        <el-row :gutter="12">
         <el-col :span="10">
            <el-form-item class="bitian" label="银行费率" prop="name">
                <el-input size="small" v-model="ruleForm.bankRate"></el-input>
              </el-form-item>
         </el-col>
       </el-row>
        <el-row :gutter="12">
         <el-col :span="10">
            <el-form-item class="bitian" label="公司服务费率" prop="name">
                <el-input size="small" v-model="ruleForm.serverChargeRate"></el-input>
              </el-form-item>
         </el-col>
       </el-row>
        <el-row :gutter="12">
         <el-col :span="10">
            <el-form-item class="bitian" label="银行" prop="name">
            <el-select  size="small" v-model="ruleForm.bankName" class="kuandu" placeholder="请选择银行">
               <el-option v-for="item in bankList" :key="item.id" :value="item.name" >{{item.name}}</el-option>
            </el-select>
            </el-form-item>
         </el-col>
       </el-row>
        <el-form-item label="备注信息" prop="desc">
          <el-input type="textarea" v-model="ruleForm.remarks"></el-input>
        </el-form-item>
        
  <el-form-item>
    <el-button size="small" type="primary" @click="submitForm">立即创建</el-button>
    <el-button size="small" @click="fanhui">返回上一页</el-button>
  </el-form-item>
</el-form>

  </div>  
 </template>

<script>
import {financialSchemeCreate, getbankList} from '@/api/index'
export default {
   data() {
     return {
        ruleForm: {
          bankName: "",
          bankRate: "",
          monthNumber: '',
          name: "",
          remarks: "",
          serverChargeRate: "",
        },
        formLabelWidth: '100px',
        bankList: ''
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
        getxinxi() {
            getbankList().then(res => {
              this.bankList = res.data.list;
            })
        },
      
      submitForm() {
        if (!this.ruleForm.name) {
            this.open6('请输入金融方案名称!')
            return false;
        }
        if (!this.ruleForm.monthNumber) {
            this.open6('请输入月数！')
            return false
        }
        if (!this.ruleForm.serverChargeRate) {
            this.open6('请输入银行费率！')
            return false
        }
        if(!this.ruleForm.bankName) {
            this.open6('请选择银行!')
            return false
        }


        financialSchemeCreate(this.ruleForm).then(res => {
          if (res.code == 200) {
               this.open3('成功添加贷款产品!');
          } else {
                this.open6(res.message)
          }
        })
      },
    },
     mounted () {
        this.getxinxi();
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
  .kuandu{
    width: 100%;
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
