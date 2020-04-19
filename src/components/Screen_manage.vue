<template>
  <div>
    <navbar position="screen_manage"></navbar>
    <div class="content" style="background-color: #fff">

      <div class="content" style="background-color: #999c">
        <div class="welcome">
          <div class="container">
            <div class="welcome-grids">
              <div class="welcome-grid1">
                <h2 class="cinema_h2">Screen Management</h2>
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
              <th><a>
                <button @click="setAll" class="btn-warning">All</button>
              </a></th>
              <th><a>
                <button @click="setToday" class="btn-warning">Today</button>
              </a></th>
              <th><a >
                <button @click="setTomorrow" class="btn-warning">Tomorrow</button>
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
                <th>
                  <button class="btn btn-primary">Name</button>
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
              </tr>
              </thead>

              <tbody>
              <tr v-for="(item,index) in screenings":key="index">
                <td>Room {{item.auditoriumId}}</td>
                <td>{{item.time}}</td>
                <td>{{item.date}}</td>
                <td>{{filterName(item.movieId)}}</td>
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
                  <router-link :to="{name:'edit_screen',query:{screenId:item.id}}">
                    <button class="btn btn-primary">Edit</button>
                  </router-link>
                </td>
                <td>
                  <button @click="Delete(item.id)" class="btn btn-primary">Delete</button>
                </td>
              </tr>
              </tbody>
            </table>

            <div class="page-bar">
              <ul>
                <li v-if="cur>1"><a v-on:click="cur--,pageClick()">Previous</a></li>
                <li v-if="cur==1"><a class="banclick">Previous</a></li>
                <li v-for="index in indexs" v-bind:class="{ 'active': cur === index}">
                  <a v-on:click="btnClick(index)">{{ index }}</a>
                </li>
                <li v-if="cur!=all"><a v-on:click="cur++,pageClick()">Next</a></li>
                <li v-if="cur == all"><a class="banclick">Next</a></li>
                <li><a>total:<i>{{all}}</i>pages</a></li>
              </ul>
            </div>


          </div><div class="col-md-1"></div>
        </div>
      </div>

      <footerbar/>

    </div>
  </div>
</template>

<script type="text/javascript">
  import navbar from './navbar'
  import footerbar from './footerbar'
  export default {
    name: 'screen_manage',
    data(){
      return{
        all: 6, // 总页数
        cur: 1, // 当前页码
        totalPage: 0,// 当前条数
        message: 'cinema',
        screenings: [],
        movies: [],
        date:null,
        whatToShow:"all",
      }
    }
    ,
    components: {
      footerbar ,
      navbar
    },
    methods: {
      allOrDate(mode,params){
        switch (mode) {
            case "all":
              this.getScreenData(params)
              break
            case "search":
              this.searchScreen(params)
              break
        }
      },
      getScreenData (index) {
        var _this = this
        _this.$axios({
          method:'get',
          url: '/api/screenings',
          params:{
            p:index,
            s:10
          }
        }).then(function (response) {
            _this.screenings = response.data.content
            _this.all = response.data.totalPages// 总页数
            _this.cur = response.data.number+1
            _this.totalPage = response.data.totalPages
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      searchScreen(index){
        console.log(this.date)
        var _this = this
        _this.$axios({
          method:'get',
          url:'/api/screenings/search',
          params:{
            q:this.date,
            p:index,
            s:10
          }
        }).then(function (response) {
          _this.screenings = response.data.screenings.content
          _this.all = response.data.screenings.totalPages// 总页数
          _this.cur = response.data.screenings.number+1
          _this.totalPage = response.data.screenings.totalPages
        }).catch((error)=>{
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
      getMovieData(){
        var _this = this
        _this.$axios.get('/api/movies')
          .then(function (response) {
            _this.movies = response.data.content
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      // 分页
      btnClick: function (data) { // 页码点击事件
        if (data !== this.cur) {
          this.cur = data
        }
        // 根据点击页数请求数据
        this.allOrDate(this.whatToShow,this.cur)
      },
      pageClick: function () {
        // 根据点击页数请求数据
        this.allOrDate(this.whatToShow,this.cur)
      },
      setToday(){
        let date = new Date()
        this.whatToShow="search"
        this.date = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()
        this.searchScreen(1)
      },
      setTomorrow(){
        let date = new Date()
        this.whatToShow="search"
        this.date = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+(date.getDate()+1)
        this.searchScreen(1)
      },
      setAll(){
        this.whatToShow="all"
        this.getScreenData(1)
      }
    },
    computed: {
      filterName(){
        return function (id) {
            var name = "name"
            this.movies.forEach((item,index)=>{
              if(item.id==id){
                name = item.name
              }
            })
          return name
        }
      },
      indexs: function () {
        var left = 1
        var right = this.all
        var ar = []
        if (this.all >= 5) {
          if (this.cur > 3 && this.cur < this.all - 2) {
            left = this.cur - 2
            right = this.cur + 2
          } else {
            if (this.cur <= 3) {
              left = 1
              right = 5
            } else {
              right = this.all
              left = this.all - 4
            }
          }
        }
        while (left <= right) {
          ar.push(left)
          left++
        }
        return ar
      }
    },
    mounted () {
      this.getMovieData();
      this.getScreenData(1);
    }
  }
</script>

<style scoped>
  .page-bar{
    margin:40px auto;
    margin-top: 150px;

  }
  ul,li{
    margin: 0px;
    padding: 0px;
  }
  li{
    list-style: none
  }
  .page-bar li:first-child>a {
    margin-left: 150px
  }
  .page-bar a{
    border: 1px solid #ddd;
    text-decoration: none;
    position: relative;
    float: left;
    padding: 6px 12px;
    margin-left: -1px;
    line-height: 1.42857143;
    color: #5D6062;
    cursor: pointer;
    margin-right: 20px;
  }
  .page-bar a:hover{
    background-color: #eee;
  }
  .page-bar a.banclick{
    cursor:not-allowed;
  }
  .page-bar .active a{
    color: #fff;
    cursor: default;
    background-color: #E96463;
    border-color: #E96463;
  }
  .page-bar i{
    font-style:normal;
    color: #d44950;
    margin: 0px 4px;
    font-size: 12px;
  }

</style>
