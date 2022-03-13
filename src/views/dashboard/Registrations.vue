<template>
  <div class="container-fluid background">
    <breadcrumb :crumbLabel="label" :crumbHref="href" />
    <div class="container-fluid mt-5 p-3">
      <div class="row">
        <div class="col-auto me-auto input-icons">
          <i class="bi bi-search icon" />
          <input
            type="text"
            class="m-1 input-md"
            placeholder="Search"
            v-model="searchInput"
          />
        </div>
      </div>
      <vue-good-table
        :columns="columns"
        :rows="rows"
        styleClass="vgt-table"
        class="table-style"
        :pagination-options="{
          enabled: true,
          mode: 'remote',
        }"
        :search-options="{
          enabled: false,
          externalQuery: searchInput,
        }"
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
            ><span class="status-warning" v-else>{{ props.row.status }}</span>
          </span>
          <span v-if="props.column.field == 'button'">
            <a href="" data-bs-toggle="modal" data-bs-target=".info-modal">
              <i class="bi bi-info-circle table-icon text-success"></i>
              {{ props.row.button }}</a
            >
            <a href="" data-bs-toggle="modal" data-bs-target=".delete-modal">
              <i class="bi bi-x-lg table-icon text-danger"></i>
              {{ props.row.button }}</a
            >
          </span>
        </template>
      </vue-good-table>
    </div>
    <!-- Info Modal -->
    <div
      class="modal fade info-modal"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">More Infromation</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">Name: ...</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              @click="infoRegistraction"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Delete Modal -->
    <div
      class="modal fade delete-modal"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Delete Registration</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">Are you sure you want to delete {{}}?</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              data-bs-dismiss="modal"
              @click="deleteRegistration"
              class="btn btn-danger"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    infoRegistration() {
      console.log("registration info");
    },
    deleteRegistration() {
      console.log("deleted");
    },
  },
  data() {
    return {
      registration: {
        id: 0,
        userId: 1,
        carId: 1,
        status: "",
        slotName: "",
        leaveTime: 0,
        checkinTime: "",
        createdAt: "2009-2-4",
      },
      searchInput: "",
      label: "Registrations",
      href: "/registrations",
      columns: [
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
          label: "User Car",
          field: "userCar",
          sortable: false,
        },
        {
          label: "Leave Time",
          field: "leaveTime",
          sortable: false,
        },
        {
          label: "Status",
          field: "status",
          sortable: false,
          width: "150px",
        },
        {
          label: "Created At",
          field: "createdAt",
          sortable: false,
          dateInputFormat: "yyyy-MM-dd",
          dateOutputFormat: "MMM do yyyy",
        },
        {
          label: "Action",
          field: "button",
          sortable: false,
        },
      ],
      rows: [
        {
          id: 1,
          slotName: "A1",
          userCar: "rex1234",
          leaveTime: "7:00 - 2:00",
          status: "pending",
          createdAt: "2009-12-03",
        },
        {
          id: 2,
          slotName: "A3",
          userCar: "rex1234",
          leaveTime: "7:00 - 2:00",
          status: "checked in",
          createdAt: "2009-12-03",
        },
        {
          id: 3,
          slotName: "A3",
          userCar: "rex1234",
          leaveTime: "7:00 - 2:00",
          status: "missed",
          createdAt: "2009-12-03",
        },
      ],
    };
  },
};
</script>

<style scoped>
.form-modal {
  background-color: #374258;
}

.form-modal > .modal-header,
.btn-close {
  color: #f74464;
  text-transform: uppercase;
  text-align: center;
}

.form-modal > .modal-body {
  background-color: white;
}

.input-lg {
  border-radius: 95px;
  height: 50px;
  background-color: #374258;
  color: white;
  border: none;
}

.sm-icon {
  color: #f74464;
  font-size: 1.5rem;
  padding-right: 10px;
}

.form-label {
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: normal;
  font-size: 16pt;
  margin-bottom: 0px;
}

input[type="date"]::-webkit-calendar-picker-indicator {
  background-image: url("@/assets/images/icons8-calendar-96.png");
  background-position: end;
  background-size: 20px 20px, 20px 20px;
  background-repeat: no-repeat;
}

.addon {
  background-color: #f74464;
  border-radius: 0 95px 95px 0;
  font-size: 22pt;
  padding-top: 0;
  border: none;
  width: 40px;
}

.selector-lg {
  border-radius: 95px;
  height: 50px;
  background-color: #374258;
  color: white;
  border: none;
  padding-left: 30px;
  background-image: url("@/assets/images/icons8-chevron-down-96.png");
  background-position: calc(100% - 25px) calc(1em + 0.5px),
    calc(100% - 19.8px) calc(1em + 5px);
  background-size: 30px 30px, 30px 30px;
  background-repeat: no-repeat;
}
.selector-lg > option {
  background-color: #f74464;
  color: #374258;
  border: none;
  font-weight: bold;
  padding: 10px;
}

.selector-lg > option:hover {
  background-color: white;
  color: #374258;
}

.icon {
  padding-left: 20px;
  padding-top: 10px;
  font-size: 14pt;
}

span > a {
  text-decoration: none;
}

.text-success {
  color: #02b902;
}
.text-danger {
  color: #fd1d1d;
}
.text-warning {
  color: #faaa17;
}
</style>