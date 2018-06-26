<template>
    <div class="ziliaoshenhe">
        <div class="shenheliu">
      <Shenheliu></Shenheliu>
     <Shifoudian :fin="financialScheme" :veh="vehicleInfo" :len= "lenderList[0]"></Shifoudian>

     <el-tabs v-model="activeName2"  type="card" >
        <el-tab-pane v-for="item in lenderList" :key="item.id" :label="item.lenderTypeName" :name="item.id">
            <Qiandangeren :geren="item" />
        </el-tab-pane>
        <el-tab-pane label="汽车信息" name="third">
            <Qiche :prop="vehicleInfo"/>
        </el-tab-pane>
        <el-tab-pane label="金融信息" name="fourth">
            <Jinrongxinxi ref="jinrong" :bankname ="bankName" :loanProductId='loanProductId'  :prop="financialScheme" />
        </el-tab-pane>
    </el-tabs>
    
        <el-form v-if="ok" :inline="true" :label-position="labelPosition" style="padding:0 50px;margin-top:20px;" :model="formInline"  class="demo-form-inline">
        <el-row :gutter="10" class="flexju">
        <el-col :span="12"><div class="grid-content bg-purple">
            <el-form-item label="审核状态">
            <el-select  v-model="result"  placeholder="审核结果" >
            <el-option label="通过" value="1"></el-option>
            <el-option label="驳回" value="0"></el-option>
             <el-option label="拒单" value="-1"></el-option>
            </el-select>
            </el-form-item></div>
        </el-col>
        </el-row>
         <el-form-item label="审核备注" class="textleft" style="width:100%" >
          <div class="el-form-item__content" style="width:100%!important">
              <div data-v-467b687c="" class="el-textarea">
                  <textarea class="el-textarea__inner qubie" v-model="content" style="min-height: 33px;"></textarea>
                  </div><!----></div>
        </el-form-item>
        </el-form>
     <div class="margintop">
            <el-button @click="fanhui">返回上一页</el-button>
          
            <el-button v-if="ok"  @click="gettijiao" type="success" >提交</el-button>
        </div>
            
  </div>
    </div>
</template>

<script>
import Shenheliu from '../../components/Shenheliu'
import Qiandangeren from '../../components/Qiandangeren'
import Qiche from '../../components/Qiche'
import Jinrongxinxi from '../../components/Jinrongxinxi'
import Shifoudian from './Shifoudian'
import {qiandancaiji, bohui, jibenxinxi, baocunjinrong} from '../../api/index'
export default {
    data() {
        return{
            formInline: {
               user: '',
               region: ''
            },
             labelPosition: 'right',
            activeName: '1',
            activeName2: '',
            ss: {
                'applicationFormId': ''
            },
            lenderList: [],
            vehicleInfo: {},
            financialScheme: {},
            bankName: '',
            loanProductId: '',
            nodeId: '',
            result: '',
            content: '',
            ok: 'true',
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
        getqiandan() {
            qiandancaiji(this.ss).then(res => {
               console.log(res);
                this.lenderList = res.data.lenderList;
                this.activeName2 = this.lenderList[0].id;
                this.vehicleInfo = res.data.vehicleInfo;
                this.financialScheme = res.data.financialScheme;
                this.loanProductId = res.data.financialScheme.loanProduct.id;
                this.bankName = res.data.bankName
                
            })
        },
        gettijiao() {
            if (this.result === '') {
                this.open6('请选择审核状态!')
                return;
            }
            let ss = {
                "applicationFormId": this.ss.applicationFormId,
                "content": this.content,
                "flowId": 1,
                "nodeId": this.nodeId,
                "result": this.result
            };
            bohui(ss).then(res => {
                if (res.code == 200) {
                    this.open3('提交成功');
                    this.$router.push({path: '/orderList'})
                } else {
                    this.open6(res.message)
                }
            })
            
        },
        fanhui() {
            window.history.go(-1);
        },
        getnodeId() {
            jibenxinxi(this.ss).then(res => {
                 this.nodeId = res.data.nodeId;
                 if (this.nodeId == 'a00182ae3458440faa546f147f8d82cc') {
                    this.ok = false;
                 }
            })
        }
    },
    components: {
        Shenheliu,
        Qiandangeren,
        Qiche,
        Jinrongxinxi,
        Shifoudian
    },
    mounted() {
        this.ss.applicationFormId = localStorage.getItem('applicationFormId');
        this.getnodeId();
        this.getqiandan();
    }
}
    
</script>
<style lang="less">
.ziliaoshenhe{
    min-width: 990px;
    .el-tabs--card{
    box-sizing: border-box;
    padding: 0 57px;
}
.el-form-item{
    padding-left: 10px;
}
.el-form-item__label{
    width: 100px!important;
}
.margintop{
    text-align: center
}
.el-form-item {
    margin-bottom: 5px!important;
   
}
.textleft{
    width: 100%;
}
.textleft .el-form-item__content{
    width: 70%!important;
}

.xiangqing, .xiangqing .el-form-item__content{
    width: 300px;
}
.cheliangpinpai,.cheliangpinpai .el-input__inner {
    width:115px!important;
}
.el-input__inner{
    width:178px;
}
.el-form-item__content{
    width:178px;
}
.grid-content {
    text-align: left;
}
}







    
</style>