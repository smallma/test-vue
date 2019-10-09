

<template>
  <div>
    <h1>Cht 1 - Introduction</h1>
    <p v-if="isMorning">Good Morning</p>
    <p v-if="isAfternoon">Good Afternoon</p>

    <li v-for="(rent, city) in averageRent">{{ city }} - {{ rent }}</li>
    <div v-for="i in 10">
      {{ i }}
    </div>

    <button :disabled="buttonDisable">Test Button</button>

    <div>{{ second }}</div>

    <input v-model="inputText" type="text" />
    <p>inputText: {{ inputText }}</p>

    <label><input type="radio" v-model="radioValue" value="one">One</label>
    <label><input type="radio" v-model="radioValue" value="two">two</label>
    <label><input type="radio" v-model="radioValue" value="three">three</label>
    <p>{{ radioValue }}</p>
    <div v-html="vhtml"></div>
    <div>test Methods {{ statusFromId(2) }}</div>
    <div v-for="item in getPositiveNum()" >test positive {{ item  }}</div>
    <div>{{ numberTotal }}</div>

    <input v-model="inputVal" type="text" />
    <p>Prev Input Value: {{ oldInputVal }}</p>

    <div>Cost {{ money1 | formatCost('$') }}</div>
    <div>Cost {{ money2 | formatCost('羊') }}</div>

    <input v-bind:value="productVal | formatCost('$')" type="text" />
    <canvas ref="canvasClass"></canvas>

    <button v-on:click="increaseCounter">Click to increase</button>
    <button @click="increaseCounter">Click to increase</button>
    <p>Button click: {{counter}}</p>

    <form @keyup="handleKeyUp">
      <input type="text"></input>
    </form>

    <form @keyup.27="handleKeyUp">
      keyup code: 27 <input type="text"></input>
    </form>

    <form @keyup.27="handleKeyUp">
      ESC keyup <input type="text"></input>
    </form>


    <p v-blink>Blind</p>
    <p v-blink2>Blind 2</p>
    <p v-blink3="intervalTime">Blind 3</p>

    <div @click="textVisible = !textVisible">Click to toggle text</div>
    <transition name="fade">
      <div v-if="textVisible">Text Visible</div>
    </transition>

    <transition
      v-on:before-enter="handleBeforeEnter",
      v-on:enter="handleEnter",
      v-on:leave="handleLeave">
      <div v-if="textVisible">Text Visible</div>
    </transition>
  </div>
</template>

<script>
import Vue from 'vue';

var hours = new Date().getHours();

// registry Vue.directive
Vue.directive('blink', {
  bind(el) {
    let isVisible = true;

    setInterval(() => {
      isVisible = !isVisible;

      el.style.visibility = isVisible ? 'visible' : 'hidden';
    }, 1000);
  }
});

// bind or update calling
Vue.directive('blink2', (el) => {
  let isVisible = true;

  setInterval(() => {
    isVisible = !isVisible;

    el.style.visibility = isVisible ? 'visible' : 'hidden';
  }, 1000);
});

Vue.directive('blink3', {
  bind(el, binding) {
    let isVisible = true;

    console.log('binding: ', binding);

    setInterval(() => {
      isVisible = !isVisible;

      el.style.visibility = isVisible ? 'visible' : 'hidden';
    }, binding.value || 1000);
  }
});

export default {
  name: 'Cht1',
  data () {
    return {
      isMorning: hours < 12,
      isAfternoon: hours > 12,
      dogs: [1, 2, 3, 4, 'a'],
      averageRent: {
        london: 111,
        scL: 123
      },
      buttonType: 'submit',
      buttonDisable: true,
      second: 3,
      inputText: 'init',
      radioValue: 'one',
      vhtml: '<div class="v1">123131</div>',
      nativeList: [-1, 0, 3, -5, 4, -2],
      nums: [1, 3, 5],
      inputVal: '',
      oldInputVal: '',
      money1: 990,
      money2: 1200,
      productVal: 1000,
      counter: 0,
      intervalTime: 3000,
      textVisible: true
    }
  },
  created () {
    setInterval(() => {
      this.second = this.second + 1;
      this.buttonDisable = !this.buttonDisable;

      this.numberTotal2 += this.second;
    }, 1000);

    console.log('refs: ', this.$refs);
    console.log(Vue.directive);
  },
  methods: {
    statusFromId (id) {
      const status = ({
        1: 'a',
        2: 'b',
        3: 'c'
      })[id];

      return status || 'unknow, id: ' + id;
    },
    getPositiveNum () {
      return this.nativeList.filter((number) => number > 0);
    },
    increaseCounter(e) {
      console.log(e);
      this.counter = this.counter + 1;
    },
    handleKeyUp(e) {
      console.log(e);
    },
    handleBeforeEnter() {
      console.log('handleBeforeEnter');
    },
    handleEnter() {
      console.log('handleEnter');
    },
    handleLeave() {
      console.log('handleLeave');
    }
  },
  computed: {
    numberTotal() {
      // console.log('nums: ', this.nums);
      setTimeout(() => {
        this.averageRent.london = 11233
      }, 3000);
      return this.nums.reduce((sum, val) => sum + val);
    },
    numberTotal2: {
      get() {
        return this.nums.reduce((sum, val) => sum + val);
      },
      set(newVal) {
        const oldValue = this.numberTotal2;
        const diff = newVal - oldValue;
        this.nums.push(diff);
      }
    }
  },
  watch: {
    inputVal() {
      const newVal = this.inputVal;

      setTimeout(() => {
        this.oldInputVal = newVal;
      }, 5000);
    },
    'nums'() {
      // console.log('nums changed');
    },
    averageRent: {
      handler(val, oldVal) {
        console.log('!!!!: ', val.london, oldVal.london);
      },
      deep: true
    },
    second(val, oldVal) {
      // console.log('second changed: ', val, oldVal);
    }
  },
  filters: {
    formatCost(val, symbol) {
      return symbol + (val/100).toFixed(2);
    }
  }
}
</script>


<style>
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }

  .fade-enter {
    opacity: 0;
  }
  .fade-leave-to {
    opacity: 0;
  }
</style>
