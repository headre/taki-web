<template>
  <div>
    <navbar position="film"></navbar>
  <!--end header-section-->
  <!--banner-->

  <div class="content">

    <div class="welcome">
      <div class="container">
        <div class="welcome-grids">
         <div class="col-md-3"></div>
          <div class="col-md-6 welcome-grid1">
			 <div class="col-md-2"></div>
            <img v-if="img==null" src="../images/gravity.jpg" width="400">
            <img v-else :src="$host+'/file/'+img" class="img-responsive" alt="">
            <br /><div class="col-md-2"></div>
            <div v-if="textData!=null" class="col-md-8">
              <h2>{{textData.name}}</h2>
              <br/><ul class="d" style="color:#fff">decription: {{textData.blurb}}.</ul><br/>

              <router-link :to="{name:backPath}"> <a class="button">Return</a></router-link>
            </div>
            <div class="col-md-6"></div>
          </div>

          <div class="clearfix"></div>
        </div>
      </div>
    </div>


<footerbar></footerbar>

  </div>
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
      backPath:'film',
      msg: 'this is film page',
      id:-1,
      textData:null,
      img:null
    }
  },
  computed:{
    //获取电影数据与图片
    getMovieData(){
      let mid = this.$route.query.key
      if(mid != null){
        this.id = mid
        this.$axios({
          method:'get',
          url:'/api/movies/'+this.id+'/info'
        }).then((response)=>{
          this.textData = response.data
          this.img = response.data.cover
        }).catch((error)=>{
          console.log(error)
        })
      }else {
        this.$router.push({
          path:'/'
        })
      }
    }
  },
  components: {
    footerbar ,
    navbar
  },
  mounted(){
    if (this.$route.params.path != null) {
      this.backPath = this.$route.params.path
    }
    console.log(this.backPath)
    this.getMovieData
  },
}
</script>

<style scoped>
</style>
