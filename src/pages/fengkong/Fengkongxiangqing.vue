 <template>
   <div class="fengkongxiangqing">
         <Zhenxinxinxi :xinxi="zhenxinxiArray"></Zhenxinxinxi>
<el-tabs v-model="activeName" >
<el-tab-pane :label="zhenxinxiArray[index].customer.name" :name="item.num" class="tishi" :key="index" v-for="(item, index) in fengkong">
<div class="table_container">
    <div class="el-table el-table--fit el-table--enable-row-hover el-table--enable-row-transition" style="width: 100%;">
            <div class="el-table__header-wrapper">
              </div>
                <div class="el-table__body-wrapper">
                  <table cellspacing="0" cellpadding="0" border="0" class="el-table__body" style="width: 1145px;">
                    <tbody>
                      <tr class="el-table__row zidingyi">
                        <td class="el-table_1_column_1"><div class="cell"><div>银行四要素</div></div></td>
                        <td class="el-table_1_column_4"><div class="cell" v-show="item.tCheckBankCardRecord4">{{item.tCheckBankCardRecord4 && item.tCheckBankCardRecord4.message}}</div>
                                                        <div class="cell" v-show="!item.tCheckBankCardRecord4">
                                                          <el-button size="small"  @click="xianshi(item.ss)">查询</el-button></div></td>
                      </tr>
                      <tr class="el-table__row zidingyi">
                        <td class="el-table_1_column_1"><div class="cell"><div>手机在网状态</div></div></td>
                        <td class="el-table_1_column_4"><div class="cell" v-show="item.tCheckPhoneNumberRecord">{{item.tCheckPhoneNumberRecord && item.tCheckPhoneRecord.description}}</div>
                                                        <div class="cell" v-show="!item.tCheckPhoneNumberRecord">
                                                          <el-button size="small" @click="chaxunzaiwang(item.ss)">查询</el-button></div></td>
                      </tr>
                      <tr class="el-table__row zidingyi">
                        <td class="el-table_1_column_1"><div class="cell"><div>手机在网时长</div></div></td>
                        <td class="el-table_1_column_4"><div class="cell" v-show="item.tCheckPhoneUseTime">{{item.tCheckPhoneUseTime && item.tCheckPhoneUseTime.desc}}</div>
                                                        <div class="cell" v-show="!item.checkPhoneUseTime">
                                                          <el-button size="small"  @click="chaxunshijian(item.ss)">查询</el-button></div></td>
                      </tr>
                      <tr class="el-table__row zidingyi">
                        <td class="el-table_1_column_1"><div class="cell"><div>手机二元素校验</div></div></td>
                        <td class="el-table_1_column_4"><div class="cell" v-show="item.tCheckPhoneRecord">{{item.tCheckPhoneRecord && item.tCheckPhoneRecord.resmsg}}</div>
                                                        <div class="cell" v-show="!item.tCheckPhoneRecord">
                                                          <el-button size="small" @click="geteryuansu(item.ss)">查询</el-button></div></td>
                      </tr>
                      <tr class="el-table__row zidingyi">
                        <td class="el-table_1_column_1"><div class="cell"><div>贷款信息</div></div></td>
                        <td class="el-table_1_column_4"><div class="cell" v-show="item.tCheckComprehensiveInfoRecord">{{item.tCheckComprehensiveInfoRecord && huoquduotou(item.tCheckComprehensiveInfoRecord)}}</div>
                                                      <div class="cell" v-show="!item.tCheckComprehensiveInfoRecord">
                                                        <el-button size="small" @click="getduotou(item.ss)">查询</el-button></div></td>
                      </tr>
                     
                       <tr class="el-table__row zidingyi">
                        <td class="el-table_1_column_1"><div class="cell"><div>反欺诈</div></div></td>
                        <td class="el-table_1_column_4">
                                                <div class="cell" v-show="huoquqizha(item.tAntifraud)">{{huoquqizha(item.tAntifraud)}}</div>
                                                <div class="cell" v-show="!huoquqizha(item.tAntifraud)">
                                                  <el-button size="small" @click="getfanqizha(item.ss)">查询</el-button></div></td>
                      </tr>
                       <tr class="el-table__row zidingyi">
                        <td class="el-table_1_column_1"><div class="cell"><div>蚂蚁信用分</div></div></td>
                        <td class="el-table_1_column_4"><div class="cell" v-show="huoqumayi(item.tZhimaAuth)">{{huoqumayi(item.tZhimaAuth)}}</div>
                                                        <div class="cell" v-show="!huoqumayi(item.tZhimaAuth)">
                                                          <el-button size="small" @click="getmayifen">查询</el-button></div></td>
                      </tr>
                       <tr class="el-table__row zidingyi">
                        <td class="el-table_1_column_1"><div class="cell"><div>运营商查询</div></div></td>
                        <td class="el-table_1_column_4">
                                                      <div class="cell" v-show="huoquyunyings(item.tOperators)">{{huoquyunyings(item.tOperators)}}</div>
                                                      <div class="cell" v-show="!huoquyunyings(item.tOperators)">
                                                        <el-button size="small" @click="getyunyings(item.ss)">查询</el-button></div></td>
                      </tr>
                      <tr class="el-table__row zidingyi">
                        <td class="el-table_1_column_1"><div class="cell"><div>活体检测</div></div></td>
                        <td class="el-table_1_column_4">
                                                <div class="cell" v-show="huoquhuoti(item.tLiveTesting)">{{huoquhuoti(item.tLiveTesting)}}</div>
                                                <div class="cell" v-show="!huoquhuoti(item.tLiveTesting)">
                                                  <el-button size="small"  @click="gethuoti(item.ss,zhenxinxiArray[index].customer.name)">查询</el-button></div></td>
                      </tr>
                      <tr class="el-table__row zidingyi">
                        <td class="el-table_1_column_1"><div class="cell"><div>违章</div></div></td>
                        <td class="el-table_1_column_4">
                                                  <div class="cell" v-show="huoquweizhang(item.tPeccancy)">{{huoquweizhang(item.tPeccancy)}}</div>
                                                  <div class="cell" v-show="!huoquweizhang(item.tPeccancy)">
                                                    <el-button size="small" @click="getweizhang(item.ss)">查询</el-button></div></td>
                      </tr>

                    </tbody>
                  </table>
             </div>
           </div>
     </div>
   </el-tab-pane>
        </el-tabs>

     <el-dialog title="运营商信息查询" :visible.sync="dialogFormVisible1">
       <el-form >
         <el-form-item label="手机号码" :label-width="formLabelWidth">
           <el-input v-model="phoneNumber" ref="phone" disabled auto-complete="off"></el-input>
         </el-form-item>
           <el-form-item label="服务密码" :label-width="formLabelWidth">
           <el-input v-model="password" auto-complete="off"></el-input>
         </el-form-item>
          <el-form-item label="验证码" :label-width="formLabelWidth">
           <el-input v-model="code" auto-complete="off"></el-input><el-button :disabled="ok" v-show="show" @click="getCode" class="yanzhengam">获取验证码</el-button>
                                       <el-button v-show="!show" class="yanzhengam">{{count}}</el-button>
         </el-form-item>
       </el-form>
       <div slot="footer" class="dialog-footer">
         <el-button @click="dialogFormVisible1 = false">取 消</el-button>
         <el-button type="primary" @click="chaxunyingyingshang">查询</el-button>
       </div>
     </el-dialog>

      <el-dialog title="银行卡四要素校验" :visible.sync="dialogFormVisible">
       <el-form >
         <el-form-item label="银行卡号" :label-width="formLabelWidth">
           <el-input v-model="bankCard" auto-complete="off"></el-input>
         </el-form-item>
       </el-form>
       <div slot="footer" class="dialog-footer">
         <el-button @click="dialogFormVisible = false">取 消</el-button>
         <el-button type="primary" @click="chaxunsiyaosu">查询</el-button>
       </div>
     </el-dialog>

       <el-dialog title="活体检验" :visible.sync="dialogFormVisible2">
       <el-form >
         <el-form-item label="语音验证" :label-width="formLabelWidth">
           <el-input v-model="yanzhengma" class="yuyinyanzheng" disabled auto-complete="off"></el-input><el-button :disabled="huotiok"  @click="getCode1" class="yanzhengam">获取验证码</el-button>
         </el-form-item>
         <el-form-item label="视频文件" :label-width="formLabelWidth">
           <el-input type="file" ref="ship"  class="shipwenjian"  auto-complete="off"></el-input>
         </el-form-item>
       </el-form>
       <div slot="footer" class="dialog-footer">
         <el-button @click="dialogFormVisible2 = false">取 消</el-button>
         <el-button type="primary" @click="chaxunhuotia">查询</el-button>
       </div>
     </el-dialog>

     <el-dialog title="违章查询" :visible.sync="dialogFormVisible3">
       <el-form >
          <el-form-item label="车牌号" class="chepinpai" :label-width="formLabelWidth">
         <form id="city1">
                    <select id="city" v-model="sheng">
                        <option v-for="(element, index) in shuju" :key="index">{{element['key1']}}</option>
                    </select>
                    <span class="hit"></span>
                </form>
                <form id="city2">
                        <select id="zimu" v-model="shi">
                          <option v-for="(element,index) in shis" :key="index">{{element}}</option>
                        </select>
                        <span class="hit"></span>
                    </form>
                     <el-input v-model="haoma"  placeholder="5位字母或数字" class="duan" auto-complete="off"></el-input>
                 </el-form-item>
         <el-form-item label="车架号" :label-width="formLabelWidth">
           <el-input v-model="classno" placeholder="车架号后六位" auto-complete="off"></el-input>
         </el-form-item>
          <el-form-item label="发动机号" :label-width="formLabelWidth">
           <el-input v-model="engineno" placeholder="发动机号后六位" auto-complete="off"></el-input>
         </el-form-item>
       </el-form>
       <div slot="footer" class="dialog-footer">
         <el-button @click="dialogFormVisible3 = false">取 消</el-button>
         <el-button type="primary" @click="chaxunweizhang">查询</el-button>
       </div>
     </el-dialog>

   </div>
 </template>

 <script scoped>
import Zhenxinxinxi from "../../components/Zhenxinxinxi";
import {formaTime} from '@/assets/utils'
import { zhenxinxi,tijiaoyanzhengma, diaoyongduotou,weizhangchaxun, fenkongxiangqing, chaxusiyaosu, zaiwangzhuangtai, zaiwangshichang, fanqizha, shoujieryuansu, huoquyanzhengma, yunyings1, yunyings2, huotiyanzhengma, huotichaxun} from "../../api/index";
export default {
  data() {
    return {
      index: "",
      fengkong: [],
      jibenxinxi: {},
      zhenxinxiArray: [],
      ss: {
        applicationFormId: ""
      },
      activeName: "first",
      dialogFormVisible: false,
      dialogFormVisible1: false,
      dialogFormVisible2: false,
      dialogFormVisible3: false,
      formLabelWidth: '120',
      formLabelWidth1: '120px',
      bankCard: '',
      lenderId: '',
      password: '',
      phoneNumber: '',
      code: '',
      show: true,
      count: '',
      timer: null,
      ok: true,
      fullscreenLoading: false,
      yanzhengma: '',
      task_id: '',
      name: '',
      idCard: '',
      huotiok: false,
      loading: '',
      shuju:  [
                {key1: "京" , value:  "A,B,C,E"},
                {key1:"冀", value: "A,B,C,D,E,F,G,H,J,R,S,T"},
                {key1:"辽", value: "A,B,C,D,E,F,G,H,J,K,L,M,N,P"},
                {key1:"皖", value: "A,B,C,D,E,F,G,H,J,K,L,M,N,P,Q,R,S"},
                {key1:"苏", value: "A,B,C,D,E,F,G,H,J,K,L,M,N"},
                {key1:"鄂", value: "A,B,C,D,E,F,G,H,J,K,L,M,N,P,Q,R,S"},
                {key1:"晋", value: "A,B,C,D,E,F,G,H,J,K,L,M"},
                {key1:"吉", value: "A,B,C,D,E,F,G,H,J"},
                {key1:"粤", value: "A,B,C,D,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,U,V,W,X,Y,Z"},
                {key1:"宁", value: "A,B,C,D,E"},
                {key1:"琼", value: "A,B,C,D,E"},
                {key1:"津", value: "A,B,C"},
                {key1:"豫", value: "A,B,C,D,E,F,G,H,J,K,L,M,N,P,Q,R,S,U"},
                {key1:"黑", value: "A,B,C,D,E,F,G,H,J,K,L,M,N,P,R"},
                {key1:"鲁", value: "A,B,C,D,E,F,G,H,J,K,L,M,N,P,Q,R,S,U,V"},
                {key1:"浙", value: "A,B,C,D,E,F,G,H,J,K,L"},
                {key1:"桂", value: "A,B,C,D,E,F,G,H,J,K,L,M,N,P,R"},
                {key1:"蒙", value: "A,B,C,D,E,F,G,H,J,K,L,M"},
                {key1:"闽", value: "A,B,C,D,E,F,G,H,J,K"},
                {key1:"川", value: "A,B,C,D,E,F,H,J,K,L,M,N,P,Q,R,S,T,U,V,W,X,Y,Z"},
                {key1:"渝", value: "A,B,C,F,G,H"},
                {key1:"沪", value: "A,B,C,D,R"},
                {key1:"云", value: "A,C,D,E,F,G,H,J,K,L,M,N,P,Q,R,S"},
                {key1:"湘", value: "A,B,C,D,E,F,G,H,J,K,L,M,N,U"},
                {key1:"新", value: "A,B,C,D,E,F,G,H,J,K,L,M,N,P,Q,R"},
                {key1:"赣", value: "A,B,C,D,E,F,G,H,J,K,L,M"},
                {key1:"甘", value: "A,B,C,D,E,F,G,H,J,K,L,M,N,P"},
                {key1:"陕", value: "A,B,C,D,E,F,G,H,J,K,V"},
                {key1:"贵", value: "A,B,C,D,E,F,G,H,J"},
                {key1:"青", value: "A,B,C,D,E,F,G,H"},
                {key1:"藏", value: "A,B,C,D,E,F,G,H,J"}
      ],
      sheng: '',
      shis:[],
      shi: '',
      haoma: '',
      classno: '',
      engineno: ''


    };
  },
  components: {
    Zhenxinxinxi
  },
  methods: {
    getzhenixnxi() {
      zhenxinxi(this.ss).then(res => {
        this.zhenxinxiArray = res.data.map(element => {
          if (!element.bankCreditResult) {
            element.bankCreditResult = "等待银行人员审核";
          }
          if (element.customer.lenderType == 3) {
              element.customer.lenderType = '担保人'
          }
          if (element.customer.lenderType == 2) {
              element.customer.lenderType = '配偶' 
          }
           if (element.customer.lenderType == 0) {
              element.customer.lenderType = '主贷人' 
          }
            element.createDate = formaTime(element.createDate)
          return element;
        });
        this.getxiangxi();
      });
    },
    huoquduotou(element) {
      const cishu1 = JSON.parse(element.loanLogs).length;
      const cishu2 = JSON.parse(element.overdueLogs).length;
      const cishu3 = JSON.parse(element.rejectedLogs).length;
      const cishu4 = JSON.parse(element.applyLogs).length;
      return '申请次数:' + cishu4 + ' ,拒贷次数:' + cishu3 + ' ,逾期次数:' + cishu2 + ' ,放款次数:' + cishu1;
    },
    getduotou(element) {
        this.lenderId = element.lenderId;
        let ss = {
           "applicationFormId": this.ss.applicationFormId,
                    "lenderId": this.lenderId,
        }
        diaoyongduotou(ss).then(res => {
          if(res.code = 200) {
            this.open3('查询成功！');
            location.reload();
          } else {
            this.open6(res.message)
          }
        })

    },
    chaxunweizhang() {
                    if(this.haoma != ''){
                        if(this.haoma.search(/^[0-9a-zA-Z]{5}$/) == -1){
                           this.open6('请输入正确的车牌号')
                            return;
                        }
                    }
                    if(this.classno.length != 6){
                            this.open6('请输入正确的车架号');
                            return;
                    }
                    if(this.engineno.length != 6){
                        this.open6('请输入正确的发动机号');
                        return;
                    }
                    let ss = {
                        classno: this.classno,
                        engineno: this.engineno,
                        hphm:this.sheng + this.shi + this.haoma,
                        applicationFormId: this.ss.applicationFormId,
                        lenderId: this.lenderId,
                        idCard: this.idCard
                    }
                    weizhangchaxun(ss).then(res => {
                      if (res.code == 200) {
                          this.open3('查询成功！');
                          this.dialogFormVisible3 = false
                          location.reload();
                      } else {
                        this.open6(res.message)
                      }
                    })

    },
    getweizhang(element) {
        this.idCard = element.idCard;
        this.lenderId = element.lenderId;
        this.dialogFormVisible3 = true;
    },
    chaxunhuotia() {
      
      let video = this.$refs.ship.$el.querySelector('.el-input__inner').files[0];
         var formData = new FormData();
          formData.append("file", video);
          formData.append('applicationFromId',this.ss.applicationFormId);
          formData.append('taskId',this.task_id);
          formData.append('name',this.name);
          formData.append('idCard',this.idCard);
          this.loading = this.$loading({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
          });
          huotichaxun(formData).then(res => {
            if (res.code == 200) {
              this.open3('成功查询！')
              this.loading.close();
              this.dialogFormVisible2 = false;
              location.reload();
            } else {
              this.open6(res.message)
            }
          })

    },
    gethuoti(element, name) {
      this.name = name;
      this.dialogFormVisible2 = true;
      this.idCard = element.idCard;
      this.huotiok = false;
    },
    
    getCode(){//获取验证码
      let ss = {
          "applicationFormId": this.ss.applicationFormId,
                     "mobile": this.phoneNumber,
                   "password": this.password,
                   'lenderId': this.lenderId
      }
      huoquyanzhengma(ss).then(res => {
            if (res.code == 200) {
                this.open3('验证码发送成功！');
                this.task_id = JSON.parse(res.data).task_id;
                const TIME_COUNT = 60;
                if (!this.timer) {
                  this.count = TIME_COUNT;
                  this.show = false;
                  this.timer = setInterval(() => {
                  if (this.count > 0 && this.count <= TIME_COUNT) {
                    this.count--;
                    } else {
                    this.show = true;
                    clearInterval(this.timer);
                    this.timer = null;
                    }
                  }, 1000)
                  }
            } else {
                this.open6(res.message)
            }
      })
     
   }, 
   getCode1() {
     huotiyanzhengma().then(res => {
       if (res.code == 200) {
         let data = JSON.parse(res.data);
         this.yanzhengma = data.random_number;
         this.task_id = data.task_id;
         this.huotiok = true;
       }
     })

   }, 
   chaxunyingyingshang() {
     const that = this;
     let ss = {
        "applicationFormId": this.ss.applicationFormId,
        "taskId": this.task_id,
        "verificationCode": this.code,
        "idCard": this.idCard
      }
     this.loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        console.log(this.task_id);
     tijiaoyanzhengma(ss).then(res => {
       if (res.code == 200) {
          let currentIndex = 0;
          getImg();
              function getImg(){
                  if (currentIndex < 50) {
                  yunyings1(that.task_id).then(res => {
                    if (res.data && JSON.parse(res.data).phase_status == 'DONE_SUCC') {
                        that.chaxunshujuku();
                        return;
                    }
                     currentIndex++;
                     setTimeout(getImg, 4000);
                  })
                  } else {
                   
                  }
              }
       }
     })

   },
   chaxunshujuku() {
     setTimeout(() => {
        yunyings2(this.ss.applicationFormId, this.idCard).then(res => {
          if (res.code == 200) {
              this.open3('查询结束!')
              this.loading.close();
              this.dialogFormVisible1 = false;
               location.reload();
          }
        })
     },2000)
   },
    getmayifen() {
        this.open3('请到微信小程序端查询！')
    },
    geteryuansu(element) {//手机二元素
         let ss = {
         "applicationFormId": this.ss.applicationFormId,
         "lenderId": element.lenderId,
      }
      shoujieryuansu(ss).then(res => {
        if (res.code == 200) {
            this.open3('查询成功！')
             location.reload();
        } else {
            this.open6(res.message)
        }
      })
    },
    getyunyings(element) {
      console.log(element)
      this.dialogFormVisible1 = true;
      this.phoneNumber = element.mobile;
      this.lenderId = element.lenderId;
      this.idCard = element.idCard;
    },
    getfanqizha(element) {
                let ss = {
                    "applicationFormId": this.ss.applicationFormId,
                    "idCard":element.idCard,
                    "mobile": element.mobile,
                }
                fanqizha(ss).then(res => {
                  if (res.code == 200) {
                      this.open3('查询成功！')
                       location.reload();
                  } else {
                    this.open6(res.message)
                  }
                })
    },
    huoqumayi(element) {
        if (!element) {
            return '';
        } else {
            return element.score;
        }
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
       },
      xianshi(element) {
       this.lenderId = element.lenderId;
       this.dialogFormVisible = true;
      },
    chaxunsiyaosu(element) {//查询四要素
          if (this.bankCard.length < 15) {
              this.open6('请输入正确的银行卡号！')
              return
          } 
          let ss = {
            'applicationFormId': this.ss.applicationFormId,
            "bankCard": this.bankCard,
            "lenderId": this.lenderId,
            "type": 4
          }
          chaxusiyaosu(ss).then(res => {
            if (res.code == 200) {
                this.open3('查询成功！')
                location.reload();
            } else {
                this.open6(res.message)
            }
          })

    },
    chaxunshijian(element) {
         let ss = {
         "applicationFormId": this.ss.applicationFormId,
         "lenderId": element.lenderId,
      }
      zaiwangzhuangtai(ss).then(res => {
        if (res.code == 200) {
            this.open3('查询成功！')
        } else {
          this.open6(res.message)
        }
      })
    },
    chaxunzaiwang(element) {//在网状态
      let ss = {
         "applicationFormId": this.ss.applicationFormId,
         "lenderId": element.lenderId,
      }
      zaiwangzhuangtai(ss).then(res => {
        if (res.code == 200) {
            this.open3('查询成功！')
             location.reload();
        } else {
          this.open6(res.message)
        }
      })
    },
    getxiangxi() {//获取详情
    var that = this;
      // this.zhenxinxiArray.forEach((element, index) => {
      //   let ss = {
      //     applicationFormId: element.customer.applicationFormId,
      //     idCard: element.customer.idCard,
      //     lenderId: element.customerLenderId,
      //     mobile: element.customer.phoneNumber
      //   };
      //   fenkongxiangqing(ss).then(res => {
      //     res.data.ss = ss;
      //    if (index == 0) {
      //      res.data.num = 'first'
      //    } else if (index == 1){
      //      res.data.num = 'seconed'
      //    } else if (index == 2) {
      //      res.data.num = 'third'
      //    }
      //     // this.fengkong[index] = c;
      //     // this.fengkong.push(res.data)
      //     this.$set(this.fengkong, index, res.data)
      // });
      // });
      const length = this.zhenxinxiArray.length;
      let i = 0;

      getImg();
      function getImg() {
      let ss = {
            applicationFormId: that.zhenxinxiArray[i].customer.applicationFormId,
            idCard:  that.zhenxinxiArray[i].customer.idCard,
            lenderId:  that.zhenxinxiArray[i].customerLenderId,
            mobile:  that.zhenxinxiArray[i].customer.phoneNumber
      }
         fenkongxiangqing(ss).then(res => {
          res.data.ss = ss;
         if (i == 0) {
           res.data.num = 'first'
         } else if (i == 1){
           res.data.num = 'seconed'
         } else if (i == 2) {
           res.data.num = 'third'
         }
          that.fengkong.push(res.data)
          if (i + 1 < length) {
              i++;
              getImg();
          }
        });
      }
      
    },
    huoquqizha(element) {//获取欺诈
        if (!element) {
          return '';
        } else {
          return   '涉嫌欺诈次数为：'+ JSON.parse(element.risks).length;
        }
    },
    huoquyunyings(element) {//获取运营商
      if (element && element.description == '账号已被锁定') {
          return '账号已被锁定';
      }
      if (!element) {
        return '';
      } else {
        return   '通话记录:'+ element.callNumber + '短信记录:'+ element.messageNumber;
      }
    },
    huoquhuoti(element) {//获取活体
      if (!element) {
        return '';
      } else {
        let ss = element.confidence < 50 ? '人像与身份证此人不符' : '人像基本符合'
        return   '语音识别:'+ element.validation + '人像判断:'+ ss;
      }
    },
    huoquweizhang(element) {//获取违章
      if (!element) {
        return '';
      } else {
        return  '违章次数:'+JSON.parse(element.lists).length;
      }
    }
  },
  watch: {
  password(str) {
     if (str.length == 6) {
        this.ok = false;
     } else {
        this.ok = true;
     }
  },
  sheng(str) {
      this.shuju.forEach(element => {
        if (element.key1 == str) {
            this.shis = element.value.split(',');
        }
      })
  }
  },
  mounted() {
    this.ss.applicationFormId = localStorage.getItem("applicationFormId");
    this.getzhenixnxi(); //获取征信信息
  }
};
</script>

 <style lang="less">
 .fengkongxiangqing{
   .duan .el-input__inner, .duan{
   width: 156px!important;
 }
.el-tabs {
  padding: 0 10px;
}
.upload-demo{
  margin-left: 14px;
}
.yuyinyanzheng .el-input__inner{
  color: #409EFF!important;
}
.shipwenjian .el-input__inner{
  height: 24px;
  line-height: 18px;
}
.zidingyi td {
  width: 50%;
  float: left;
  display: inline-block;
  }
  .zidingyi{
    display: inline-block;
    width: 100%!important;
  }
  .zidingyi .el-table_1_column_4{
    text-align: center;
  }
  .zidingyi .cell div{
    color: #000!important;
    font-weight: 700;
  }
   .el-table__body{
     width: 100%!important;
   }
   .cell div{
     height: 32px;
     line-height: 32px;
   }
   .el-table_1_column_4 .cell{
     height: 33px;
     line-height: 33px;
   }
  
   .el-input{
     display: inline-block;
   }
   .yanzhengam{
     margin-left: 20px;
   }
   #city1, #city2 {
    width: 80px;
    height: 34px;
    line-height: 99px;
    display: inline-block;
    position: relative;
    margin-right: 5px;
}
#city, #zimu {
    width: 80px;
    height: 34px;
    line-height: 34px;
    border: none;
    padding-left: 10px;
    outline: none;
    border: 1px solid #ddd;
    vertical-align: top;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    background: #fff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAADCAIAAAA/Y+msAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxMjU1MjlFQjkzOTZFNjExQjg2RUJBODI4NkExRjQ5NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozQ0FFMzNDNzk3NzMxMUU2OEI1NEJFNERCRjU4MzExOCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozQ0FFMzNDNjk3NzMxMUU2OEI1NEJFNERCRjU4MzExOCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjFCQjJCRUVEMkE5N0U2MTE4Mjc2OTI0MzdGMUNEMDk2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjEyNTUyOUVCOTM5NkU2MTFCODZFQkE4Mjg2QTFGNDk1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+S5aYxQAAAB9JREFUeNpinDlzJgMqYEpLS0PmA7lMEArOB5IAAQYAvlkGmYLX19MAAAAASUVORK5CYII=) no-repeat center;
    background-position: 56px 14px;
    padding-left: 14px;
    }
    .chepinpai .el-form-item__content{
      height: 40px;
    }
    .el-input{
      display:inline-block;
      width:auto;
    }
    .duan{
      position: relative;
      top: -30px;
    }


 }
 
</style>
