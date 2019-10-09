<template>
  <div>
    <h1>Cht 4 - JSX</h1>

    <createEle1></createEle1>
    <createEle2></createEle2>
    <createEle3></createEle3>

    <jsx-example></jsx-example>
  </div>
</template>



<script>
  import Vue from 'vue';


  Vue.component('createEle1', {
    render(createElement) {
      return createElement(this.tagName, 'hello world');
    },
    data () {
      return {
        tagName: 'h1'
      }
    }
  });


  Vue.component('createEle1', {
    render(createElement) {
      return createElement(this.tagName, 'hello world');
    },
    data () {
      return {
        tagName: 'h1'
      }
    }
  });

  Vue.component('createEle2', {
    render(createElement) {
      return createElement('div', [
        createElement(
          'button',
          {
            on: {
              click: () => this.counter++
            }
          },
          'Click to increase counter'
        ),
        createElement(
          'div',
          `Click counter ${this.counter}`
        ),

      ]);
    },
    data () {
      return {
        counter: 0
      }
    }
  });

  Vue.component('createEle3', {
    render () {
      return <div>
        <button onClick={this.counterHandler}>Click to increase counter</button>
        <div>Click counter {this.counter}</div>
      </div>
    },
    data () {
      return {
        counter: 0
      }
    },
    methods: {
      counterHandler () {
        this.counter++;
      }
    }
  });


  Vue.component('jsx-example', {
    render (h) {
      return <div id="foo">bar</div>
    }
  })

  export default {
    name: 'Cht4',
  }
</script>

<style lang="scss" scoped>

</style>
