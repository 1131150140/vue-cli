
<template>
    <div class="dianzidetail">
        <Dianziliu :node="nodeId"></Dianziliu>
        <Dianzishuju :dian="dianzi" :list="shenhelist"></Dianzishuju>
        <div class="textcen">
            <el-button plain @click="fanhui">返回上一步</el-button>
        </div>

    </div>
    
</template>

<script>
import {dianzidetail} from '../../api/index'
import Dianziliu from '@/components/Dianziliu'
import Dianzishuju from '@/components/Dianzishuju'
export default {
    data() {
        return {
            ss: {
                id: ''
            },
            dianzi: {},
            nodeId: '',
            shenhelist: []
        }
    },
    components: {
        Dianziliu,
        Dianzishuju
    },
    methods: {
        getDianzidetail() {
                dianzidetail(this.ss).then(res =>{
                    console.log(res)
                    this.dianzi = res.data && res.data.tAdvanceMoney;
                    this.nodeId = res.data && res.data.tAdvanceMoney.nodeId;
                    this.shenhelist = res.data && res.data.taskInfos.reverse();
                })
        },
        fanhui() {
            window.history.go(-1)
        }
    },
    mounted() {
        this.ss.id = localStorage.getItem('applicationFormId'); 
        this.getDianzidetail();
    }

}
</script>

<style lang="less">
    .dianzidetail{

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

    }
   

</style>
