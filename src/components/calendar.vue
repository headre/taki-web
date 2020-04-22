//vue文件中引入
<template>
  <Calendar
    v-on:choseDay="clickDay"
    v-on:changeMonth="changeDate"
  ></Calendar>
</template>

<script>
  import Calendar from 'vue-calendar-component'
  export default {
    name: 'calendar',
    data(){
      return{
        date:null
      }
    },
    components: {
      Calendar
    },
    methods: {
      clickDay (data) {
        this.$emit('date',data);
      },
      changeDate (data) {
      },
      clickToday (data) {
      }
    }

  }
</script>
<style scoped>

</style>
