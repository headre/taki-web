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
              <h2 class="cinema_h2">Edit the auditorium</h2>
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

                <h5>auditoriumsId</h5>
                <input v-model="form.id" type="text">
                <h5>name</h5>
                <input v-model="form.name" type="text">
                <h5>rows </h5>
                <input v-model="form.numRows" type="text">
                <h5>cols</h5>
                <input v-model="form.numCols" type="text">
                <h5>vipExtraPrice</h5>
                <input v-model="form.vipExtraPrice" type="text">
                <br/>
                <input @click="onsubmint" type="submit" class="btn-success" value="Confirm">
                <br/><br/><br/>
                <router-link :to="{name:'auditoriums_manage'}"><a class="button">Cancle</a>
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
    name: 'edit_auditorium',
    data () {
      return {
        auditoriumsId: 0,
        msg: 'this is film page',
        form: {}
      }
    },
    components: {
      footerbar ,
      navbar
    },
    methods: {
      getScreenData (auditoriumsID) {
        this.$axios({
          method: 'get',
          url: '/api/auditoriums/' + auditoriumsID
        }).then((response) => {
          console.log(response.data)
          this.form=response.data
        }).catch((error) => {
          console.log(error)
        })
      },
      onsubmint () {
        const sdata = {"name":this.form.name,"numRows":parseInt(this.form.numRows),"numCols":parseInt(this.form.numCols),"vipExtraPrice":this.form.vipExtraPrice }
        console.log(sdata)
        this.$axios({
          method: 'put',
          url: '/api/auditoriums/' + this.auditoriumsId,
          withCredentials:true,
          data: sdata
        }).then((response) => {
          console.log(response.data)
          alert('edit successfully')
          this.$router.push({
            name: 'auditoriums_manage'
          })
        }).catch((error) => {
          console.log(error)
        })

      },
    },
    created: function () {
      if (this.$route.query.auditoriumsId != null) {
        this.auditoriumsId = this.$route.query.auditoriumsId
      } else {
        console.log('null')
      }
      console.log(this.auditoriumsId)
      this.getScreenData(this.auditoriumsId)
    }
  }
</script>

<style scoped>
</style>
