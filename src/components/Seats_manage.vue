<template>
  <div>
    <navbar position="auditoriums"></navbar>
    <div class="content" style="background-color: #fff">

      <div class="content" style="background-color: #999c">
        <div class="welcome">
          <div class="container">
            <div class="welcome-grids">
              <div class="welcome-grid1">
                <h2 class="cinema_h2">Seats Management</h2>
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
          <div class="events"><h3>Seats List of Room {{auditoriumsId}}</h3>
            <thead>
            <tr>
              <router-link :to="{name:'add_seats',query:{auditoriumsId:auditoriumsId}}">
                <button class="btn-warning">Add a seat</button>
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
                  <button class="btn btn-primary">Id</button>
                </th>
                <th>
                  <button class="btn btn-primary">row</button>
                </th>
                <th>
                  <button class="btn btn-primary">col</button>
                </th>
                <th>
                  <button class="btn btn-primary">Vip</button>
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
              <tr v-for="item in seats">
                <td>Room {{item.id}}</td>
                <td>{{item.row}}</td>
                <td>{{item.col}}</td>
                <td>{{item.isVip}}</td>
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
                  <router-link :to="{name:'seats_edit',query:{seatId:item.id}}">
                    <button class="btn btn-primary">Edit</button>
                  </router-link>
                </td>
                <td>
                  <button @click="Delete(item.id)" class="btn btn-primary">Delete</button>
                </td>
              </tr>
              </tbody>
            </table>



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
  import calendar from './calendar'


  export default {
    name: 'seats_manage',
    data(){
      return{
        auditoriumsId:0,
        seats: []
      }
    }
    ,
    components: {
      footerbar ,
      navbar
    },
    methods: {
      getData () {
        var _this = this
        _this.$axios({
          method:'get',
          url:'/api/auditoriums/'+this.auditoriumId+'/seats',
        })
          .then(function (response) {
            _this.seats = response.data
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      //删除排片
      Delete (id) {
        var _this = this
        _this.$axios({
          method: 'delete',
          url: '/api/seats/' + id
        }).then((response) => {
          alert('delete successfully')
          _this.$router.go(0)
        }).catch((error) => {
          console.log(error)
        })
      },
    },
    mounted () {
      if (this.$route.query.auditoriumsId != null) {
        this.auditoriumsId = this.$route.query.auditoriumsId
      } else {
        console.log('null')
      }
      var _this = this
      _this.getData()
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

