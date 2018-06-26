import http from './public'

  // let url = 'http://192.168.1.52:10002';
 //let url = 'http://192.168.1.170:10002';
// let url = 'http://bluetimes.cn';
 let url = 'http://ych.bluetimes.cn/';

// 登陆
export const userLogin = (params = {}) => {
  return http.fetchPost(url+'/api/user/login', params)
}
// 退出登陆
export const loginOut = (params = {}) => {
  return http.fetchPost(url+'/api/user/logout')
}
// 获取用户信息
export const getUser = (params = {}) => {
    return http.fetchPost(url+'/common/getUser', params)
}
// 获取订单列表
export const getOrderList = (params = {}) => {
    return http.fetchPost(url+'/order/list', params)
}
// 上传图片
export const upload = (params = {}) => {
    return http.fetchPost(url+'/oss/base64', params)
}
//新建订单
export const orderAdd = (params = {}) => {
    return http.fetchPost(url+'/business/create', params)
}
//获取贷款银行
export const bankList = (params = {}) => {
    return http.fetchPost(url+'/bankManage/list', params)
}
//获取征信列表
export const zhenxinList = (params = {}) => {
    return http.fetchPost(url+'/business/list', params)
}
//获取垫资列表
export const dianziList = (params = {}) => {
    return http.fetchPost(url+'/advanceMoney/list', params)
}
//获取待办任务列表
export const daibanList = (params = {}) => {
    return http.fetchPost(url+'/task/list', params)
}
//获取保单列表
export const baodanList = (params = {}) => {
    return http.fetchPost(url+'/insurance/list', params)
}
//获取审核流程
export const shenheliucheng = (params = {}) => {
    return http.fetchPost(url+'/flow/show?flowId=1', params)
}
//获取垫资流程
export const dianziliucheng = (params = {}) => {
  return http.fetchPost(url+'/flow/show?flowId=2', params)
}
//获取基本信息
export const jibenxinxi = (params = {}) => {
    return http.fetchPost(url+'/collectionData/show', params)
}
//获取征信信息
export const zhenxinxi = (params = {}) => {
    return http.fetchPost(url+'/business/show', params)
}
//交换主贷人关系
export const jiaohuanguanxi = (params = {}) => {
    return http.fetchPost(url+'/credit/swap', params)
}
//征信补录
export const zhenxinbulv = (params = {}) => {
    return http.fetchPost(url+'/credit/makeUp', params)
}
//删除征信用户
export const deletezhengxin = (params = {}) => {
    return http.fetchPost(url+'/credit/delete', params)
}
//征信维护提交
export const weihutijiao = (params = {}) => {
    return http.fetchPost(url+'/business/creditCommit', params)
}
//征信审核详情
export const zhenxinshenheEdetal = (params = {}) => {
    return http.fetchPost(url+'/business/creditDetail', params)
}
//征信审核提交
export const zhenxinshenhetijiao = (params = {}) => {
    return http.fetchPost(url+'/business/bankExamine', params)
}
//合成下载图片
export const hechengxiazaitipian = (params) => {
    return http.fetchGet(url+'/oss/mergeImg?url='+params)
}
//签单采集信息
export const qiandancaiji = (params) => {
    return http.fetchPost(url+'/collectionData/show', params)
}
//查询贷款产品
export const chaxundaikuan = (params) => {
    let sessionId = localStorage.getItem('sessionId');
    return http.fetchPost(url+'/financialScheme/list', params)
}
//查询征信详情
export const zhengxinxiangqing = (params) => {
    return http.fetchPost(url+'/business/creditDetail', params)
}
//数据风控详情
export const fenkongxiangqing = (params) => {
    return http.fetchPost(url+'/financialCredit/customerFinancialCredit', params)
}
//查询银行卡四要素
export const chaxusiyaosu = (params) => {
    return http.fetchPost(url+'/financialCredit/checkBank', params)
}
//在网状态
export const zaiwangzhuangtai = (params) => {
    return http.fetchPost(url+'/financialCredit/checkPhoneStatus', params)
}
//在网时长
export const zaiwangshichang = (params) => {
    return http.fetchPost(url+'/financialCredit/checkPhoneStatus', params)
}
//手机二元素校验
export const shoujieryuansu = (params) => {
    return http.fetchPost(url+'/financialCredit/checkPhone', params)
}
//反欺诈的方法
export const fanqizha = (params) => {
    return http.fetchPost(url+'/financialCredit/antifraud', params)
}
//获取验证码
export const huoquyanzhengma = (params) => {
    return http.fetchPost(url+'/financialCredit/operatorsCreateTask', params)
}
//提交验证码
export const tijiaoyanzhengma = (params) => {
    return http.fetchPost(url+'/financialCredit/operatorsSubmitVerificationCode', params)
}
//数据轮询状态
export const yunyings1 = (params) => {
    return http.fetchGet(url+'/financialCredit/operatorsStatus?taskId='+params)
}

//从数据查询信息
export const yunyings2 = (applicationFormId, idCard) => {
    return http.fetchGet(url+'/financialCredit/operatorsResult?applicationFormId='+applicationFormId +'&idCard='+ idCard)
}
//活体获取语音验证码
export const huotiyanzhengma = (params = {}) => {
    return http.fetchGet(url+'/financialCredit/randomNumber', params)
}
//活体查询
export const huotichaxun = (params = {}) => {
    return http.fetchPost(url+'/financialCredit/liveTesting', params)
}
//违章查询
export const weizhangchaxun = (params = {}) => {
    return http.fetchPost(url+'/financialCredit/peccancyQuery', params)
}
//调用多头
export const diaoyongduotou = (params = {}) => {
    return http.fetchPost(url+'/financialCredit/comprehensiveInfo', params)
}
//计算金融信息
export const jisuanjinrong = (params = {}) => {
    return http.fetchPost(url+'/collectionData/calculation?carloan.session.id='+sessionId, params)
}
//保存金融信息
export const baocunjinrong = (params = {}) => {
    return http.fetchPost(url+'/collectionData/create?carloan.session.id='+sessionId, params)
}
//驳回
export const bohui = (params = {}) => {
    return http.fetchPost(url+'/flow/commit?carloan.session.id='+sessionId, params)
}
//获取汽车品牌列表
export const qicheList = (params = {}) => {
    return http.fetchPost(url+'/vehicleBrand/list?carloan.session.id='+sessionId, params)
}
//是否垫资查询
export const huoqushifoudianzi = (params = {}) => {
    return http.fetchPost(url+'/collectionData/show?carloan.session.id='+sessionId, params)
}
//是否开卡查询
export const huoqushifoukaika = (params = {}) => {
  return http.fetchPost(url+'/card/selectCardInfo', params)
}
//提交垫资申请
export const dianzishenqing = (params = {}) => {
  return http.fetchPost(url+'/advanceMoney/create?carloan.session.id='+sessionId, params)
}
//垫资详情
export const dianzidetail = (params = {}) => {
    return http.fetchPost(url+'/advanceMoney/detailByApplicationId?carloan.session.id='+sessionId, params)
}
//垫资提交
export const dianzitijiao = (params = {}) => {
    return http.fetchPost(url+'/flow/advanceMoneyCommit?carloan.session.id='+sessionId, params)
}
//查询个人信息
export const selectInfo = (params = {}) => {
    return http.fetchPost(url+'/card/selectCardInfo?carloan.session.id='+sessionId, params)
}
//开卡接口
export const kaika = (params = {}) => {
    return http.fetchPost(url+'/card/commintCardInfo?carloan.session.id='+sessionId, params)
}
//开卡审核
export const kaikashenhelist = (params = {}) => {
    return http.fetchPost(url+'/card/auditCardOrderList?carloan.session.id='+sessionId, params)
}
//开卡审核提交
export const kaikashenhetijiao = (params = {}) => {
    return http.fetchPost(url+'/card/auditCardInfo?carloan.session.id='+sessionId, params)
}
//开卡列表
export const kaikaliebiao = (params = {}) => {
    return http.fetchPost(url+'/card/cardOrderList?carloan.session.id='+sessionId, params)
}
//家访详情
export const jiafangxiangqing = (params = {}) => {
    return http.fetchPost(url+'/HomeVisits/show?carloan.session.id='+sessionId, params)
}
//添加公司
export const addCompany = (params = {}) => {
    return http.fetchPost(url+'/api/depart/addcompany', params)
}
//获取企业并获取用户
export const getqiye = () => {
    return http.fetchGet(url+'/api/depart/getcompanywithusers')
}
//通过token获取企业架构，如果是超管权限则
export const getcompanystructure = () => {
    return http.fetchGet(url+'/api/depart/getcompanystructure')
}
//获取企业并获取用户
export const getcompanywithusers = () => {
    return http.fetchGet(url+'/api/depart/getcompanywithusers')
}
//获取直属子部门相关
export const getdirectsub = () => {
    return http.fetchGet(url+'/api/depart/getdirectsub')
}
//删除公司
export const departdelete = (params = {}) => {
    return http.fetchPost(url+'/api/depart/delete', params)
}
//添加部门
export const adddepart = (params = {}) => {
    return http.fetchPost(url+'/api/depart/adddepart', params)
}
//图片上传
export const Save = (params = {}) => {
    return http.fetchPost(url+'/oss/save', params)
}
//获取图片
export const getSave = (params = {}) => {
    return http.fetchPost(url+'/oss/getSave', params)
}
//根据id获取企业信息
export const getqiyexinxi = (params) => {
    return http.fetchGet(url+'/api/depart/'+params)
}
//修改企业信息
export const updatexinxi = (params) => {
    return http.fetchPost(url+'/api/depart/update',params)
}
//获取所有角色
export const getall = (params) => {
    return http.fetchGet(url+'/api/userrole/getall')
}
//添加角色
export const userroleAdd = (params) => {
    return http.fetchPost(url+'/api/userrole/add',params)
}
//根据roleid查角色详情
export const getrolexiangqing = (params) => {
    return http.fetchGet(url+'/api/userrole/getdetail/'+params)
}
//修改用户角色信息
export const userroleUpdate = (params) => {
    return http.fetchPost(url+'/api/userrole/update',params)
}
//删除角色信息
export const deleterole = (params) => {
    return http.fetchPost(url+'/api/userrole/deleterole',params)
}
//新增管理员
export const addadmin = (params) => {
    return http.fetchPost(url+'/api/user/addadmin',params)
}
//获取所有的管理员
export const getalladmin = () => {
    return http.fetchGet(url+'/api/user/getalladmin/')
}
//获取该账号下的所有公司
export const getallcompany = () => {
    return http.fetchGet(url+'/api/depart/getallcompany/')
}
//获取该公司下的所有角色
export const getrolesbydepart = (parms) => {
    return http.fetchGet(url+'/api/userrole/getrolesbydepart/'+parms)
}
//删除角色
export const deleteuser = (params) => {
    return http.fetchPost(url+'/api/userrole/deleteuser/'+params,)
}
//菜单添加
export const menuAdd = (params) => {
    return http.fetchPost(url+'/api/menu/add/',params)
}
//获取树桩型菜单列表
export const getstructure = () => {
    return http.fetchGet(url+'/api/menu/getstructure/')
}
//删除菜单
export const deleteMenu = (params) => {
    return http.fetchPost(url+'/api/menu/delete/'+params)
}
//添加访问资源
export const resourceAdd = (params) => {
    return http.fetchPost(url+'/api/resource/add/',params)
}
//删除访问资源列表
export const resourceDelete = (params) => {
    return http.fetchPost(url+'/api/resource/delete/',params)
}
//获取所有的访问资源列表
export const resourceGetall = () => {
    return http.fetchGet(url+'/api/resource/getall/')
}
//通过resourceid来获取访问资源
export const resourceGetresource = (parms) => {
    return http.fetchGet(url+'/api/resource/getresource/'+parms)
}
//修改访问资源
export const resourceModify = (params) => {
    return http.fetchPost(url+'/api/resource/modify/',params)
}
//通过menuid来获取菜单信息
export const menuGet = (parms) => {
    return http.fetchGet(url+'/api/menu/get/'+parms)
}
//给菜单添加访问资源
export const addformenu = (params) => {
    return http.fetchPost(url+'/api/menu/resource/addformenu/',params)
}
//通过菜单id来修改菜单
export const menuUpdate = (params) => {
    return http.fetchPost(url+'/api/menu/update/',params)
}
//批量添加角色的访问菜单资源
export const massPrivilegeForRole = (params) => {
    return http.fetchPost(url+'/api/privileges/add/massPrivilegeForRole/',params)
}
//批量添加角色的访问菜单资源
export const allaccessforrole = (params) => {
    return http.fetchPost(url+'/api/privileges/get/allaccessforrole/',params)
}
//获取所有的菜单的id
export const getallmenuid = () => {
    return http.fetchGet(url+'/api/menu/getallmenuid/')
}
//获取所有的菜单的id
export const getallroleaccessresource = (parms) => {
    return http.fetchGet(url+'/api/privileges/getallroleaccessresource/'+parms)
}
//管理端添加用户
export const useradd = (params) => {
    return http.fetchPost(url+'/api/user/add/',params)
}
//管理员通过token来获取下面的所有用户
export const getalluser = (params = {}) => {
    return http.fetchPost(url+'/api/user/getalluser/',params)
}
//删除用户
export const userDelete = (parms) => {
    return http.fetchPost(url+'/api/user/delete/'+parms)
}
//根据部门或公司id查询
export const getallusers = (parms) => {
    return http.fetchPost(url+'/api/depart/getallusers/',parms)
}
//管理员修改用户的简单信息
export const edituibyadmin = (parms) => {
    return http.fetchPost(url+'/api/user/edituibyadmin/',parms)
}
//管理员或者自己通过userid来查询用户的信息
export const getbreifui = (parms) => {
    return http.fetchGet(url+'/api/user/getbreifui/'+parms)
}
//通过用户自己的token来修改密码
export const changepwd = (parms) => {
    return http.fetchPost(url+'/api/user/changepwd/',parms)
}

//获取新建订单的详情
export const getCategoryId = (parms) => {
    return http.fetchPost(url+'/fileManage/getCategoryId/',parms)
}
//获取附件归类
export const getFileCategory = (parms) => {
    return http.fetchPost(url+'/fileManage/getFileCategory/',parms)
}
//获取附件归类
export const getbankList = (parms) => {
    return http.fetchPost(url+'/bankManage/list/',parms)
}
//新增银行
export const bankManageAdd = (parms) => {
    return http.fetchPost(url+'/bankManage/create/',parms)
}
//新增银行
export const bankDel = (parms) => {
    return http.fetchPost(url+'/bankManage/del/',parms)
}
//银行修改
export const bankEdit = (parms) => {
    return http.fetchPost(url+'/bankManage/edit/',parms)
}
//金融方案列表
export const financialSchemeList = (parms) => {
    return http.fetchPost(url+'/financialScheme/list/',parms)
}
//金融方案删除
export const financialSchemeDel = (parms) => {
    return http.fetchPost(url+'/financialScheme/del/',parms)
}
//金融方案删除
export const financialSchemeCreate = (parms) => {
    return http.fetchPost(url+'/financialScheme/create/',parms)
}
//金融方案修改
export const financialSchemeEdit = (parms) => {
    return http.fetchPost(url+'/financialScheme/edit/',parms)
}
//附件种类管理
export const findListByName = (parms) => {
    return http.fetchPost(url+'/fileManage/findListByName/',parms)
}
//获取附件归类
export const getziyuan = (parms) => {
    return http.fetchPost(url+'/fileManage/getFileCategory/',parms)
}
//新建附件种类
export const createNewAttachment = (parms) => {
    return http.fetchPost(url+'/fileManage/createNewAttachment/',parms)
}
//根据id删除附件
export const delId = (parms) => {
    return http.fetchPost(url+'/fileManage/deleteAttachmentById/',parms)
}
//附件种类修改
export const updateAttachment = (parms) => {
    return http.fetchPost(url+'/fileManage/updateAttachment/',parms)
}
//流程列表
export const flowList = (parms) => {
    return http.fetchPost(url+'/flow/list/',parms)
}
//查询流程
export const flowshow = (parms) => {
    return http.fetchPost(url+'/flow/show?flowId='+parms)
}
//修改流程
export const flowEdit = (parms) => {
    return http.fetchPost(url+'/flow/edit',parms)
}
//新建流程
export const flowCreate = (parms) => {
    return http.fetchPost(url+'/flow/create',parms)
}
//根据id删除附件
export const menuall = (parms) => {
    return http.fetchGet(url+'/api/menu/getuserstructure/',parms)
}









