<template>
  <div class="companyAdd">
     <div class="guanli">
      <span style="color:#909399" >银行资料修改</span>
     </div>
     
     <el-form :model="ruleForm"  ref="ruleForm" label-width="100px" class="demo-ruleForm">
       <el-row :gutter="12">
       
       </el-row>
       <el-row>
           <el-col :span="10">
            <el-form-item class="bitian" label="银行名称" prop="name">
                <el-input size="small" v-model="ruleForm.name"></el-input>
              </el-form-item>
         </el-col>
       </el-row>
        <el-row>
           <el-col :span="10">
            <el-form-item class="bitian" label="银行地址" prop="name">
                <el-input size="small"  v-model="ruleForm.address"></el-input>
              </el-form-item>
         </el-col>
       </el-row>
  <el-form-item>
    <el-button type="primary" size="small" @click="submitForm">保存修改</el-button>
    <el-button @click="fanhui" size="small">返回上一页</el-button>
  </el-form-item>
</el-form>
  </div>
 </template>


<script>
import { bankList, bankEdit} from '@/api/index'
export default {
   data() {
     return {
        ruleForm: {
          "name": "",
          "resource": ""
        },
        confromPassword: '',
        filterText: '',
        data2: [],
         defaultProps: {
          children: 'children',
          label: 'name'
        },
        dialogFormVisible1: false,
        formLabelWidth: '100px',
        companyName: '',

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
        
        if (!this.ruleForm.name) {
            this.open6('请填写银行名称!')
            return false;
        }
        
        bankEdit (this.ruleForm).then(res => {
          if (res.code == 200) {
              this.open3('保存修改成功!')
              this.$router.push({path: '/bankList'})
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
       getxinxi() {
          let id = this.$route.query.id;
          bankList({'id': id}).then(res => {
            this.ruleForm = res.data && res.data.list && res.data.list[0];
          })
         
      }
    },
     mounted() {
           this.getxinxi();
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
