// import Vue from 'vue'
// import App from './App.vue'
// import VueRouter from 'vue-router';
// import Layout from './components/Layout';
// console.log(Layout)
// Vue.use(VueRouter);
// const router = new VueRouter({
//   mode: 'history',
//   routes: [{
//     path: '/',
//     redirect: '/all',
//   },{
//     path: '/:filter',
//     name: 'Filter',
//     component: App
//   }]
// });

// Vue.config.productionTip = false

// new Vue({
//   router,
//   render: h => h(Layout),
// }).$mount('#app')


import Vue from 'vue';
import App from './App.vue';
// 1.引用
import VueRouter from 'vue-router';
import Layout from './Layout.vue';
import store from '@/store/index';
// 2.使用
Vue.use(VueRouter);
// // 3.实例化
// // 使用历史模式，根路径重定向
const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    redirect: '/All'
  },{
    path: '/:filter',
    name: 'Filter',
    component: App
  }]
});

Vue.config.productionTip = false;
new Vue({
  // 4. 使用
  store,
  router,
  render: h => h(Layout),
}).$mount('#app')