<template>
<div class="panduanpic">
 <el-form :inline="true" :label-position="labelPosition" :model="formInline" class="demo-form-inline">
 <el-row :gutter="10" class="flexju">
  <el-col :offset="1" :span="6"><div class="grid-content bg-purple">
    <el-form-item label="贷款银行">
    <el-input v-model="formInline.creditName" readonly class="name"></el-input>
  </el-form-item>
      </div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">
       <el-form-item label="客户姓名">
    <el-input v-model="formInline.customer.name" readonly class="cardNo"></el-input>
  </el-form-item></div></el-col>
  <!-- <el-col :span="6"><div class="grid-content bg-purple">
       <el-form-item label="关系类型">
    <el-input v-model="formInline.customer.lenderTypeName" readonly class="cardNo"></el-input>
  </el-form-item></div></el-col> -->
  <el-col :span="6"><div class="grid-content bg-purple">
       <el-form-item label="身份证号">
    <el-input v-model="formInline.customer.idCard" readonly class="phone"></el-input>
  </el-form-item></div></el-col>
</el-row>
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
import {zhenxinshenheEdetal, hechengxiazaitipian} from '../api/index'
 import PicCheck from '../common/PicCheck'
     export default {
    data() {
      return {
        labelPosition: 'right',
        formInline: {
            creditName: '',
            'customer': {
                name: '',
                lenderTypeName: '',
                idCard: ''
            }
        },
        zhenxinId: '',
         dialogImageUrl: '',
        dialogVisible: false,
      };
    },
    props: {
      lenderType: String, //这样可以指定传入的类型，如果类型不对，会警告
      dataShuzu: String
    },
    components: {
       PicCheck 
    },
    methods: {
      getzhenxinshenheEdetal() {
          let ss = {
             'id': this.zhenxinId 
          }
          zhenxinshenheEdetal(ss).then(res => {
              if (res.code == 200) {
                  this.formInline = res.data;
                  this.$bus.emit('creditName', this.formInline.creditName)
                  this.$bus.emit('id', this.formInline.id)
                  this.$bus.emit('tradeNo', this.formInline.applicationForm.id)
              }
          })
      },
      hanleLoad(str) {
          let ss = [];
          if (str == '下载合成') {
              this.formInline.imgs.forEach(element => {
                  ss.push(element.url);
              })
              hechengxiazaitipian(JSON.stringify(ss)).then(res => {
                  console.log(res)
              })
            //   let sessionId = localStorage.getItem('sessionId');
            //   location.href = 'http://bluetime.cn/oss/mergeImg?carloan.session.id='+sessionId+'&url='+JSON.stringify(ss);
          }
          
      }
    },
    mounted() {
        this.zhenxinId = localStorage.getItem('zhenxinId');
        this.getzhenxinshenheEdetal();   
    },
    created() {
        this.$bus.on('load', this.hanleLoad)
    },
    beforeDestroy() {
        this.$bus.off('load', this.hanleLoad)
    }
  }
</script>
<style scoped lang="less">

.panduanpic{
    width: 990px;
    margin: 0 auto;

    .demo-form-inline{
    text-align: center;
    }
    .flexju{
    display: flex;
    justify-content: center;
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
