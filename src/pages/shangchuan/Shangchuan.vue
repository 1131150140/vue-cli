<template>
    <div>
    <el-row >
        <el-col v-for="(item, index) in formInline" :key="index" :span="6" class="dinggao" >
            <span> <el-button size="small">复制链接</el-button></span>
            <PicCheck :pic="{'url': item}"  ref="shangchuan"  />
        </el-col>
    </el-row>
        <Picshangchuan/>
    </div>    
</template>

<script>
import Picshangchuan from '@/common/Picshangchuan'
import PicCheck from '@/common/PicCheck'
import {getSave} from '@/api/index'
export default {
    data() {
        return {
            formInline: []

        }
    },
    components: {
        Picshangchuan,
        PicCheck
    },
    methods: {
        getsvae() {
            getSave().then(res => {
                this.formInline = res.data;
            })

        }
    },
    mounted() {
        this.getsvae();
    }
}
</script>

<style>
 .dinggao{
     height: 174px;
     overflow: hidden;
 }

</style>
