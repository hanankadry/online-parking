<template>
  <nav-bar :id="parking_id" />
  <div class="report">
    <breadcrumb :crumbLabel="label" :crumbHref="href" />

    <div class="container-fluid">
      <div class="dropdown" >
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Find By
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item" href="#">Year</a></li>
          <li><a class="dropdown-item" href="#">Month</a></li>
          <li><a class="dropdown-item" href="#">Weekly</a></li>
        </ul>
      </div>
      <div class="mb-3">
        <label for="Input1" class="form-label">OR</label>
        <label for="Input1" class="form-label">Find by Specific day</label>
        <input type="date" class="form-control" id="Input1" />
      </div>

      <div class="col-lg">
        <div class="row">
          <div class="col-xl" v-for="card in cards" :key="card.index" >
            <statistics-card 
              :cardIcon="card.icon"
              :cardLabel="card.label"
              :cardValue="card.value"
            />
          </div>
          <chart style="width:90%;"
            :bar_old_data="bar.data"
            :bar_new_data="bar.new_data"
            :bar_name="bar.name"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "@/components/Chart.vue";
import StatisticsCard from "@/components/StatisticsCard.vue";

export default {
  components: {
    chart: Chart,
    "statistics-card": StatisticsCard,
  },
  props: ["id"],
  data() {
    return {
      parking_id: this.id,
      label: "Reports",
      href: "/reports",

      bar: {
        data: [15, 11, 12, 42, 15, 21, 20],
        new_data: [20],
        name: "Registrations",
      },
      cards: [],
    };
  },
};
</script>

<style scoped>
.btn {
  background-color: rgb(247, 68, 100);
  margin-left: 10px;
  margin-bottom: 15px;
  border-radius: 30px;
  display: inline-block;
}
.dropdown {
  display: inline-block;
  position: relative;

}
.form-label {
    margin-left: 10px;
  color: #f74464;
  font: 18pt;
  font-weight: bold;
  display: inline-block;
}
.form-control {
    margin-left: 10px;
  display: inline-block;
  width: auto;
}

</style>


