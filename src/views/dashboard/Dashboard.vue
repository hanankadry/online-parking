<template>
  <div class="container-fluid background">
    <nav class="px-5 pt-5">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/dashboard">Dashboard</a></li>
      </ol>
      <p class="date">Fri - Mar, 3rd. 2022</p>
    </nav>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-4">
          <div class="card-counter">
            <div class="icon-bg">
              <i class="bi bi-card-checklist lg-icon"></i>
            </div>
            <p class="count-numbers">12</p>
            <p class="count-name">New Reservations</p>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card-counter">
            <div class="icon-bg">
              <i class="bi bi-check-lg lg-icon"></i>
            </div>
            <p class="count-numbers">4</p>
            <p class="count-name">Available Slots</p>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card-counter">
            <div class="icon-bg">
              <i class="bi bi-x lg-icon"></i>
            </div>
            <p class="count-numbers">0</p>
            <p class="count-name">Out of Order Slots</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container chart my-5">
      <apexchart
        type="line"
        height="350"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "apexcharts";
export default {
  components: {
    apexcharts: VueApexCharts,
  },
  data() {
    return {
      series: [
        {
          name: "Sales",
          data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "line",
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
          width: 5,
          curve: "smooth",
        },
        xaxis: {
          type: "datetime",
          categories: [
            "1/11/2000",
            "2/11/2000",
            "3/11/2000",
            "4/11/2000",
            "5/11/2000",
            "6/11/2000",
            "7/11/2000",
            "8/11/2000",
            "9/11/2000",
            "10/11/2000",
            "11/11/2000",
            "12/11/2000",
            "1/11/2001",
            "2/11/2001",
            "3/11/2001",
            "4/11/2001",
            "5/11/2001",
            "6/11/2001",
          ],
          tickAmount: 10,
          labels: {
            formatter: function (value, timestamp, opts) {
              return opts.dateFormatter(new Date(timestamp), "dd MMM");
            },
          },
        },
        responsive: [
          {
            breakpoint: 960,
            options: {},
          },
        ],
        title: {
          text: "This Week",
          align: "left",
          style: {
            fontSize: "16px",
            color: "#374258",
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            gradientToColors: ["#374258"],
            shadeIntensity: 1,
            type: "horizontal",
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100, 100, 100],
          },
        },
        yaxis: {
          min: -10,
          max: 40,
        },
      },
    };
  },
};
</script>

<style scoped>
nav {
  --bs-breadcrumb-divider: ">";
}

.date {
  text-align: end;
  color: #374258;
  letter-spacing: 2px;
  text-transform: capitalize;
  font-size: 16pt;
  position: relative;
}

.breadcrumb-item > a {
  text-decoration: none;
  text-transform: uppercase;
  font-size: 28pt;
  letter-spacing: 5px;
  color: #f74464;
  position: absolute;
}

.card-counter {
  margin: 10px;
  padding: 20px 10px;
  background-color: #e5e7eb;
  height: 100px;
  border-radius: 5px;
  box-shadow: 5px 10px #374258;
}

.icon-bg {
  background-color: #f74464;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
}

.lg-icon {
  left: 8.5px;
  font-size: 5em;
  color: white;
  font-size: 2rem;
  position: relative;
}

.count-numbers {
  font-size: 32px;
  text-align: end;
  color: #374258;
  margin: 0;
}

.count-name {
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 2px;
  text-align: end;
  display: block;
  font-size: 16pt;
  color: #374258;
}

.chart {
  background-color: white;
  border: 3px solid #f74464;
  padding: 25px;
  box-shadow: 5px 10px #374258;
}

@media screen and (max-width: 1140px) {
  .count-name {
    font-size: 14pt;
  }
}
@media screen and (max-width: 990px) {
  .count-name {
    font-size: 10pt;
    margin-top: 5px;
  }
}
@media screen and (max-width: 767.2px) {
  .breadcrumb-item > a {
    position: relative;
  }
  .count-name {
    font-size: 16pt;
    margin-top: 0px;
  }
}
</style>