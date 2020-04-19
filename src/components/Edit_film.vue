<template>
  <div>
    <navbar position="film_manage"></navbar>
  <!--end header-section-->
  <!--banner-->

  <div class="content">

    <div class="welcome">
      <div class="container">
        <div class="welcome-grids">
         <div class="col-md-2"></div>
          <div class="col-md-8 welcome-grid1">
            <img src="../images/inception.jpg" class="img-responsive" alt="">
            <br />
            <div class="col-md-2">
              <h2>Inception</h2>
              <h4>Release date: 4/2015</h4>
              <br /><br /><br /><br /><br /><br />
              <router-link :to="{name:'film_manage',params:{key:'film_manage'}}"> <a class="button">Return</a></router-link>
            </div>
            <div class="col-md-2"></div>
            <div class="col-md-7 contact-right">
              <form>
              	<h5 style="color:#fff">name</h5>
              	<input  v-model="form.name" type="text" style="color:#000">
              	<h5 style="color:#fff">duration</h5>
              	<input v-model="form.duration" type="text" style="color:#000">
              	<h5 style="color:#fff">blurb</h5>
              	<textarea v-model="form.blurb" style="color:#000"></textarea>
              	<input @click="onsubmint" type="submit" value="Save" >
              </form>
             </div>
          </div>

          <div class="clearfix"></div>
        </div>
      </div>
    </div>

    <footerbar></footerbar>



  </div>
 </div>

</template>

<script>
// import '../js/bootstrap'
import navbar from './navbar'
import footerbar from './footerbar'

addEventListener('load', function () { setTimeout(hideURLbar, 0) }, false); function hideURLbar () { window.scrollTo(0, 1) }
export default {
  name: 'Film',
  data () {
    return {
      msg: 'this is film page',
      movieId:0,
      form:{
      }
    }
  },
  methods:{
    getMovieData(movieId){
      this.$axios({
        method:'get',
        url:'/api/movies/'+movieId+'/info'
      }).then((response)=>{
        console.log(response.data)
        this.form = response.data
      }).catch((error)=>{
        console.log(error)
      })
    },
    onsubmint(){
      this.$axios({
        method:'put',
        url:'/api/movies/'+this.movieId,
        withCredentials:true,
        data:this.form
      }).then((response)=>{
        console.log(response.data)
        alert('edit successfully')
        this.$router.push({
          name:'film_manage'
        })
      }).catch((error)=>{
        console.log(error)
      })

    }
  },
  components: {
    footerbar,
    navbar
  },
  created: function () {
    if (this.$route.query.movie != null) {
      this.movieId = this.$route.query.movie
    }else {
      console.log("null")
    }
    console.log(this.movieId)
    this.getMovieData(this.movieId)
  }
}
</script>

<style scoped>
</style>
