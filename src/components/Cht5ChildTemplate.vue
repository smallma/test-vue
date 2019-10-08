<template>
  <div>
    <cht5header></cht5header>
    <router-view></router-view>
    <cht5footer></cht5footer>
  </div>
</template>

<script>
  import Vue from 'vue'

  Vue.component('cht5header', {
    template: `
      <header>Header</header>
    `
  });

  Vue.component('cht5footer', {
    template: `
      <footer>footer</footer>
    `
  });

  export default {
    name: 'Cht5ChildTemplate'
  }
</script>

<style lang="scss">

</style>
