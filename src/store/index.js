import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    colors: ['red', 'yellow', 'green'],
    nextColor: null,
    step: 1
  },
  mutations: {
    NextColor(state, curCol) {
      const curColIndex = state.colors.findIndex(color => color === curCol);
      if (curColIndex + state.step === state.colors.length || curColIndex + state.step < 0) {
        state.step *= -1;
      }
      state.nextColor = state.colors[curColIndex + state.step];
    },
  },
  actions: {
  },
  modules: {
  }
})
