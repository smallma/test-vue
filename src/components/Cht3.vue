<template>
  <div>
    <div v-bind:class="[firstClass, secondClass]"></div>
    <div v-bind:class="classes"></div>

    <div v-bind:style="{width: '100px', height: '100px', backgroundColor: 'red'}"></div>

    <div v-for="n in 12" class="color" :style="{width: '100px', height: '20px',backgroundColor: getColor(n)}"></div>

    <div v-bind:style="[firstStyle, secondStyle]"></div>

    <div v-bind:style="{display: ['-webkit-box', '-ms-flexbox', 'flex']}"></div>

    <div class="vueLoadClass">The Vuew Load Class</div>
    <div :class="$style.number">The Vue style module</div>
    <div class="scss_class">
      <div class="item">AAA</div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Cht3',
    data() {
      return {
        firstClass: 'aaa',
        isShowBar: true,
        firstStyle: {
          width: '100px',
          backgroundColor: 'blue'
        },
        secondStyle: {
          height: '100px',
          backgroundColor: 'green'
        }
      }
    },
    computed: {
      secondClass() {
        return 'bbb'
      },
      classes() {
        return {
          foo: true,
          bar: this.isShowBar,
          hello: false
        }
      }
    },
    methods: {
      getColor(n) {
        return `hsl(${(n-1)*30}, 100%, 75%)`;
      }
    }
  }
</script>

<style scoped>
.vueLoadClass {
  color: black;
}

</style>

<style module>
.number {
  color: red;
}
</style>



<style lang="scss">
.scss_class {
  .item {
    color: blue;
  }
}
</style>
