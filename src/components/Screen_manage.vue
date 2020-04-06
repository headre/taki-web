<template>
  <div>
    <navbar></navbar>
    <div class="content" style="background-color: #fff">

      <div class="content" style="background-color: #999c">
        <div class="welcome">
          <div class="container">
            <div class="welcome-grids">
              <div class="welcome-grid1">
                <h2 class="cinema_h2">Screens Management</h2>
              </div>
              <div class="clearfix"></div>
            </div>
          </div>
        </div>
      </div>


      <!--testimonials-->

      <!--testimonials-->
      <div class="container" style="margin-top: 2%">
        <div class="col-md-1"></div>
        <div class="col-md-10">
          <div class="events"><h3>Screening List</h3>
            <thead>
            <tr>
              <th><a href="#">
                <button class="btn-warning">Today</button>
              </a></th>
              <th><a href="#">
                <button class="btn-warning">Tomorrow</button>
              </a></th>
              &nbsp &nbsp &nbsp &nbsp &nbsp
              <router-link :to="{name:'add_screen'}">
                <button class="btn-warning">Add a screen</button>
              </router-link>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
            </thead>

            <table class="table" style="background-color: antiquewhite">
              <thead>
              <tr>
                <th>
                  <button class="btn btn-primary">Room</button>
                </th>
                <th>
                  <button class="btn btn-primary">Time</button>
                </th>
                <th>
                  <button class="btn btn-primary">Movie</button>
                </th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
              </thead>

              <tbody>
              <tr v-for="(item,index) in screenings":key="index">
                <td>Room {{item.auditoriumId}}</td>
                <td>{{item.time}}</td>
                <td>BloodShot</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <router-link :to="{name:'edit_screen',params:{key:item.id}}">
                    <button class="btn btn-primary">Edit</button>
                  </router-link>
                </td>
                <td><a href="#">
                  <button class="btn btn-primary">Delete</button>
                </a></td>
              </tr>
              </tbody>
            </table>
          </div>
          <div class="col-md-1"></div>
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

<script type="text/javascript">
  import navbar from './navbar'

  export default {
    name: 'screen_manage',
    data () {
      return {
        message: 'cinema',
        screenings: [],
        movies:[],
        movie:''
      }
    },
    components: {
      navbar
    },
    methods: {
      getData () {
        var _this=this
        _this.$axios.get('/api/screenings')
          .then(function (response) {
            _this.screenings = response.data
            console.log(_this.screenings)
            for(let i =0;i<_this.screenings.length;i++){
              let id = parseInt(_this.screenings[i].movieId)
              console.log(id)
              _this.getMovieName(id)
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      Delete (id) {
        var _this = this
        _this.$axios({
          method: 'delete',
          url: '/api/screenings/' + id
        }).then((response) => {
          console.log('success')
          alert('delete successfully')
          _this.$router.go(0)
        }).catch((error) => {
          console.log(error)
        })
      },
      getMovieName(id){
        var _this=this;/*
        _this.$axios({
          method:'get',
          url:'/api/movies/'+id
        }).then((response)=>{
          _this.movies.push({'this.id':response.data.name})
          console.log(_this.movies)
        }).catch((error)=>{
          console.log('4'+error)
        })*/
        console.log('h')
      }
    },
    computed:{
      findMovie(id){
        for(let movie in this.movies){

        }
      }
    },
    created(){
      var _this=this;
      _this.getData();
      console.log('5'+_this.screenings)
    },
    mounted () {
      var _this=this
      console.log('3'+_this.screenings)
      for(i in this.screenings){
        console.log(i)
        _this.getMovieName(i.movieId)
      }
    }
  }
</script>

<style scoped>
</style>
