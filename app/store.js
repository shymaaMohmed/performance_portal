import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import moment from "moment";
Vue.use(Vuex);

function formatDate(date) {
  return moment(date).format("DD MMM YYYY");
}

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
    updateChartDate(state, data) {
      if (
          formatDate(state.chartData[0].date_ms) <= formatDate(data.start_date) && 
          formatDate(state.chartData[state.chartData.length - 1].date_ms) >= formatDate(data.start_date) && 
          formatDate(state.chartData[0].date_ms) <= formatDate(data.end_date) && 
          formatDate(state.chartData[state.chartData.length - 1].date_ms) >= formatDate(data.end_date)) {
        
        console.log('true');
        state.chartData = state.chartData.filter(i => {
          
          return (formatDate(i.date_ms) >= formatDate(data.start_date) && formatDate(i.date_ms) <=  formatDate(data.end_date) );
          
        })
      } else {
        console.log('false');
        alert('No data in this range')
      }
    }
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
