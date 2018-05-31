import home from '../views/home/home.vue';

export const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
    meta: {keepAlive: false}
  }
];
