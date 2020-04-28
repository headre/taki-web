<template>
  <div>
    <navbar position="film_manage"></navbar>
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
                <h5>release date</h5>
                <input v-model="movieForm.releaseDate" placeholder="input movie's release Date" type="text">
                <h5>blurb</h5>
                <textarea v-model="movieForm.blurb" placeholder="input movie's description"></textarea>
                <test-img-u @getName="updatePoster" ref="imgupload"></test-img-u>
                <input @click="on_submit" type="submit" value="Confirm">
                <br/><br/>
                <router-link :to="{name:'film_manage',params:{key:'film_manage'}}"><a class="button">Cancle</a>
                </router-link>
              </Form>
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

  addEventListener('load', function () {
    setTimeout(hideURLbar, 0)
  }, false)

  function hideURLbar () {
    window.scrollTo(0, 1)
  }

  export default {
    name: 'Film',
    data () {
      return {
        both:0,
        id:0,
        poster: '',
        movieForm: {
          name: '',
          blurb: '',
          duration: '',
          releaseDate:''
        }
      }
    },
    computed:{
      addBoth(){
        this.both++
      },
      resetBoth(){
        this.both=0
      }
    },
    methods: {
      on_submit () {
        this.$refs.imgupload.upload()
        const sdata = {
          'name': this.movieForm.name,
          'blurb': this.movieForm.blurb,
          'duration': parseInt(this.movieForm.duration),
          'releaseDate':this.movieForm.releaseDate
        }
        this.$axios({
          method: 'post',
          url: '/api/movies',
          withCredentials: true,
          data: sdata
        }).then((response) => {
          console.log(response)
          alert('add successfully')
          this.id = response.data.id
          console.log(this.id)
        }).catch((error) => {
          console.log(error)
        })
      },
      updatePoster(poster){
        this.poster=poster
      },
    },
    components: {
      testImgU,
      footerbar,
      navbar
    },
    watch: {
      id(newval,oldValue){
        console.log('id '+newval+' '+oldValue)
        this.both++
      },
      poster(newval,oldValue){
        console.log('poster '+newval+' '+oldValue)
        this.both++
      },
      both(newval, oldValue){
        console.log('both '+newval+' '+oldValue)
        if(this.both==2){
          var sdata={'cover':this.poster}
          this.$axios({
            method:'put',
            url:'/api/movies/'+this.id,
            data:sdata
          }).then((response)=>{
            console.log('after change'+response.data.name)
          }).catch((error)=>{
            console.log(error)
          })
          this.both=0
          var _this = this
          _this.$router.push({
            name: 'film_manage'
          })
        }
      }
    }
  }
</script>

<style scoped>
</style>
