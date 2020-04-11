<template>
  <div>
    <navbar></navbar>
    <div class="content" style="background-color: #fff">

      <div class="content" style="background-color: #999c">
        <div class="welcome">
          <div class="container">
            <div class="welcome-grids">
              <div class="welcome-grid1">
                <h2 class="cinema_h2">Tickets Management</h2>
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
          <div class="events"><h3>Orders List</h3>
            <br/>
            <thead>
            <tr></tr>
            </thead>

            <table class="table" style="background-color: #ffffff70">
              <thead>
              <tr>
                <th>
                  <button class="btn btn-primary">ID</button>
                </th>
                <th>
                  <button class="btn btn-primary">Date</button>
                </th>
                <th>
                  <button class="btn btn-primary">Cost</button>
                </th>
                <th>
                  <button class="btn btn-primary">Username</button>
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
              <tr v-for="(item,index) in orders" :key="index">
                <td>{{item.id}}</td>
                <td>{{item.createdAt}}</td>
                <td>{{item.totalCost}}</td>
                <td>{{item.username}}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <button @click="View(item.id)" class="btn btn-primary">View</button>
                </td>
                <td>
                  <button @click="Delete(item.id)" class="btn btn-primary">Delete</button>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
          <div class="col-md-1"></div>
        </div>
      </div>

      <footerbar> </footerbar>

    </div>
  </div>
</template>

<script type="text/javascript">
  import navbar from './navbar'
  import footerbar from './footerbar'
  export default {
    name: 'orders',
    data () {
      return {
        message: 'cinema',
        orders: []
      }
    },
    components: {
      footerbar ,
      navbar
    },
    methods: {
      //获取订单数据
      getOrdersData () {
        var _this = this
        _this.$axios.get('/api/orders')
          .then(function (response) {
            _this.orders = response.data.content
            console.log(_this.orders.content)
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      //删除订单
      Delete (id) {
        var _this = this
        _this.$axios({
          method: 'delete',
          url: '/api/orders/' + id
        }).then((response) => {
          console.log('success')
          alert('delete successfully')
          _this.$router.go(0)
        }).catch((error) => {
          console.log(error)
        })
      },
      //查看订单
      View(id){

      }
    },
    created: function () {
      this.getOrdersData()
    }
  }
</script>

<style scoped>
</style>
