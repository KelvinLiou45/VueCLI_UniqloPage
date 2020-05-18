import Vue from 'vue';
import VueRouter from 'vue-router'; //載入 vue-router

import home from "@/components/home"
import loginAndRegister from "@/components/loginAndRegister"
import showProductW from "@/components/showProductW"
import showProductM from "@/components/showProductM"
import productDetailPage from "@/components/productDetailPage"
import readyNotYet from "@/components/readyNotYet"


Vue.use(VueRouter) //使用 vue-router

export default new VueRouter({
  routes: [
    {
      name: 'home',  
      path: '/', 
      component: home
    },
    {
      name: 'loginAndRegister',  
      path: '/loginAndRegister', 
      component: loginAndRegister
    }
    ,
    {
      name: 'showProductW',  
      path: '/showProductW', 
      component: showProductW
    },
    {
      name: 'showProductM',  
      path: '/showProductM', 
      component: showProductM
    }
    ,
    {
      name: 'productDetailPage',  
      path: '/productDetailPage/:proID', 
      component: productDetailPage
    }
    ,
    {
      name: 'readyNotYet',  
      path: '/readyNotYet', 
      component: readyNotYet
    }
  ]
})


// =--------------------
/*
const routes = [
  {
    name: 'home',  
    path: '/', 
    component: home
  },
  {
    name: 'showProduct',  
    path: '/showProduct', 
    component: () => import('../components/showProduct.vue'),
  }
];

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
*/
//------------------------------------