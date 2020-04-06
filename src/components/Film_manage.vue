<template>
  <div>
    <navbar></navbar>
   <div class="content" style="background-color: #fff">

   <div class="content" style="background-color: #999c">
   				<div class="welcome">
   					<div class="container">
   							<div class="welcome-grids">
   								<div class="welcome-grid1">
   									<h2 class="cinema_h2">Movies Management</h2>
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
   		<div class="events"><h3>Movie List</h3>
   		<thead>
   		  <tr>
          <router-link :to="{name:'add_film',params:{key:'add_film'}}"><button class="btn-warning">Add a movie</button></router-link>
        <!--  <li><router-link :to="{name: 'Add_film',params:{key:'add_film'}}">Add<span class="sr-only">(current)</span>
          </li> -->
   		    <th></th><th></th>
   		    <th></th> <th></th>
   		    <th></th><th></th>
   			<th></th>
   			<th></th>
   			<th></th><th></th>
   			<th></th><th></th>
   		  </tr>
   		</thead>

   	<table class="table" style="background-color: antiquewhite">
   	    <thead>
            <tr>
              <th><button class="btn btn-primary">Name</button></th>
              <th></th>
              <th></th>
              <th></th><th></th>
              <th></th> <th></th>
              <th></th><th></th>
          <th></th>
          <th></th>
          <th></th><th></th>
          <th></th><th></th>
            </tr>
   	    </thead>

   	    <tbody >
   	    <tr v-for="(item,index) in movies":key="index">
   	      <td>{{item.name}}</td>
   	      <td></td>
   	      <td></td>
   	      <td></td><td></td>
   	      <td></td>
   		  <td></td>
   		  <td></td>
   		  <td></td>
   		  <td></td>
   		  <td></td>
   		  <td></td>
   	      <td><router-link :to="{name:'edit_film',params:{key:item.id}}"><button class="btn btn-primary">Edit</button></router-link></td>
   	      <td><button @click="Delete(item.id) " class="btn btn-primary">Delete</button></td>
   	    </tr>

   	  </tbody>
   	</table>
   	</div><div class="col-md-1"></div>


   	</div>
   	</div>


<div class="footer-section" style="background-color:#8a6d3bc2">
        <div class="container">
          <div class="footer-top">
            <p>Copyright &copy; 2020 </p>
          </div></div></div>


   	</div>
  </div>
</template>

<script type="text/javascript">
import navbar from './navbar'
export default {
  name: 'film_manage',
  data () {
    return {
      message: 'cinema',
      movies:[]
    }
  },
  components: {
    navbar
  },
  methods: {
    getData () {
      var _this=this
      _this.$axios.get('/api/movies')
        .then(function (response) {
          _this.movies = response.data
          console.log(_this.movies)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    Delete(id){
      var _this=this
      _this.$axios({
        method:'delete',
        url:'/api/movies/'+id
      }).then((response)=>{
        console.log('success')
        alert('delete successfully')
        _this.$router.go(0)
      }).catch((error)=>{
        console.log(error)
      })
    }
  },
    mounted(){
      var _this=this;
        _this.getData();
      }


}
</script>

<style scoped>
</style>
