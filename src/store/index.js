import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import number from './number';

export default new Vuex.Store({
  modules: {
    number,
  }
});
