<template>
  <div>
    <navbar position="auditoriums"></navbar>
    <!--end header-section-->
    <!--banner-->

    <div class="content">
      <div class="welcome">
        <div class="container">
          <div class="welcome-grids">
            <div class="welcome-grid1">
              <h2 class="cinema_h2">Edit the seat</h2>
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

                <h5>row</h5>
                <input v-model="form.row" type="text">
                <h5>col</h5>
                <input v-model="form.col" type="text">
                <h5>isVip </h5>
                <input v-model="form.isVip" type="text">
                <br/>
                <input @click="onsubmint" type="submit" class="btn-success" value="Confirm">
                <br/><br/><br/>
                <router-link :to="{name:'seats_manage'}"><a class="button">Cancle</a>
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
    name: 'seats_edit',
    data () {
      return {
        seatId: 0,
        form: {}
      }
    },
    components: {
      footerbar ,
      navbar
    },
    methods: {
      getSeatData (seatId) {
        this.$axios({
          method: 'get',
          url: '/api/seats/' + seatId
        }).then((response) => {
          console.log(response.data)
          this.form=response.data
        }).catch((error) => {
          console.log(error)
        })
      },
      onsubmint () {
        const sdata = {"row":parseInt(this.form.row),"col":parseInt(this.form.col),"isVip":this.form.isVip }
        console.log(sdata)
        this.$axios({
          method: 'put',
          url: '/api/seats/' + this.seatId,
          withCredentials:true,
          data: sdata
        }).then((response) => {
          console.log(response.data)
          alert('edit successfully')
          this.$router.push({
            name: 'seats_manage'
          })
        }).catch((error) => {
          console.log(error)
        })

      },
    },
    created: function () {
      if (this.$route.query.seatId != null) {
        this.seatId = this.$route.query.seatId
      } else {
        console.log('null')
      }
      console.log(this.seatId)
      this.getSeatData(this.seatId)
    }
  }
</script>

<style scoped>
</style>
