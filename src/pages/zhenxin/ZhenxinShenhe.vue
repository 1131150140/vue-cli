<template>
  <div class="shenheliu">
      <Shenheliu></Shenheliu>
      <!-- <Jibenxinxi :xinxi="jibenxinxi"></Jibenxinxi> -->
      <Zhenxinxinxi :xinxi="zhenxinxiArray"></Zhenxinxinxi>
  </div>
</template>

<script>
import Shenheliu from '../../components/Shenheliu'
import Jibenxinxi from '../../components/Jibenxinxi'
import Zhenxinxinxi from '../../components/Zhenxinxinxi'
import {jibenxinxi, zhenxinxi} from '../../api/index'
import {formaTime} from '@/assets/utils'
export default {
    data() {
        return {
            jibenxinxi: {},
            zhenxinxiArray: [],
            ss: {
                'applicationFormId': ''
            }
        }
    },
    components: {
       Shenheliu,
       Jibenxinxi, 
       Zhenxinxinxi
    },
    methods: {
        getjibenxin() {
            jibenxinxi(this.ss).then(res => {
               this.jibenxinxi = res.data;
            })
        },
        getzhenixnxi() {
            zhenxinxi(this.ss).then(res => {
            this.zhenxinxiArray =  res.data.map(element => {
                console.log(element)
                  element.createDate = formaTime(element.createDate)
                  if (!element.bankCreditResult) {
                      element.bankCreditResult = '等待银行人员审核';
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
                  return element;
            });
                   
        })
        }
    },
    mounted () {
        this.ss.applicationFormId = localStorage.getItem('applicationFormId');
        this.getjibenxin();//获取基本信息
        this.getzhenixnxi();//获取征信信息
    }
}
</script>

<style scoped>


</style>
