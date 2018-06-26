<template>
<div class="shenheliu">
    <el-steps :align-center=true :active="index1" finish-status="success">
    <el-step v-for="item in list" :key="item.id" :title="item.nodeName"></el-step>
    </el-steps>
</div>

</template>

<script>
import {dianziliucheng} from '../api/index'
export default {
    data() {
        return {
            list : [],
            index1: 0,
            nodeId: '',
             ss: {
                'applicationFormId': ''
            }
        }
    },
    props: {
        node: String
    },
    methods: {
        nodeIdIndex() {
                dianziliucheng().then(res => {
                    if (res.code == 200) {
                        this.list = res.data;
                        this.list.forEach((element, index) => {
                            if (element.id == this.nodeId) {
                            this.index1 = index;
                            }
                        })
                    }
            })
            
        }
    },
    watch:{
        node() {
            this.nodeId = this.node;
            this.nodeIdIndex();
        }
    },
    mounted() {
       this.ss.applicationFormId = localStorage.getItem('applicationFormId');
       
    }

}
</script>

<style>
    .shenheliu{
       padding: 20px 0;
    }
</style>
