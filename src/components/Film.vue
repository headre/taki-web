<template>
  <div>
    <navbar/>
  <!--end header-section-->
  <!--banner-->

  <div class="content">
    <div class="welcome">
      <div class="container">

        <div class="welcome-grids">

          <div class="welcome-grid1">
            <h2 class="cinema_h2">What's Hot</h2>

          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
    <div>
    <section>
      <div class="flexslider">
        <ul class="slides">
          <li>
            <div class="slider-info">
              <img src="../images/1984.jpeg" class="img-responsive" alt="">
            </div>
          </li>
          <li>
            <div class="slider-info">
              <img src="../images/inception.jpg" class="img-responsive" alt="">
            </div>
          </li>
          <li>
            <div class="slider-info">
              <img src="../images/gravity.jpg" class="img-responsive" alt="">
            </div>
          </li>

        </ul>
      </div>
    </section>
    </div>
    <!--FlexSlider-->
    <!--FlexSlider-->
    <!-- slider -->
    <!--testimonials-->

    <!--testimonials-->
    <div class="events">
      <div class="container">
        <h3>Movie List</h3>
        <div class="event-grids">
          <div class="col-md-4 event-grid">
            <div class="event-time">
              <p>08/1998</p>
            </div>
            <div class="event-grid_pic">
              <img src="../images/1984.jpeg" class="img-responsive" alt=""/>
              <h4><router-link :to="{name:'film_look',params:{key:'film_look'}}"><a >1984</a></router-link></h4>
              <p>... </p>
            </div>
          </div>
          <div class="col-md-4 event-grid">
            <div class="event-time">
              <p>02/2013</p>
            </div>
            <div class="event-grid_pic">
              <img src="../images/inception.jpg" class="img-responsive" alt=""/>
              <h4><router-link :to="{name:'film_look',params:{key:'film_look'}}"><a >Inception</a></router-link></h4>
              <p>...</p>
            </div>
          </div>
          <div class="col-md-4 event-grid">
            <div class="event-time">
              <p>09/2015</p>
            </div>
            <div class="event-grid_pic">
              <img src="../images/gravity.jpg" class="img-responsive" alt=""/>
              <h4><router-link :to="{name:'film_look',params:{key:'film_look'}}"><a >Gravity</a></router-link></h4>
              <p>... </p>
            </div>
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
//import '../js/bootstrap'
import navbar from './navbar'
import footerbar from './footerbar'

addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); }
export default {
  name: 'Film',
  data() {
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
