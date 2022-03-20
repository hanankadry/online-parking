<template>
  <nav-bar />
  <div class="container-fluid background">
    <breadcrumb :crumbLabel="label" :crumbHref="href" />
    <div class="container-fluid p-3">
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
            <a href="" data-bs-toggle="modal" data-bs-target=".edit-modal">
              <i class="bi bi-pencil-square table-icon"></i>
              {{ props.row.button }}</a
            >
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
      <div class="modal-dialog modal-lg">
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
          <div class="modal-body">
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <h3>ID:</h3>
                  <p>{{ current_registration.id }}</p>
                </div>
                <div class="col-md-6">
                  <h3>Created At:</h3>
                  <p>{{ current_registration.createdAt }}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <h3>User ID:</h3>
                  <p>{{ current_registration.userId }}</p>
                </div>
                <div class="col-md-4">
                  <h3>Car ID:</h3>
                  <p>{{ current_registration.carId }}</p>
                </div>
                <div class="col-md-4">
                  <h3>Status:</h3>
                  <p>{{ current_registration.status }}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <h3>Slot Name:</h3>
                  <p>{{ current_registration.slotName }}</p>
                </div>
                <div class="col-md-4">
                  <h3>Leave Time:</h3>
                  <p>{{ current_registration.leaveTime }}</p>
                </div>
                <div class="col-md-4">
                  <h3>Check In Time:</h3>
                  <p>{{ current_registration.checkInTime }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="button-xs-unfill"
              data-bs-dismiss="modal"
              @click="infoRegistraction(this)"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Edit Modal -->
    <div
      class="modal fade edit-modal"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">
              Edit Registration
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="row form-box justify-content-center">
                <div class="row">
                  <div class="col-md-6">
                    <label for="id" class="form-label"
                      >ID: {{ current_registration.id }}</label
                    >
                  </div>
                  <div class="col-md-6">
                    <label for="createdAt" class="form-label"
                      >Created At: {{ current_registration.createdAt }}</label
                    >
                  </div>
                </div>
                <div class="row mt-5">
                  <div class="col-md-6">
                    <label for="status" class="form-label">Status</label>
                    <input
                      type="text"
                      v-model="current_registration.status"
                      class="form-control input-lg"
                      id="status"
                      required
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="slotName" class="form-label">Slot Name</label>
                    <input
                      type="text"
                      v-model="current_registration.slotName"
                      class="form-control input-lg"
                      id="slotName"
                      required
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label for="leaveTime" class="form-label">Leave Time</label>
                    <input
                      type="text"
                      v-model="current_registration.leaveTime"
                      class="form-control input-lg"
                      id="leaveTime"
                      required
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="checkIn" class="form-label"
                      >Check In Time</label
                    >
                    <input
                      type="text"
                      v-model="current_registration.checkInTime"
                      class="form-control input-lg"
                      id="checkIn"
                      required
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="button-xs-unfill"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              class="button-xs-fill"
              data-bs-dismiss="modal"
              @click="updateRegistration(this)"
            >
              Update
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
          <div class="modal-body">
            Are you sure you want to delete {{ current_registration.id }}?
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="button-xs-unfill"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              data-bs-dismiss="modal"
              @click="deleteRegistration(this)"
              class="button-xs-danger"
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
    infoRegistration(index) {
      console.log("registration info");
    },
    updateRegistration(index) {
      console.log("registration updated");
    },
    deleteRegistration(index) {
      console.log("registration deleted");
    },
  },
  data() {
    return {
      current_registration: {
        id: 0,
        userId: 1,
        carId: 1,
        status: "",
        slotName: "",
        leaveTime: 0,
        checkInTime: "",
        createdAt: "",
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
          label: "User Car ID",
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
          leaveTime: "2:00",
          status: "pending",
          createdAt: "2020-12-03",
        },
        {
          id: 2,
          slotName: "A3",
          userCar: "rex1234",
          leaveTime: "7:00",
          status: "checked in",
          createdAt: "2019-02-03",
        },
        {
          id: 3,
          slotName: "A3",
          userCar: "rex1234",
          leaveTime: "12:00",
          status: "missed",
          createdAt: "2009-12-13",
        },
      ],
    };
  },
};
</script>

<style scoped>
.modal-content {
  background-color: #374258;
}

.modal-content > .modal-header,
.btn-close {
  color: #f74464;
  text-transform: uppercase;
  text-align: center;
}

.modal-content > .modal-body {
  background-color: white;
}

.input-lg {
  border-radius: 95px;
  height: 50px;
  background-color: #374258;
  color: white;
  border: none;
}

.form-label {
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: normal;
  font-size: 16pt;
  margin-bottom: 0px;
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