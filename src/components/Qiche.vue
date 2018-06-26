<template>
  <div>
       <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="车辆品牌" class="bitian">
            <el-input  readonly size="small" class="cheliangpinpai"  v-model="prop.brand" ></el-input>
            <el-button size="small" @click="xuanze">选择</el-button>
        </el-form-item>
        <el-form-item label="车辆型号" class="bitian">
            <el-input   size="small" v-model="prop.vehicleModel"></el-input>
        </el-form-item>
         <el-form-item label="制造商名称" class="bitian">
            <el-input   size="small" v-model="prop.vehicleManufacturers"></el-input>
        </el-form-item>
         <el-form-item label="排量" class="bitian">
            <el-input   size="small" v-model="prop.displacement"></el-input>
        </el-form-item>
         <el-form-item size="small" label="车辆属性" class="bitian">
            <el-select v-model="prop.vehicleProperties" class="gender" placeholder="请选择">
            <el-option label="新车" value="新车"></el-option>
            <el-option label="二手车" value="二手车"></el-option>
             <el-option label="存量车" value="存量车"></el-option>
            </el-select>
        </el-form-item>
       <el-form-item size="small" label="车辆类别" class="bitian">
            <el-select v-model="prop.vehicleCategory" class="gender" placeholder="请选择">
            <el-option label="进口" value="进口"></el-option>
            <el-option label="国产" value="国产"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="原行车主" class="bitian">
            <el-input   size="small" v-model="prop.lastOwner"></el-input>
        </el-form-item>
         <el-form-item label="颜色" class="bitian">
            <el-input   size="small" v-model="prop.color"></el-input>
        </el-form-item>
         <el-form-item label="发动机号" class="bitian">
            <el-input   size="small" v-model="prop.engineNumber"></el-input>
        </el-form-item>
        <el-form-item label="车牌号" class="bitian">
            <el-input   size="small" v-model="prop.plateNumber"></el-input>
        </el-form-item>
         <el-form-item label="车架号" class="bitian">
            <el-input   size="small" v-model="prop.vin"></el-input>
        </el-form-item>
         <el-form-item label="上牌地" class="bitian">
            <el-input   size="small" v-model="prop.licensePlateAddress"></el-input>
        </el-form-item>
         <!-- <el-form-item  label="上牌地">
					<el-cascader
						:options="CityInfo"
						v-model="form.selectedOptions"
						:change-on-select="true"
						:clearable="true"
						:filterable="true"
						@change="handleChange">
					</el-cascader>
				</el-form-item> -->
         <el-form-item label="经销商" class="bitian">
            <el-input   size="small" v-model="prop.distributor"></el-input>
        </el-form-item>
         <el-form-item label="发票号" >
            <el-input   size="small" v-model="prop.invoiceNumber"></el-input>
        </el-form-item>
        <el-form-item size="small" label="过户日期" >
             <el-date-picker
            type="date"
            v-model="prop.closingDate"
            format="yyyy-MM-dd">
            </el-date-picker>
        </el-form-item>
        <el-form-item label="登记证书号" >
            <el-input   size="small" v-model="prop.registrationNumber"></el-input>
        </el-form-item>
        <el-form-item size="small" label="发票日期" >
             <el-date-picker
            type="date"
            v-model="prop.invoiceDate"
            format="yyyy-MM-dd">
            </el-date-picker>
        </el-form-item>
        <el-form-item size="small" label="上牌方式" class="bitian">
            <el-select v-model="prop.licensePlateType" class="gender" placeholder="请选择">
            <el-option label="公牌" value="公牌"></el-option>
            <el-option label="私牌" value="私牌"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="登记机关" >
            <el-input   size="small" v-model="prop.registerOffice"></el-input>
        </el-form-item>
        <el-form-item size="small" label="登记日期" >
             <el-date-picker
            type="date"
            v-model="prop.registerDate"
            format="yyyy-MM-dd">
            </el-date-picker>
        </el-form-item>
         
       
    </el-form>
     <el-dialog title="汽车品牌选择" class="qichepai" width="900px"  :visible.sync="dialogFormVisible">
      <el-form>
      <el-form-item label="品牌搜索" >
           <el-input v-model="pinpai"  auto-complete="off"></el-input>
         </el-form-item>
        </el-form>  
       <el-form class="qiche">
        <span @click="xuanzhong(item.name,item.vehicleType)" :key="item.name" v-for="item in qicheList1">{{item.vehicleType}}</span>
       </el-form>
       <div slot="footer" class="dialog-footer">
         <el-button @click="dialogFormVisible = false">取 消</el-button>
       </div>
     </el-dialog>
  </div>
  
</template>

<script>
import '../assets/city-picker/city-data'
import {qicheList} from '../api/index'
export default {
    data() {
        return {
            formInline: {
               user: '',
               region: ''
            },
            name: '',
             /*数据源*/
		 CityInfo: CityInfo,//地区数据
		 form: {
	         	city : '',
				erae : '',
				minerae : '',
				selectedOptions: [],//地区筛选数组
         },
         dialogFormVisible: false,
         qicheList: [],
         qicheList1:[],
         pinpai: '',
         formLabelWidth: '900px'
        }
    },
    props: {
        prop: Object
    },
    methods: {
		handleChange(value) {
			this.form.city = this.form.selectedOptions[0];
			this.form.erae = this.form.selectedOptions[1]
			this.form.minerae = this.form.selectedOptions[2]
     	},
         dianji() {
             console.log('111')
         },
         xuanze() {
             this.dialogFormVisible = true;
         },
         getpinpaiList() {
             qicheList().then(res => {
                 this.qicheList = res.data;
                  this.qicheList1 = res.data;
             })

         },
         xuanzhong(str, str1) {
             this.prop.brand = str;
             this.prop.vehicleModel = str1;
             this.dialogFormVisible = false;
         }
    },
    mounted() {
        this.getpinpaiList();
    },
    watch: {
        pinpai(str) {
           let str1 = this.qicheList.filter( element => {
                return element.vehicleType.includes(str)
            })
            this.qicheList1 = str1;
        }
    }

}
</script>

<style scoped>
.el-form-item__label{
    width: 82px;
}
.el-tab-pane{
    text-align: left;
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
.qiche span{
    cursor: pointer;
    width:136px;
    display: inline-block;
}
.qiche span:hover{
    color: #409EFF;
}



</style>
