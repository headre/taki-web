<template>
  <div>
    <navbar></navbar>
  <!--end header-section-->
  <!--banner-->

  <div class="content">
    <div class="welcome">
      <div class="container">
        <div class="welcome-grids">
          <div class="welcome-grid1">
            <h2 class="cinema_h2">Add a movie</h2>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>

    			<div class="contact">
    				<div class="container">
    					<div class="contact-grids">
    						<div class="col-md-12 contact-right">
    							<Form>
    								<h5>name</h5>
    								<input v-model="movieForm.name" placeholder="input movie's name here" type="text">
    								<h5>duration</h5>
    								<input v-model="movieForm.duration" placeholder="input movie's duration" type="text">
    								<h5>blurb</h5>
    								<textarea v-model="movieForm.blurb" placeholder="input movie's description"></textarea>
    								<input @click="on_submit" type="submit" value="Confirm">
    								<br /><br />
    						 	    <router-link :to="{name:'film_manage',params:{key:'film_manage'}}"><a class="button">Cancle</a></router-link>
    							 </Form>
    						</div>
    						<div class="clearfix"></div>
              </div>
    				</div>
          </div>

    <div class="footer-section" style="background-color:#8a6d3bc2">
      <div class="container">
        <div class="footer-top">
          <p>Copyright &copy; 2020 </p>
        </div>
      </div>
    </div>
  </div>
 </div>

</template>

<script>
// import '../js/bootstrap'
import navbar from './navbar'
addEventListener('load', function () { setTimeout(hideURLbar, 0) }, false); function hideURLbar () { window.scrollTo(0, 1) }
export default {
  name: 'Film',
  data () {
    return {
      movieForm:{
        name:"",
        blurb:"",
        duration:""
      }
    }
  },
  methods:{
    on_submit(){
      const sdata = {
        "name": this.movieForm.name,
        "blurb": this.movieForm.blurb,
        "duration": parseInt(this.movieForm.duration)
      }
      this.$axios({
        method:'post',
        url:'/api/movies',
        withCredentials:true,
        data:sdata
      }).then((response)=>{
        console.log(response)
        alert('add successfully')
        var _this = this
        _this.$router.push({
          name:'film_manage'
        })
      }).catch((error)=>{
        console.log(error)
      })
    }
  },
  components: {
    navbar
  }
}
</script>

<style scoped>
</style>
