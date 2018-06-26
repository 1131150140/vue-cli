<template>
  <div>
       <el-form :inline="true" :model="formInline" class="demo-form-inline">
       
       <el-form-item size="small" label="贷款产品" class="bitian">
            <el-select v-model="loanProduct" class="gender" placeholder="请选择">
            <el-option v-for="item in list" :key="item.id" :label="item.name"  :value="item.id">{{item.name}}</el-option>
            </el-select>
        </el-form-item>
         <el-form-item label="执行费率" class="bitian">
            <el-input   size="small" v-model="prop.executeRate"></el-input>
        </el-form-item>
         <el-form-item label="评估价" class="bitian">
            <el-input   size="small" v-model="prop.preVehiclePrice"></el-input>
        </el-form-item>
         <el-form-item label="车价" >
            <el-input  disabled size="small" v-model="prop.preVehiclePrice"></el-input>
        </el-form-item>
        <el-form-item label="贷款期数" >
            <el-input  disabled size="small" v-model="bankMortgagePeriod"></el-input>
        </el-form-item>
        <el-form-item label="贷款金额" class="bitian">
            <el-input   size="small" v-model="prop.instalmentPrincipal"></el-input>
        </el-form-item>
        
         <el-form-item label="分期本金" >
            <el-input disabled  size="small" v-model="prop.realLoanFee"></el-input>
        </el-form-item>
        <el-form-item label="首付款" >
            <el-input disabled  size="small" v-model="prop.firstPayment"></el-input>
        </el-form-item>
         <el-form-item label="首付比例" >
            <el-input disabled  size="small" v-model="prop.firstPaymentRate"></el-input>
        </el-form-item>
       
        
         <el-form-item label="贷款比例" >
            <el-input  disabled size="small" v-model="prop.loanRate"></el-input>
        </el-form-item>
         <el-form-item label="银行手续费" >
            <el-input  disabled size="small" v-model="prop.bankServiceCharge"></el-input>
        </el-form-item>
        <el-form-item label="银行费率" >
            <el-input  disabled size="small" v-model="bankServiceChargeRate"></el-input>
        </el-form-item>
       
        <el-form-item label="分期总额" >
            <el-input disabled  size="small" v-model="prop.totalInstalment"></el-input>
        </el-form-item>
        <el-form-item label="首月还款" >
            <el-input disabled   size="small" v-model="prop.firstMonthRepayments"></el-input>
        </el-form-item>
        <el-form-item label="每月还款" >
            <el-input  disabled size="small" v-model="prop.monthlyRepayment"></el-input>
        </el-form-item>
        <el-form-item label="公司服务费" >
            <el-input disabled  size="small" v-model="prop.companyServiceCharge"></el-input>
        </el-form-item>
        
       <el-row>
           <el-button type="primary" @click="jisuan" plain>按公式计算</el-button>
       </el-row>
       
    </el-form>
  </div>
</template>

<script>
import {chaxundaikuan, jisuanjinrong, baocunjinrong} from '../api/index'
export default {
    data() {
        return {
            formInline: {
               user: '',
               region: ''
            },
            name: '',
             ss: {
                'applicationFormId': ''
            },
            props: {},
            list: [],
                loanProduct: '',
                bankMortgagePeriod: '',
                bankServiceChargeRate: ''
            
        }
    },
    props: {
        bankname: String,
        prop: Object,
        loanProductId: String
    },
    methods: {
        jisuan() {
                if (!this.loanProduct) {
                    this.open6('请选择贷款产品!')
                    return;
                }
                if (!this.prop.executeRate) {
                    this.open6('请填写执行费率!')
                    return;
                }
                if (!this.prop.preVehiclePrice) {
                    this.open6('请填写贷款金额!')
                    return;
                }
                let ss = {
                    "bankMortgagePeriod": this.bankMortgagePeriod,
                    "bankServiceChargeRate": this.bankServiceChargeRate,
                    "executeRate": this.prop.executeRate,
                    "instalmentPrincipal": this.prop.instalmentPrincipal,
                    "vehiclePrice": this.prop.preVehiclePrice,
                    'bankName': this.bankname
                }
                jisuanjinrong(ss).then(res => {
                    if (res.code == 200) {
                        this.props = Object.assign(this.prop,res.data,{applicationForm: {'id': this.ss.applicationFormId}}, {loanProduct: {'id': this.loanProduct}} )
                        let ss = {
                            'data': JSON.stringify({
                                'financialScheme': this.props
                            })
                        }
                        baocunjinrong(ss).then(res => {
                            if (res.code == 200) {
                                this.open3('计算成功！')
                            } else {
                                this.open6(res.message)
                            }
                        })
                    } else {
                        this.open6(res.message)
                    }
                })
        },
        open6(msg) {
        this.$notify.error({
          title: '错误',
          message: msg
        });
      },
       open3(msg) {
        this.$notify({
          title: '成功',
          message: msg,
          type: 'success'
        })
       }  
    },
    watch: {
       bankname() {
            let ss = {
                'bankName' : this.bankname
            }
            chaxundaikuan(ss).then(res => {
                 this.list = res.data.list;
                 this.list.forEach(element => {
              if (element.id == this.loanProduct) {
                  this.bankMortgagePeriod = element.monthNumber;
                  this.bankServiceChargeRate = element.bankRate;
              }
          });
            })
       },
       prop() {

       },
       loanProductId(str) {
            this.loanProduct = str; 
       },
       loanProduct(str) {
          this.list.forEach(element => {
              if (element.id == str) {
                  this.bankMortgagePeriod = element.monthNumber;
                  this.bankServiceChargeRate = element.bankRate;
              }
          });
       }
      
    },
    mounted() {
       
       
        this.ss.applicationFormId = localStorage.getItem('applicationFormId')
       
        
    }

}
</script>

<style scoped>
.el-form-item__label{
    width: 82px;
}
.el-tab-pane{
    text-align: left;
}
.bitian::after{
    content: '*';
    color: #409EFF;
    position: absolute;
    right: -10px;
    top: 12px
}
.bitian{
    position: relative;
}
.el-input__inner{
    width: 178px;
    height: 32px;
}
.el-date-editor{
    width: 178px!important;
}

</style>
