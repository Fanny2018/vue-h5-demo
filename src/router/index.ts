import Vue from 'vue';
import Router from 'vue-router';

import {routes} from './routes';

Vue.use(Router);
const router = new Router({routes: routes});
// 进入前：权限校验
router.beforeEach((to, from, next) => {
  next();
});
// 进入后：回到顶部
export default router;
