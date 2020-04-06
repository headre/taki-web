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

    <!-- <div class="content">
      <div class="welcome">
        <div class="container">

            <div class="welcome-grids">

              <div class="col-md-9 welcome-grid1">
                <h2 class="cinema_h2">Movie list</h2>

              </div>
              <div class="clearfix"></div>
            </div>
        </div>
      </div>

      <div class="slider1">
      <div class="arrival-grids">
         <ul id="flexiselDemo1">
           <li>
             <a href="#"><img src="images/b3.jpg" alt=""/>
             </a>
           </li>
           <li>
             <a href="#"><img src="images/b4.jpg" alt=""/>
             </a>
           </li>
           <li>
             <a href="#"><img src="images/b5.jpg" alt=""/>
             </a>
           </li>
           <li>
             <a href="#"><img src="images/b6.jpg" alt=""/>
             </a>
           </li>
           <li>
             <a href="#"><img src="images/b7.jpg" alt=""/>
             </a>
           </li>
           <li>
             <a href="#"><img src="images/b8.jpg" alt=""/>
             </a>
           </li>
          </ul>
          <script type="text/javascript">
           $(window).load(function() {
            $("#flexiselDemo1").flexisel({
            visibleItems: 4,
            animationSpeed: 1000,
            autoPlay: true,
            autoPlaySpeed: 3000,
            pauseOnHover:true,
            enableResponsiveBreakpoints: true,
            responsiveBreakpoints: {
              portrait: {
                changePoint:480,
                visibleItems: 1
              },
              landscape: {
                changePoint:640,
                visibleItems: 2
              },
              tablet: {
                changePoint:768,
                visibleItems: 3
              }
            }
          });
          });
          </script>
          <script type="text/javascript" src="js/jquery.flexisel.js"></script>
      </div>
    </div> -->

    <!-- <div class="feature">
      <div class="container">
        <h3>features</h3>
        <div class="feature-grids">
          <div class="col-md-3 feature-grid">
          <div class="feature-icon">
            <span class="glyphicon glyphicon-wrench" aria-hidden="true"></span>
            </div>
            <h4>Tools</h4>
            </div>
          <div class="col-md-3 feature-grid">
          <div class="feature-icon">
            <span class="glyphicon glyphicon-dashboard" aria-hidden="true"></span>
            </div>
            <h4>Application</h4>
            </div>
          <div class="col-md-3 feature-grid">
          <div class="feature-icon">
            <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
            </div>
            <h4>Ambition</h4>
            </div>
          <div class="col-md-3 feature-grid">
          <div class="feature-icon">
          <span class="glyphicon glyphicon-record" aria-hidden="true"></span>
          </div>
            <h4>Target</h4>
            </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </div> -->

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
              <h4><a href="film_detail.html">1984</a></h4>
              <p>... </p>
            </div>
          </div>
          <div class="col-md-4 event-grid">
            <div class="event-time">
              <p>02/2013</p>
            </div>
            <div class="event-grid_pic">
              <img src="../images/inception.jpg" class="img-responsive" alt=""/>
              <h4><a href="film_detail.html">Inception</a></h4>
              <p>...</p>
            </div>
          </div>
          <div class="col-md-4 event-grid">
            <div class="event-time">
              <p>09/2015</p>
            </div>
            <div class="event-grid_pic">
              <img src="../images/gravity.jpg" class="img-responsive" alt=""/>
              <h4><a href="film_detail.html">Gravity</a></h4>
              <p>... </p>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
    <div class="specials-section">
      <div class="container">
        <div class="specials-grids">
          <div class="col-md-3 specials">
            <h3>Films</h3>
            <ul>
              <li><a href="#">Edit</a></li>
            </ul>
          </div>
          <div class="col-md-3 specials">
            <h3>Users</h3>
            <ul>
              <li><a href="#">Edit</a></li>
            </ul>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
  </div>
  </div>

</template>

<script>
//import '../js/bootstrap'
import navbar from './navbar'

addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); }
export default {
  name: 'Film',
  data() {
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
