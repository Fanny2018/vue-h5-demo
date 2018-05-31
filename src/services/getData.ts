import Http from '../providers/axios';
import Vue from 'vue';

/* ---- 后台请求 ---- */
// 公共接口

// 搜索结果
class Server extends Vue {
  /* ---- 搜索结果页 ---- */

  // 搜索列表结果
  getResultData(data: { [key: string]: any }): Promise<any> {
    const api = '/spiderAccountingWeb/acct/countPayReceivable';
    return Http.post(api, {data}, {isShow: true});
  }

  // 搜索子列表结果
  getResultChildData(data: { [key: string]: any }): Promise<any> {
    const api = '/spiderAccountingWeb/acct/queryPayReceivable';
    return Http.post(api, {data});
  }

  // 搜索总额
  getResultAmount(data: { [key: string]: any }): Promise<any> {
    const api = '/spiderAccountingWeb/acct/countPayReceivable';
    return Http.post(api, {data});
  }

  // 搜索详情
  getResultDetail(data: { [key: string]: any }): Promise<any> {
    const api = '/spiderAccountingWeb/acctDetail/getPaymentDetailByExternalTradeNum';
    return Http.post(api, {data}, {isShow: true});
  }
}

export default new Server();
