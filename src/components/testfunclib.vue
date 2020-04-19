<template>

</template>

<script>
  export default {
    name: 'testfunclib',
    data(){
      return{
        content:'content'
      }
    },
    methods:{
      func1: async function (){
        let _this = this
        await _this.$axios.get('/api/movies').then((response) => {
          this.content = response.data
          console.log('success')
        }).catch((error) => {
          console.log(error)
        })
        return this.content
      }
    }
  }
</script>

<style scoped>

</style>
