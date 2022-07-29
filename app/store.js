import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    chartData: [],
    error: null,
  },
  getters: {
    chartData(state) {
      return state.chartData;
    },
    error(state) {
        return state.error;
    },
  },
  mutations: {
    storeChartData(state, data) {
      state.chartData = data.data;
    },
    setErrors(state, error) {
      state.error = error;
    },
  },
  actions: {
    getChartData({ commit }) {
      axios.get('https://fe-task.getsandbox.com/performance').then((res) => {
        commit('storeChartData', res);
      }).catch((err) => {
        commit('setErrors', err.message);
      });
    },
  },
});
