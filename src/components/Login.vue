<template>
  <div>
    <navbar></navbar>
   <div class="content">


   <div class="content" style="background-color: #999c">
   				<div class="welcome">
   					<div class="container">
   							<div class="welcome-grids">
   								<div class="welcome-grid1">
   									<h2 class="cinema_h2">Login</h2>
   								</div>
              <br /><br /><br /><br />
                   <div class="col-md-2"></div>
                   <div class="col-md-8 contact-right">
                  <form>
											<h4 class="loginFont">Username</h4>
											<input v-model="loginForm.username" type="text" style="color:#000">
											<br /><br /><br />
											<h4 class="loginFont">password</h4>
											<input v-model="loginForm.password" type="text" style="color:#000">
											<br /><br /><br />
											<input @click="on_submit" type="submit" value="login" >
											<br /><br /><br /><br />
											</form>
                   </div>

   								<div class="clearfix"></div>
   							</div>
   					</div>
   				</div>
   			</div>


<footerbar></footerbar>
   	</div>
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
