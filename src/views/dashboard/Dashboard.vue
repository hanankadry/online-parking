<template>
  <nav-bar />
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

      <chart />
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
  props: ["user_email"],
  data() {
    return {
      cards: [
        {
          label: "New Registrations",
          value: "0",
          icon: "bi bi-card-checklist lg-icon",
        },
        {
          label: "Available Slots",
          value: "0",
          icon: "bi bi-check-lg lg-icon",
        },
        {
          label: "Out of Order Slots",
          value: "0",
          icon: "bi bi-x lg-icon",
        },
      ],
      parking_id: 1,
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
      length: null,
      user: {
        email: this.user_email,
        id: null,
      },
    };
  },
  // beforeMount() {
  //   this.getID();
  //   this.getParkingID();
  // },
  mounted() {
    this.showRegistrations();
    this.showSlots();
  },
  methods: {
    getParkingID() {
      axios
        .get(`/admin/${this.user.id}`)
        .then((response) => {
          this.parking_id = response.data.parking.id;
          console.log(response.data);
        })
        .catch((errors) => {
          console.log(errors.data);
        });
    },
    getID() {
      axios
        .get(`/admin/${this.user.email}`)
        .then((response) => {
          this.user.id = response.data.user.id;
          console.log(response.data);
        })
        .catch((errors) => {
          console.log(errors.data);
        });
    },
    showSlots() {
      axios
        .get(`/parkingslot/parking/${this.parking_id}`)
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
    showRegistrations() {
      axios
        .get(`/registration/parking/${this.parking_id}`)
        .then((response) => {
          this.registrationRows = response.data.registration.map((item) => ({
            ...item,
          }));
          this.length = response.data.registration.length;
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