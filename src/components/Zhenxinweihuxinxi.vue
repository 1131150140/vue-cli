<template>
 <div>
  <el-table
    :data="xinxi"
    style="width: 100%">
    <el-table-column
      prop="customer.name"
      label="姓名"
     >
    </el-table-column>
    
    <el-table-column
      prop="creditName"
      label="贷款银行">
    </el-table-column>
      <el-table-column
      prop="bankCreditResult"
      label="银行征信结果">
    </el-table-column>
      <el-table-column
      prop="result"
      label="审核结果">
    </el-table-column>
     <el-table-column
      prop="content"
      width="300"
      label="审核内容">
    </el-table-column>
    <el-table-column
      prop="createDate"
      label="征信申请日期">
    </el-table-column>
    <el-table-column
label="更换关系"
width="120">
<template slot-scope="scope">
    <el-select style="width:100px" :disabled="xinxi[scope.$index].customer.isMakeup ? true : false" v-model="xinxi[scope.$index].customer.lenderType">
      <el-option label="主贷人" value="0"></el-option>
      <el-option label="配偶" value="2"></el-option>
       <el-option label="担保人" value="3"></el-option>
    </el-select>
</template>
</el-table-column>
 <el-table-column
fixed="right"
label="操作"
width="100">
<template slot-scope="scope">
  <el-button @click="handleClick(scope.$index)" :disabled="(xinxi[scope.$index].customer.isMaster ||  nodeId != '2') ? true : false" type="text" >删除</el-button>
</template>
</el-table-column>
  </el-table> 
    <div class="margintop">
        <el-button @click="bulu">担保补录</el-button>
        <el-button @click="fanhui">返回上一页</el-button>
        <el-button @click="hanlebaocun" type="primary">保存</el-button>
        <el-button  @click="tijiao" type="success">提交</el-button>
    </div>
    </div>
  
</template>

<script>
import {jiaohuanguanxi, deletezhengxin, weihutijiao} from '../api/index'
export default {
    
    props: {
        xinxi: Array,
        nodeId: String
    },
    data() {
      return {
          baocun : {
              'applicationFormId': '',
              'lenders':[]
          }
      }
    },
    mounted() {
        this.baocun.applicationFormId = localStorage.getItem('applicationFormId');
    },
    methods: {
       fanhui() {
           window.history.go(-1);
       },
       handleClick(index) {
            this.open2(this.xinxi[index].customerLenderId,index);
       },
       open2(lenderId, index) {
           let ss = {
               'lenderId':lenderId
           }
        this.$confirm('此操作将删除该征信人员, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            deletezhengxin(ss).then(res => {
                if (res.code == 200) {
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                        this.xinxi.splice(index, 1);
                        console.log(this.xinxi)
                } else {
                    this.$message({
                    type: 'info',
                    message: res.message
                });  
                }
                
            })

          
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
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
        });
      },
       hanlebaocun() {
            this.baocun.lenders = [];
            var panduan =this.xinxi.filter(element => {
              return element.customer.lenderType == '0';
            });
            if (panduan.length == 1) {
                this.xinxi.forEach(element => {
                    this.baocun.lenders.push({
                        'lenderId': element.customerLenderId,
                        'lenderType': element.customer.lenderType
                    })
                })
                jiaohuanguanxi(this.baocun).then(res => {
                    if (res.code == 200) {
                        this.open3('已成功修改征信信息关系类型！')
                    } else {
                         this.open6(res.message)
                    }
                })
            } else {
                this.open6('修改征信信息关系类型必须得有且只能有一个主贷人！');
            }
       },
       tijiao() {
            let arrs = [];
            this.xinxi.forEach(element => {
                arrs.push({
                     'lenderId' : element.customerLenderId,
                    'lenderType': element.customer.lenderType
                })
            })
            let ss =
            {
                "applicationFormId": this.baocun.applicationFormId,
                "flowId": '1',
                "lenders": arrs,
                "nodeId": '2'
            }
           weihutijiao(ss).then(res => {
               if (res.code == 200) {
                   this.open3('提交成功！')
                   this.$router.push({path: '/manage'})
               } else {
                   this.open6(res.message);
               }
           })

       },
       bulu() {
           this.$router.push({path: '/zhenxinbulv'})
       }
    },
    mounted() {
        this.baocun.applicationFormId = localStorage.getItem('applicationFormId')
    }
  }
</script>

<style scoped>
    .el-table .warning-row {
    background: oldlace;
  }
  .el-input__inner{
      width: 100px!important;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
  .el-table__row td  {
      text-align: left;
  }
  .margintop{
      margin-top: 20px;
  }
  .el-input__inner{
      width:100px!important;
  }
</style>
