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
              <h2 class="cinema_h2">Add a screen</h2>
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
                <h5>Date</h5>
                <input v-model="screenForm.date" placeholder="input date here" type="text">
                <h5>Name</h5>
                <input v-model="screenForm.id" placeholder="input movie's id" type="text">
                <h5>Room</h5>
                <input v-model="screenForm.room" placeholder="input auditorium's id" type="text">
                <h5>originalPrice</h5>
                <input v-model="screenForm.originalPrice" placeholder="input original price" type="text">
                <h5>discountedMag</h5>
                <input v-model="screenForm.discountedMag" placeholder="input discounted mag" type="text">
                <br/><br/>
                <input @click="on_submit" type="submit" class="btn-success" value="Confirm">
                <br/><br/>
                <router-link :to="{name:'screen_manage',params:{key:'screen_manage'}}"><a class="button">Cancle</a>
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
    name: 'add_screen',
    data () {
      return {
        screenForm:{
          id:"",
          date:"",
          room:"",
          originalPrice:"",
          discountedMag:""
        }
      }
    },
    methods:{
      on_submit(){
        const sdata = {"movieId":parseInt(this.screenForm.id),"date":this.screenForm.date,"auditoriumId":parseInt(this.screenForm.room),"originalPrice":parseFloat(this.screenForm.originalPrice),"discountedMag":parseFloat(this.screenForm.discountedMag) }

        console.log(this.screenForm.date)
        this.$axios({
          method:'post',
          url:'/api/screenings',
          withCredentials:true,
          data:sdata
        }).then((response)=>{
          console.log(response)
          alert('add successfully?')
          var _this = this
          _this.$router.push({
            name:'screen_manage'
          })
        }).catch((error)=>{
          console.log(error)
        })
      }
    },
    components: {
      footerbar,
      navbar
    }
  }
</script>

<style scoped>
</style>
