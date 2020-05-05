<template>
  <div>
    <navbar position="orders"></navbar>
  <!--end header-section-->
  <!--banner-->
    				<div class="container">
    					<div class="contact-grids">
    						<div class="col-md-12 contact-right">
                  <br /><br /><br />
                  <table class="table" cellspacing="0" border="3" style="border-collapse">
                    <thead>
                      <tr>
                        <th width="15%"></th>
                        <th width="10%">ID</th>
                        <th width="10%">User</th>
                        <th width="10%">Date</th>
                        <th width="10%">Film</th>
                        <th width="10%">Price</th>
                        <th width="10%">status</th>

                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <!--If the current image name is null, use the local image -->
                          <img v-if="coverName==null" src="../images/gravity.jpg"height="150px" width="330px">
                          <img v-else :src="$host+'/file/'+coverName" height="150px" width="330px">
                        <td>
                          <p>{{id}}</p><br />
                        </td>
                        <td>
                          <p>{{order.username}}</p><br />
                        </td>
                        <td>
                          <p>{{order.createdAt}}</p><br />
                        </td>
                        <td>
                          <p>{{filmName}}</p><br />
                        </td>
                        <td>
                          <p>{{order.totalcost}} yuan</p><br />
                        </td>
                        <td>
                          <p>{{order.status}}</p><br />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <br />
                    <router-link :to="{name:'orders'}"><a class="button">Return</a></router-link>
                  <br />
                  <br />
    						</div>
    						<div class="clearfix"></div>
              </div>
    				</div>


    <footerbar/>
    </div>

</template>

<script>
// import '../js/bootstrap'
import navbar from './navbar'
import footerbar from './footerbar'
addEventListener('load', function () { setTimeout(hideURLbar, 0) }, false); function hideURLbar () { window.scrollTo(0, 1) }
export default {
  name: 'Film',
  data () {
    return {
      id:0,
      movieId:0,
      screenId:0,
      filmName:null,
      coverName:null,
      order:{
        id:0,
        username:null,
        totalcost:null,
        status:null,
        createdAt:null
      }
    }
  },
  methods:{
    getOrder(id){
      var _this =this
      _this.$axios({
        method:'get',
        url:'/api/orders/'+id
      }).then(res=>{
        console.log(res.data)
        this.order.username = res.data.username
        this.order.totalcost = res.data.totalCost
        this.order.status = res.data.completed?'completed':'not completed'
        this.order.createdAt = res.data.createdAt
        this.movieId = res.data.tickets[0].screening.movieId
      })
    },
  },
  computed:{
    getMovieId(){
      var _this = this
      _this.$axios({
        method:'get',
        url:'/api/screenings/'+this.screenId
      }).then(res=>{
        this.movieId = res.data.movieId
        console.log(res.data.movieId)
      })
    },
    getMovieName(){
      var _this = this
      _this.$axios({
        method:'get',
        url:'/api/movies/'+this.movieId+'/info'
      }).then(res=>{
        this.filmName = res.data.name
        this.coverName = res.data.cover
        console.log(res.data.name)
      })
    }

  },
  components: {
    footerbar,
    navbar
  },
  mounted () {
    if (this.$route.query.id != null) {
      this.id = this.$route.query.id
      console.log(this.id)
    }
    this.getOrder(this.id)
  },
  watch:{
    screenId(newValue,oldValue){
      if(newValue!=0) {
        this.getMovieId
      }
    },
    movieId(newValue,oldValue){
      if(newValue!=0) {
        this.getMovieName
      }
    }
  }
}
</script>

<style scoped>
</style>
