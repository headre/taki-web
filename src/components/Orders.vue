<template>
  <div>
    <navbar position="orders"></navbar>
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
                <td>{{item.userUsername}}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <button @click="View(item.id)" class="btn btn-primary" >View</button>
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
        all: 6, // 总页数
        cur: 1, // 当前页码
        totalPage: 0,// 当前条数
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
      getOrdersData (index) {
        var _this = this
        _this.$axios({
          method:'get',
          url:'/api/orders',
          params:{
            p:index,
            s:10
          }
        })
          .then(function (response) {
            _this.orders = response.data.content
            _this.all = response.data.totalPages// 总页数
            _this.cur = response.data.number+1
            _this.totalPage = response.data.totalPages
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
        var _this=this
        _this.$router.push({
          name:'order_info',
          query:{
            id:id
          }
        })

      },
      btnClick: function (data) { // 页码点击事件
        if (data !== this.cur) {
          this.cur = data
        }
        // 根据点击页数请求数据
        this.getOrdersData(this.cur)
      },
      pageClick: function () {
        // 根据点击页数请求数据
        this.getOrdersData(this.cur)
      },
    },
    computed:{
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
      },
    },
    created: function () {
      this.getOrdersData()
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
