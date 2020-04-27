// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import qs from 'qs'
import VueSession from 'vue-session'
import Vuex from 'vuex'
import echarts from 'echarts'

import store from '../store'
import 'jquery'
import './assets/css/bootstrap.css'
import './assets/css/jquery.lightbox.css'
import './assets/css/flexslider.css'
import './assets/css/style.css'
import './assets/js/bootstrap.js'
import './assets/js/jquery-1.11.1.min.js'
import './assets/js/responsiveslides.min.js'
import './assets/js/jquery.flexisel.js'
import './assets/js/jquery.flexslider.js'
import './assets/js/jquery.lightbox.js'

Vue.config.productionTip = false
axios.defaults.withCredentials=true
Vue.prototype.$axios = axios
Vue.prototype.$host = 'http://localhost:8080/api'
Vue.prototype.$qs=qs
Vue.prototype.$echarts = echarts
Vue.use(VueSession)
Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
//路由守卫
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if(JSON.parse(localStorage.getItem('isLogin'))){ //判断本地是否存在access_token
      next();
    }else {
      next({
        path:'/login'
      })
    }
  }
  else {
    next();
  }
  /*如果本地 存在 token 则 不允许直接跳转到 登录页面*/
  if(to.fullPath === "/login"){
    if(JSON.parse(localStorage.getItem('isLogin'))){
      next({
        path:from.fullPath
      });
    }else {
      next();
    }
  }
});
