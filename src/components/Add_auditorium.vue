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
              <h2 class="cinema_h2">Add a auditorium</h2>
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
                <h5>name</h5>
                <input v-model="auditoriumForm.name" placeholder="input name here" type="text">
                <h5>rows</h5>
                <input v-model="auditoriumForm.rows" placeholder="input rows id" type="text">
                <h5>cols</h5>
                <input v-model="auditoriumForm.cols" placeholder="input cols id" type="text">
                <h5>vipExtraPrice</h5>
                <input v-model="auditoriumForm.vipExtraPrice" placeholder="input vip extra price id" type="text">
                <br/><br/>
                <input @click="on_submit" type="submit" class="btn-success" value="Confirm">
                <br/><br/>
                <router-link :to="{name:'auditoriums_manage'}"><a class="button">Cancle</a>
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
    name: 'add_auditorium',
    data () {
      return {
        auditoriumForm:{
          name:"",
          rows:"",
          cols:"",
          vipExtraPrice:""
        }
      }
    },
    methods:{
      on_submit(){
        const sdata = {"name":this.auditoriumForm.name,"numRows":parseInt(this.auditoriumForm.rows),"numCols":parseInt(this.auditoriumForm.cols),"vipExtraPrice":this.auditoriumForm.vipExtraPrice }
        console.log(this.auditoriumForm.name);
        this.$axios({
          method:'post',
          url:'/api/auditoriums',
          withCredentials:true,
          data:sdata
        }).then((response)=>{
          console.log(response)
          alert('add successfully')
          var _this = this
          _this.$router.push({
            name:'auditoriums_manage'
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
