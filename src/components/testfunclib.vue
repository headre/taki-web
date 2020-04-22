<template>
  <div>
    {{content}}
  </div>
</template>

<script>
  export default {
    name: 'testfunclib',
    data(){
      return{
        func2(){
          let _this = this
          return _this.$axios.get('/api/movies').then((response) => {
            console.log(response.data)
            return response.data
          }).catch((error) => {
            console.log(error)
          })

        },
        content:'content'
      }
    },
    methods:{
      func1(){
        let _this = this
        return _this.$axios.get('/api/movies').then((response) => {
          console.log(response.data)
          return response.data
        }).catch((error) => {
          console.log(error)
        })
      },
    },
    mounted () {
      this.func2().then(res=>{this.content=res})
    }
  }
</script>

<style scoped>

</style>
