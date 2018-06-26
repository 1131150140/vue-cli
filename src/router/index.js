import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      component:resolve => require(['@/pages/login/Login'],resolve)
    },
    {
      path: '/manage',
      component:resolve => require(['@/common/leftNav'],resolve),
      children: [{
        path: '',
        component: resolve => require(['@/common/Home'],resolve),
        meta: [],
      },
      {
        path: '/orderList',
        component:resolve => require(['@/pages/order/OrderList'],resolve)
      },
      {
        path: '/orderAdd',
        component:resolve => require(['@/pages/order/OrderAdd'],resolve)
      },
      {
        path: '/fujian',
        component:resolve => require(['@/pages/fujian/Fujian'],resolve)
      },
      {
        path: '/zhenxinList',
        component:resolve => require(['@/pages/zhenxin/ZhenxinList'],resolve)
      },
      {
        path: '/dianziShenhe',
        component:resolve => require(['@/pages/dianzi/DianziShenhe'],resolve)
      },
      {
        path: '/daibanrenwu',
        component:resolve => require(['@/pages/daiban/Daiban'],resolve)
      },
      {
        path: '/baodan',
        component:resolve => require(['@/pages/baodan/BaodanList'],resolve)
      },
      {
        path: '/zhenxinshenhe',
        component:resolve => require(['@/pages/zhenxin/ZhenxinShenhe'],resolve)
      },
      {
        path: '/zhenxinweihu',
        component:resolve => require(['@/pages/zhenxin/ZhenxinWeihu'],resolve)
      },
      {
        path: '/zhenxinbulv',
        component:resolve => require(['@/components/ZhenxinBulv'],resolve)
      },
      {
        path: '/Zhenxinpanduan',
        component:resolve => require(['@/pages/zhenxin/ZhenxinPanduan'],resolve)
      },
      {
        path: '/qiandancaiji',
        component:resolve => require(['@/pages/qiandan/Qiandan'],resolve)
      },
      {
        path: '/shujufengkong',
        component:resolve => require(['@/pages/fengkong/shujufengkong'],resolve)
      },
      {
        path: '/fengkongxiangqing',
        component:resolve => require(['@/pages/fengkong/Fengkongxiangqing'],resolve)
      },
      {
        path: '/ziliaoshenhe',
        component:resolve => require(['@/pages/qiandan/Ziliaoshenhe'],resolve)
      },
      {
        path: '/dianziDetail',
        component:resolve => require(['@/pages/dianzi/DianziDetail'],resolve)
      },
      {
        path: '/dianziexamine',
        component:resolve => require(['@/pages/dianzi/DianziExamine'],resolve)
      },
      {
        path: '/kaikaluru',
        component:resolve => require(['@/pages/kaika/kaikaluru'],resolve)
      },
      {
        path: '/kaikaDetail',
        component:resolve => require(['@/pages/kaika/kaikaDetail'],resolve)
      },
      {
        path: '/kaikaauditList',
        component:resolve => require(['@/pages/kaika/KaikaAuditList'],resolve)
      },
      {
        path: '/kaikaiAudit',
        component:resolve => require(['@/pages/kaika/KaikaAudit'],resolve)
      },
      {
        path: '/kaikaList',
        component:resolve => require(['@/pages/kaika/KaikaList'],resolve)
      },
      {
        path: '/homeList',
        component:resolve => require(['@/pages/homevisit/HomeList'],resolve)
      },
      {
        path: '/homeDetail',
        component:resolve => require(['@/pages/homevisit/homeDetail'],resolve)
      },
      {
        path: '/homeDetail',
        component:resolve => require(['@/pages/homevisit/homeDetail'],resolve)
      },
      {
        path: '/homegeren',
        component:resolve => require(['@/pages/homevisit/homegeren'],resolve)
      },
      {
        path: '/companyAdd',
        component:resolve => require(['@/pages/company/companyAdd'],resolve)
      },
      {
        path: '/companyAddJi',
        component:resolve => require(['@/pages/company/companyAddJi'],resolve)
      },
      {
        path: '/hello',
        component:resolve => require(['@/components/Hello'],resolve)
      },
      {
        path: '/picshang',
        component:resolve => require(['@/pages/shangchuan/Shangchuan'],resolve)
      },
      {
        path: '/companyAddEr',
        component:resolve => require(['@/pages/company/companyAddEr'],resolve)
      },
      {
        path: '/companyAddedit',
        component:resolve => require(['@/pages/company/companyAddEdit'],resolve)
      },
      {
        path: '/userManager',
        component:resolve => require(['@/pages/user/UserManager'],resolve)
      },
      {
        path: '/roleList',
        component:resolve => require(['@/pages/role/roleList'],resolve)
      },
      {
        path: '/roleAdd',
        component:resolve => require(['@/pages/role/roleAdd'],resolve)
      },
      {
        path: '/roleEdit',
        component:resolve => require(['@/pages/role/roleEdit'],resolve)
      },
      {
        path: '/AddAdmin',
        component:resolve => require(['@/pages/admin/AddAdmin'],resolve)
      },
      {
        path: '/AddList',
        component:resolve => require(['@/pages/admin/AdminList'],resolve)
      },
      {
        path: '/MenuList',
        component:resolve => require(['@/pages/menu/MenuList'],resolve)
      },
      {
        path: '/menuAdd',
        component:resolve => require(['@/pages/menu/MenuAdd'],resolve)
      },
      {
        path: '/menuZiyuan',
        component:resolve => require(['@/pages/menu/MenuZiyuan'],resolve)
      },
      {
        path: '/lujingList',
        component:resolve => require(['@/pages/lujing/LujingList'],resolve)
      },
      {
        path: '/lujingAdd',
        component:resolve => require(['@/pages/lujing/AddLujing'],resolve)
      },
      {
        path: '/lujingEdit',
        component:resolve => require(['@/pages/lujing/LujingEdit'],resolve)
      },
      {
        path: '/Menuedit',
        component:resolve => require(['@/pages/menu/Menuedit'],resolve)
      },
      {
        path: '/userAdd',
        component:resolve => require(['@/pages/user/UserAdd'],resolve)
      },
      {
        path: '/userEdit',
        component:resolve => require(['@/pages/user/UserEdit'],resolve)
      },
      {
        path: '/editPassward',
        component:resolve => require(['@/pages/user/EditPassward'],resolve)
      },
      {
        path: '/bankList',
        component:resolve => require(['@/pages/bank/BankList'],resolve)
      },
      {
        path: '/bankAdd',
        component:resolve => require(['@/pages/bank/bankAdd'],resolve)
      },
      {
        path: '/bankEdit',
        component:resolve => require(['@/pages/bank/BankEdit'],resolve)
      },
      {
        path: '/LoanList',
        component:resolve => require(['@/pages/loan/LoanList'],resolve)
      },
      {
        path: '/LoanAdd',
        component:resolve => require(['@/pages/loan/LoanAdd'],resolve)
      },
      {
        path: '/LoanEdit',
        component:resolve => require(['@/pages/loan/LoanEdit'],resolve)
      },
      {
        path: '/attachmentList',
        component:resolve => require(['@/pages/attachment/AttachmentList'],resolve)
      },
      {
        path: '/attachmentAdd',
        component:resolve => require(['@/pages/attachment/AttachmentAdd'],resolve)
      },
      {
        path: '/attachmentEdit',
        component:resolve => require(['@/pages/attachment/AttachmentEdit'],resolve)
      },
      {
        path: '/ceshi',
        component:resolve => require(['@/pages/login/ceshi'],resolve)
      },
      {
        path: '/flowList',
        component:resolve => require(['@/pages/flow/FlowList'],resolve)
      },
      {
        path: '/flowEdit',
        component:resolve => require(['@/pages/flow/FlowEdit'],resolve)
      }
      
     
      
     
     
    
    
    ]
    }
  ]
})
