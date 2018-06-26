<template>
  <div class="MenuAdd">
     <div class="guanli">
      <span style="color:#909399" >添加资源路径</span>
     </div>
     
     <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
       <el-row :gutter="12">
        
       </el-row>
      <el-row :gutter="12">
         <el-col :span="10">
           <div @click="dianji1" class="dianji">
              <span class="sousuo"><i class="el-icon-search"></i></span>
              <el-form-item label="上级菜单" prop="companyName">
                <el-input size="small" readonly v-model="companyName"></el-input>
              </el-form-item>
           </div> 
         </el-col>
       </el-row>
        <el-row :gutter="12">
          <el-col :span="10">
              <el-form-item label="访问名称" prop="master">
                <el-input size="small" readonly v-model="ruleForm.name"></el-input>
              </el-form-item>
         </el-col>
       </el-row>
        <el-row :gutter="12">
          <el-col :span="10">
              <el-form-item label="排序" prop="master">
                <el-input size="small" v-model="ruleForm.orderNum"></el-input>
              </el-form-item>
         </el-col>
       </el-row>
        <el-row :gutter="12">
          <el-col :span="10">
           <div @click="dianji" class="dianji">
              <span class="sousuo"><i class="el-icon-search"></i></span>
              <el-form-item label="访问路径" prop="companyName">
                <el-input size="small" readonly v-model="this.resource"></el-input>
              </el-form-item>
           </div>
              
         </el-col>
       </el-row>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">保存修改</el-button>
    <el-button @click="fanhui">返回上一页</el-button>
  </el-form-item>
</el-form>

 <el-dialog title="访问路径"  :visible.sync="dialogFormVisible1">
       <el-form >
         <el-input
         size="small"
          placeholder="输入关键字进行过滤"
          v-model="filterText">
        </el-input>
         <div role="treeitem" @click="meiyoufangwen" tabindex="0" aria-expanded="true" aria-disabled="" draggable="false" class="el-tree-node is-expanded is-focusable">
          <div class="el-tree-node__content" style="padding-left: 0px;">
            <span class="el-tree-node__expand-icon el-icon-caret-right is-leaf"></span><!----><!---->
            <span class="el-tree-node__label">没有访问路径</span></div>
            <div role="group" aria-expanded="true" class="el-tree-node__children">
          </div>
        </div>
        <el-tree
          class="filter-tree"
          :data="data3"
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

      <el-dialog title="上级菜单"  :visible.sync="dialogFormVisible2">
       <el-form >
         <el-input
         size="small"
          placeholder="输入关键字进行过滤"
          v-model="filterText">
        </el-input>
        <div role="treeitem" @click="meiyoucaidan" tabindex="0" aria-expanded="true" aria-disabled="" draggable="false" class="el-tree-node is-expanded is-focusable">
          <div class="el-tree-node__content" style="padding-left: 0px;">
            <span class="el-tree-node__expand-icon el-icon-caret-right is-leaf"></span><!----><!---->
            <span class="el-tree-node__label">没有上级菜单</span></div>
            <div role="group" aria-expanded="true" class="el-tree-node__children">
          </div>
        </div>
        <el-tree
          class="filter-tree"
          :data="data2"
          :props="defaultProps"
          default-expand-all
          @node-click="dianjixiang2"
          :filter-node-method="filterNode"
          ref="tree2">
        </el-tree>
        
       </el-form>
       <div slot="footer" class="dialog-footer">
         <el-button @click="dialogFormVisible2 = false">取 消</el-button>
        
       </div>
     </el-dialog>
    
  </div>
  
 </template>
     

   

<script>
import {menuAdd, resourceGetall, addformenu, getstructure, menuGet, resourceGetresource, menuUpdate} from '@/api/index'
export default {
   data() {
     return {
        ruleForm: {
        },
         filterText: '',
         data2: [],//上级菜单
         data3: [],//访问路径
         defaultProps: {
         children: 'children',
         label: 'name'
        },
        dialogFormVisible1: false,
         dialogFormVisible2: false,
        companyName: '',
        resource: ''
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
        meiyoucaidan() {
          this.dialogFormVisible2 = false;
          this.ruleForm.fatherMenuId = '';
          this.companyName = '';
        },
        meiyoufangwen() {
           this.dialogFormVisible1 = false;
             this.ruleForm.resourceid = '';
             this.resource = '';
        },
        open6(msg) {
            this.$notify.error({
            title: '错误',
            message: msg
            });
        },
        getallziyuan() {
            resourceGetall().then(res => {
              this.data3 = res.datas;
            })
        },
        getallcaidan() {
          getstructure().then(res => {
            this.data2 = res.datas;
          })

        },
        getId() {
          let menuid = this.$route.query.menuId;
          let parentId = this.$route.query.parentId;
          if (menuid) {
              menuGet(menuid).then(res => {
                console.log(res)
                this.ruleForm = res.data;
                if (res.data.fatherMenuId) {
                    menuGet(res.data.fatherMenuId).then(res => {
                        this.companyName = res.data.name;
                    })
                }
                if (res.data.resourceid) {
                  console.log('111')
                  resourceGetresource(res.data.resourceid).then(res => {
                   this.resource = res.data.resource;
                  })
                }
              })
          }
          if (parentId) {

          }

        },
        fanhui() {
          window.history.go(-1)
        },
        dianji() {
          this.dialogFormVisible1 = true;
        },
        dianji1() {
          this.dialogFormVisible2 = true;
        },
      
      submitForm(formName) {
          menuUpdate(this.ruleForm).then(res => {
            if (res.code == 200) {
              this.open3('成功保存修改!')
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
          console.log(str1)
          this.dialogFormVisible1 = false;
          this.ruleForm.resourceid = str1.id;
          this.resource = str1.resource;
        },
         dianjixiang2(str1, str2, str3) {
          this.dialogFormVisible2 = false;
          this.ruleForm.fatherMenuId = str1.id;
          this.companyName = str1.name;
        }
    },
    mounted() {
      this.getallziyuan();
      this.getallcaidan();
      this.getId();
    },
     watch: {
        filterText(val) {
          this.$refs.tree2.filter(val);
        }
    },
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
