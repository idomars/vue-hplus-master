import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store.js'
import Hello from '@/components/Hello'
import Index_v1 from '@/pages/index/Index_v1.vue'
import Index_v2 from '@/pages/index/Index_v2.vue'
import Index_v3 from '@/pages/index/Index_v3.vue'

Vue.use(Router)


const routes =  [
    {
      path: '/index_v1',
      name: 'index_v1',
      component: Index_v1
    }, 
    {
      path: '/index_v2',
      name: 'index_v2',
      component: Index_v2
    },
     {
      path: '/index_v3',
      name: 'index_v3',
      component: Index_v3
    },
    {
      path:"/",
      redirect:"/index_v1"
    }
  ]

const router = new Router({
  routes,
  mode: 'history'
});


router.beforeEach((to, from, next) => {
  store.dispatch("changeCurrPath",to.path);
  next();
})
export default router
