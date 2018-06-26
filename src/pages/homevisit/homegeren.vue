<template>
<div class="homegeren">
 <el-form :inline="true" :label-position="labelPosition" :model="formInline" class="demo-form-inline">
 <el-row :gutter="10" class="flexju">
  <el-col  :span="8"><div class="grid-content bg-purple">
    <el-form-item label="身份证号">
    <el-input v-model="formInline.name" class="name"></el-input>
  </el-form-item>
      </div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple">
       <el-form-item label="家访人员">
    <el-input v-model="formInline.idCard" class="cardNo"></el-input>
  </el-form-item></div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple">
       <el-form-item label="手机号码">
    <el-input v-model="formInline.idCard" class="cardNo"></el-input>
  </el-form-item></div></el-col>
</el-row>
<el-row :gutter="10" class="flexju">
  <el-col  :span="8"><div class="grid-content bg-purple">
    <el-form-item label="家访时间">
    <el-input v-model="formInline.name" class="name"></el-input>
  </el-form-item>
      </div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple">
       <el-form-item label="家庭地址">
    <el-input v-model="formInline.idCard" class="cardNo"></el-input>
  </el-form-item></div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple">
       <el-form-item label="审核结果">
     <el-select v-model="formInline.gender" class="gender" placeholder="请选择">
      <el-option label="男" value="男"></el-option>
      <el-option label="女" value="女"></el-option>
    </el-select>
  </el-form-item></div></el-col>
</el-row>
 <el-form-item label="审核备注" class="textleft" style="width:100%" >
        <div class="el-form-item__content" style="width:100%!important">
            <div data-v-467b687c="" class="el-textarea">
                <textarea class="el-textarea__inner qubie" style="min-height: 33px;"></textarea>
                </div><!----></div>
    </el-form-item>
</el-form>
   
<el-row >
     <el-col v-for="item in formInline.imgs" :key="item.id" :span="6" class="dinggao" >
        <span>{{item.attachCategoryName}}</span>
        <PicCheck :pic="item"  ref="shangchuan"  />
    </el-col>
</el-row>


</div>
</template>
<script>
 import PicCheck from '@/common/PicCheck'
 import Picuoload from '@/common/Picupload'
     export default {
    data() {
      return {
        labelPosition: 'right',
        formInline: {
          name: '',
          gender: '',
          phone: '',
          idCard: '',
          birthday: '',
          imgs:[],
          idCardResidence: '',
          idCardValidDate: '',
          issuingOrgan: '',
          nation: '',
          lenderType: '',
          lenderTypeName: '不输'
        },
            dialogImageUrl: '',
            dialogVisible: false,
            yghSessionId: '',
            shuzu: ''
      };
    },
    props: {
      lenderType: String, //这样可以指定传入的类型，如果类型不对，会警告
      dataShuzu: String
    },
    components: {
       Picuoload,
       PicCheck
    },
    methods: {
      handleRemove(file, fileList) {
      },
      open6(msg) {
        this.$notify.error({
          title: '错误',
          message: msg
        });
      },
      handleAddRandom(str,str1,str2) {
          if (this.lenderType == str2) {
            this.formInline[str] = str1;
          }
          
      },
    },
    
    mounted() {
       
        
    }
  }
</script>
<style lang="less">
.flexju{
    display: flex;
    justify-content: center;
}
.homegeren{
    width: 990px;
    margin: 0 auto;

    .demo-form-inline{
    text-align: center;
}
 .kuandu{
     width: 100%;
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
 .textleft .el-form-item__content{
     width: 400px;
 }
 .qubie{
     width: 400px;
 }
 .textleft{
     text-align: left;
     padding-left: 16px;
 }
 .el-select{
     width: 226px;
 }
}

 
</style>
