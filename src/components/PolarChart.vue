<template>
  <div class="container chart my-5">
    <apexchart
      type="polarArea"
      height="350"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
import VueApexCharts from "apexcharts";
export default {
  components: {
    VueApexCharts,
  },
  data() {
    return {
      series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
      chartOptions: {
        chart: {
          height: 350,
          type: "polarArea",
          toolbar: {
            tools: {
              download: true,
              selection: false,
              zoom: false,
              zoomin: false,
              zoomout: false,
              pan: false,
              reset: false | '<img src="/static/icons/reset.png" width="20">',
            },
          },
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        dataLabels: {
          enabled: false,
        },
        fill: {
          opacity: 0.8,
        },
        title: {
          text: "Most Registered",
          align: "left",
          style: {
            fontSize: "16px",
            color: "#374258",
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
.chart {
  background-color: white;
  border: 3px solid #f74464;
  padding: 25px;
  box-shadow: 5px 10px #374258;
}
</style>