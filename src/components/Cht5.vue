<template>
  <div>
    <div>User {{ $route.params.username }}</div>
    <div>ID {{ $route.params.id }}</div>


    <div v-if="state === 'loading'">Loading User??</div>
    <div>Username {{this.username}}</div>
    <a href="#/cht1/">Link cht1</a>
  </div>
</template>

<script>
  export default {
    name: 'Cht5',
    data () {
      return {
        state: 'loading',
        username: undefined
      }
    },
    mounted() {
      this.init();
    },
    beforeRouteUpdate(to, from, next) {
      this.state = 'loading';
      this.init();
      next();
    },
    methods: {
      init () {
        setTimeout(()=> {
          this.username = Math.random(200);
          this.state = undefined;
        }, 3000);
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
