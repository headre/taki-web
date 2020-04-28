<template>
  <div>
    <navbar position="screen_manage"></navbar>
    <!--end header-section-->
    <!--banner-->

    <div class="content">
      <div class="welcome">
        <div class="container">
          <div class="welcome-grids">
            <div class="welcome-grid1">
              <h2 class="cinema_h2">Edit the screen</h2>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
      </div>

      <div class="contact">
        <div class="container">
          <div class="contact-grids">
            <div class="col-md-12 contact-right">
              <form>

                <h5>movieid</h5>
                <input v-model="form.movieId" type="text">
                <h5>Room</h5>
                <h5>Rooms available: </h5>
                <li v-for="id in rooms">{{id.id}}</li>
                <input v-model="form.auditoriumId" type="text">
                <h5>Date</h5>
                <input v-model="form.date" type="text">
                <h5>Start Time</h5>
                <input v-model="form.time" type="text">
                <h5>Finish Time</h5>
                <input v-model="form.finishTime" type="text">
                <h5>originalPrice</h5>
                <input v-model="form.originalPrice" type="text">
                <h5>discountedMag</h5>
                <input v-model="form.discountedMag" type="text">
                <br/>
                <input @click="onsubmint" type="submit" class="btn-success" value="Confirm">
                <br/><br/><br/>
                <router-link :to="{name:'screen_manage',params:{key:'screen_manage'}}"><a class="button">Cancle</a>
                </router-link>
              </form>

            </div>
            <div class="clearfix"></div>
          </div>
        </div><footerbar></footerbar>
      </div>


    </div>
  </div>

</template>

<script>
  // import '../js/bootstrap'
  import navbar from './navbar'
  import footerbar from './footerbar'

  addEventListener('load', function () {
    setTimeout(hideURLbar, 0)
  }, false)

  function hideURLbar () {
    window.scrollTo(0, 1)
  }

  export default {
    name: 'edit_screen',
    data () {
      return {
        screenId: 0,
        msg: 'this is film page',
        rooms:null,
        form: {}
      }
    },
    components: {
      footerbar ,
      navbar
    },
    methods: {
      getScreenData (screenId) {
        this.$axios({
          method: 'get',
          url: '/api/screenings/' + screenId
        }).then((response) => {
          console.log(response.data)
          this.form=response.data
        }).catch((error) => {
          console.log(error)
        })
      },
      onsubmint () {
        this.$axios({
          method: 'put',
          url: '/api/screenings/' + this.screenId,
          withCredentials:true,
          data: this.form
        }).then((response) => {
          console.log(response.data)
          alert('edit successfully')
          this.$router.push({
            name: 'screen_manage'
          })
        }).catch((error) => {
          console.log(error)
        })

      },
      getAuditoriums(){
        let _this =this
        _this.$axios({
          method:'get',
          url:'/api/auditoriums',
        }).then(response=>{
          this.rooms = response.data
        }).catch(error=>{
          console.log(error)
        })
      }
    },
    created: function () {
      if (this.$route.query.screenId != null) {
        this.screenId = this.$route.query.screenId
      } else {
        console.log('null')
      }
      console.log(this.screenId)
      this.getScreenData(this.screenId)
      this.getAuditoriums()
    }
  }
</script>

<style scoped>
</style>
