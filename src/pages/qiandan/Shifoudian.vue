<template>
    <div>
     <el-form :inline="true" :model="formInline" style="padding: 0 30px" class="demo-form-inline">
        <el-form-item label="是否垫资">
            <el-input v-model="dianzi.isDianzi" readonly size="small" ></el-input>
        </el-form-item>
        <el-form-item label="垫资结果">
            <el-input v-model="dianzi.result" readonly size="small"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button  size="small" @click="dianzicaozuo(dianzi.caozuo)">{{dianzi.caozuo}}</el-button>
        </el-form-item>
    </el-form>

    <el-form :inline="true" :model="formInline" style="padding: 0 30px" class="demo-form-inline">
        <el-form-item label="是否开卡">
            <el-input v-model="kaika.audit" readonly size="small" ></el-input>
        </el-form-item>
        <el-form-item label="开卡结果">
            <el-input v-model="kaika.result" readonly size="small"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button  size="small" @click="kaikacaozuo(kaika.caozuo)">{{kaika.caozuo}}</el-button>
        </el-form-item>
    </el-form>
    <el-form :inline="true" style="padding: 0 45px"  class="demo-form-inline">
        <el-form-item class="xiangqing">
            <el-button  size="small">家访详情</el-button>
             <el-button  size="small">附件详情</el-button>
              <el-button  size="small">风控详情</el-button>
        </el-form-item>
    </el-form>

    <el-dialog title="垫资申请" width="940px" :visible.sync="dialogFormVisible">
  <el-form :model="formInline">
    <div class="el-form-item">
      <label class="el-form-item__label" style="width: 120px;">主贷人姓名</label>
      <div class="el-form-item__content" style="display:inline-block;float:left">
        <div class="el-input">
          <!----><input type="text" v-model="dianzi1.principalLender" autocomplete="off" class="el-input__inner">
        </div><!---->
      </div>
       <label class="el-form-item__label" style="width: 120px;">身份证号</label>
      <div class="el-form-item__content" style="display:inline-block;float:left">
        <div class="el-input">
          <!----><input type="text" v-model="dianzi1.principalLenderIdCard" autocomplete="off" class="el-input__inner">
        </div><!---->
      </div>
    </div>

     <div class="el-form-item">
      <label class="el-form-item__label" style="width: 120px;">合伙人姓名</label>
      <div class="el-form-item__content" style="display:inline-block;float:left">
        <div class="el-input">
          <!----><input type="text" v-model="dianzi1.partnerName" autocomplete="off" class="el-input__inner">
        </div><!---->
      </div>
       <label class="el-form-item__label" style="width: 120px;">联系电话</label>
      <div class="el-form-item__content"  style="display:inline-block;float:left">
        <div class="el-input">
          <!----><input type="text" v-model="dianzi1.partnerPhone" autocomplete="off" class="el-input__inner">
        </div><!---->
      </div>
    </div>

     <div class="el-form-item">
      <label class="el-form-item__label" style="width: 120px;">账号(个人)</label>
      <div class="el-form-item__content" style="display:inline-block;float:left">
        <div class="el-input">
          <!----><input type="text" v-model="dianzi1.bankAccount" autocomplete="off" class="el-input__inner">
        </div><!---->
      </div>
       <label class="el-form-item__label" style="width: 120px;">开户银行</label>
      <div class="el-form-item__content" style="display:inline-block;float:left">
        <div class="el-input">
          <!----><input type="text" v-model="dianzi1.openAccountBank" autocomplete="off" class="el-input__inner">
        </div><!---->
      </div>
       <label class="el-form-item__label" style="width: 120px;">开户名</label>
      <div class="el-form-item__content" style="display:inline-block;float:left">
        <div class="el-input">
          <!----><input type="text" v-model="dianzi1.openAccountName" autocomplete="off" class="el-input__inner">
        </div><!---->
      </div>
    </div>

    <div class="el-form-item">
      <label class="el-form-item__label" style="width: 120px;">车辆型号</label>
      <div class="el-form-item__content" style="display:inline-block;float:left">
        <div class="el-input">
          <!----><input type="text" v-model="chexing" autocomplete="off" class="el-input__inner">
        </div><!---->
      </div>
       <label class="el-form-item__label" style="width: 120px;">排量</label>
      <div class="el-form-item__content" style="display:inline-block;float:left">
        <div class="el-input">
          <!----><input type="text" v-model="pailiang" autocomplete="off" class="el-input__inner">
        </div><!---->
      </div>
        <el-form-item  label="车辆类别">
            <el-select v-model="dianzi1.carType" class="gender" placeholder="请选择">
            <el-option label="进口" value="进口"></el-option>
            <el-option label="国产" value="国产"></el-option>
            </el-select>
        </el-form-item>
    </div>

    <div class="el-form-item">
      <label class="el-form-item__label" style="width: 120px;">估评价</label>
      <div class="el-form-item__content" style="display:inline-block;float:left">
        <div class="el-input">
          <!----><input type="text" v-model="dianzi1.preVehiclePrice" autocomplete="off" class="el-input__inner">
        </div><!---->
      </div>
       <label class="el-form-item__label" style="width: 120px;">发票价</label>
      <div class="el-form-item__content" style="display:inline-block;float:left">
        <div class="el-input">
          <!----><input type="text" v-model="dianzi1.invoicePrice" autocomplete="off" class="el-input__inner">
        </div><!---->
      </div>
        <label class="el-form-item__label" style="width: 120px;">上牌地</label>
      <div class="el-form-item__content" style="display:inline-block;float:left">
        <div class="el-input">
          <!----><input type="text" v-model="dianzi1.licensePlateAddress" autocomplete="off" class="el-input__inner">
        </div><!---->
      </div>
    </div>

     <div class="el-form-item">
      <label class="el-form-item__label" style="width: 120px;">申请分期本金</label>
      <div class="el-form-item__content" style="display:inline-block;float:left">
        <div class="el-input">
          <!----><input type="text" v-model="dianzi1.realLoanFee" autocomplete="off" class="el-input__inner">
        </div><!---->
      </div>
       <label class="el-form-item__label" style="width: 120px;">垫资额</label>
      <div class="el-form-item__content" style="display:inline-block;float:left">
        <div class="el-input">
          <!----><input type="text" v-model="dianzi1.replacePayFee" autocomplete="off" class="el-input__inner">
        </div><!---->
      </div>
        <label class="el-form-item__label" style="width: 120px;">期数</label>
      <div class="el-form-item__content" style="display:inline-block;float:left">
        <div class="el-input">
          <!----><input type="text" autocomplete="off" v-model="dianzi1.monthlyInterest" class="el-input__inner">
        </div><!---->
      </div>
    </div>
    <div class="el-form-item">
      <label class="el-form-item__label" style="width: 120px;">保证金</label>
      <div class="el-form-item__content" style="display:inline-block;float:left">
        <div class="el-input">
          <!----><input type="text" autocomplete="off" v-model="dianzi1.bond" class="el-input__inner">
        </div><!---->
      </div>
       <label class="el-form-item__label" style="width: 120px;">总部现金</label>
      <div class="el-form-item__content" style="display:inline-block;float:left">
        <div class="el-input">
          <!----><input type="text" autocomplete="off" v-model="dianzi1.headCompanyMoney" class="el-input__inner">
        </div><!---->
      </div>
        <label class="el-form-item__label" style="width: 120px;">车商返点</label>
      <div class="el-form-item__content" style="display:inline-block;float:left">
        <div class="el-input">
          <!----><input type="text" autocomplete="off" v-model="dianzi1.rebateRate" class="el-input__inner">
        </div><!---->
      </div>
    </div>
      <el-form-item  style="width:269px;display:inline-block;float: left" label="车辆登记日期" >
          <el-date-picker
            type="date"
            
            v-model="dianzi1.vehicleRegistrationTime"
            value-format="timestamp"
            format="yyyy-MM-dd">
            </el-date-picker>
        </el-form-item>
         <label class="el-form-item__label" style="width: 120px;">车辆品牌</label>
      <div class="el-form-item__content" style="display:inline-block;float:left">
        <div class="el-input">
          <!----><input type="text" autocomplete="off" v-model="dianzi1.carBrand" class="el-input__inner">
        </div><!---->
      </div>







  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="shenqingdianzi">提交申请</el-button>
  </div>
</el-dialog>

    </div>

</template>
<script>
import {huoqushifoudianzi, huoqushifoukaika, dianzishenqing} from '../../api/index'
    export default {
        data() {
            return {
                formInline: {
                    user: '',
                    region: ''
                },
                ss: {
                    applicationFormId:""
                },
                dialogFormVisible: false,
                formLabelWidth: '120px',
                dianzi: {
                  result: '',
                  caozuo:'',
                  isDianzi:''
                },
                kaika: {
                  result: '',
                  caozuo: '',
                  audit: ''
                },
                dianzi1: {
                  applicationFormId: '',
                  principalLender: '',
                  principalLenderIdCard: '',
                  partnerName: '',
                  partnerPhone: '',
                  bankAccount: '',
                  openAccountBank: '',
                  openAccountName: '',
                  carModels: '',
                  carType: '',
                  preVehiclePrice: '',
                  invoicePrice: '',
                  licensePlateAddress: '',
                  realLoanFee: '',
                  replacePayFee: '',
                  monthlyInterest: '',
                  bond: '',
                  rebateRate: '',
                  vehicleRegistrationTime: '',
                  carBrand: ''
                },
                chexing: '',
                pailiang: '',


            }
        },
        props: {
          fin: Object,
          veh: Object,
          len: Object
        },
        mounted() {
            this.ss.applicationFormId = localStorage.getItem('applicationFormId');
          this.dianzi1.applicationFormId = localStorage.getItem('applicationFormId');

            this.getDianzi();
            this.getKaika();
        },
        watch: {
          chexing(str) {
            this.dianzi1.carModels = str + '/' + this.pailiang
          },
          pailiang(str) {
            this.dianzi1.carModels = this.chexing + '/' + str
          },
          len() {
           this.dianzi1.principalLender = this.len.name;
           this.dianzi1.principalLenderIdCard = this.len.idCard;
          },
          veh() {
            this.dianzi1.carBrand = this.veh.brand;
            this.pailiang = this.veh.displacement;
            this.chexing = this.veh.vehicleModel;
            this.dianzi1.carType = this.veh.vehicleProperties;
            this.dianzi1.licensePlateAddress = this.veh.licensePlateAddress;
            this.dianzi1.vehicleRegistrationTime = this.veh.registerDate;

          },
          fin() {
            this.dianzi1.preVehiclePrice = this.fin.preVehiclePrice;
            this.dianzi1.invoicePrice = this.fin.vehiclePrice;
            this.dianzi1.realLoanFee = this.fin.realLoanFee;
            this.dianzi1.replacePayFee = this.fin.instalmentPrincipal;
          }

        },
        methods: {
           getDianzi() {
             huoqushifoudianzi(this.ss).then(result => {
               let list = result.data.isAdvanceMoney;
               let shifouwancheng = result.data.advanceMoneyType;
               this.dianzi.isDianzi = list ? '已申请垫资' : '未申请垫资';
               if (this.dianzi.isDianzi === '已申请垫资') {
                 if (shifouwancheng == '2'){
                   this.dianzi.result = '成功'
                 } else if (shifouwancheng == '1') {
                   this.dianzi.result = '审核流程中'
                 } else {
                   this.dianzi.result = '失败'
                 }
                 this.dianzi.caozuo = '查看详情';
               } else {
                 this.dianzi.result = '请先申请垫资';
                 this.dianzi.caozuo = '申请垫资';
               }
             })
           },
          shenqingdianzi() {
           for (let key in this.dianzi1) {
             if (this.dianzi1[key] == '') {
                this.open6('请补充完整信息再提交申请！')
                return;
             }
           }
            dianzishenqing(this.dianzi1).then(res => {
              if (res.code == 200) {
                this.open3('垫资申请成功');
                this.dialogFormVisible = false;
                this.$router.push({path: '/manage'})
              } else {
                this.open6(res.message)
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
          dianzicaozuo(str) {
            if (str == '申请垫资') {
              if (this.veh.brand == '' || this.veh.vehicleModel == '') {
                this.open6('请在汽车信息里面选择汽车品牌及车辆型号！')
                return;
              }
              this.dialogFormVisible = true;
            } else {
              this.$router.push({path: '/dianziDetail'})
            }
          },

          kaikacaozuo(str) {
            if (str == '申请开卡') {
              this.$router.push({path: '/kaikaluru'})
            } else {
              this.$router.push({path: '/kaikaDetail'})
            }
          },
          getKaika() {
            huoqushifoukaika(this.ss).then(result => {
              var data = result.data;
              if (data.status == '1') {
                this.kaika.audit = '已申请开卡';
                if (data.auditStatus == '0' || data.auditStatus == ''){
                  this.kaika.result = '等待银行人员审核'
                  this.kaika.caozuo = '查看详情'
                } else if (data.auditStatus == '1'){
                  this.kaika.result = '开卡成功';
                  this.kaika.caozuo = '查看详情'
                } else if (data.auditStatus == '2') {
                  this.kaika.result = '开卡失败';
                  this.kaika.caozuo = '查看详情'
                }
              } else {
                this.kaika.audit = '未申请开卡';
                this.kaika.result = '请先申请开卡'
                this.kaika.caozuo = '申请开卡';
              }
            })
          }
        }
    }
</script>
<style>



</style>
