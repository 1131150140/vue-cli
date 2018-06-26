<template>
<div class="FlowEdit">
    <div class="content">
        <div class="liucheng" v-for="(item, index) in data" :key="item.id">
            <div class=liuchengm>{{item.nodeName}}</div>
            <div class="xiayi">
                <el-button type="primary"  icon="el-icon-edit" @click="xiugai(index)" circle></el-button>
                <el-button type="danger"  icon="el-icon-delete" @click="shanchu(index)" circle></el-button>
            </div>
            <div class="xian">
                <div class="xian_xian" style="border-right:1px solid #e3e3e3">
                    <i class="el-icon-circle-plus weizhi" @click="dianji(index)"></i>
                </div>
                 <div class="xian_xian"></div>
            </div>   
        </div>
        <div class="dibu">
             <el-button type="primary" @click="baocun">保存更新</el-button>
             <el-button @click="fanhui">返回上一步</el-button>
        </div>

      <el-dialog title="新增流程"  :visible.sync="dialogFormVisible1">
       <el-form >
         <el-form-item label="流程名称" :label-width="formLabelWidth">
           <el-input v-model="name"  auto-complete="off"></el-input>
         </el-form-item>
          <el-form-item label="nodeURL" :label-width="formLabelWidth">
           <el-input v-model="nodeUrl"  auto-complete="off"></el-input>
         </el-form-item>
       </el-form>
       <div slot="footer" class="dialog-footer">
         <el-button @click="dialogFormVisible1 = false" size="small">取 消</el-button>
         <el-button type="primary" @click="add" size="small">添加</el-button>
       </div>
     </el-dialog>

      <el-dialog title="修改流程信息"  :visible.sync="dialogFormVisible2">
       <el-form >
         <el-form-item label="流程名称" :label-width="formLabelWidth">
           <el-input v-model="name"  auto-complete="off"></el-input>
         </el-form-item>
          <el-form-item label="nodeURL" :label-width="formLabelWidth">
           <el-input v-model="nodeUrl"  auto-complete="off"></el-input>
         </el-form-item>
       </el-form>
       <div slot="footer" class="dialog-footer">
         <el-button @click="dialogFormVisible2 = false" size="small">取 消</el-button>
         <el-button type="primary" @click="update" size="small">修改</el-button>
       </div>
     </el-dialog>
       

    </div>
</div>
</template>


<script>
import {financialSchemeList, financialSchemeDel, flowshow, flowEdit} from '@/api/index'
import {formaTime} from '@/assets/utils'
import Paging from '@/common/Paging'
  export default {
    data() {
      return {
        active: 0,
        data: [],
        dialogFormVisible1: false,
        dialogFormVisible2: false,
        name: '',
        nodeUrl: '',
        formLabelWidth: '100px',
        flowId: '',
        index: ''
      };
    },
    methods: {
        getliucheng() {
            this.flowId = this.$route.query.id;
            flowshow(this.flowId).then(res => {
               this.data = res.data;
            })
        },
        shanchu(index) {
            this.data.splice(index, 1)
        },
        dianji(index) {
            this.index= index;
            this.dialogFormVisible1 = true;
        },
        fanhui() {
            window.history.go(-1)
        },
        add() {
            const str = {
                flowId: this.flowId,
                nodeName: this.name,
                nodeUrl: this.nodeUrl
            }
            this.data.splice(this.index + 1, 0, str)
            this.dialogFormVisible1 = false;
        },
        baocun() {
            this.data.forEach((item,index) => {
                item.sort = index;
            })
            const arr = {
                "flowId": this.flowId,
                "flowName": "贷款流程",
                "list": this.data
            }
            flowEdit(arr).then(res => {
                if(res.code == 200) {
                     this.$message({
		                 type: 'success',
		                 message: '保存成功'
		             });
                } else {
                    this.$message({
						type: 'error',
						message: res.message
					});
                }
            })
        },
        xiugai(index) {
            this.dialogFormVisible2 = true;
            this.name = this.data[index].nodeName;
            this.nodeUrl = this.data[index].nodeUrl;
            this.index = index;
        },
        update() {
            this.data[this.index].nodeName = this.name;
            this.data[this.index].nodeUrl = this.nodeUrl;
            this.dialogFormVisible2 = false;
        }
    },
        mounted() {
        this.getliucheng();
        }
  };
</script>

<style lang="less">
    .FlowEdit{
        border-right: 4px solid #fafafa;
        height: 100%;
        padding: 20px 200px;
        .jiegou{
            width: 100%;
            height: 36px;
            line-height: 36px;
            box-sizing: border-box;
            padding-left: 10px;
        }
    }
     .liucheng{
         width: 230px;
         height: 165px;
         margin: 0 auto;
         text-align: center;
         .liuchengm{
             width: 230px;
             height: 40px;
             text-align: center;
              line-height: 40px;
               box-sizing: border-box;
              border: 1px solid #e3e3e3;
         }
         .xiayi{
             border: 1px solid #e3e3e3;
             margin-top: -1px;
             box-sizing: border-box;
             padding-top: 10px;
             padding-bottom: 10px;
         }
         .xian{
             height: 66px;
             position: relative;
             margin-top: -1px;
             .xian_xian{
                width: 115px;
                height: 66px;
                .weizhi{
                    float: right;
                    position: relative;
                    right: -9px;
                    top: 26px;
                }
             }  
         }
     }
     .dibu{
         position: fixed;
         width: 230px;
         height: 50px;
         bottom: 0;
        right: 10px;
         border-top: 1px solid #e3e3e3;
     }
    
     
</style>
