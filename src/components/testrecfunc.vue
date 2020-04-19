<template>
    <div>
      <testfunclib ref="child"></testfunclib>
      {{data}}
    </div>
</template>

<script>
  import testfunclib from './testfunclib'
  export default {
    name: 'testrecfunc',
    data(){
      return{
        data:'data'
      }
    },
    methods:{
      receivefuc(){
        this.$refs.child.func1().then(res=>this.data=res.content)
        console.log(this.data)
      }
    },
    components:{
      testfunclib
    },
    mounted () {
      this.receivefuc()
    }
  }
</script>

<style scoped>

</style>
