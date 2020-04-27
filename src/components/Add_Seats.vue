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
              <h2 class="cinema_h2">Add a seat</h2>
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
                <h5>auditoriumId(you are in manage page of {{auditoriumId}}</h5>
                <input v-model="SeatForm.auditoriumId" placeholder="input auditoriumId here" type="text">
                <h5>row</h5>
                <input v-model="SeatForm.row" placeholder="input row" type="text">
                <h5>col</h5>
                <input v-model="SeatForm.col" placeholder="input col" type="text">
                <h5>isVip</h5>
                <input v-model="SeatForm.isVip" placeholder="if this seat is Vip" type="text">
                <br/><br/>
                <input @click="on_submit" type="submit" class="btn-success" value="Confirm">
                <br/><br/>
                <router-link :to="{name:'seats_manage'}"><a class="button">Cancle</a>
                </router-link>
              </form>

            </div>
            <div class="clearfix"></div>
          </div>
        </div>
      </div>


    </div>
    <footerbar/>
  </div>

</template>

<script>
  // import '../js/bootstrap'
  import navbar from './navbar'
  import footerbar from './footerbar'

  export default {
    name: 'add_seats',
    data () {
      return {
        auditoriumId:"",
        SeatForm:{
          auditoriumId:"",
          row:"",
          col:"",
          isVip:""
        }
      }
    },
    methods:{
      on_submit(){
        const sdata = {"auditoriumId":this.SeatForm.auditoriumId,"row":parseInt(this.SeatForm.row),"col":parseInt(this.SeatForm.col),"isVip":this.SeatForm.isVip }
        console.log(this.SeatForm.auditoriumId);
        this.$axios({
          method:'post',
          url:'/api/seats',
          withCredentials:true,
          data:sdata
        }).then((response)=>{
          console.log(response)
          alert('add successfully')
          var _this = this
          _this.$router.push({
            name:'seats_manage'
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
    mounted () {
      if (this.$route.query.auditoriumsId != null) {
        this.auditoriumsId = this.$route.query.auditoriumsId
      } else {
        console.log('null')
      }
    }
  }
</script>

<style scoped>
</style>
