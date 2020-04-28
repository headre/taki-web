<template>
  <div>
    <navbar position="takings_counts"></navbar>
    <div class="content" style="background-color: #fff">

      <div class="content" style="background-color: #999c">
        <div class="welcome">
          <div class="container">
            <div class="welcome-grids">
              <div class="welcome-grid1">
                <h2 class="cinema_h2">Overall Profile</h2>
              </div>

              <div class="clearfix"></div>
            </div>
          </div>
        </div>
      </div>


      <div class="container">
        <div class="contact-grids">
          <div class="col-md-12 contact-right">
            <br/><br/><br/>
            <div id="myChart" :style="{width: '1200px', height: '300px'}"></div>
            <table class="table" cellspacing="0" border="3">
              <thead>
              <tr>
                <th width="20%">Poster</th>
                <th width="10%">Sold</th>
                <th width="10%">FilmName</th>
                <th width="10%">Popularity</th>
              </tr>
              </thead>
              <tbody>


              <tr v-for="(item,index) in allMovieData" :key="index">
                <td>
                  <a class="mask" href="#">
                    <img v-if="item.cover==null" src="../images/gravity.jpg" class="img-responsive zoom-img" alt="/"
                         title="image-name">
                    <img v-else :src="$host+'/file/'+item.cover" class="img-responsive zoom-img" alt="/"
                         title="image-name"></a>
                </td>
                <td>
                  <div v-for="count in testTakings"><p v-if="count.id==item.id">{{count.data}}</p></div>
                  <br/>
                </td>
                <td>
                  <p>{{item.name}}</p><br/>
                </td>
                <td>
                  <div v-for="count in testCounts"><p v-if="count.id==item.id">{{count.data}}</p></div>
                  <br/>
                </td>
              </tr>


              </tbody>
            </table>

            <br/>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
      <!--testimonials-->

      <!--testimonials-->


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
    name: 'Index',
    components: {
      navbar
    },
    data () {
      return {
        msg: '',
        namesA:[],
        countsA: [],
        takingsA: [],
        testCounts: [],
        testTakings: [],
        monthDay: [
          31,
          28,
          31,
          30,
          31,
          30,
          31,
          31,
          30,
          31,
          30,
          31
        ],
        allMovieData: null,
        data: null,
        option: {
          title: {text: 'yearly revenue'},
          tooltip: {},
          legend: {
            orient:'vertical',
            data:['takings','counts'],
            left: '6%',
            x: 'center',
            y:'center',
            padding:[0,0,0,50],
            itemWidth: 15,
            itemHeight: 15,
            textStyle: {
              color: '#3a6186',
              fontSize:20,
            }
          },
          xAxis: {
            data: [],
            axisLabel:{
              interval: 0,
              rotate:-30
            }
          },
          yAxis: {},
          series: [{
            name: 'takings',
            type: 'bar',
            color: ["#64CDF0", "#F5686F"],
            label: {
              show: true,
              position: "top",
              formatter: "￥{c}"
            },
            data: []
          },{
            name:'counts',
            type:'bar',
            label: {
              show:true,
              position: "top",
            },
            data: []
          }]
        }
      }
    },
    methods: {
      getFullYearTaking (movieId) {
        let today = new Date()
        let _this = this
        _this.$axios({
          url: '/api/tickets/takings',
          method: 'get',
          params: {
            from: today.getFullYear() + '-1-1',
            to: today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),
            m: movieId
          }
        }).then(res => {
          _this.testTakings.push({id: movieId, data: res.data})
          _this.takingsA.push(parseFloat(res.data))
          if(res.data==null||res.data==""){
            _this.option.series[0].data.push(0)
          }else {
            _this.option.series[0].data.push(parseFloat(res.data))
          }
        })
          .catch(error => console.log(error))
      },
      getFullYearCounts (movieId) {
        let today = new Date()
        let _this = this
        _this.$axios({
          url: '/api/tickets/count',
          method: 'get',
          params: {
            from: today.getFullYear() + '-1-1',
            to: today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),
            m: movieId
          }
        }).then(res => {
          _this.testCounts.push({id: movieId, data: res.data})
          _this.option.series[1].data.push(parseInt(res.data))
          console.log(_this.testCounts)
        })
          .catch(error => console.log(error))
      },
      getWeeklyTakings (month) {
        let today = new Date()
        let _this = this
        for (let i = 0; i < this.monthDay[month]; i++) {

        }
      },
      drawLine () {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption(
          this.option
        )
      },
    },
    computed: {
      getMovieData () {
        let _this = this
        _this.$axios({
          url: '/api/movies/?s=20',
          method: 'get',
        }).then(res => {
          _this.allMovieData = res.data.content
          _this.allMovieData.forEach(function (item, index) {
            _this.option.xAxis.data.push(item.name)
            _this.namesA.push(item.name)
            _this.getFullYearTaking(item.id)
            _this.getFullYearCounts(item.id)
          })
        })
          .catch(error => console.log(error))
      }
    },
    created () {
    },
    mounted () {
      this.getMovieData
      console.log(this.option)
      this.drawLine()
    },
    watch: {
      option:{
        handler (newVal, oldVal) {
          console.log(this.option.xAxis.data)
          this.drawLine()
        },
        deep: true

      },
      countsA: {
        handler (newVal, oldVal) {

        },
        deep: true
      },
      takingsA: {
        handler (newVal, oldVal) {
          //this.option.series[0].data = this.takingsA
        },
        deep: true
      },
      allMovieData: {
        handler (newVal, oldVal) {

        },
        deep: true
      },
    }
  }
</script>

<style>
  .profileB {
    background-color: #000000;

  }

</style>
