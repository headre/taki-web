<template>
  <div class="page-bar">
    <ul>
      <li v-if="cur>1"><a v-on:click="cur--,pageClick()">Previous</a></li>
      <li v-if="cur==1"><a class="banclick">Previous</a></li>
      <li v-for="index in indexs" v-bind:class="{ 'active': cur === index}">
        <a v-on:click="btnClick(index)">{{ index }}</a>
      </li>
      <li v-if="cur!=all"><a v-on:click="cur++,pageClick()">Next</a></li>
      <li v-if="cur == all"><a class="banclick">Next</a></li>
      <li><a>total:<i>{{all}}</i>pages</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'PageBar',
    data(){
      return{
        all: 6, // 总页数
        cur: 1, // 当前页码
        totalPage: 0,// 当前条数
      }
    }

  }
</script>

<style scoped>

</style>
