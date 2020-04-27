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
import testfunclib from '../components/testfunclib'
import Order_info from '../components/Order_info'
import Profile from '../components/Profile'
import calendar from '../components/calendar'
import auditorium_edit from '../components/Edit_auditorium'
import auditoriums_manage from '../components/Auditoriums_manage'
import Add_auditorium from '../components/Add_auditorium'
import Add_Seats from '../components/Add_Seats'
import Edit_seats from '../components/Edit_seats'
import Seats_manage from '../components/Seats_manage'
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
      component:Add_film,
      meta:{requireAuth:true}
    },
    {
      path:'/add_screen',
      name:'add_screen',
      component:Add_screen,
      meta:{requireAuth:true}
    },
    {
      path:'/edit_film',
      name:'edit_film',
      component:Edit_film,
      meta:{requireAuth:true}
    },
    {
      path:'/edit_screen',
      name:'edit_screen',
      component:Edit_screen,
      meta:{requireAuth:true}
    },
    {
      path:'/film_look',
      name:'film_look',
      component:Film_look
    },
    {
      path:'/film_manage',
      name:'film_manage',
      component:Film_manage,
      meta:{requireAuth:true}
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/screen_manage',
      name:'screen_manage',
      component:Screen_manage,
      meta:{requireAuth:true}
    },
    {
      path:'/',
      name:'film',
      component:Film
    },
    {
      path:'/orders',
      name:'orders',
      component:orders,
      meta:{requireAuth:true}
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
      component:Order_info,
      meta:{requireAuth:true}
    },
    {
      path:'/profile',
      name:'profile',
      component:Profile,
      meta:{requireAuth:true}
    },
    {
      path:'/calendar',
      name:'calendar',
      component:calendar
    },
    {
      path:'/funclib',
      name:'funclib',
      component:testfunclib
    },
    {
      path:'/auditoriums_manage',
      name:'auditoriums_manage',
      component: auditoriums_manage,
      meta:{requireAuth:true}
    },
    {
      path:'/auditorium_edit',
      name:'auditorium_edit',
      component: auditorium_edit,
      meta:{requireAuth:true}
    },
    {
      path:'/add_auditorium',
      name:'add_auditorium',
      component: Add_auditorium,
      meta:{requireAuth:true}
    },
    {
      path: '/seats_manage',
      name: 'seats_manage',
      component: Seats_manage,
      meta: {requireAuth: true}
    },
    {
      path: '/seats_edit',
      name:'seats_edit',
      component: Edit_seats,
      meta: {requireAuth: true}
    },
    {
      path: '/add_seat',
      name: 'add_seat',
      component: Add_Seats,
      meta: {requireAuth: true}
    }
  ]
})
