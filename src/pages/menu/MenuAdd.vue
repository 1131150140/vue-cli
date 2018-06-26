<template>
  <div class="MenuAdd">
     <div class="guanli">
      <span style="color:#909399" >新建菜单目录</span>
     </div>
     
     <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
       <el-row :gutter="12">
         <el-col :span="10">
           <div @click="dianji" class="dianji">
              <span class="sousuo"><i class="el-icon-search"></i></span>
              <el-form-item label="上级菜单" prop="companyName">
                <el-input size="small" readonly v-model="companyName"></el-input>
              </el-form-item>
           </div> 
         </el-col>
       </el-row>
       <el-row :gutter="12">
          <el-col :span="10">
              <el-form-item label="菜单名称" prop="master">
                <el-input size="small" v-model="ruleForm.name"></el-input>
              </el-form-item>
         </el-col>
       </el-row>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
    <el-button @click="fanhui">返回上一页</el-button>
  </el-form-item>
</el-form>

 <el-dialog title="上级菜单"  :visible.sync="dialogFormVisible1">
       <el-form >
         <el-input
         size="small"
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
        
       </div>
     </el-dialog>
    
  </div>
  
 </template>
     

   

<script>
import {menuAdd, getstructure} from '@/api/index'
export default {
   data() {
     return {
        ruleForm: {
          fatherMenuId: '',
          name: '',
        },
         filterText: '',
         data2: [],
          defaultProps: {
          children: 'children',
          label: 'name'
        },
        dialogFormVisible1: false,
        companyName: ''
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
         dianji() {
        this.dialogFormVisible1 = true;
      },
      
      submitForm(formName) {
          if (!this.ruleForm.name) {
              this.open6('请填写菜单名称!')
              return 
          }
          if (!this.ruleForm.fatherMenuId) {
              delete this.ruleForm.fatherMenuId
          }
          menuAdd(this.ruleForm).then(res => {
            if (res.code == 200) {
              this.open3('成功添加菜单！')
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
      filterNode(value, data) {
        if (!value) return true;
        return data.name.indexOf(value) !== -1;
      },
      dianjixiang(str1, str2, str3) {
          this.dialogFormVisible1 = false;
          this.ruleForm.fatherMenuId = str1.id;
          this.companyName = str1.name;
        },
        getxinxi() {
          getstructure().then(res => {
            this.data2 = res.datas;
          })
        }
    },
    mounted() {
      this.getxinxi();
    }
  };


</script>

<style lang="less">
.MenuAdd {
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
