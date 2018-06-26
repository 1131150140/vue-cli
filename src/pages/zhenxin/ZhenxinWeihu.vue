<template>
  <div class="shenheliu">
      <Shenheliu></Shenheliu>
      <!-- <Jibenxinxi :xinxi="jibenxinxi"></Jibenxinxi> -->
      <Zhenxinweihuxinxi :xinxi="zhenxinxiArray" :nodeId="index"></Zhenxinweihuxinxi>
  </div>
</template>

<script>
import Shenheliu from '../../components/Shenheliu'
import Jibenxinxi from '../../components/Jibenxinxi'
import Zhenxinweihuxinxi from '../../components/Zhenxinweihuxinxi'
import {jibenxinxi, zhenxinxi} from '../../api/index'
import {formaTime} from '@/assets/utils'
export default {
    data() {
        return {
            index : '',
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
       Zhenxinweihuxinxi
    },
    methods: {
        getjibenxin() {
            jibenxinxi(this.ss).then(res => {
               this.jibenxinxi = res.data;
               this.index = res.data.nodeId;
            })
        },
        getzhenixnxi() {
            zhenxinxi(this.ss).then(res => {
            this.zhenxinxiArray =  res.data.map(element => {
                  if (!element.bankCreditResult) {
                      element.bankCreditResult = '等待银行人员审核';
                  }
                  element.createDate = formaTime(element.createDate)

                  return element;
            });
                   
        })
        }
    },
    mounted() {
        this.ss.applicationFormId = localStorage.getItem('applicationFormId');
        this.getjibenxin();//获取基本信息
        this.getzhenixnxi();//获取征信信息
    }
}
</script>

<style>
.shenheliu{
   
}
.margintop{
    text-align: center
}
.demo-form-inline{
    padding: 0 10px;
}


</style>
