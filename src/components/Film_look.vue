<template>
  <div>
    <navbar></navbar>
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
              <br/><ul class="d" style="color:#fff">decription: ... ... ...</ul><br/>

              <router-link :to="{name:'Film',params:{key:'film'}}"> <a class="button">Return</a></router-link>
            </div>
            <div class="col-md-2"></div>
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
      msg: 'this is film page'
    }
  },
  components: {
    footerbar ,
    navbar
  }
}
</script>

<style scoped>
</style>
