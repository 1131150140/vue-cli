<template>
<div class="orderUser">
 <el-form :inline="true" :label-position="labelPosition" :model="formInline" class="demo-form-inline">
 <el-row :gutter="10" class="flexju">
  <el-col :offset="1" :span="4"><div class="grid-content bg-purple">
    <el-form-item label="姓名">
    <el-input v-model="formInline.name" size="small" class="name"></el-input>
  </el-form-item>
      </div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">
       <el-form-item label="身份证号">
    <el-input v-model="formInline.idCard" size="small" class="cardNo"></el-input>
  </el-form-item></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple">
       <el-form-item label="性别">
     <el-select v-model="formInline.gender" size="small" class="gender" placeholder="请选择">
      <el-option label="男" value="男"></el-option>
      <el-option label="女" value="女"></el-option>
    </el-select>
  </el-form-item></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">
       <el-form-item label="手机号码">
    <el-input v-model="formInline.phone" size="small" class="phone"></el-input>
  </el-form-item></div></el-col>
</el-row>
</el-form>
<el-row >
    <el-col :span="6" class="dinggao" >
        <span>身份证正面</span>
        <Picuoload data-CategoryName="身份证正面" :num="lenderType" ref="shangchuan" :data-id="dataShuzu.split(',')[0]" />
    </el-col>
    <el-col :span="6" class="dinggao" >
        <span>身份证反面</span>
        <Picuoload data-CategoryName="身份证反面" :num="lenderType" ref="shangchuan"  :data-id="dataShuzu.split(',')[1]" />
    </el-col>
    <el-col :span="6" class="dinggao" >
        <span>授权书</span>
         <Picuoload data-CategoryName="授权书" ref="shangchuan"  :data-id="dataShuzu.split(',')[2]" />
    </el-col>
    <el-col :span="6" class="dinggao" >
        <span>授权书签字照</span>
        <Picuoload data-CategoryName="授权书签字照" ref="shangchuan"  :data-id="dataShuzu.split(',')[3]" />
    </el-col>

</el-row>
<el-row >
    <el-col :span="6" class="dinggao" >
        <span>签字照</span>
         <Picuoload data-CategoryName="签字照" ref="shangchuan"  :data-id="dataShuzu.split(',')[4]" />
    </el-col>
    <el-col :span="6" class="dinggao" >
        <span>其他</span>
        <Picuoload data-CategoryName="其他" ref="shangchuan"  :data-id="dataShuzu.split(',')[5]" />
    </el-col>
</el-row>

</div>
</template>
<script>

 import Picuoload from '../common/Picupload'
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
       Picuoload 
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
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      hanledsubmit() {
          if (this.formInline.name) {
               this.formInline.lenderType = this.lenderType;
            //   console.log(this.formInline)
            for (let ss in this.formInline) {
            if (this.formInline[ss] === '') {
                this.open6('资料有输入框未输入，请重新输入！')
                 return;
            }
          }
          let pics = this.$el.querySelectorAll('.picload');
           console.log(pics)
          for (let i = 0 ; i < 3; i++) {
                if (!pics[i].parentNode.dataset.name) {
                    this.open6('资料前面4张照片必传！')
                    return;
                }
          }
          let pic = [...pics].filter((element,index) => element.parentNode.dataset.name)
            let imgs = [];
           for (let i = 0; i < pic.length; i++) {
               let img = {
                    'attachCategoryId': pic[i].parentNode.getAttribute('data-id'),
                    'attachCategoryName': pic[i].parentNode.getAttribute('data-categoryname'),
                    'description':pic[i].parentNode.getAttribute('data-categoryname'),
                    'name': pic[i].parentNode.getAttribute('data-name'),
                    'url': pic[i].parentNode.getAttribute('data-url')
               }
               imgs.push(img);
           }
           
           this.formInline.imgs = imgs;
          
           return this.formInline;
          }
          
      },
      handleAddRandom(str,str1,str2) {
          if (this.lenderType == str2) {
            this.formInline[str] = str1;
          }
          
      },
    },
    created() {
            this.$bus.on('name', this.handleAddRandom.bind(this,'name'))
            this.$bus.on('gender', this.handleAddRandom.bind(this,'gender'))
            this.$bus.on('idCard', this.handleAddRandom.bind(this,'idCard'))
             this.$bus.on('birthday', this.handleAddRandom.bind(this,'birthday'))
            this.$bus.on('idCardResidence', this.handleAddRandom.bind(this,'idCardResidence'))
             this.$bus.on('idCardValidDate', this.handleAddRandom.bind(this,'idCardValidDate'))
            this.$bus.on('issuingOrgan', this.handleAddRandom.bind(this,'issuingOrgan'))
            this.$bus.on('nation', this.handleAddRandom.bind(this,'nation'))
    },
    beforeDestroy() {
            this.$bus.off('name', this.handleAddRandom)
            this.$bus.off('gender', this.handleAddRandom)
            this.$bus.off('idCard', this.handleAddRandom)
            this.$bus.off('brithday', this.handleAddRandom)
            this.$bus.off('idCardResidence', this.handleAddRandom)
             this.$bus.off('idCardValidDate', this.handleAddRandom)
            this.$bus.off('issuingOrgan', this.handleAddRandom)
            this.$bus.off('nation', this.handleAddRandom)
    },
    mounted() {
       
        
    }
  }
</script>
<style scoped lang="less">
.flexju{
    display: flex;
    justify-content: center;
}
.orderUser{
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
 

}

</style>
