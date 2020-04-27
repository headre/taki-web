<template>
  <div>
    <navbar position="auditoriums"></navbar>
    <div class="content" style="background-color: #fff">

      <div class="content" style="background-color: #999c">
        <div class="welcome">
          <div class="container">
            <div class="welcome-grids">
              <div class="welcome-grid1">
                <h2 class="cinema_h2">auditoriums Management</h2>
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
          <div class="events"><h3>auditoriums List</h3>
            <thead>
            <tr>
              <router-link :to="{name:'add_auditorium'}">
                <button class="btn-warning">add_auditorium</button>
              </router-link>
              <!--  <li><router-link :to="{name: 'Add_film',params:{key:'add_film'}}">Add<span class="sr-only">(current)</span>
                </li> -->
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
                  <button class="btn btn-primary">Name</button>
                </th>
                <th>
                  <button class="btn btn-primary">rows</button>
                </th>
                <th>
                  <button class="btn btn-primary">cols</button>
                </th>
                <th>
                  <button class="btn btn-primary">vipExtraPrice</button>
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
                <th></th>
                <th></th>
              </tr>
              </thead>

              <tbody>
              <tr v-for="item in auditoriums">
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.numRows}}</td>
                <td>{{item.numCols}}</td>
                <td>{{item.vipExtraPrice}}</td>
                <td></td>
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
                  <router-link :to="{name:'auditorium_edit',query:{auditoriumsId:item.id}}">
                    <button class="btn btn-primary">Edit</button>
                  </router-link>
                </td>
                <td>
                  <router-link :to="{name:'auditorium_edit',query:{auditoriumsId:item.id}}">
                    <button class="btn btn-primary">Edit</button>
                  </router-link>
                </td>
                <td>
                  <button @click="Delete(item.id) " class="btn btn-primary">Delete</button>
                </td>
              </tr>

              </tbody>
            </table>
          </div>
          <div class="col-md-1"></div>


        </div>
      </div>


      <footerbar></footerbar>


    </div>
  </div>
</template>

<script>
  import navbar from './navbar'
  import footerbar from './footerbar'

  export default {
    name: 'auditoriums_manage',
    data () {
      return {
        message: 'cinema',
        auditoriums: []
      }
    },
    components: {
      footerbar ,
      navbar
    },
    methods: {
      getData (index) {
        var _this = this
        _this.$axios({
          method:'get',
          url:'/api/auditoriums',
        })
          .then(function (response) {
            _this.auditoriums = response.data
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
          url: '/api/auditoriums/' + id
        }).then((response) => {
          alert('delete successfully')
          _this.$router.go(0)
        }).catch((error) => {
          console.log(error)
        })
      },
    },
    computed:{
    },
    mounted () {
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
