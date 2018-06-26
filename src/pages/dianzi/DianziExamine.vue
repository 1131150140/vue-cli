
<template>
    <div class="dianziExamine">
        <Dianziliu :node="nodeId"></Dianziliu>
        <Dianzishuju :dian="dianzi" :list="shenhelist"></Dianzishuju>
        <div class="juzhong" >
        <el-form v-if="ok"  :inline="true" :label-position="labelPosition" style="padding:0 50px;margin-top:20px;"   class="demo-form-inline">
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
        </div>
       
        <div style="text-align:center;margin-top:10px">
            <el-button plain @click="fanhui">返回上一步</el-button>
             <el-button v-if="ok" type="primary" @click="gettijiao">提交</el-button>
        </div>

    </div>
    
</template>

<script>
import {dianzidetail, dianzitijiao} from '../../api/index'
import Dianziliu from '@/components/Dianziliu'
import Dianzishuju from '@/components/Dianzishuju'
export default {
    data() {
        return {
            ss: {
                id: ''
            },
            labelPosition: 'right',
            dianzi: {},
            nodeId: '',
            shenhelist: [],
            result: '',
            content: '',
            ok: true
        }
    },
    components: {
        Dianziliu,
        Dianzishuju
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
        getDianzidetail() {
                dianzidetail(this.ss).then(res =>{
                    this.dianzi = res.data && res.data.tAdvanceMoney;
                    this.nodeId = res.data && res.data.tAdvanceMoney.nodeId;
                    if (this.nodeId == "0d8cf588169c455fbd99faebc80fc808") {
                        this.ok = false;
                    }
                    let ss = res.data && res.data.taskInfos.reverse();
                    ss.forEach(element => {
                        if (element.result == 1) {
                            element.result = '通过'
                        } else if (element.result == 0) {
                            element.result = '不通过'
                        } else {
                            element.result = '拒单'
                        }
                    });
                    this.shenhelist = ss;
                })
        },
        fanhui() {
            window.history.go(-1)
        },
        gettijiao() {
            if (this.result == '') {
                this.open6('请选择审核状态!');
                return;
            }
            let ss = {
                    "applicationFormId": this.ss.id,
                    "content": this.content,
                    "flowId": 2,
                    "nodeId": this.nodeId,
                    "result": this.result
            }
            dianzitijiao(ss).then(res => {
                if (res.code == 200) {
                    this.open3('提交成功！')
                    this.$router.push({path:'/dianziShenhe'})
                } else {
                    this.open6(res.message)
                }
            })

        }
    },
    mounted() {
        this.ss.id = localStorage.getItem('applicationFormId'); 
        this.getDianzidetail();
    }

}
</script>

<style lang="less">
.dianziExamine{
    .juzhong{
        width: 990px;
        margin: 0 auto;
    }
    .el-form-item__label{
        width: 100px!important;
    }
    .el-input__inner, .el-form-item__content{
        width: 184px!important;
    }
    .textcen{
        text-align: center;
        margin-top: 20px;
    }
    .textleft .el-form-item__content{
        width: 70%!important;
    }
    .juzhong{
        width: 990px;
        margin: 0 auto;
    }
}


</style>
