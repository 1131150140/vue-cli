<template>
  <div class="Zhenxinpanduan">
      <PanduanPic ></PanduanPic>
      <el-form :inline="true" :label-position="labelPosition" :model="formInline"  class="demo-form-inline">
        <el-row :gutter="10" class="flexju">
       <el-col :span="8" style="padding:0"><div class="grid-content bg-purple">
            <el-form-item label="银行征信意见">
            <el-select v-model="formInline.bankCreditResult" placeholder="征信意见" :disabled='ok'>
            <el-option label="禁入" value="禁入"></el-option>
            <el-option label="关注" value="关注"></el-option>
            <el-option label="正常" value="正常"></el-option>
             <el-option label="通融" value="通融"></el-option>
              <el-option label="无信息" value="无信息"></el-option>
               <el-option label="退回" value="退回"></el-option>
            </el-select>
            </el-form-item></div>
        </el-col>
        <el-col :span="8"><div class="grid-content bg-purple">
            <el-form-item label="审核结果">
            <el-select  v-model="formInline.result"  placeholder="审核结果" :disabled='ok'>
            <el-option label="通过" value="通过"></el-option>
            <el-option label="不通过" value="不通过"></el-option>
            </el-select>
            </el-form-item></div>
        </el-col>
        <el-col :span="8" style="padding:0"><div class="grid-content bg-purple">
            <el-form-item label="征信查询日期">
           <el-date-picker :disabled='ok'
            type="datetime"
            v-model="formInline.date"
            placeholder="选择日期"
            format="yyyy-MM-dd HH:SS:MM"
            value-format="timestamp">
            </el-date-picker>
        </el-form-item></div></el-col>
       
        </el-row>
         <el-form-item label="征信备注" class="textleft">
            <el-input type="textarea" style="width:534px" class="beizhu" v-model="formInline.content" :disabled='ok'></el-input>
        </el-form-item>
        </el-form>
         <div class="margintop">
           
            <el-button @click="fanhui">返回上一页</el-button>
            <el-button @click="hanlebaocun" type="primary">一键合成下载图片</el-button>
            <el-button  @click="tijiao" type="success" :disabled='ok'>提交</el-button>
        </div>
        

  </div>
</template>

<script>
import PanduanPic from '@/components/PanduanPic'
import {zhenxinshenhetijiao, zhengxinxiangqing} from '../../api/index'
export default {
    data() {
        return {
            labelPosition: 'right',
            formInline: {
                'bankCreditResult': '',
                'result': '',
                'applicationFormId': '',
                'creditName': '',
                'content': '',
                'tradeNo': '',
                'id': '',
                'date': ''
            },
            zhenxinId: '',
            ok : false
            
        }
    },
    components: {
        PanduanPic
    },
    methods: {
        fanhui() {
            window.history.go(-1);
        },
        getzhengxinxiangqing() {
            zhengxinxiangqing({'id': this.zhenxinId}).then(res => {
                if (res.data.result) {
                    this.ok = true;
                    this.formInline.bankCreditResult = res.data.bankCreditResult;
                    this.formInline.result = res.data.result;
                    this.formInline.date = (new Date(res.data.updateDate)).getTime();
                    this.formInline.content = res.data.content;
                }
            })
        },
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
        hanlebaocun() {
            this.$bus.emit('load', '下载合成');
        },
        tijiao() {
            if (!this.formInline.bankCreditResult) {
                this.open6('请选择银行征信意见！')
                return;
            } else if (!this.formInline.result) {
                this.open6('请选择审核结果！')
                return;
            }else if (!this.formInline.date) {
                this.open6('请选择征信查询时间')
                return;
            }
           zhenxinshenhetijiao(this.formInline).then(res => {
               if (res.code == 200) {
                   this.open3('成功提交！')
                     this.$router.push({path:'zhenxinList'})
               } else {
                   this.open6(res.message)
               }
           })
        },
        hanleCreditName(key,value) {
            this.formInline[key] = value;
        }
    },
    mounted() {
        this.formInline.applicationFormId = localStorage.getItem('applicationFormId');
        this.zhenxinId = localStorage.getItem('zhenxinId');
        this.getzhengxinxiangqing();
    },
    created() {
        const start = (new Date()).valueOf();
         this.formInline.date = start;
        this.$bus.on('creditName', this.hanleCreditName.bind(this, 'creditName'))
        this.$bus.on('id', this.hanleCreditName.bind(this, 'id'))
        this.$bus.on('tradeNo', this.hanleCreditName.bind(this, 'tradeNo'))
    },
    beforeDestroy() {
         this.$bus.off('creditName', this.hanleCreditName)
         this.$bus.off('id', this.hanleCreditName)
         this.$bus.off('tradeNo', this.hanleCreditName)
    }
}
</script>

<style lang="less" scoped>
.Zhenxinpanduan{
    width: 990px;
    margin: 0 auto;
   .el-form-item__content{
       width: 230px !important;
   }
}
.demo-form-inline{
    margin-top: 20px;
}

.el-textarea__inner{
    min-height: 120px!important;
}
.margintop{
    text-align: center
}
.el-input{
    width:220px!important;
}


</style>
