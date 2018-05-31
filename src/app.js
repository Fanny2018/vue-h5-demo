import './plugins/flexible';
import Vue from 'vue';
import axios from 'axios';
import App from '@/app.vue';
import router from '@/router/index';
import MintUI from 'mint-ui';
import FastClick from 'fastclick';
import '@/directives/filters';
import './components';
import 'normalize.css';
import 'mint-ui/lib/style.css';
import 'babel-polyfill';

require('es6-promise').polyfill();

// 针对click事件300ms延迟
FastClick.attach(document.body);
axios.defaults.headers.put['Content-Type'] = 'application/json';

Vue.use(MintUI);
// 阻止启动生成生产提示
Vue.config.productionTip = false;
const vm = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
});

Vue.use(vm);
