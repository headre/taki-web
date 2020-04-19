<template>
  <div>
    <navbar></navbar>
    <div>
   <div class="content">
   				<div class="welcome">
   					<div class="container">
   							<div class="welcome-grids">
   								<div class="welcome-grid1">
   									<h2 class="cinema_h2">Login</h2>
   								</div>
   								<div class="clearfix"></div>
   							</div>
   					</div>
   				</div>
   	</div>

   <div class="contact">
   	<div class="container">
   		<div class="contact-grids">
        <div class="col-md-2"></div>
   			<div class="col-md-4 contact-right">
   				<form >
   						<h5>Name</h5>
   						<input v-model="loginForm.username" type="text"><br /><br />
   						<h5>Password</h5>
   						<input v-model="loginForm.password" type="password" ><br />
   						<br /><br />
              <a class="button" @click="on_submit">Confirm</a>&nbsp;&nbsp;&nbsp;&nbsp;
              <router-link :to="{name:'#',params:{key:''}}">Register</router-link>
          </form>


<div class="col-md-4"></div>
   			</div>
        <div class="clearfix"></div>
      </div>
    </div>
   </div>
    </div>


    <footerbar></footerbar>
  </div>

</template>

<script type="text/javascript">
  import navbar from './navbar'
  import footerbar from './footerbar'
export default {
  name: 'Index',
  data () {
    return {
      loginForm:{
        username:"",
        password:""
      },
      username:' ',
      password:' ',
    }
  },
  components: {
    footerbar ,
    navbar
  },
  methods: {
      on_submit(){
        let formData = new window.FormData()
        for(var key in this.loginForm){
          formData.append(key,this.loginForm[key])
        }
        this.$axios({
          method: 'post',
          url:'/api/login',
          data:formData
        }).then((response)=>{
          console.log(response)
          alert('login successfully?')
          var _this = this
          localStorage.setItem("isLogin",'true')
          _this.$router.push({
            path:'/',
            params:{
              key:'film'
            }
          })
        }).catch((error)=>{
          console.log(error)
          alert('username or password wrong')
        })
      }
    }
  }
</script>

<style scoped>
</style>
