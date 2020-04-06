<template>
  <div>
    <navbar></navbar>
    laia{{message}}
    <button @click="getData">Click</button>
    <button @click="Login">Login</button>
    <button @click="Logout">Logout</button>
  </div>
</template>

<script type="text/javascript">
  import navbar from './navbar'
export default {
  name: 'Index',
  data () {
    return {
      message:'???',
      'username':'admin',
      'password':'pwd',
      cookieData:['JSESSIONID']
    }
  },
  components:{
    navbar
  },
  methods: {
    getData:function () {
      console.log('hhh')
      this.$axios.get('/api/movies')
        .then(function (response) {

          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getCookie:function(){
      const cookieList = document.cookie.split(';');
      const cookieObj = {};
      let i = 0;
      for (const item of cookieList) {
        const cookieKeyVal = item.trim().split('=');
        cookieObj[cookieKeyVal[0]] = cookieKeyVal[1];
      }

// 遍历cookie检测列表
      for (const cookieItem of this.cookieData) {
// 如果document.cookie存在当前cookie
        if (cookieObj[cookieItem]) {
          i += 1;
          // 如果不存在,去检测httponly， 返回true 为cookie有效 fasle 为无效
        } else if (this.doesHttpOnlyCookieExist(cookieItem)) {
          i += 1;
        }
      }
      return i;
    },
    Login(){
      const ajax = this.$axios.create({
        baseURL:'/api'
      });
      var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
      if (arr = window.document.cookie.match(reg)) {
        var ca = (arr[2]);
      }
      var formdata = new window.FormData();
      formdata.append('username','admin');
      formdata.append('password','pwd');
      ajax.interceptors.response.use((resp)=>{
        console.log('xxx',resp);
      },function(error){
        return Promise.reject(error);
      })
      ajax.post('/login',this.$qs.stringify({
        'username':'admin',
        'password':'pwd',
      })).then((response)=>{
          if(this.getCookie()!=1){
            console.log(this.getCookie());
          }else {
            console.log('1');
          }
          alert("login successfully")
        }).catch((error)=>console.log(error))

      },
    Logout(){
      this.$axios.post('/api/logout','').then((response)=>{
        console.log(response)
      }).catch((error)=>console.log(error))
    },
    doesHttpOnlyCookieExist(cookiename) {
      const d = new Date();
// 设置cookie时间 为1秒后失效
      d.setTime(d.getTime() + (1000));
      const expires = `expires=${d.toUTCString()}`;

      document.cookie = `${cookiename}=new_value;path=/;${expires}`;
      // 如果设置完当前cookie以后通过检测 检测不出来刚设置的cookie 就代表当前这个cookie设置了httponly 并且没有失效
      if (document.cookie.indexOf(`${cookiename}=`) === -1) {
        return true;
      }
      // 检测有新设置的这个cookie删除它
      d.setTime(d.getTime() - (2000));
      const expires2 = `expires=${d.toUTCString()}`;
      document.cookie = `${cookiename}=new_value;path=/;${expires2}`;
      return false;
    }
    }

}
</script>

<style scoped>

</style>
