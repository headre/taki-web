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
            <div class="col-md-4">
              <br/>
              <img v-if="form.cover==null" src="../images/gravity.jpg"class="img-responsive" alt="" >
              <img v-else :src="$host+'/file/'+form.cover"class="img-responsive" alt="">
            </div>
            <div class="col-md-7 contact-right">
              <form>
              	<h5 style="color:#fff">name</h5>
              	<input  v-model="form.name" type="text" style="color:#000">
              	<h5 style="color:#fff">duration</h5>
              	<input v-model="form.duration" type="text" style="color:#000">
                <h5 style="color:#fff">release date</h5>
                <input v-model="form.releaseDate" placeholder="input movie's release Date" type="text">
              	<h5 style="color:#fff">blurb</h5>
              	<textarea v-model="form.blurb" style="color:#000"></textarea>
                <test-img-u @getName="updatePoster" ref="imgupload"></test-img-u>
              	<input @click="onsubmint" type="submit" value="Save" >
                <input @click="submitWithoutPoster" type="submit" value="Save no poster " >
                <br/>
                <router-link :to="{name:'film_manage',params:{key:'film_manage'}}"> <a class="button">Return</a></router-link>
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
import testImgU from './testImgU'

addEventListener('load', function () { setTimeout(hideURLbar, 0) }, false); function hideURLbar () { window.scrollTo(0, 1) }
export default {
  name: 'Film',
  data () {
    return {
      msg: 'this is film page',
      movieId:0,
      poster: '',
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
    submitWithoutPoster(){
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
    },
    onsubmint(){
      this.$refs.imgupload.upload()
    },
    updatePoster(poster){
      this.poster=poster
      this.form.cover = poster
      console.log(this.form)
    },
  },
  components: {
    footerbar,
    navbar,
    testImgU,

  },
  created: function () {
    if (this.$route.query.movie != null) {
      this.movieId = this.$route.query.movie
    }else {
      console.log("null")
    }
    console.log(this.movieId)
    this.getMovieData(this.movieId)
  },
  watch:{
    poster(newval,oldValue){
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
    },
  }
}
</script>

<style scoped>
</style>
