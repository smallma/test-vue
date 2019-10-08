
<template>
  <div>
    <positive-numbers></positive-numbers>
    <color-preview color="red" width-px="300px" height="100px"></color-preview>
    <color-preview color="blue" width-px="100px" height="100px"></color-preview>
    <price-component v-bind:price="123"></price-component>
    <price-display percentage-discount="20%"></price-display>
    <display-number :number="20"></display-number>

    <count-from-number :number.sync=numberToDisplay></count-from-number>

    <count-from-number2 :number.sync=numberToDisplay2></count-from-number2>
    <p>numberToDisplay2 number: {{ numberToDisplay2 }}</p>

    <count-from-number3 :number.sync=numberToDisplay3></count-from-number3>
    <p>numberToDisplay3 number: {{ numberToDisplay3 }}</p>

    <input-username v-model="username"></input-username>

    <custom-button>Press me!</custom-button>

    <name-slot :author="author">
      <h2 slot="header">Blog post title</h2>
      <p>Blog post content</p>

      <p>More blog</p>
    </name-slot>

    <div>
      <post-data :posts="posts">
        <template slot-scope="postProps">
          <p>post name: {{ postProps.post.name }}</p>

        </template>
      </post-data>
    </div>

    <counter-c v-on:childMethod="handleCount">
      <h2 slot="counter-fater">Father: {{clickFather}}</h2>
    </counter-c>

    <user-admin username2="AAA"></user-admin>

    <test-noprop type="submit" class="noprop-1" :num="5"></test-noprop>


    <demo-key v-for="(item, i) in colorItems" @click.native="colorItems.splice(i, 1)" :key="item">{{ item }}</demo-key>

    <demo-key2 v-for="(item, i) in colorItems2" @click.native="colorItems2.splice(i, 1)" :key="item">{{ item }}</demo-key2>
  </div>
</template>

<script>
  import Vue from 'vue';

  Vue.component('positive-numbers', {
    template: '<p>{{ positiveNumbers.length }} positive numbers</p>',
    data() {
      return {
        numbers: [2, 3, -1, 4, 10]
      }
    },
    computed: {
      positiveNumbers() {
        return this.numbers.filter((value)=> value > 0);
      }
    }
  });

  Vue.component('color-preview', {
    template: '<div class="color-preview" :style="style"></div>',
    props: ['color', 'widthPx', 'height'],
    computed: {
      style() {
        return {
          width: this.widthPx,
          height: this.height,
          backgroundColor: this.color
        };
      }
    }
  });

  Vue.component('price-component', {
    template: '<p>{{ unit }} {{ price }}</p>',
    props: {
      price: {
        type: Number,
        required: true,
        validator(val) {
          return val > 100;
        }
      },
      unit: {
        type: String,
        default: '$'
      }
    }
  });

  Vue.component('price-display', {
    template: '<p>{{percentageDiscount}}</p>',
    props: {
      percentageDiscount: String
    }
  });

  Vue.component('display-number', {
    template: '<p>The Number is {{number}}</p>',
    props: {
      number: {
        type: Number,
        required: true
      }
    }
  });

  Vue.component('count-from-number', {
    template: '<p>The number is {{ number }}</p>',
    props: {
      number: {
        type: Number,
        required: true
      }
    },
    mounted() {
      setInterval(() => {
        this.$emit('update:number', this.number + 1)
      }, 1000);
    }
  })


  Vue.component('count-from-number2', {
    template: '<p>The Num is {{ localNumber }}</p>',
    props: {
      number: {
        type: Number,
        required: true
      }
    },
    computed: {
      localNumber: {
        get() {
          return this.number;
        },
        set(value) {
          this.$emit('update:number', value);
        }
      }
    },
    mounted() {
      setInterval(() => {
        this.localNumber++;
      }, 1000);
    }
  })

  Vue.component('count-from-number3', {
    template: '<p>child number: {{childNum}}</p>',
    props: {
      number: {
        type: Number,
        required: true
      }
    },
    data() {
      return {
        childNum: this.number
      }
    },
    mounted() {
      setInterval(() => {
        this.childNum++;
      }, 1000);
    },
    watch: {
      childNum() {
        this.$emit('update:number', this.childNum);
      }
    }
  })

  Vue.component('input-username', {
    template: '<input type="text" :value="value" @input="handleInput"></input>',
    props: {
      value: {
        type: String,
        required: true
      }
    },
    methods: {
      handleInput(e) {
        const val = e.target.value.toLowerCase();

        if (val !== e.target.value) {
          e.target.value = val;
        }

        this.$emit('input', val)
      }
    }
  });

  Vue.component('custom-button', {
    template: '<p class="test"><slot></slot></p>'
  });

  Vue.component('name-slot', {
    template: `
      <section>
        <header>
          <slot name="header"></slot>
          <p>Post by {{ author }}</p>
        </header>

        <main>
          <slot></slot>
        </main>
      </section>
    `,
    props: {
      author: {
        type: String,
        required: true
      }
    }
  })

  Vue.component('post-data', {
    template: `
      <div class="post-c">
        <div class="posts" v-for="post in posts">
          <slot :post="post"></slot>
        </div>
      </div>

    `,
    props:{
      posts: {
        type: Array
      }
    }
  });

  Vue.component('counter-c', {
    template: `
      <button @click="handleCounter">
         <slot name="counter-fater"></slot>
      </button>
    `,
    data () {
      return {
        click: 0
      }
    },
    methods: {
      handleCounter() {
        this.click++;
        this.$emit('childMethod', this.click);
      }
    }
  });

  const events = new Vue();

  let count = 0;
  function logCount() {
    count++;
    console.log(`Count: ${count}`);
  };

  events.$on('test-event', logCount);

  setInterval(() => {
    events.$emit('test-event');
  }, 1000);

  setTimeout(() => {
    events.$off('test-event');
  }, 10000);


  // const userMixin = {
  //   methods: {
  //     getUersInfo(userId) {
  //       setTimeout(() => {
  //         console.log('this.userId: ', userId);
  //       }, 2000);

  //       return true;
  //     }
  //   },
  //   created: function () {
  //     console.log('mixin hook called');
  //   }
  // };

  import { UserMixin } from '../mixins/user.js'

  Vue.component('user-admin', {
    template: '<div>name: {{ userId }}</div>',
    mixins: [UserMixin],
    props: {
      username2: {
        type: String
      }
    },
    data() {
      return {
        userId: '123'
      }
    },
    created() {
      setTimeout(()=> {
        this.getUserInfo2();
      }, 3000);
    }
  });

  Vue.component('test-noprop', {
    template: '<button type="button" class="noprop"><slot>{{num}}</slot></button>',
    props: {
      num: {
        type: Number
      }
    }
  });

  const randomColor = () => {
    const color = `hsl(${Math.floor(Math.random() * 360)}, 75%, 85%)`;
    console.log('hsl: ', color);
    return color;
  }

  Vue.component('demoKey', {
    template: `<p :style="style"><slot></slot></p>`,
    computed: {
      style() {
        return {
          backgroundColor: randomColor()
        };
      }
    }
  });

  Vue.component('demoKey2', {
    template: `<p :style="{backgroundColor: color}"><slot></slot></p>`,
    data: () => ({
      color: randomColor()
    })
  });

  export default {
    name: 'Cht2',
    mixins: ['UserMixin'],

    data () {
      return {
        numberToDisplay: 1,
        numberToDisplay2: 0,
        numberToDisplay3: 3,
        username: 'rain',
        user: 'sssss',
        author: 'aaa',
        posts: [
          {
            name: 'abc',
            summary: 'asdddd',
            image: '122131'
          }
        ],
        clickFather: 0,
        colorItems: ['one', 'two', 'three', 'four', 'five'],
        colorItems2: ['oneone', 'twotwo', 'threethree', 'fourfour', 'fivefive']
      }
    },
    created () {
      setTimeout(() => {
        this.posts[0].name = 'dd5555';
        console.log(this.gemail);
      }, 4000);
    },
    methods: {
      handleCount(click) {
        this.clickFather = click;
      }
    }
  }


</script>

<style>

</style>
