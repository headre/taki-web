
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <div class="btn-group" role="group" aria-label="...">
      <button type="button" class="btn btn-info">Left</button>
      <button type="button" class="btn btn-primary">Middle</button>
      <button type="button" class="btn btn-success">Right</button>
    </div>
    <div id="cc">cc</div>
    <h4>提示工具（Tooltip）插件 - 锚</h4>
    这是一个 <a href="#" class="tooltip-test" data-toggle="tooltip"
            title="默认的 Tooltip">
    默认的 Tooltip
  </a>.
    这是一个 <a href="#" class="tooltip-test" data-toggle="tooltip"
            data-placement="left" title="左侧的 Tooltip">
    左侧的 Tooltip
  </a>.
    这是一个 <a href="#" data-toggle="tooltip" data-placement="top"
            title="顶部的 Tooltip">
    顶部的 Tooltip
  </a>.
    这是一个 <a href="#" data-toggle="tooltip" data-placement="bottom"
            title="底部的 Tooltip">
    底部的 Tooltip
  </a>.
    这是一个 <a href="#" data-toggle="tooltip" data-placement="right"
            title="右侧的 Tooltip">
    右侧的 Tooltip
  </a>

    <br>

    <h4>提示工具（Tooltip）插件 - 按钮</h4>
    <button type="button" class="btn btn-default" data-toggle="tooltip"
            title="默认的 Tooltip">
      默认的 Tooltip
    </button>
    <button type="button" class="btn btn-default" data-toggle="tooltip"
            data-placement="left" title="左侧的 Tooltip">
      左侧的 Tooltip
    </button>
    <button type="button" class="btn btn-default" data-toggle="tooltip"
            data-placement="top" title="顶部的 Tooltip">
      顶部的 Tooltip
    </button>
    <button type="button" class="btn btn-default" data-toggle="tooltip"
            data-placement="bottom" title="底部的 Tooltip">
      底部的 Tooltip
    </button>
    <button type="button" class="btn btn-default" data-toggle="tooltip"
            data-placement="right" title="右侧的 Tooltip">
      右侧的 Tooltip
    </button>
  </div>
</template>
<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
