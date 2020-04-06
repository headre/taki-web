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
    							<form >

    															<h5>Name</h5>
    															<input type="text">
    															<h5>Room</h5>
    															<input type="text">
    															<h5>Time</h5>
    															<input type="text">
    															<input type="submit" class="btn-success" value="Confirm"></p>
    															<br />
                                  <router-link :to="{name:'Screen_manage',params:{key:'screen_manage'}}"><a class="button">Cancle</a></router-link>
    							</form>

    						</div>
    						<div class="clearfix"></div>
              </div>
    				</div>
          </div>

    <div class="footer-section" style="background-color:#8a6d3bc2">
      <div class="container">
        <div class="footer-top">
          <p>Copyright &copy; 2020 </p>
        </div>
      </div>
    </div>
  </div>
 </div>

</template>

<script>
// import '../js/bootstrap'
import navbar from './navbar'
addEventListener('load', function () { setTimeout(hideURLbar, 0) }, false); function hideURLbar () { window.scrollTo(0, 1) }
export default {
  name: 'Film',
  data () {
    return {
      msg: 'this is film page'
    }
  },
  components: {
    navbar
  }
}
</script>

<style scoped>
</style>
