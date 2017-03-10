// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router.config.js'
import $ from 'jquery'
window.$ = $;
window.jquery = $;
import axios from 'axios'
import store from './store/store.js'

import './assets/js/bootstrap.min.js'
import './assets/js/plugins/metisMenu/jquery.metisMenu.js'
import './assets/js/plugins/slimscroll/jquery.slimscroll.min.js'
import './assets/js/plugins/layer/layer.min.js'
import './assets/js/hplus.min.js?v=4.1.0'
import './assets/js/contabs.min.js'
import './assets/js/plugins/pace/pace.min.js'
/* 全局 css  */
import './assets/css/bootstrap.min.css'
import './assets/css/font-awesome.min93e3.css'
import './assets/css/animate.min.css'
import './assets/css/style.min862f.css?v=4.1.0'

Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
