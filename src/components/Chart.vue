<template>
  <div class="container chart my-5">
    <div class="row">
      <apexchart
        class="col-8"
        type="bar"
        height="350"
        :options="barChartOptions"
        :series="barSeries"
      ></apexchart>
      <apexchart
        class="col-4"
        type="polarArea"
        height="350"
        :options="pieChartOptions"
        :series="pieSeries"
      ></apexchart>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "apexcharts";
export default {
  components: {
    VueApexCharts,
  },
  props: ["bar_new_data", "bar_old_data", "bar_name", "pie_data", "pie_labels"],
  mounted() {
    console.log(this.barSeries);
  },
  data() {
    return {
      pieSeries: this.pie_data,
      barSeries: [
        {
          name: "Old " + this.bar_name,
          data: this.bar_old_data,
        },
        {
          name: "New " + this.bar_name,
          data: this.bar_new_data,
        },
      ],
      barChartOptions: {
        chart: {
          height: 350,
          type: "bar",
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
          width: 1,
          colors: ["transparent"],
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
        },
        title: {
          text: "Last Two Weeks",
          align: "left",
          style: {
            fontSize: "16px",
            color: "#374258",
          },
        },
        fill: {
          opacity: 1,
        },
        colors: ["#374258", "#f74464"],
        yaxis: {
          min: 0,
          max: 10,
        },
      },
      pieChartOptions: {
        labels: this.pie_labels,
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
          opacity: 1,
        },
        title: {
          text: "Most Crowded",
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