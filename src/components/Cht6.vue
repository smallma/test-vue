<template>
  <div>
    <div>Number {{this.$store.state.num}}</div>

    <div @click="handleClick">Click to get count</div>
    <div @click="handleClick2">Click to gen count</div>
    <div @click="handleClick3">Click to gen count</div>
    <div>messageCount: {{messageCount}}</div>

    <div> MapState </div>
    <div>{{ num }}</div>
    <div>messageCount: {{messageCount2}}</div>

    <div>{{ checkNum }}</div>
    <div>{{ checkNum2 }}</div>
    <div @click="()=> setNum2(-1)">Click to add</div>
    <div @click="handleAsynUpdate">Asynchronized Update Num</div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { mapState, mapGetters, mapMutations } from 'vuex';


  export default {
    name: 'Cht6',
    computed: {
      messageCount () {
        return this.$store.state.num;
      },
      checkNum () {
        return this.$store.getters.checkNum;
      },
      ...mapGetters([
        'checkNum2'
      ]),
      ...mapState({
          num: 'num',
          messageCount2: (state) => state.num
        })
    },
    methods: {
      handleClick () {
        this.$store.dispatch('getNum');
      },
      handleClick2 () {
        this.$store.commit('setNum', Math.random());
      },
      handleClick3 () {
        this.$store.state.num = 1;
      },
      handleAsynUpdate () {
        this.$store.dispatch('asynUpdate')
      },
      ...mapMutations([
          'setNum2'
        ])
    }
  }
</script>

<style lang="scss" scoped>

</style>
