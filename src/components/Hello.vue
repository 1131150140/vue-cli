<template>
  <div class="hello">
    <div class="guanli">
      <span style="color:#909399">公司管理</span>
      <el-button type="primary" class="tianjiagongs" @click="xizeng">新增</el-button>
    </div>
    <tree-grid :columns="columns" :tree-structure="true" requestUrl="companyAdd" :data-source="dataSource"></tree-grid>
  </div>
</template>

<script>
import TreeGrid from './treeTable'
import {getcompanystructure, departdelete} from '@/api/index'
import {formaTime} from '@/assets/utils'
export default {
  name: 'hello',
  data () {
    return {
      columns: [
          {
            text: '公司名称',
            dataIndex: 'name'
          },
          {
            text: '公司负责人',
            dataIndex: 'master'
          },
          {
            text: '负责人手机号',
            dataIndex: 'mobile'
          },
          {
            text: '创建时间',
            dataIndex: 'createtime'
          },
          {
            text: '备注',
            dataIndex: 'mark'
          }
        ],
      dataSource: []
    }
  },
  components: {
    TreeGrid
  },
  mounted() {
    this.getjiahou();   
  },
  methods: {
    getjiahou() {
      getcompanystructure().then(res => {
          res.data.forEach(element => {
            element.createTime = formaTime(element.createTime)
          });
        this.dataSource = res.data;
      })
    },
    xizeng() {
        this.$router.push({path: '/companyAdd'})
    },
    handDelete(index) {
     this.getjiahou();
    },
    delete(id) {
      departdelete({'departid': id}).then(res => {
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
  created() {
    this.$bus.on('companyAdd', this.delete)
  },
  beforeDestroy() {
     this.$bus.off('companyAdd', this.delete)
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
    display: flex;
    align-items: center;
    .tianjiagongs{
      margin-left: auto;
      width: 100px;
      height: 30px;
      padding: 0;
      text-align: center;
      margin-right: 20px;
      
    }

  }


}

</style>
