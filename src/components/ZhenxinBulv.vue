<template>
<div class="zhenxinBulv">
    <el-form :inline="true" :label-position="labelPosition"  class="demo-form-inline">
   <el-row :gutter="20" class="kuandu"> 
       <el-col :span="20"><div class="grid-content bg-purple">
    <el-form-item label="请选择与主贷人关系" >
    <el-select v-model="bankname" class="kuandu" placeholder="请选择与主贷人关系">
      <el-option label="主贷人" value="0" ></el-option>
      <el-option  label="配偶" value="2" ></el-option>
      <el-option label="担保人" value="3" ></el-option>
    </el-select>
    </el-form-item>
      </div></el-col>
   </el-row>
   </el-form>
        <OrderUser :lenderType="bankname"  ref="first" :dataShuzu="shuzu"></OrderUser>
<el-row class="xiayi">
     <el-button plain @click="fanhui">返回上一页</el-button>
     <el-button plain @click="submitOrder">补录信息</el-button>
</el-row>
</div>

</template>
<script>
 import {zhenxinbulv} from '@/api/index'
 import Picuoload from '@/common/Picupload'
 import OrderUser from '@/components/OrderUser'
     export default {
    data() {
      return {
        labelPosition: 'right',
        activeName: 'first',
        bankname: '',
        yghSessionId: '',
        shuzu: ''
      };
    },
    components: {
       Picuoload,
       OrderUser
    },
    methods: {
      open3() {
        this.$notify({
          title: '成功',
          message: '成功新建订单！',
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
      submitOrder() {
        let pops = [];
        const that = this;
        if (!this.bankname) {
            this.open6('请选择与主贷人的关系！')
            return;
        }
        const first = this.$refs.first.hanledsubmit();
        first ? pops.push(first) : '';
        if (!pops.length) {
            return;
        }
           let tijiao = {
                "applicationFormId": this.applicationFormId,
                "creditType": 0,
                'data': pops
           };
           console.log(JSON.stringify(tijiao, null, 2))
             zhenxinbulv(tijiao).then(res => {
                if (res.code == 200) {
                    that.open3();
                } else {
                    that.open6(res.message)
                }
             })
      }
    },
    watch: {
        bankname(str) {
            if (str == 0) {
                this.shuzu = '9,10,11,12,1001,1002'
            } else if (str == 2) {
                this.shuzu ='14,15,16,17,1003,1004'
            } else if (str == 3) {
                this.shuzu = '29,30,31,32,1005,1006'
            }
        }
    },
    mounted() {
        this.applicationFormId = localStorage.getItem('applicationFormId');     
    }
  }
</script>
<style scoped lang="less">
.zhenxinBulv{
    width: 990px;
    margin: 0 auto;
    .kuandu{
     width: 100%;
     display: flex;
     justify-content: center;
    }
    .el-form-item{
        width: 100%;
    }
    .el-form-item__content{
        width: 70%;
    }
    .dinggao{
        height: 174px;
        overflow: hidden;
    }
    .xiayi{
        margin-top: 30px;
    }
}
 

</style>
