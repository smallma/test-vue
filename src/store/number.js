const number = {
  namespaced: true,
  state: {
    num: 0,
    num2: 10
  },
  mutations: {
    // synchronize
    setNum(state, num) {
      state.num = num;
    },
    setNum2(state, num) {
      state.num = num;
    }
  },
  actions: {
    // asynchronize
    getNum({ commit }) {
      commit('setNum', this.state.num = 0)
    },
    getNum2({ commit }) {
      commit('setNum', Math.random())
    },
    asynUpdate({ commit }) {
      setTimeout(() => {
        commit('setNum2', 100);
      }, 3000);
    }
  },
  getters: {
    checkNum: (state) => {
      let result = '= 0';
      if (state.num > 0) {
        result = '> 0';
      } else if (state.num < 0) {
        result = '< 0';
      }

      return result;
    },
    checkNum2: (state) => {
      let result = '= 0';
      if (state.num > 0) {
        result = '> 0';
      } else if (state.num < 0) {
        result = '< 0';
      }

      return result;
    },
  }
};

export default number;
