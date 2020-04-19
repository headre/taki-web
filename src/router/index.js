import Vue from 'vue'
import Router from 'vue-router'
import Add_film from '../components/Add_film'
import Add_screen from '../components/Add_screen'
import Edit_film from '../components/Edit_film'
import Edit_screen from '../components/Edit_screen'
import Login from '../components/Login'
import Screen_manage from '../components/Screen_manage'
import Film_look from '../components/Film_look'
import Film_manage from '../components/Film_manage'
import Film from '../components/Film'
import orders from '../components/Orders'
import imageUpload from '../components/imageUpload'
import testImgU from '../components/testImgU'
import testrecfunc from '../components/testrecfunc'
import Order_info from '../components/Order_info'
import Profile from '../components/Profile'
import calendar from '../components/calendar'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'*',
      redirect:'/'
    },
    {
      path:'/add_film',
      name:'add_film',
      component:Add_film
    },
    {
      path:'/add_screen',
      name:'add_screen',
      component:Add_screen
    },
    {
      path:'/edit_film',
      name:'edit_film',
      component:Edit_film
    },
    {
      path:'/edit_screen',
      name:'edit_screen',
      component:Edit_screen
    },
    {
      path:'/film_look',
      name:'film_look',
      component:Film_look
    },
    {
      path:'/film_manage',
      name:'film_manage',
      component:Film_manage
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/screen_manage',
      name:'screen_manage',
      component:Screen_manage
    },
    {
      path:'/',
      name:'film',
      component:Film
    },
    {
      path:'/orders',
      name:'orders',
      component:orders
    },
    {
      path:'/upload',
      name:'upload',
      component:imageUpload
    },
    {
      path:'/testu',
      name:'testu',
      component:testImgU
    },
    {
      path:'/rec',
      name:'rec',
      component:testrecfunc
    },
    {
      path:'/order_info',
      name:'order_info',
      component:Order_info
    },
    {
      path:'/profile',
      name:'profile',
      component:Profile
    },
    {
      path:'/calendar',
      name:'calendar',
      component:calendar
    }
  ]
})
