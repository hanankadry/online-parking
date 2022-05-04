<template>
  <nav-bar :id="parking_id" />
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
              v-if="
                props.row.status == 'checkin' || props.row.status == 'completed'
              "
              >{{ props.row.status }}</span
            >
            <span
              class="status-danger"
              v-else-if="props.row.status == 'cancelled'"
              >{{ props.row.status }}</span
            ><span class="status-warning" v-else>{{ props.row.status }}</span>
          </span>
          <span v-if="props.column.field == 'button'">
            <a
              href=""
              data-bs-toggle="modal"
              data-bs-target=".edit-modal"
              @click="this.current_registration = props.row"
            >
              <i class="bi bi-pencil-square table-icon"></i>
              {{ props.row.button }}</a
            >
            <a
              href=""
              data-bs-toggle="modal"
              data-bs-target=".info-modal"
              @click="this.current_registration = props.row"
            >
              <i class="bi bi-info-circle table-icon text-success"></i>
              {{ props.row.button }}</a
            >
            <a
              href=""
              data-bs-toggle="modal"
              data-bs-target=".delete-modal"
              @click="this.current_registration = props.row"
            >
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
            <h5 class="modal-title">
              Registration No. "{{ current_registration.id }}"
            </h5>
          </div>
          <div class="modal-body">
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <p>
                    <strong>Day:</strong>
                    {{ current_registration.day }}
                  </p>
                </div>
                <div class="col-md-6">
                  <p>
                    <strong>Created At:</strong>
                    {{ current_registration.date }}
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <p>
                    <strong>User ID:</strong>
                    {{ current_registration.user_id }}
                  </p>
                </div>
                <div class="col-md-4">
                  <p>
                    <strong>Car ID:</strong>
                    {{ current_registration.car_id }}
                  </p>
                </div>
                <div class="col-md-4">
                  <p>
                    <strong>Status:</strong>
                    {{ current_registration.status }}
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <p>
                    <strong>Slot Name:</strong>
                    {{ current_registration.slot_name }}
                  </p>
                </div>
                <div class="col-md-4">
                  <p>
                    <strong>Leave Time:</strong>
                    {{ current_registration.leave_time }}
                  </p>
                </div>
                <div class="col-md-4">
                  <p>
                    <strong>Check In Time:</strong>
                    {{ current_registration.checkin_time }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="button-xs-unfill"
              data-bs-dismiss="modal"
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
              Edit Registration No. "{{ current_registration.id }}"
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              id="btn-update-close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="row form-box justify-content-center">
                <div class="row">
                  <div class="col-md-6">
                    <label for="day" class="form-label"
                      >Day: {{ current_registration.day }}</label
                    >
                  </div>
                  <div class="col-md-6">
                    <label for="createdAt" class="form-label"
                      >Created At: {{ current_registration.date }}</label
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
                      v-model="current_registration.slot_name"
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
                      type="time"
                      step="2"
                      v-model="current_registration.leave_time"
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
                      type="time"
                      step="2"
                      v-model="current_registration.checkin_time"
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
              @click="cancel(current_registration)"
            >
              Cancel
            </button>
            <button
              type="button"
              class="button-xs-fill"
              @click="updateRegistration(current_registration.id)"
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
            <h5 class="modal-title">
              Delete Registration No. "{{ current_registration.id }}"
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              id="btn-delete-close"
            ></button>
          </div>
          <div class="modal-body">
            Are you sure you want to delete {{ current_registration.id }}?
          </div>
          <div class="modal-footer">
            <button type="button" class="button-xs-unfill">Cancel</button>
            <button
              type="button"
              class="button-xs-danger"
              @click="deleteRegistration(current_registration.id)"
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
import axios from "axios";

export default {
  props: ["id"],
  data() {
    return {
      parking_id: this.id,
      current_registration: {
        id: "",
        user_id: "",
        car_id: "",
        status: "",
        slot_name: "",
        leave_time: "",
        checkin_time: "",
        date: "",
        day: "",
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
          field: "slot_name",
          sortable: false,
        },
        {
          label: "User Car ID",
          field: "car_id",
          sortable: false,
        },
        {
          label: "Leave Time",
          field: "leave_time",
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
          field: "date",
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
      rows: [],
    };
  },
  mounted() {
    this.show(this.parking_id);
    // this.getParkingID();
  },
  methods: {
    cancel(registration) {
      const condition =
        (registration.slot_name ||
          registration.leave_time ||
          registration.checkin_time ||
          registration.status) != null;
      if (condition) {
        if (confirm("Are you sure you want to cancel these changes?") == true) {
          console.log("confirm");
          const trigger = document.getElementById("btn-update-close");
          trigger.click();
          this.show(this.parking_id);
        } else {
          console.log("cancel");
        }
      } else {
        const trigger = document.getElementById("btn-update-close");
        trigger.click();
      }
    },
    getParkingID() {
      axios
        .get(`/parking/${this.user_id}`)
        .then((response) => {
          response.data.parking.map((item) => {
            this.parking_id = item.id;
          });
          console.log(response.data);
        })
        .catch((errors) => {
          console.log(errors.data);
        });
    },
    makeToast(msg, type) {
      this.$toast.show(msg, { type: type });
    },
    updateRegistration(id) {
      axios
        .post(`registration/update/${id}`, {
          parking_id: this.parking_id,
          id: this.current_registration.id,
          user_id: this.current_registration.user_id,
          car_id: this.current_registration.car_id,
          status: this.current_registration.status,
          slot_name: this.current_registration.slot_name,
          leave_time: this.current_registration.leave_time,
          checkin_time: this.current_registration.checkin_time,
          date: this.current_registration.date,
          day: this.current_registration.day,
        })
        .then((response) => {
          this.makeToast("update succesful", "success");
          this.show(this.parking_id);
          const trigger = document.getElementById("btn-update-close");
          trigger.click();
          console.log(response.data);
        })
        .catch((errors) => {
          this.makeToast("update failed", "error");
          console.log(errors.data);
        });
    },
    deleteRegistration(id) {
      axios
        .post(`/registration/delete/${id}`)
        .then((response) => {
          this.makeToast("delete successful", "success");
          this.show(this.parking_id);
          const trigger = document.getElementById("btn-delete-close");
          trigger.click();
          console.log(response.data);
        })
        .catch((errors) => {
          this.makeToast("delete failed", "error");
          console.log(errors.data);
        });
    },
    show(id) {
      axios
        .get(`/registration/parking/${id}`)
        .then((response) => {
          this.rows = response.data.registration.map((item) => ({
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
  padding-left: 2rem;
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

input[type="time"]::-webkit-calendar-picker-indicator {
  background-image: url("@/assets/images/icons8-clock-96.png");
  background-position: end;
  background-size: 20px 20px, 20px 20px;
  background-repeat: no-repeat;
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