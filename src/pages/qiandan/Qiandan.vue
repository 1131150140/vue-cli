<template>
  <div class="qiandancaiji">
        <Shenheliu></Shenheliu>
        <Shifoudian :fin="financialScheme" :veh="vehicleInfo" :len= "lenderList[0]"></Shifoudian>
     <el-tabs v-model="activeName2"  type="card" >
        <el-tab-pane v-for="item in lenderList" :key="item.id" :label="item.lenderTypeName" :name="item.id">
            <Qiandangeren :geren="item"  />
        </el-tab-pane>
        <el-tab-pane label="汽车信息" name="third">
            <Qiche :prop="vehicleInfo" />
        </el-tab-pane>
        <el-tab-pane label="金融信息" name="fourth">
            <Jinrongxinxi ref="jinrong"  :bankname ="bankName" :loanProductId='loanProductId'  :prop="financialScheme" />
        </el-tab-pane>
    </el-tabs>
     <div class="margintop">
            <el-button @click="fanhui">返回上一页</el-button>
            <el-button @click="getbohui" type="warning"> 驳回到上一流程</el-button>
             <el-button @click="getbaocun" type="primary"> 保存</el-button>
            <el-button  @click="gettijiao" type="success" >提交(提交前必须先点击保存)</el-button>
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
            nodeId: ''
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
                this.lenderList = res.data.lenderList;
                this.activeName2 = this.lenderList[0].id;
                this.vehicleInfo = res.data.vehicleInfo;
                this.financialScheme = res.data.financialScheme;
                this.loanProductId = res.data.financialScheme.loanProduct.id;
                this.bankName = res.data.bankName

            })
        },
        gettijiao() {
            if (!this.financialScheme.realLoanFee) {
                this.open6('请先计算金融信息！');
                return;
            }
            let bitians = document.querySelectorAll('.bitian');
            for (let i = 0; i < bitians.length; i++) {
                if (!bitians[i].querySelector('.el-input__inner').value) {
                    this.open6('有必填项未填写')
                    return;
                }
            }
            let ss = {
                "applicationFormId": this.ss.applicationFormId,
                "content": '通过没有问题',
                "flowId": 1,
                "nodeId": this.nodeId,
                "result": 1
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
        getbohui() {
                 let ss = {
                    "applicationFormId": this.ss.applicationFormId,
                    "content": '信息有问题驳回',
                    "flowId": 1,
                    "nodeId": this.nodeId,
                    "result": 0
                };
                bohui(ss).then(res => {
                    if (res.code == 200) {
                        this.open3('成功驳回！');
                        this.$router.push({path: '/orderList'})
                    } else {
                        this.open6(res.message);
                    }
                })
        },
        getbaocun() {

            let ss = {
                'data':JSON.stringify({
                    'lenderList': this.lenderList,
                    'vehicleInfo': this.vehicleInfo
                })
            }
            baocunjinrong(ss).then(res => {
                if (res.code == 200) {
                    this.open3('保存成功！')
                } else {
                    this.open6(res.message)
                }

            })
        },
        getnodeId() {
            jibenxinxi(this.ss).then(res => {
                 this.nodeId = res.data.nodeId;
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
.qiandancaiji{
    min-width: 990px;
.el-tabs--card{
    box-sizing: border-box;
    padding: 0 57px;
}
.el-form-item__content{
    display: inline-block;
}
.el-form-item{
    padding-left: 10px;

}
.el-form-item__label{
    width: 82px!important;
}
.margintop{
    text-align: center
}
.el-date-editor{
    width: 187px;
}
.el-input__inner{
    width: 187px;
}
.el-form-item__content{
    width: 187px;
}
.xiangqing, .xiangqing .el-form-item__content{
    width: 300px;
}
.cheliangpinpai .el-input__inner, .cheliangpinpai{
    width:115px!important;
}
.qichepai .el-dialog{
    width:900px;
}
.el-form-item {
    margin-bottom: 5px!important;
   
}
.xiangqing .el-form-item__content{
    width: 300px!important;
}
.el-form--inline{
    display: flex;
}
.el-tab-pane .el-form--inline{
     flex-wrap: wrap;
}

}





</style>
