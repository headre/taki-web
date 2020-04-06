<template>
  <div id="navbar">
    <div class="header">
      <div class="container">
        <div class="header-top">
          <div class="logo">
            <router-link :to="{name:'Film'}"><h1>Cinema Management System</h1></router-link>
          </div>
          <div class="phone">
            <h5><span class="glyphicon glyphicon-phone" aria-hidden="true"></span>+86-***-****-****</h5>
            <div v-if="status=='logout'"><button @click="changeStatus">login</button> </div>
            <div v-else><button @click="changeStatus">logout</button> </div>
          </div>
          <div class="clearfix"></div>
        </div>
        <div class="header-bottom">
          <nav class="navbar navbar-default">
            <div class="container-fluid">
              <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
              </div>

              <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav cl-effect-16">
                  <li v-if="position=='home'" class="active">
                    <router-link :to="{name:'film',params:{key:'home',status:this.status}}">Home</router-link>
                  </li>
                  <li v-else>
                    <router-link :to="{name:'film',params:{key:'home',status:this.status}}">Home</router-link>
                  </li>
                  <li v-if="position=='film'" class="active">
                    <router-link :to="{name: 'Index',params:{key:'film'},status:this.status}">Films<span class="sr-only">(current)</span>
                    </router-link>
                  </li>
                  <li v-else>
                    <router-link :to="{name: 'Index',params:{key:'film',status:this.status}}">Films<span class="sr-only">(current)</span>
                    </router-link>
                  </li>
                  <li><a v-if="status=='login'" href="cinema.html">screenings</a></li>
                  <li><a v-if="status=='login'" href="user.html">tickets</a></li>

                </ul>
              </div><!-- /.navbar-collapse -->

            </div><!-- /.container-fluid -->
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'navbar',
    data () {
      return {
        name:'the minion',
        position: 'home',
        status:'logout',
        isLogin:false
      }
    },
    methods: {
      changeStatus(){
        if(this.status=='login'){
          this.status='logout';
        }else{
          this.status='login';
          var _this = this
          _this.$router.push({
            name:'login'
          })
        }
      }
      /*
      home(){
        this.home=true;
        this.film=false;
        this.cinema=false;
        this.users=false;
      },
      cinema(){
        this.home=false;
        this.film=false;
        this.cinema=true;
        this.users=false;
      },
      film(){
        this.home=false;
        this.film=true;
        this.cinema=false;
        this.users=false;
      },
      users(){
        this.home=false;
        this.film=false;
        this.cinema=false;
        this.users=true;
      }*/
    },
    created: function () {
      if (this.$route.params.key != null) {
        this.position = this.$route.params.key
        this.status = this.$route.params.status
      }
      console.log(this.position)
      console.log(this.status)
    }

  }
</script>

<style scoped>

</style>
