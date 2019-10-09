<template>
  <div>
    <h1>Cht 6 - Vuex</h1>

    <div @click="handleClick">handleClick: set 0</div>
    <div @click="handleClick2">handleClick2: Click to gen random</div>
    <div @click="handleClick3">handleClick3: set 1</div>
    <div @click="handleAsynUpdate">handleAsynUpdate: Asynchronized Update Num</div>
    <div @click="asynUpdate">asynUpdate: Asynchronized Update Num</div>
    <div @click="()=> setNum2(-1)">setNum2: Click to set nagative</div>

    <br/><br/><br/>
    <div>Number: {{this.$store.state.number.num}}</div>
    <div>messageCount: {{messageCount}}</div>

    <div>num: {{ num }}</div>
    <div>messageCount2: {{messageCount2}}</div>

    <div>checkNum: {{ checkNum }}</div>
    <div>checkNum2: {{ checkNum2 }}</div>

  </div>
</template>

<script>
  import Vue from 'vue';
  import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';


  export default {
    name: 'Cht6',
    computed: {
      messageCount () {
        return this.$store.state.number.num;
      },
      checkNum () {
        return this.$store.getters['number/checkNum'];
      },
      ...mapGetters('number', [
        'checkNum2'
      ]),
      ...mapState('number', {
          num: state => state.num,
          messageCount2: state => state.num
        })
    },
    methods: {
      handleClick () {
        this.$store.dispatch('number/getNum');
      },
      handleClick2 () {
        this.$store.commit('number/setNum', Math.random());
      },
      handleClick3 () {
        this.$store.state.number.num = 1;
      },
      handleAsynUpdate () {
        this.$store.dispatch('number/asynUpdate')
      },
      ...mapActions('number', [
        'asynUpdate'
      ]),
      ...mapMutations('number', [
          'setNum2'
        ])
    }
  }
</script>

<style lang="scss" scoped>

</style>
