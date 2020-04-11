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
              <h2 class="cinema_h2">Movie of week</h2>
            </div>
            <div class="clearfix">

            </div>
          </div>
          <div>
            <div class="slide">
              <div class="slideshow">
                <transition-group tag="ul" name="image">
                  <li v-for="(img, index) in imgArray" v-show="index===mark" :key="index">
                    <router-link :to="{name:'film_look',query:{key:img.id}}">
                      <!-- 如果当前图片名为null，使用本地图片-->
                     <img v-if="img.cover==null" src="../images/gravity.jpg">
                      <img v-else :src="$host+'/file/'+img.cover">
                    </router-link>
                  </li>
                </transition-group>
              </div>
              <div class="bar">
                <span v-for="(item, index) in imgArray" :class="{'active':index===mark}" :key="index"></span>
              </div>
            </div>
          </div>
        </div>
      </div>


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
                <h4>
                  <router-link :to="{name:'film_look',params:{key:'film_look'}}"><a>1984</a></router-link>
                </h4>
                <p>... </p>
              </div>
            </div>
            <div class="col-md-4 event-grid">
              <div class="event-time">
                <p>02/2013</p>
              </div>
              <div class="event-grid_pic">
                <img src="../images/inception.jpg" class="img-responsive" alt=""/>
                <h4>
                  <router-link :to="{name:'film_look',params:{key:'film_look'}}"><a>Inception</a></router-link>
                </h4>
                <p>...</p>
              </div>
            </div>
            <div class="col-md-4 event-grid">
              <div class="event-time">
                <p>09/2015</p>
              </div>
              <div class="event-grid_pic">
                <img src="../images/gravity.jpg" class="img-responsive" alt=""/>
                <h4>
                  <router-link :to="{name:'film_look',params:{key:'film_look'}}"><a>Gravity</a></router-link>
                </h4>
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

  addEventListener('load', function () { setTimeout(hideURLbar, 0) }, false); function hideURLbar () { window.scrollTo(0, 1) }

  export default {
    name: 'film',
    data () {
      return {
        msg: 'this is film page',
        mark: 0,
        timer: null,
        imgArray: [],
        number:0

      }
    },
    methods: {
      autoPlay () {
        this.mark++
        if (this.mark === this.number) {
          this.mark = 0
        }
      },
      play () {
        this.timer = setInterval(this.autoPlay, 2500)
      },
      change (i) {
        this.mark = i
      },
      stop () {
        clearInterval(this.timer)
      },
      move () {
        this.timer = setInterval(this.autoPlay, 2500)
      },
      //将图片与id对应存储，格式为{id:cover}
      getImgNames () {
        this.$axios({
          method: 'get',
          url: '/api/movies'
        }).then((response) => {
          response.data.content.forEach((item, index) => {
            let id = item.id
            let cover = item.cover
            this.imgArray.push({id, cover})
            this.number++
          })
          console.log(this.imgArray)
        })
          .catch(error => console.log(error))
      },
    },
    components: {
      footerbar,
      navbar
    },
    created () {
      this.play(),
        this.getImgNames()
    },
    mounted () {
    }
  }
</script>

<style scoped>

  .slide {
    width: 1024px;
    height: 400px;
    margin: 0 auto;
    margin-top: 50px;
    overflow: hidden;
    position: relative;
  }

  .slideshow {
    width: 1024px;
    height: 400px;
  }

  li {
    position: absolute;
  }

  img {
    width: 1024px;
    height: 350px;
  }

  .bar {
    position: absolute;
    width: 100%;
    bottom: 10px;
    margin: 0 auto;
    z-index: 10;
    text-align: center;
  }

  .bar span {
    width: 20px;
    height: 5px;
    border: 1px solid;
    background: white;
    display: inline-block;
    margin-right: 10px;
  }

  .active {
    background: red !important;
  }
</style>
