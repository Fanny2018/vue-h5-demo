/**
 * 按需全局化过滤器
 * 您还可以在组件定义时的 filters 属性中按需引入
 */
// 定义方法：Vue.filter({name}, function(value){...})
import Vue from 'vue';
import {dateFormat} from './date-format';
import {SpiderDict} from './dict';

Vue.filter('imageUrl', json => {
  if (json === undefined || json === null) return;
  try {
    let fileArr = JSON.parse(json);
    return fileArr;
  } catch (e) {
    return '';
  }
});

// 金额除100，默认保留两位小数
Vue.filter('Decimal', (value: any, num: number = 100) => {
  if (value === undefined || value === null) return;
  return (value / num).toFixed(2);
});

// 日期格式化
Vue.filter('DateFilter', (value: any, formatString: string) => {
  if (value === undefined || value === null) return;
  return dateFormat(value, formatString);
});

// 类型映射
Vue.filter('DictFilter', (value: any, key: string) => {
  if (SpiderDict.hasOwnProperty(key)) {
    return SpiderDict[key][value] || value;
  }
  return value;
});



