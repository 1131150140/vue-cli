<template>
<div class=" orderAdd">
    <el-form :inline="true" :label-position="labelPosition"  class="demo-form-inline">
   <el-row :gutter="20" class="kuandu"> 
       <el-col :span="20"><div class="grid-content bg-purple">
    <el-form-item label="贷款银行"  >
    <el-select v-model="bankname" size="small" class="kuandu" placeholder="请选择贷款银行">
      <el-option v-for="item in bankList" :key="item.id" :value="item.name" >{{item.name}}</el-option>
    </el-select>
    </el-form-item>
      </div></el-col>
   </el-row>
   </el-form>
    
<el-tabs v-model="activeName" @tab-click="handleClick" >
    <el-tab-pane label="主贷人"  name="first" class="tishi">
        <OrderUser :lenderType="shuzu[0].lenderType"  ref="first" :dataShuzu="shuzu[0].shuId"></OrderUser>
    </el-tab-pane>
    <el-tab-pane label="配偶"  name="second">
         <OrderUser :lenderType="shuzu[1].lenderType"  ref="second" :dataShuzu="shuzu[1].shuId"></OrderUser>
    </el-tab-pane>
    <el-tab-pane label="担保人"  name="third">
         <OrderUser :lenderType="shuzu[2].lenderType" ref="third" :dataShuzu="shuzu[2].shuId"></OrderUser>
    </el-tab-pane>
</el-tabs>

<el-row class="xiayi">
     <el-button plain @click="submitOrder">新建订单</el-button>
</el-row>
</div>

</template>
<script>
 import {orderAdd, bankList, getCategoryId} from '@/api/index'
 import Picuoload from '@/common/Picupload'
 import OrderUser from '@/components/OrderUser'
     export default {
    data() {
      return {
        labelPosition: 'right',
        activeName: 'first',
        bankname: '',
        bankList: '',
        yghSessionId: '',
        shuzu: [
            {'lenderType' : '0','shuId': '9,10,11,12,1001,1002'},
            {'lenderType' : '2','shuId': '14,15,16,17,1003,1004'},
            {'lenderType' : '3','shuId': '29,30,31,32,1005,1006'},
        ]
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
      handleClick(tab, event) {
        // console.log(tab, event);
      },
      open6(msg) {
        this.$notify.error({
          title: '错误',
          message: msg
        });
      },
      handleRemove(file, fileList) {
        // console.log(file, fileList);
      },
      handleAddRandom(str,str1) {
          this.formInline[str] = str1;
      },
      submitOrder() {
        let pops = [];
        const that = this;
        if (!this.bankname) {
            this.open6('贷款银行为空，请选择！')
            return;
        }
        const first = this.$refs.first.hanledsubmit();
        first ? pops.push(first) : '';
        const second = this.$refs.second.hanledsubmit();
        second ? pops.push(second) : '';
        const third = this.$refs.third.hanledsubmit();
        third ? pops.push(third) : '';
        if (pops.length == 0) {
            return false
        }
           let tijiao = {
            'creditName':that.bankname,
            'creditType': '0',
            'flowId': 3,
            'data': pops
           };
           console.log(JSON.stringify(tijiao, null, 2))
             orderAdd(tijiao).then(res => {
                if (res.code == 200) {
                    that.open3();
                    setTimeout(() =>  {
                        this.$router.push({path: '/orderList'})
                    },1000)
                } else {
                    that.open6(res.message)
                }
             })
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      getImgs() {
        //   const ss = ['主贷人', '配偶', '担保人'];
        //   ss.forEach(item => {
        //        getCategoryId({
        //             "category": "征信",
        //                 "type": item
        //         }).then(res => {
        //             console.log(res)
        //         })
        //   })
      }
    },
    mounted() {
        // this.getImgs();
            bankList().then(res => {
                if (res.code == 200) {
                    this.bankList = res.data && res.data.list;
                }
            })      
    }
  }
</script>
<style lang="less" >
.grid-content {
    text-align: center;
}
.orderAdd{
    width: 990px;
    margin: 0 auto;
.kuandu{
     width: 100%;
    
 }
 .demo-form-inline{
     padding-top: 10px;
 }
 .el-form-item__content{
     width: 70%!important;
 }
 .dinggao{
     height: 174px;
     width: 148px;
     overflow: hidden;
     margin-left: 90px;
     text-align: center;
     &:nth-child(0) {
         margin-left: 0
     }
 }
 
 .xiayi{
     margin-top: 30px;
     text-align: center;
 }
 
 
}
 

</style>
