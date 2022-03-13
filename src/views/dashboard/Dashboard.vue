<template>
  <div class="container-fluid background">
    <breadcrumb :crumbLabel="label" :crumbHref="href" />
    <div class="container-fluid mt-5">
      <div class="row">
        <div class="col-md-4">
          <div class="card-counter">
            <div class="icon-bg">
              <i class="bi bi-card-checklist lg-icon"></i>
            </div>
            <p class="count-numbers">12</p>
            <p class="count-name">New Registrations</p>
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

      <chart />
      <hr />
    </div>
    <div class="container-fluid">
      <div class="row g-4 mx-5">
        <div class="col-xl-8">
          <p class="label">Registrations</p>
          <vue-good-table
            :columns="registrationColumns"
            :rows="registrationRows"
            styleClass="vgt-table"
            class="table-style"
            :select-options="{
              enabled: true,
              selectOnCheckboxOnly: true,
              selectionInfoClass: 'custom-class',
              selectionText: 'rows selected',
              clearSelectionText: 'clear',
              disableSelectInfo: true,
              selectAllByGroup: true,
            }"
            ><template #table-row="props">
              <span v-if="props.column.field == 'status'">
                <span
                  class="status-success"
                  v-if="props.row.status == 'checked in'"
                  >{{ props.row.status }}</span
                >
                <span
                  class="status-danger"
                  v-else-if="props.row.status == 'missed'"
                  >{{ props.row.status }}</span
                ><span class="status-warning" v-else>{{
                  props.row.status
                }}</span>
              </span>
            </template></vue-good-table
          >
        </div>
        <div class="col-xl-4">
          <p class="label">Parking Slots</p>
          <vue-good-table
            :columns="slotColumns"
            :rows="slotRows"
            styleClass="vgt-table"
            class="table-style"
            :select-options="{
              enabled: true,
              selectOnCheckboxOnly: true,
              selectionInfoClass: 'custom-class',
              selectionText: 'rows selected',
              clearSelectionText: 'clear',
              disableSelectInfo: true,
              selectAllByGroup: true,
            }"
            ><template #table-row="props">
              <span v-if="props.column.field == 'status'">
                <span
                  class="status-success"
                  v-if="props.row.status == 'available'"
                  >{{ props.row.status }}</span
                >
                <span
                  class="status-danger"
                  v-else-if="props.row.status == 'out of order'"
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
export default {
  components: {
    Chart,
  },
  data() {
    return {
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
          field: "slotName",
          sortable: false,
        },
        {
          label: "Car Id",
          field: "carId",
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
          field: "leaveTime",
          sortable: false,
        },
        {
          label: "Check-In Time",
          field: "checkInTime",
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
          field: "slotName",
          sortable: false,
        },
        {
          label: "Status",
          field: "status",
          sortable: false,
          width: "165px",
        },
      ],
      registrationRows: [
        {
          id: 1,
          name: "John",
          slotName: "A1",
          carId: "sal1234",
          status: "checked in",
          leaveTime: "00:00",
          checkInTime: "00:00",
        },
        {
          id: 2,
          name: "Jane",
          slotName: "B24",
          carId: "sal1234",
          status: "checked in",
          leaveTime: "00:00",
          checkInTime: "00:00",
        },
        {
          id: 3,
          name: "Mike",
          slotName: "A31",
          carId: "sal1234",
          status: "missed",
          leaveTime: "00:00",
          checkInTime: "-",
        },
        {
          id: 4,
          name: "Jenna",
          slotName: "C4",
          carId: "sal1234",
          status: "pending",
          leaveTime: "00:00",
          checkInTime: "00:23",
        },
      ],
      slotRows: [
        {
          id: 1,
          slotName: "A1",
          name: "John",
          status: "available",
          time: "00:00",
        },
        {
          id: 2,
          slotName: "B24",
          name: "Jane",
          status: "available",
          time: "00:00",
        },
        {
          id: 3,
          slotName: "A31",
          name: "Mike",
          status: "out of order",
          time: "-",
        },
        {
          id: 4,
          slotName: "C4",
          name: "Jenna",
          status: "reserved",
          time: "00:23",
        },
      ],
    };
  },
};
</script>

<style scoped>
.background {
  padding: 50px;
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

.label {
  color: #f74464;
  font-size: 16pt;
  text-transform: uppercase;
  font-weight: 500;
  margin-left: 20px;
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
  .slots {
    width: 100%;
  }
}
@media screen and (max-width: 767.2px) {
  .count-name {
    font-size: 16pt;
    margin-top: 0px;
  }
}
</style>