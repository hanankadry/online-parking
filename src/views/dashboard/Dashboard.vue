<template>
  <nav-bar :id="parking_id" />
  <div class="loading d-flex justify-content-center mt-5" v-if="loading">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <div v-else class="container-fluid background">
    <breadcrumb :crumbLabel="label" :crumbHref="href" />
    <div class="container-fluid">
      <div class="row" v-if="showCards">
        <div class="col-md-4" v-for="card in cards" :key="card.index">
          <statistics-card
            :cardIcon="card.icon"
            :cardLabel="card.label"
            :cardValue="card.value"
          />
        </div>
      </div>
      <chart
        :bar_old_data="bar.data"
        :bar_new_data="bar.new_data"
        :bar_name="bar.name"
      />

      <hr />
    </div>
    <div class="container-fluid">
      <div class="row g-4 mx-5">
        <div class="col-xl-4">
          <p class="label">Parking Slots</p>
          <vue-good-table
            :columns="slotColumns"
            :rows="slotRows"
            styleClass="vgt-table"
            class="table-style"
            ><template #table-row="props">
              <span v-if="props.column.field == 'status'">
                <span
                  class="status-success"
                  v-if="props.row.status == 'available'"
                  >{{ props.row.status }}</span
                >
                <span
                  class="status-warning"
                  v-else-if="props.row.status == 'out of order'"
                  >{{ props.row.status }}</span
                ><span class="status-danger" v-else>{{
                  props.row.status
                }}</span>
              </span>
            </template></vue-good-table
          >
        </div>
        <div class="col-xl-8">
          <p class="label">Registrations</p>
          <vue-good-table
            :columns="registrationColumns"
            :rows="registrationRows"
            styleClass="vgt-table"
            class="table-style"
            ><template #table-row="props">
              <span v-if="props.column.field == 'status'">
                <span
                  class="status-success"
                  v-if="
                    props.row.status == 'checkin' ||
                    props.row.status == 'completed'
                  "
                  >{{ props.row.status }}</span
                >
                <span
                  class="status-danger"
                  v-else-if="props.row.status == 'cancelled'"
                  >{{ props.row.status }}</span
                ><span class="status-warning" v-else>{{
                  props.row.status
                }}</span>
              </span>
            </template></vue-good-table
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "@/components/Chart.vue";
import axios from "axios";
import StatisticsCard from "@/components/StatisticsCard.vue";

export default {
  components: {
    chart: Chart,
    "statistics-card": StatisticsCard,
  },
  props: ["id"],
  data() {
    return {
      bar: {
        data: [],
        new_data: [],
        name: "Week",
      },
      cards: [],
      parking_id: this.id,
      label: "Dashboard",
      href: "/dashboard",
      search: false,
      pagination: false,
      registrationColumns: [
        {
          label: "ID",
          field: "id",
          sortable: false,
        },
        {
          label: "Name",
          field: "name",
          sortable: false,
        },
        {
          label: "Slot Name",
          field: "slot_name",
          sortable: false,
        },
        {
          label: "Car Id",
          field: "car_id",
          sortable: false,
        },
        {
          label: "Status",
          field: "status",
          sortable: false,
          width: "165px",
        },
        {
          label: "Leave Time",
          field: "leave_time",
          sortable: false,
        },
        {
          label: "Check-In Time",
          field: "checkin_time",
          sortable: false,
        },
      ],
      slotColumns: [
        {
          label: "ID",
          field: "id",
          sortable: false,
        },
        {
          label: "Slot Name",
          field: "name",
          sortable: false,
        },
        {
          label: "Status",
          field: "status",
          sortable: false,
          width: "165px",
        },
      ],
      registrationRows: [],
      slotRows: [],
      loading: true,
      error: null,
      post: null,
      showCards: false,
    };
  },
  created() {
    // watch the params of the route to fetch the data again
    this.$watch(
      () => this.$route.params,
      () => {
        this.fetchData();
      },
      // fetch the data when the view is created and the data is
      // already being observed
      { immediate: true }
    );
  },
  mounted() {
    // if (this.slotRows == []) {
    //   this.loading = true;
    // } else {
    //   this.getAll();
    // }
  },
  methods: {
    fetchData() {
      this.error = this.post = null;
      this.loading = true;
      this.getChartValues(this.$route.params.id);
      this.getRegistrations(this.$route.params.id);
      this.getSlots(this.$route.params.id);
      this.getStatistics(this.$route.params.id);
    },
    getChartValues(id) {
      axios
        .get(`/admin/chart/${id}`)
        .then((response) => {
          for (let i = 0; i < 7; i++) {
            this.bar.data.push(response.data.old_values[i]);
            this.bar.new_data.push(response.data.new_values[i]);
          }
          console.log(response.data);
          this.loading = false;
          this.parking_id = this.id;
        })
        .catch((errors) => {
          console.log(errors.data);
        });
    },
    getStatistics(id) {
      axios
        .get(`/admin/dashboard/${id}`)
        .then((response) => {
          const posts = response.data;
          console.log(posts);

          const labels = [
            "Registrations",
            "Available Slots",
            "Out of Order Slots",
          ];
          const icons = [
            "bi bi-card-checklist lg-icon",
            "bi bi-check-lg lg-icon",
            "bi bi-x lg-icon",
          ];
          const values = [];
          values.push(
            posts.registrations.length,
            posts.available_slots.length,
            posts.out_slots.length
          );
          if (this.cards != []) {
            this.cards = [];
          }
          for (let i = 0; i < 3; i++) {
            this.cards.push({
              label: labels[i],
              value: values[i],
              icon: icons[i],
            });
          }
          this.loading = false;
          this.showCards = true;
          console.log(this.cards);
        })
        .catch((errors) => {
          console.log(errors.data);
        });
    },
    getSlots(id) {
      axios
        .get(`/parkingslot/parking/${id}`)
        .then((response) => {
          this.slotRows = response.data.map((item) => ({
            ...item,
          }));
          console.log(response.data);
        })
        .catch((errors) => {
          console.log(errors.data);
        });
    },
    getRegistrations(id) {
      axios
        .get(`/registration/parking/${id}`)
        .then((response) => {
          this.registrationRows = response.data.registration.map((item) => ({
            ...item,
          }));
          console.log(response.data);
        })
        .catch((errors) => {
          console.log(errors.data);
        });
    },
  },
};
</script>

<style scoped>
.loading {
  color: #f74464;
}
.background {
  padding: 50px;
}

.label {
  color: #f74464;
  font-size: 16pt;
  text-transform: uppercase;
  font-weight: 500;
  margin-left: 20px;
}

@media screen and (max-width: 990px) {
  .slots {
    width: 100%;
  }
}
</style>