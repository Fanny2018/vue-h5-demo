import axios from 'axios';
import {Indicator, Toast} from 'mint-ui';
import qs from 'qs';
import {apiPrefix} from '../directives/process';
import {getLocalStorage} from './sessions';

class Http {
  static searchParamsFormat(params: any): string {
    if (typeof params === 'string') {
      return params;
    }
    if (typeof params === 'object') {
      let arr = [];
      for (let key in params) {
        if (params.hasOwnProperty(key) && params[key] !== undefined && params[key] !== null) {
          arr.push(key += '=' + encodeURIComponent(params[key]));
        }
      }
      return arr.join('&');
    }
    return '';
  }

  async get(url: string, query: any = {}, loading: any = {isShow: false}) {
    const api = this.joinApi(url, query, loading);
    const response = this.responseHandle({api, method: 'get'});
    return await response;
  }

  async post(url: string, query: any = {}, loading: any = {isShow: false}, isForm: boolean = false) {
    let data = isForm ? qs.stringify(query) : query;
    const api = this.joinApi(url, data, loading);
    const response = this.responseHandle({url: api, data: data.data, method: 'post'});
    return await response;
  }

  joinApi(url: string, options: any, loading: any): string {
    if (loading.isShow) {
      Indicator.open({
        text: loading.text || '加载中……',
        spinnerType: 'snake'
      });
    }
    let requestUrl = apiPrefix + url;
    // 获取session_key
    // let sessionKey = 'ac6f2a9adce54e958db6e9b792bd76f2_567946217';
    let sessionKey = getLocalStorage('userInfo');
    // let userInfo = getLocalStorage('userInfo');
    // let sessionKey = getKey(userInfo, 'session_key');
    if (!options) {
      options = {
        params: {
          t: Date.now(),
          app_stoken: sessionKey,
          terminal: 'H5'
        }
      };
    } else {
      if (options.params) {
        options.params.t = Date.now();
        options.params.app_stoken = sessionKey;
        options.params.terminal = 'H5';
      } else {
        options.params = {
          t: Date.now(),
          app_stoken: sessionKey,
          terminal: 'H5'
        };
      }
    }
    const requestParams = Http.searchParamsFormat(options.params);
    if (requestUrl.indexOf('?') === -1) {
      let questionMark = /\\?$/.test(requestUrl) ? '?' : '';
      return requestUrl + questionMark + requestParams;
    }
    return requestUrl + '&' + requestParams;
  }

  responseHandle(reponse: any) {
    return new Promise((resolve, reject) => {
      return axios(reponse).then(res => {
        Indicator.close();
        let data = res.data;
        if (typeof res.data === 'string') {
          data = JSON.parse(res.data);
        }
        if (res.status === 200) {
          try {
            return resolve(data);
          } catch (e) {
            return reject(e);
          }
        } else {
          if (res.status === 2) {
            Toast({
              message: '未登录',
              position: 'bottom'
            });
          }
          return reject(data);
        }
      }, error => {
        Indicator.close();
        Toast({
          message: '连接失败啦！',
          position: 'bottom'
        });
        return reject(error);
      });
    });
  }
}

export default new Http();
