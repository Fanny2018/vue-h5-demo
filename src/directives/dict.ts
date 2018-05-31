export const SpiderDict = {
  ACTIVE_STATE: {'Y': '是', 'N': '否'},
  BUSI_TYPE: {'1': '充值', '2': '提现', '3': '转账', '4': '消费'},
  RATE_VALUE_TYPE: {'1': '比例', '2': '固定值'},
  FA_OPERATE_TYPE: {'正常核销': '正常核销', '业务记账': '业务记账', '冲正': '冲正', '坏账核销': '坏账核销', '抹零核销': '抹零核销'},
  OUT_PARTY_TYPE: {'USER_ID': '传化会员', 'BANK_NO_PRI': '个人银行卡', 'BANK_NO_PUB': '对公银行卡', 'MOBILE': '手机号'},
  PARTY_ROLE: {'consignor': '借款人', 'payee': '收款人', 'consignee': '还款人', 'carrier': '干系人'},
  SPIDER_PARTY_TYPE: {'1': '汇金运营管理员', '2': '商户管理员', '3': '商户普通用户'},
  LOAN_CONTRACT_STATUS: {'1': '初始化', '2': '待放款', '3': '已作废', '4': '放款成功', '5': '放款失败'},
  LOAN_STATUS: {'1': '待放款', '2': '放款中', '3': '放款成功', '4': '放款失败'},
  ACCT_DETAIL_TYPE: {'0': '应付', '1': '应收'},
  ACCT_DETAIL_STATUS: {'0': '已结清', '1': '部分已结', '2': '未结'},
  PAY_TYPE: {'CASH': '线下结算', 'TF56PAY': '传化支付', 'WECHAT': '微信', 'ALIPAY': '支付宝', 'OTHER': '其它', 'COUPON': '优惠券'},
  REPAY_STATUS: {'1': '未还款', '2': '还款中', '3': '还款成功', '4': '还款失败', '5': '线下还款'},
  BATCH_CODE_TYPE: {'保付': 'BAOFU', '即时付': 'JISHIFU', '秒付': 'MIAOFU'}
};
