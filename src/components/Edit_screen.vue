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
                <input v-model="form.movieid" type="text">
                <h5>Room</h5>
                <input v-model="form.room" type="text">
                <h5>Date</h5>
                <input v-model="form.date" type="text">
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
    name: 'Film',
    data () {
      return {
        screenId: 0,
        msg: 'this is film page',
        form: {
          movieid: 0,
          date: '',
          room: 0
        }
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
          this.form.movieid = response.data.movieId
          this.form.date = response.data.date
          this.form.room = response.data.auditoriumId
        }).catch((error) => {
          console.log(error)
        })
      },
      onsubmint () {
        let sdata={
          screenId:parseInt(this.form.movieid),
          date:this.form.date,
          room:this.form.room
        }
        console.log(sdata)
        this.$axios({
          method: 'put',
          url: '/api/screenings/' + this.screenId,
          data: sdata
        }).then((response) => {
          console.log(response.data)
          alert('edit successfully')
          this.$router.push({
            name: 'screen_manage'
          })
        }).catch((error) => {
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
    }
  }
</script>

<style scoped>
</style>
