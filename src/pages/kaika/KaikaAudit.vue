<template>
   <div class="Kaikaluru">
        <el-form :inline="true"  class="demo-form-inline">
        <el-form-item label="姓名" >
            <el-input readonly  v-model="kaika.name"  size="small" ></el-input>
        </el-form-item>
         <el-form-item size="small"  label="出生日期"  >
          <el-date-picker
          placeholder="出生日期"
            type="date"
            readonly
            v-model="kaika.birthday"
             value-format="yyyy-MM-dd"
            format="yyyy-MM-dd">
            </el-date-picker>
        </el-form-item>
       <el-form-item size="small" label="性别" >
            <el-select v-model="kaika.gender" readonly class="gender" placeholder="请选择">
            <el-option label="男" value="男"></el-option>
            <el-option label="女" value="女"></el-option>
            </el-select>
        </el-form-item>
         <el-form-item label="姓名拼音" >
            <el-input  readonly  v-model="kaika.englishName" size="small" ></el-input>
        </el-form-item>
         <el-form-item label="名族" >
            <el-input  readonly v-model="kaika.nation"  size="small"></el-input>
        </el-form-item>
         <el-form-item size="small" label="证件类型" >
            <el-select readonly value="居民身份证" class="gender" placeholder="请选择">
            <el-option label="居民身份证" value="居民身份证"></el-option>
             <el-option label="军官证" value="军官证"></el-option>
             <el-option label="武警警官证" value="武警警官证"></el-option>
              <el-option label="港澳居民往来内地通行证" value="港澳居民往来内地通行证"></el-option>
              <el-option label="外国护照" value="外国护照"></el-option>
            </el-select>
        </el-form-item>
         <el-form-item label="证件号码" >
            <el-input readonly    v-model="kaika.idCard" size="small"></el-input>
        </el-form-item>
        <el-form-item label="发证机关" >
            <el-input  readonly v-model="kaika.issuingOrgan"  size="small"></el-input>
        </el-form-item>
         <el-form-item size="small"  label="有效截止日"  >
          <el-date-picker
          readonly
          placeholder="证件有效截止日期"
            type="date"
            v-model="kaika.idCardValidDate"
             value-format="yyyy-MM-dd"
            format="yyyy-MM-dd">
            </el-date-picker>
        </el-form-item>
        <el-form-item label="出生地" >
            <el-input  readonly v-model="kaika.birthplace"  size="small"></el-input>
        </el-form-item>
        <el-form-item label="国籍" >
            <el-input  readonly v-model="kaika.nationality"  size="small"></el-input>
        </el-form-item>
         <el-form-item  size="small" label="婚姻状况" >
            <el-select v-model="kaika.isMarried" readonly  class="gender" placeholder="请选择">
                    <el-option label="已婚有子女" value="已婚有子女"></el-option>
                    <el-option label="已婚无子女" value="已婚无子女"></el-option>
                    <el-option label="未婚" value="未婚"></el-option>
                    <el-option label="离婚" value="离婚"></el-option>
                    <el-option label="再婚" value="再婚"></el-option>
            </el-select>
        </el-form-item>
         <el-form-item  size="small" label="教育程度" >
            <el-select readonly v-model="kaika.highestDegree"  class="gender" placeholder="请选择">
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
         <el-form-item label="曾就读小学" >
            <el-input readonly v-model="kaika.primarySchoolAttended"   size="small" ></el-input>
        </el-form-item>
        <el-form-item label="手机" >
            <el-input readonly   size="small" v-model="kaika.phoneNumber" ></el-input>
        </el-form-item>
        <el-form-item label="住宅地址" >
            <el-input readonly   size="small" v-model="kaika.currentAddress" ></el-input>
        </el-form-item>
        <el-form-item label="家庭邮编" >
            <el-input  readonly  size="small" v-model="kaika.homePostcode" ></el-input>
        </el-form-item>
        
        <el-form-item size="small" label="住宅状况" >
            <el-select  readonly class="gender" v-model="kaika.kindOfProperty" placeholder="请选择">
                    <el-option label="完全产权房" value="完全产权房"></el-option>
                    <el-option label="按揭购房" value="按揭购房"></el-option>
                    <el-option label="经济适用房" value="经济适用房"></el-option>
                    <el-option label="自建房" value="自建房"></el-option>
                    <el-option label="租房" value="租房"></el-option>
            </el-select>
        </el-form-item>
         <el-form-item size="small"  label="入住日期" >
          <el-date-picker
            type="date" readonly
            v-model="kaika.stayDate"
             value-format="yyyy-MM-dd"
            format="yyyy-MM-dd">
            </el-date-picker>
        </el-form-item>
         <el-form-item label="通讯地址" >
            <el-input  readonly v-model="kaika.mailingAddress"  size="small" ></el-input>
        </el-form-item>
         <el-form-item label="通讯地邮编" >
            <el-input  v-model="kaika.mailingAddressPostcode"  size="small" ></el-input>
        </el-form-item>
         <el-form-item label="几家银行" >
            <el-input readonly   size="small" v-model="kaika.cardInfoHave" placeholder="持有几家银行的信用卡" ></el-input>
        </el-form-item>
         <el-form-item label="信用卡数量" >
            <el-input readonly  size="small" v-model="kaika.cardInfoZhang" placeholder="信用卡持有的张数" ></el-input>
        </el-form-item>
        <el-form-item label="额度总额" >
            <el-input readonly  size="small" v-model="kaika.cardInfoWan" placeholder="信用卡额度总额以万为单位" ></el-input>
        </el-form-item>
        <br />
        <el-form-item label="单位名称" >
            <el-input readonly  size="small" v-model="kaika.companyName"  ></el-input>
        </el-form-item>
         <el-form-item label="单位地址" >
            <el-input readonly  size="small" v-model="kaika.companyAddress"  ></el-input>
        </el-form-item>
         <el-form-item label="单位邮编" >
            <el-input readonly  size="small" v-model="kaika.companyPostcode" ></el-input>
        </el-form-item>
         <el-form-item label="单位电话" >
            <el-input  readonly size="small" v-model="kaika.companyPhoneNumber" ></el-input>
        </el-form-item>
        <el-form-item size="small" label="经营性质" >
            <el-select v-model="kaika.workNature" readonly  class="gender" placeholder="单位经营性质">
                    <el-option label="国有经济" value="国有经济"></el-option>
                    <el-option label="集体经济" value="集体经济"></el-option>
                    <el-option label="私营" value="私营"></el-option>
                    <el-option label="民营" value="民营"></el-option>
                    <el-option label="股份合作" value="股份合作"></el-option>
                     <el-option label="其他股份制" value="其他股份制"></el-option>
                     <el-option label="三资" value="三资"></el-option>
                     <el-option label="其他" value="其他"></el-option>
            </el-select>
        </el-form-item>
         <el-form-item size="small" label="所属行业" >
            <el-select readonly v-model="kaika.industryInvolved" class="gender" placeholder="请选择">
                    <el-option label="农林牧渔" value="农林牧渔"></el-option>
                    <el-option label="邮电通讯" value="邮电通讯"></el-option>
                    <el-option label="房地产" value="房地产"></el-option>
                    <el-option label="科教文卫" value="科教文卫"></el-option>
                    <el-option label="工业" value="工业"></el-option>
                     <el-option label="银行" value="银行"></el-option>
                     <el-option label="证卷" value="证卷"></el-option>
                     <el-option label="保险" value="保险"></el-option>
                     <el-option label="商业" value="商业"></el-option>
                      <el-option label="机关团队" value="机关团队"></el-option>
                      <el-option label="其他" value="其他"></el-option>
            </el-select>
        </el-form-item>
         <el-form-item size="small" label="职业" >
            <el-select readonly v-model="kaika.industryProfession"  class="gender" placeholder="请选择">
                    <el-option label="公务员" value="公务员"></el-option>
                    <el-option label="事业单位人员" value="事业单位人员"></el-option>
                    <el-option label="工人" value="工人"></el-option>
                    <el-option label="农民" value="农民"></el-option>
                    <el-option label="军人" value="军人"></el-option>
                     <el-option label="职员" value="职员"></el-option>
                     <el-option label="私人业主" value="私人业主"></el-option>
                     <el-option label="学生" value="学生"></el-option>
                     <el-option label="自由职业者" value="自由职业者"></el-option>
                      <el-option label="无" value="无"></el-option>
            </el-select>
        </el-form-item>
         <el-form-item size="small" label="职务" >
            <el-select readonly  v-model="kaika.position" class="gender" placeholder="请选择">
                    <el-option label="厅局级及以上/企业负责人" value="厅局级及以上/企业负责人"></el-option>
                    <el-option label="县处级/总经理" value="县处级/总经理"></el-option>
                    <el-option label="科级/部门经理" value="科级/部门经理"></el-option>
                    <el-option label="科教级/职员" value="科教级/职员"></el-option>
                    <el-option label="其他" value="其他"></el-option>
            </el-select>
        </el-form-item>
         <el-form-item size="small"  label="入职日期"  >
          <el-date-picker
          placeholder="何时进入现单位"
            type="date" readonly
            v-model="kaika.entryTime"
             value-format="yyyy-MM-dd"
            format="yyyy-MM-dd">
            </el-date-picker>
        </el-form-item>
        <el-form-item label="年收入" >
            <el-input readonly v-model="kaika.annualIncome"   size="small"  placeholder="以万为单位"></el-input>
        </el-form-item>
        <br>
        <el-form-item label="亲属联系人" >
            <el-input readonly   size="small" v-model="lianxiren[0].name"  placeholder="亲属联系人姓名"></el-input>
        </el-form-item>
        <el-form-item size="small" label="性别" >
            <el-select readonly class="gender" v-model="lianxiren[0].gender" placeholder="请选择">
            <el-option label="男" value="男"></el-option>
            <el-option label="女" value="女"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item size="small" label="关系" >
            <el-select readonly class="gender" v-model="lianxiren[0].relationship" placeholder="请选择">
            <el-option label="夫妻" value="夫妻"></el-option>
            <el-option label="父子" value="父子"></el-option>
            <el-option label="母子" value="母子"></el-option>
             <el-option label="兄弟姐妹" value="兄弟姐妹"></el-option>
             <el-option label="朋友" value="朋友"></el-option>
             <el-option label="同事" value="同事"></el-option>
            </el-select>
        </el-form-item>
         <el-form-item label="手机号码">
            <el-input readonly   size="small" v-model="lianxiren[0].phone" ></el-input>
        </el-form-item>
        <br />
          <el-form-item label="紧急联系人" >
            <el-input readonly   size="small" v-model="lianxiren[1].name"  placeholder="紧急联系人姓名"></el-input>
        </el-form-item>
        <el-form-item size="small" label="性别" >
            <el-select class="gender" v-model="lianxiren[1].gender" placeholder="请选择">
            <el-option label="男" value="男"></el-option>
            <el-option label="女" value="女"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item size="small" label="关系" >
           <el-select readonly class="gender" placeholder="请选择" v-model="lianxiren[1].relationship">
            <el-option label="夫妻" value="夫妻"></el-option>
            <el-option label="父子" value="父子"></el-option>
            <el-option label="母子" value="母子"></el-option>
             <el-option label="兄弟姐妹" value="兄弟姐妹"></el-option>
             <el-option label="朋友" value="朋友"></el-option>
             <el-option label="同事" value="同事"></el-option>
            </el-select>
        </el-form-item>
         <el-form-item label="手机号码">
            <el-input readonly   size="small" v-model="lianxiren[1].phone" ></el-input>
        </el-form-item>
        <br />
         <el-form-item label="贷款金额">
            <el-input  readonly  size="small" v-model="kaika.actualLoanAmount" placeholder="单位以万为单位" ></el-input>
        </el-form-item>
         <el-form-item label="申请额度">
            <el-input readonly  size="small" v-model="kaika.applyLimit" placeholder="单位以元为单位" ></el-input>
        </el-form-item>
         <el-form-item size="small" label="寄送方式" >
            <el-select readonly class="gender" v-model="kaika.billDealingAddress" placeholder="账单寄送方式">
            <el-option label="自取" value="自取"></el-option>
            <el-option label="寄送" value="寄送"></el-option>
            <el-option label="自助打印" value="自助打印"></el-option>
            <el-option label="对账簿" value="对账簿"></el-option>
            <el-option label="不打印" value="不打印"></el-option>
            </el-select>
        </el-form-item>
         <el-form-item size="small" label="寄送地址" >
            <el-select readonly class="gender" v-model="kaika.billDealingMethod" placeholder="账单寄送地址">
            <el-option label="单位地址" value="单位地址"></el-option>
            <el-option label="住宅地址" value="住宅地址"></el-option>
            <el-option label="通讯地址" value="通讯地址"></el-option>
            </el-select>
        </el-form-item>
         <el-form-item size="small" label="领取方式" >
            <el-select readonly class="gender" v-model="kaika.cardReceiveMode" placeholder="卡片领取方式">
            <el-option label="自取" value="自取"></el-option>
            <el-option label="寄送" value="寄送"></el-option>
            </el-select>
        </el-form-item>
         <el-form-item size="small" label="寄送地址" >
            <el-select readonly class="gender" v-model="kaika.cardDealingAddress" placeholder="卡片寄送地址">
            <el-option label="单位地址" value="单位地址"></el-option>
            <el-option label="住宅地址" value="住宅地址"></el-option>
            <el-option label="通讯地址" value="通讯地址"></el-option>
            </el-select>
        </el-form-item>
         <el-form-item size="small" label="变动提醒" >
            <el-select readonly class="gender biandong" v-model="kaika.balanceRemind" placeholder="是否开通余额变动提醒">
            <el-option label="是" value="是"></el-option>
            <el-option label="否" value="否"></el-option>
            </el-select>
        </el-form-item>
         <el-form-item label="车价">
            <el-input readonly  size="small" v-model="kaika.vehiclePrice" placeholder="单位以元为单位" ></el-input>
        </el-form-item>
    </el-form>

    <el-row >
        <el-col v-for="item in kaika.imgList" :key="item.id" :span="6" class="dinggao" >
            <span>{{item.attachCategoryName}}</span>
            <PicCheck :pic="item"  ref="shangchuan"  />
        </el-col>
    </el-row>
     <el-form :inline="true"   style="padding:0 50px;margin-top:20px;" :model="formInline"  class="demo-form-inline">
        <el-row :gutter="10" class="flexju">
        <el-col :span="8"><div class="grid-content bg-purple">
            <el-form-item label="审核状态">
            <el-select  v-model="ss2.auditStatus"  placeholder="审核结果" >
            <el-option label="通过" value="1"></el-option>
            <el-option label="不通过" value="2"></el-option>
            </el-select>
            </el-form-item></div>
        </el-col>
         <el-col :span="12" v-show="ss2.auditStatus == 1"><div class="grid-content bg-purple">
            <el-form-item label="银行卡号" >
                <el-input   v-model="ss2.account"  size="small" ></el-input>
            </el-form-item>
            </div>
        </el-col>
        
        </el-row>
         <el-form-item label="审核备注" class="textleft shenhebeizhu" style="width:100%" >
          <div class="el-form-item__content beizhu" style="width:100%!important">
              <div data-v-467b687c="" class="el-textarea">
                  <textarea class="el-textarea__inner qubie" v-model="ss2.auditResult" style="min-height: 33px;"></textarea>
                  </div></div>
        </el-form-item>
      </el-form>

    <el-row class="xiayi">
        <el-button @click="fanhui">返回上一步</el-button>
         <el-button  @click="gettijiao" type="success" >提交</el-button>
       
    </el-row>
   </div>
</template>

<script>
 import Picuoload from '@/common/Picupload'
 import {selectInfo, kaika, kaikashenhetijiao} from '@/api/index'
 import PicCheck from '@/common/PicCheck'
export default {
     data() {
        return {
            formInline: {
               user: '',
               region: ''
            },
            ss: {
                applicationFormId : ''
            },
            name: '',
            dataShuzu: '71,72,130,67',
            kaika : {},
            lianxiren: [
                    {
                        "name": '',
                        "phone": '',
                        "relationship": '',
                        'gender': ''
                    },
                    {
                        "name": '',
                        "phone": '',
                        "relationship": '',
                        'gender': ''
                    }
             ],
              ss2: {
                'auditStatus': '',
                'auditResult': '',
                'account': '',
              }
        }
    },
    components: {
        Picuoload,
        PicCheck
    },
    methods: {
       fanhui() {
           window.history.go(-1)
       },
       open3(msg) {
        this.$notify({
          title: '成功',
          message: msg,
          type: 'success'
        });
      },
      open6(msg) {
        this.$notify.error({
          title: '错误',
          message: msg
        });
      },
       submit() {
           this.kaika.emergencyContact = JSON.stringify(this.lianxiren)
            for (let ss in this.kaika) {
                if (this.kaika[ss] === '') {
                    console.log(ss)
                    this.open6('资料有输入框未输入，请重新输入！')
                    return;
                } 
            }

            let pics = this.$el.querySelectorAll('.picload');
            for (let i = 0 ; i < 3; i++) {
                    if (!pics[i].dataset.name) {
                        this.open6('请上传完整的4张图片！')
                        return;
                    }
            }
          
           let pic = [...pics].filter((element,index) => element.dataset.name)
            let imgs = [];
           for (let i = 0; i < pic.length; i++) {
               let img = {
                    'attachCategoryId': pic[i].getAttribute('data-id'),
                    'attachCategoryName': pic[i].getAttribute('data-categoryname'),
                    'description':pic[i].getAttribute('data-categoryname'),
                    'name': pic[i].getAttribute('data-name'),
                    'url': pic[i].getAttribute('data-url'),
                    'type': 'image/jpeg',
                    'applicationFormId': this.ss.applicationFormId
               }
               imgs.push(img);
           }
            this.kaika.imgList = imgs;
            this.kaika.emergencyContact = JSON.stringify(this.lianxiren);

            kaika(this.kaika).then(res => {
                if (res.code == 200) {
                   this.open3('申请开卡成功！')
                   this.$router.push({path: '/manage'})
                } else {
                    this.open6(res.message)
                }
            })
            

       },
       getSelectInfo() {
           selectInfo(this.ss).then(res => {
              if (res.code == 200) {
                  let data = res.data;
                  this.kaika = data;

              }
           })

       },
       gettijiao() {
           if (!this.ss2.auditStatus) {
               this.open6('请选择审核结果!')
               return;
           }
           if (this.ss2.auditStatus == 1) {
               if (!this.ss2.account) {
                   this.open6('请填写开户银行卡号!')
               }
           }
           if (this.ss2.auditStatus == 2) {
               if (!this.ss2.auditResult) {
                   this.open6('请填写')
               }
           }
           this.ss2.cardInfoId = this.kaika.id;
           this.ss2.applicationFormId = this.kaika.applicationFormId;
           console.log(this.ss2)
           kaikashenhetijiao(this.ss2).then(res => {
               if (res.code == 200) {
                   this.open3('提交成功')
                   this.$router.push({path: '/manage'})
               } else {
                   this.open6(res.message)
               }
           })

          

       }
    },
    mounted() {
        this.ss.applicationFormId = localStorage.getItem('applicationFormId');
        this.kaika.applicationFormId = localStorage.getItem('applicationFormId');
        this.getSelectInfo();
    },
    watch: {
        kaika() {
            this.lianxiren = this.kaika.contacts;
        }
    }

}
</script>

<style lang="less">
.Kaikaluru {
    min-width: 990px;
    .el-form-item__label{
        width: 82px!important;
    }
     .el-form-item {
        width: 270px;
        margin-bottom: 0;
     }
     .el-input__inner, .el-date-editor{
         width: 187px;
     }
     .wuxiaji:after{
        content: '';
        width: 220px;
        display: inline-block;
    }
    .dinggao{
     height: 174px;
     width: 148px;
     overflow: hidden;
     margin-left: 40px;
     text-align: center;
     &:nth-child(0) {
         margin-left: 0
     }
 }
    .pics{
        padding: 0 30px;
        width: 990px;
        margin: 0 auto;
    }
    .xiayi{
        text-align: center;
        margin-top: 10px;
        padding-bottom: 30px;
    }
   .shenhebeizhu .el-form-item__content{
       width: 70%;
       margin-top: 6px;
   }
   .biandong{
       margin-top: 4px;
   }
    
}

</style>
