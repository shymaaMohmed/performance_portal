<template>
  <div class="c-dashboard">
    <div class="c-filters__container">
      [Place filter component here]
    </div>
    <div class="c-dashboard__header">
      <performance-chart-component :chartData="chartData" :axiosError="axiosError" />
    </div>
  </div>
</template>

<script>
import PerformanceChartComponent from "../components/vue-components/performance-chart.vue";

import store from '../store'

export default {
  name: "AboutPageComponent",
  components: {
    PerformanceChartComponent,
  },

  data() {
    return {
      mess: ''
    }
  },
  computed: {
    chartData() {
      return store.getters.chartData;
    },
    axiosError() {
      return store.getters.error;
    }
  },

  mounted() {

    store.dispatch('getChartData');

  }
};
</script>
