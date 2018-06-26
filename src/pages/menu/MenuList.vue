<template>
  <div class="hello">
    <div class="guanli">
      <span style="color:#909399">菜单管理</span>
      <el-button type="primary" class="yidong" size="small" @click="addziyuan">添加访问资源</el-button>
      <el-button type="primary" class="yidong" size="small" @click="xizeng">新增菜单目录</el-button>
    </div>
    <tree-grid :columns="columns" :defaultExpandAll="false" :tree-structure="true" requestUrl="Menu" :data-source="dataSource"></tree-grid>
  </div>
</template>

<script>
import TreeGrid from '@/components/treeTable'
import {getstructure, deleteMenu} from '@/api/index'
import {formaTime} from '@/assets/utils'
export default {
  name: 'hello',
  data () {
    return {
      columns: [
          {
            text: '名称',
            dataIndex: 'name'
          },
          {
            text: '创建时间',
            dataIndex: 'createtime'
          },
           {
            text: '排序',
            dataIndex: 'orderNum'
          },
           {
            text: '访问路径',
            dataIndex: "resources"
          }
        ],
      dataSource: []
    }
  },
  components: {
    TreeGrid
  },
  methods: {
    getjiahou() {
      getstructure().then(res => {
        this.dataSource = res.datas;
      })
    },
    xizeng() {
        this.$router.push({path: '/menuAdd'})
    },
    addziyuan() {
        this.$router.push({path: '/menuZiyuan'})
    },
    delete(id) {
      deleteMenu(id).then(res => {
           if (res.code == 200) {
               this.$message({
                type: 'success',
                message: '删除成功!'
              })
              this.getjiahou();
           } 
          })
    }
  },
   mounted() {
    this.getjiahou();   
  },
  created() {
    this.$bus.on('Menu', this.delete)
  },
  beforeDestroy() {
     this.$bus.off('Menu', this.delete)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.hello{
  min-width: 990px;
  .el-table__header-wrapper, .el-table__header tr th{
    height: 36px;
    line-height: 36px;
    padding: 0;
  }
  .el-table__row td{
    padding: 0;
    height: 36px;
    line-height: 36px;
  }
  .el-table__header-wrapper{
    border-bottom: 1px solid #ebeef5;
  }
  .guanli{
    width: 100%;
    height: 50px;
    line-height: 50px;
    padding-left: 14px;
   
    align-items: center;
    .tianjiagongs{
     float: right;
      width: 100px;
      height: 30px;
      padding: 0;
      text-align: center;
      margin-right: 20px;
      margin-top: 10px
    }
  }
  .yidong{
    margin-left: 20px;
  }


}

</style>
