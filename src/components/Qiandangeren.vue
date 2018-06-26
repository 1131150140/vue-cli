<template>
  <div>
       <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="姓名" class="bitian">
            <el-input v-model="geren.name"  readonly size="small" ></el-input>
        </el-form-item>
       <el-form-item size="small" label="性别" class="bitian">
            <el-select v-model="geren.gender" class="gender" placeholder="请选择">
            <el-option label="男" value="男"></el-option>
            <el-option label="女" value="女"></el-option>
            </el-select>
        </el-form-item>
         <el-form-item label="名族" class="bitian">
            <el-input  readonly v-model="geren.nation" size="small"></el-input>
        </el-form-item>
         <el-form-item label="身份证号" class="bitian">
            <el-input  readonly v-model="geren.idCard" size="small"></el-input>
        </el-form-item>
         <el-form-item size="small" v-model="geren.birthday" label="生日" class="bitian">
          <el-date-picker
            type="date"
            v-model="geren.birthday"
             value-format="yyyy-MM-dd"
            format="yyyy-MM-dd">
            </el-date-picker>
        </el-form-item>
        <el-form-item label="户籍" class="bitian">
            <el-input  readonly v-model="geren.placeOfDomicile" size="small"></el-input>
        </el-form-item>
        <el-form-item label="身份证地址" class="bitian">
            <el-input  readonly v-model="geren.idCardResidence" size="small"></el-input>
        </el-form-item>
         <el-form-item v-if="geren.lenderTypeName != '主贷人'" size="small" label="主贷人关系" class="bitian">
            <el-select v-model="geren.lenderRelationship" class="gender" placeholder="请选择">
                    <el-option label="夫妻" value="夫妻"></el-option>
                    <el-option label="子女" value="子女"></el-option>
                    <el-option label="父母" value="父母"></el-option>
                    <el-option label="兄弟姐妹" value="兄弟姐妹"></el-option>
            </el-select>
        </el-form-item>
         <el-form-item label="邮编" class="bitian">
            <el-input   size="small" v-model="geren.postcode"></el-input>
        </el-form-item>
        <el-form-item label="手机" class="bitian">
            <el-input   size="small" v-model="geren.phoneNumber"></el-input>
        </el-form-item>
        <el-form-item size="small" label="婚姻状况" class="bitian">
            <el-select v-model="geren.isMarried" class="gender" placeholder="请选择">
                    <el-option label="已婚有子女" value="已婚有子女"></el-option>
                    <el-option label="已婚无子女" value="已婚无子女"></el-option>
                    <el-option label="未婚" value="未婚"></el-option>
                    <el-option label="离婚" value="离婚"></el-option>
                    <el-option label="再婚" value="再婚"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item size="small" label="最高学历" class="bitian">
            <el-select v-model="geren.highestDegree" class="gender" placeholder="请选择">
                    <el-option label="小学及以下" value="小学及以下"></el-option>
                    <el-option label="初中" value="初中"></el-option>
                    <el-option label="高中" value="高中"></el-option>
                    <el-option label="技校职高" value="技校职高"></el-option>
                    <el-option label="中专" value="中专"></el-option>
                    <el-option label="大学专科" value="大学专科"></el-option>
                    <el-option label="大学本科" value="大学本科"></el-option>
                    <el-option label="硕士研究生" value="硕士研究生"></el-option>
                    <el-option label="博士及以上" value="博士及以上"></el-option>
            </el-select>
        </el-form-item>
         <el-form-item label="现住地址" class="bitian">
            <el-input   size="small" v-model="geren.currentAddress"></el-input>
        </el-form-item>
         <el-form-item label="单位名称" class="bitian">
            <el-input   size="small" v-model="geren.companyName"></el-input>
        </el-form-item>
        <el-form-item label="单位地址" class="bitian">
            <el-input   size="small" v-model="geren.companyAddress"></el-input>
        </el-form-item>
        <el-form-item size="small" label="职务" class="bitian">
            <el-select v-model="geren.position" class="gender" placeholder="请选择">
                    <el-option label="高级管理人员" value="高级管理人员"></el-option>
                    <el-option label="中层管理人员" value="中层管理人员"></el-option>
                    <el-option label="普通员工" value="普通员工"></el-option>
                    <el-option label="个体私营业主" value="个体私营业主"></el-option>
                    <el-option label="其他" value="其他"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="单位电话" >
            <el-input   size="small" v-model="geren.companyPhoneNumber"></el-input>
        </el-form-item>
        <el-form-item label="年收入" >
            <el-input   size="small" v-model="geren.annualIncome" placeholder="以元为单位"></el-input>
        </el-form-item>
        <el-form-item label="月收入" >
            <el-input v-model="geren.monthlyIncome"  size="small" placeholder="以元为单位"></el-input>
        </el-form-item>
        <el-form-item label="工龄" >
            <el-input   size="small" v-model="geren.workingYears"></el-input>
        </el-form-item>
         <el-form-item size="small" label="住房情况" class="bitian">
            <el-select v-model="geren.kindOfProperty" class="gender" placeholder="请选择">
                    <el-option label="完全产权房" value="完全产权房"></el-option>
                    <el-option label="按揭购房" value="按揭购房"></el-option>
                    <el-option label="经济适用房" value="经济适用房"></el-option>
                    <el-option label="自建房" value="自建房"></el-option>
                    <el-option label="租房" value="租房"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="住房面积" >
            <el-input   size="small" v-model="geren.size"></el-input>
        </el-form-item>
        <el-form-item label="屋主" >
            <el-input   size="small" v-model="geren.propertyOwnship"></el-input>
        </el-form-item>
         <el-form-item size="small" label="房屋关系" >
            <el-select v-model="formInline.gender" class="gender" placeholder="请选择">
                    <el-option label="自有" value="自有"></el-option>
                    <el-option label="配偶" value="配偶"></el-option>
                    <el-option label="父母" value="父母"></el-option>
                    <el-option label="子女" value="子女"></el-option>
                    <el-option label="兄妹" value="兄妹"></el-option>
                    <el-option label="亲戚" value="亲戚"></el-option>
                    <el-option label="朋友" value="朋友"></el-option>
                    <el-option label="同事" value="同事"></el-option>
                    <el-option label="其他" value="其他"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="房屋地址" >
            <el-input   size="small" v-model="geren.propertyAddress"></el-input>
        </el-form-item>
       
    </el-form>
  </div>
</template>

<script>
export default {
    data() {
        return {
            formInline: {
               user: '',
               region: ''
            },
            name: ''
        }
    },
    props: {
        geren: Object
    }

}
</script>

<style>
.el-form-item__label{
    width: 100px!important;
}
.el-tab-pane{
    text-align: left;
}
.el-form-item{
    width:auto;
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




</style>
