<template>
  <div class="c-dashboard">
    <div class="c-filters__container">
      <!-- Date Filter -->
      <form @submit.prevent="handleSubmit">
        Start date: <input v-model="start_date" type="date" name="start_date" @change="validation_error = null">
        End date: <input  v-model="end_date" type="date" name="end_date" @change="validation_error = null">
        <button type="submit" class="submit-button c-button"> Submit </button>
      </form>
      <span class="error">{{validation_error}}</span>
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
      start_date: null,
      end_date: null,

      validation_error: null
    }
  },
  computed: {
    chartData() {
      return store.getters.chartData;
    },
    axiosError() {
      return store.getters.error;
    },

  },

  methods: {
    handleSubmit() {

      if (!this.start_date || !this.end_date) return this.validation_error = "Please select date range"

      var data = {
        start_date: this.start_date,
        end_date: this.end_date
      }
      store.commit('updateChartDate', data)
    }
  },

  mounted() {

    store.dispatch('getChartData');

  }
};
</script>