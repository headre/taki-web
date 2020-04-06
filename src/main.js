// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import qs from 'qs'
import VueSession from 'vue-session'
import Vuex from 'vuex'

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
Vue.prototype.$qs=qs
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
