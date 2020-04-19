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

    components: {
      Calendar
    },
    methods: {
      clickDay (data) {
        console.log(data) //选中某天
      },
      changeDate (data) {
        console.log(data) //左右点击切换月份
      },
      clickToday (data) {
        console.log(data) // 跳到了本月
      }
    }

  }
</script>
<style scoped>

</style>
