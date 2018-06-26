<template>
  <div class="companyAdd">
     <div class="guanli">
      <span style="color:#909399" >信息修改</span>
     </div>
     <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
       <el-row :gutter="12">
         <el-col :span="10">
         </el-col>
         <el-col :span="10">
            <el-form-item class="bitian" :label="companyName+ '名称'" prop="name">
                <el-input size="small" v-model="ruleForm.name"></el-input>
              </el-form-item>
         </el-col>
       </el-row>
       <el-row :gutter="12">
          <el-col :span="10">
              <el-form-item :label="companyName+ '负责人'" prop="master">
                <el-input size="small" v-model="ruleForm.master"></el-input>
              </el-form-item>
         </el-col>
          <el-col :span="10">
              <el-form-item label="负责人电话" prop="mobile">
                <el-input size="small" v-model="ruleForm.mobile"></el-input>
              </el-form-item>
         </el-col>
       </el-row>
  <el-form-item label="备注信息" prop="desc">
    <el-input type="textarea" v-model="ruleForm.mark"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" size="small" @click="submitForm('ruleForm')">修改信息</el-button>
    <el-button @click="fanhui" size="small">返回上一页</el-button>
  </el-form-item>
</el-form>
    
  </div>
  
 </template>
     

   

<script>
import {updatexinxi, getqiyexinxi} from '@/api/index'
export default {
   data() {
     return {
        ruleForm: {
          fatherDepartId: '',
          mobile: '',
          name: '',
          master: '',
          mark: '',
          departType: 'COMPANY'
        },
        companyName: '',
         rules: {
          name: [
            { required: true, message: '请输入公司名字', trigger: 'blur' },
            { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
          ]
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
      
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            updatexinxi(this.ruleForm).then(res => {
              if (res.code == 200) {
                  this.open3('成功修改信息');
                  // this.$router.push({path: '/hello'})
              } else {
                this.open6(res.message)
              }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      dianji() {
        console.log('111')
      },
      getqiyexinxi() {
        let ss =this.$route.query.parentId;
        getqiyexinxi(ss).then(res => {
          if (res.code == 200) {
              this.ruleForm = res.data;
          }
        })
        
      }
    },
     mounted() {
          this.getqiyexinxi();
     },
     watch: {
       ruleForm() {
         if (this.ruleForm.departType == 'DEPARTMENT') {
            this.companyName = '部门'
         } else {
           this.companyName = '公司'
         }
       }
     }
  };


</script>

<style lang="less">
.companyAdd {
  min-width: 990px;
  .guanli{
    width: 100%;
    height: 50px;
    line-height: 50px;
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
   .el-form-item.is-required .el-form-item__label:before {
      content: '';
    }
    .dianji{
      position: relative;
      .sousuo{
        width: 40px;
        height: 40px;
        display: inline-block;
        position: absolute;
        right: 0;
        top: 0;
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
