<template>
  <div class="c-chart__container">
    <div class="error-alert" v-if="axiosError">{{axiosError}}</div>
    <v-chart ref="chart" :option="chartOptions" />
  </div>
</template>

<script>
import moment from "moment";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  VisualMapComponent,
} from "echarts/components";
import VChart from "vue-echarts";

use([
  CanvasRenderer,
  LineChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  VisualMapComponent,
]);

export default {
  name: "PerformanceChartComponent",
  props: ['chartData','axiosError'],
  components: {
    VChart,
  },

  data() {
    return {

    };
  },

  computed: {
    initOptions() {
      return {
        width: "auto",
        height: "300px",
      };
    },

    chartOptions() {
      return {
        title: {
          text: "Team Performance Index",
          left: "center",
        },
        tooltip: {
          trigger: 'axis',
          transitionDuration: 0,
          confine: false,
          hideDelay: 0,
          // padding: 3,
          backgroundColor : "#333",
          borderColor: "#333",
          className: "echarts-tooltip",
          textStyle: {
            color: "#FFF"
          },
          valueFormatter: (value) => 'Team performance index: ' + value+'%'
        },
        visualMap: [{
          show: true,
          top:'20%',
          right: '0',
          type: 'piecewise',
          splitNumber: 3,
          pieces: [
            {min:0, max:50, color: 'red'},
            {min:50, max:80, color: 'yellow'},
            {min:80, max:100, color: 'green'}
          ]
          
         
        },
        ],
        grid: {
          left: "30px",
          right: "12px",
          bottom: "2px",
          top: "6px",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          showGrid: false,
          data: this.xAxisData,
          axisLine: {
            show: true,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            fontSize: 11,
          },
        },
        yAxis: {
          axisLabel: { show: true },
          axisTick: { show: true },
          splitLine: { show: true },
        },
        series: [
          {
            data: this.yAxisData,
            type: "line",
            symbol: "circle",
            symbolSize: 2,
            cursor: "default",
            lineStyle: {
              width: 2,
            },
           
          },
        ],
      };
    },

    xAxisData() {
      return this.chartData.map((item) => this.formatDate(item.date_ms));
    },

    yAxisData() {
      return this.chartData.map((item) => +item.performance * 100);
    },
  },

  methods: {
    formatDate(dateInMs) {
      return moment(dateInMs).format("DD MMM YYYY");
    },
  },
};
</script>
<style lang="scss">
.error-alert {
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: #ff000038;
  border-radius: 5px;
  padding: 5px 10px;

  font-size: 14px;
}
</style>