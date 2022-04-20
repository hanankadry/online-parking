<template>
  <nav-bar :id="parking_id" />
  <div class="container-fluid background">
    <breadcrumb :crumbLabel="label" :crumbHref="href" />
    <div class="container-fluid">
      <div class="row">
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
        :pie_data="pie.data"
        :pie_labels="pie.labels"
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
        name: "Registrations",
      },
      pie: {
        data: [14, 23, 21, 17, 15, 10, 12, 17, 21],
        labels: [
          "8:00-9:00",
          "10:00-11:00",
          "12:00-13:00",
          "14:00-15:00",
          "16:00-17:00",
          "18:00-19:00",
          "20:00-21:00",
          "22:00-23:00",
          "24:00-00:00",
        ],
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
    };
  },
  mounted() {
    this.getStatistics(this.parking_id);
    this.getChartValues(this.parking_id);
    this.showRegistrations(this.parking_id);
    this.showSlots(this.parking_id);
  },
  methods: {
    getChartValues(id) {
      axios
        .get(`/admin/chart/${id}`)
        .then((response) => {
          this.bar.data = response.data.old_values;
          this.bar.new_data = response.data.new_values;

          console.log(response.data);
          console.log(this.bar.data);
          console.log(this.bar.new_data);
        })
        .catch((errors) => {
          console.log(errors.data);
        });
    },
    getStatistics(id) {
      const labels = ["Registrations", "Available Slots", "Out of Order Slots"];
      const icons = [
        "bi bi-card-checklist lg-icon",
        "bi bi-check-lg lg-icon",
        "bi bi-x lg-icon",
      ];
      const values = [];
      axios
        .get(`/admin/dashboard/${id}`)
        .then((response) => {
          const posts = response.data;
          console.log(posts);
          values.push(
            posts.registrations.length,
            posts.available_slots.length,
            posts.out_slots.length
          );
          for (let i = 0; i < 3; i++) {
            this.cards.push({
              label: labels[i],
              value: values[i],
              icon: icons[i],
            });
          }
          console.log(this.cards);
        })
        .catch((errors) => {
          console.log(errors.data);
        });
    },
    getParkingID() {
      axios
        .get(`/parking/${this.user.id}`)
        .then((response) => {
          response.data.parking.map((item) => {
            this.parking_id = item.id;
          });
          console.log(response.data);
          this.getStatistics(this.parking_id);
          this.showRegistrations(this.parking_id);
          this.showSlots(this.parking_id);
        })
        .catch((errors) => {
          console.log(errors.data);
        });
    },
    showSlots(id) {
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
    showRegistrations(id) {
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