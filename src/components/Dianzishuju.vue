<template>
    <div class="juzhong">
         <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="主贷人">
            <el-input v-model="dian.principalLender"  readonly size="small" ></el-input>
        </el-form-item>
         <el-form-item class="wuxiaji" label="身份证号" >
            <el-input  readonly v-model="dian.principalLenderIdCard"  size="small"></el-input>
        </el-form-item>
      
         <el-form-item label="合伙人姓名" >
            <el-input  readonly v-model="dian.partnerName" size="small"></el-input>
        </el-form-item>
         <el-form-item label="联系电话" class="wuxiaji" >
            <el-input   readonly v-model="dian.partnerPhone"  size="small"></el-input>
        </el-form-item>
         
        <el-form-item label="账号(个人)" >
            <el-input  readonly v-model="dian.bankAccount"  size="small"></el-input>
        </el-form-item>
        <el-form-item label="开户银行" >
            <el-input  readonly v-model="dian.openAccountBank" size="small"></el-input>
        </el-form-item>
        <el-form-item label="开户名" >
            <el-input  readonly v-model="dian.openAccountName" size="small"></el-input>
        </el-form-item>
        
         <el-form-item label="车辆品牌" >
            <el-input  readonly size="small" v-model="dian.carBrand"></el-input>
        </el-form-item>
        <el-form-item label="车型及排量" >
            <el-input readonly  size="small" v-model="dian.carModels" ></el-input>
        </el-form-item>
      
      
         <el-form-item label="车辆类型" >
            <el-input  readonly size="small" v-model="dian.carType" ></el-input>
        </el-form-item>
         <el-form-item label="评估价" >
            <el-input  readonly size="small" v-model="dian.preVehiclePrice" ></el-input>
        </el-form-item>
        <el-form-item label="发票价" >
            <el-input  readonly size="small" v-model="dian.invoicePrice"></el-input>
        </el-form-item>
       
        <el-form-item label="上牌地" >
            <el-input  readonly size="small" v-model="dian.licensePlateAddress"></el-input>
        </el-form-item>
        <el-form-item label="申请分期金额" >
            <el-input readonly  size="small" v-model="dian.realLoanFee" placeholder="以元为单位"></el-input>
        </el-form-item>
        <el-form-item label="垫资额" >
            <el-input readonly  size="small" v-model="dian.replacePayFee" placeholder="以元为单位"></el-input>
        </el-form-item>
        <el-form-item label="期数" >
            <el-input readonly   size="small" v-model="dian.rebateRate" ></el-input>
        </el-form-item>
        
        <el-form-item label="保证金" >
            <el-input readonly   size="small" v-model="dian.bond"></el-input>
        </el-form-item>
        <el-form-item label="总部现金" >
            <el-input  readonly  size="small" v-model="dian.headCompanyMoney"></el-input>
        </el-form-item>
        
        <el-form-item label="车商返点" >
            <el-input readonly  size="small" v-model="dian.rebateRate"></el-input>
        </el-form-item>
       <el-form-item size="small"  label="车辆登记日期" >
          <el-date-picker
            type="date"
            readonly
                v-model="dian.vehicleRegistrationTime"
             value-format="yyyy-MM-dd"
            format="yyyy-MM-dd">
            </el-date-picker>
        </el-form-item>
        <el-form-item size="small"  label="垫资申请日期" >
          <el-date-picker
            type="date"
            readonly
            v-model="dian.createDate"
             value-format="yyyy-MM-dd"
            format="yyyy-MM-dd">
            </el-date-picker>
        </el-form-item>
    </el-form>

    <div>
         <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="createDate"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="stepName"
      label="节点名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="operator"
      label="操作人">
    </el-table-column>
     <el-table-column
      prop="result"
      label="是否通过">
    </el-table-column>
      <el-table-column
      prop="content"
      label="原因">
    </el-table-column>
  </el-table>
    </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formInline: {},
            tableData: []
            }
    },
    props: {
        dian: Object,
        list: Array
    },
    watch: {
       list() {
           this.tableData = this.list;
       } 
    }

}
</script>

<style scoped>
    .juzhong{
        width: 990px;
        margin: 0 auto;
        box-sizing: border-box;
        padding-left: 50px;
    }
    .wuxiaji:after{
        content: '';
        width: 220px;
        display: inline-block;
    }
    .el-form-item{
        margin-bottom: 0;
    }
    .el-form-item__label{
        width: 100px!important;
    }

</style>
