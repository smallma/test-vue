<template>
  <div id="app">
    <router-link class="route_link" to="/cht1">Cht1</router-link>
    <router-link class="route_link" to="/cht2" active-class="active">Cht2</router-link>
    <router-link class="route_link" to="/cht3">Cht3</router-link>
    <router-link class="route_link" to="/cht4">Cht4</router-link>
    <router-link class="route_link" to="/cht5/aaa">Cht5</router-link>
    <router-link class="route_link" @click.native="handleClick" to="/cht5/aaa/post/123">Cht5 with id</router-link>
    <router-link class="route_link" to="/settings/mail">Cht5 Child Route - Email</router-link>
    <router-link class="route_link" to="/settings/profile">Cht5 Child Route - Profile</router-link>
    <router-link class="route_link" to="/cht0" tag="li"><a>Cht0</a></router-link>

    <router-link class="route_link" :to="{name: 'grace-name'}" tag="li"><a>Cht5 Grace</a></router-link>

    <router-link class="route_link" to="/Cht6" tag="li"><a>Cht6</a></router-link>

  <router-link class="route_link" to="/Cht7" tag="li"><a>Cht7</a></router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
import router from './route/Routers';

export default {
  name: 'App',
  router: router,
  methods: {
    handleClick () {
      console.log('click');
    }
  }
}

</script>

<style lang="scss">
.route_link {
  margin: 10px;
  padding: 3px 10px;
  border: 1px solid;
}
</style>
