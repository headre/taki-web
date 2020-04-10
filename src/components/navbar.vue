<template>
  <div id="navbar">
    <div class="header">
      <div class="container">
        <div class="header-top">
          <div class="logo">
            <router-link :to="{name:'film'}"><h1>Cinema Management System</h1></router-link>
          </div>
          <div class="phone">
            <h5><span class="glyphicon glyphicon-phone" aria-hidden="true"></span>+86-***-****-****</h5>
            <div v-if="isLogin=='false'"><button @click="changeStatus">login</button> </div>
            <div v-if="isLogin=='true'"><button @click="logout">logout</button> </div>
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
                    <router-link :to="{name:'film',params:{key:'film'}}">Home</router-link>
                  </li>
                  <li v-else>
                    <router-link :to="{name:'film',params:{key:'film'}}">Home</router-link>
                  </li>
                  <li v-if="isLogin=='true'&&position=='film_manage'" class="active">
                    <router-link :to="{name: 'film_manage',params:{key:'film_manage'}}">Films Manage<span class="sr-only">(current)</span>
                    </router-link>
                  </li>
                  <li v-if="isLogin=='true'&&position!='film_manage'">
                    <router-link :to="{name: 'film_manage',params:{key:'film_manage'}}">Films Manage<span class="sr-only">(current)</span>
                    </router-link>
                  </li>
                  <li v-if="isLogin=='true'&&position=='screen_manage'" class="active"><router-link :to="{name: 'screen_manage',params:{key:'screen_manage'}}">Screenings Manage</router-link></li>
                  <li v-if="isLogin=='true'&&position!='screen_manage'"><router-link :to="{name: 'screen_manage',params:{key:'screen_manage'}}">Screenings Manage</router-link></li>
                  <li v-if="isLogin=='true'&&position=='orders'" class="active"><router-link :to="{name: 'orders',params:{key:'orders'}}">Orders Manage</router-link></li>
                  <li v-if="isLogin=='true'&&position!='orders'"><router-link :to="{name: 'orders',params:{key:'orders'}}">Orders Manage</router-link></li>

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
        isLogin:'false'
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
      },
      logout(){
        localStorage.setItem('isLogin',false)
        this.isLogin = 'false'
        this.$router.push({
          path:'/'
        })
      }

    },
    mounted: function () {
      if (this.$route.params.key != null) {
        this.position = this.$route.params.key
      }
      this.isLogin = localStorage.getItem('isLogin')
      console.log(this.isLogin)
    }

  }
</script>

<style scoped>

</style>
