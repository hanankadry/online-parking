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
        <div class="col-auto">
          <button
            class="m-1 button-sm-fill"
            type="submit"
            data-bs-toggle="modal"
            data-bs-target=".add-modal"
          >
            Add Security
          </button>
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
            <span class="status-success" v-if="props.row.status == 'active'">{{
              props.row.status
            }}</span
            ><span class="status-danger" v-else>{{ props.row.status }}</span>
          </span>
          <span v-if="props.column.field == 'button'">
            <a
              href=""
              data-bs-toggle="modal"
              data-bs-target=".edit-modal"
              @click="this.current_user = props.row"
            >
              <i class="bi bi-pencil-square table-icon"></i>
              {{ props.row.button }}</a
            >
            <a
              href=""
              data-bs-toggle="modal"
              data-bs-target=".info-modal"
              @click="this.current_user = props.row"
            >
              <i class="bi bi-info-circle table-icon text-success"></i>
              {{ props.row.button }}</a
            >
            <a
              href=""
              data-bs-toggle="modal"
              data-bs-target=".activate-modal"
              @click="this.current_user = props.row"
            >
              <i class="bi bi-clock table-icon text-warning"></i>
              {{ props.row.button }}</a
            >
            <a
              href=""
              data-bs-toggle="modal"
              data-bs-target=".delete-modal"
              @click="this.current_user = props.row"
            >
              <i class="bi bi-x-lg table-icon text-danger"></i>
              {{ props.row.button }}</a
            >
          </span>
        </template>
      </vue-good-table>
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
              Edit Security Man
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
                    <i class="bi bi-person sm-icon" />
                    <label for="name" class="form-label">Name</label>
                    <input
                      type="text"
                      v-model="current_user.name"
                      class="form-control input-lg"
                      id="name"
                      required
                    />
                  </div>
                  <div class="col-md-6">
                    <i class="bi bi-envelope sm-icon" />
                    <label for="email" class="form-label">Email</label>
                    <input
                      type="email"
                      v-model="current_user.email"
                      class="form-control input-lg"
                      id="email"
                      required
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <i class="bi bi-person-lines-fill sm-icon" />
                    <label for="nationalId" class="form-label"
                      >National ID</label
                    >
                    <input
                      type="number"
                      v-model="current_user.security_id"
                      class="form-control input-lg"
                      id="nationalId"
                      required
                    />
                  </div>
                  <div class="col-md-6">
                    <i class="bi bi-gender-ambiguous sm-icon" />
                    <label for="gender" class="form-label">Gender</label>
                    <select
                      class="form-select selector-lg"
                      id="gender"
                      v-model="current_user.gender"
                      required
                    >
                      <option selected>Choose Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-12">
                    <i class="bi bi-geo-alt sm-icon" />
                    <label for="address" class="form-label">Address</label>
                    <input
                      type="text"
                      v-model="current_user.address"
                      class="form-control input-lg"
                      id="address"
                      required
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <i class="bi bi-calendar2-week sm-icon" />
                    <label for="dateOfBirth" class="form-label"
                      >Date of Birth</label
                    >
                    <input
                      type="date"
                      v-model="current_user.dob"
                      class="form-control input-lg date"
                      id="dateOfBirth"
                      required
                    />
                  </div>
                  <div class="col-md-6">
                    <i class="bi bi-clock sm-icon" />
                    <label for="workHours" class="form-label">Work Hours</label>
                    <input
                      type="text"
                      v-model="current_user.work_hours"
                      class="form-control input-lg"
                      id="workHours"
                      required
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <i class="bi bi-telephone sm-icon" />
                    <label for="phone" class="form-label">Phone</label>
                    <input
                      type="text"
                      v-model="current_user.phone"
                      class="form-control input-lg"
                      id="phone"
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
              @click="updateSecurity(current_user.id)"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Info Modal -->
    <div
      class="modal fade info-modal"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">
              More Infromation
            </h5>
          </div>
          <div class="modal-body">
            <div class="container">
              <div class="row">
                <div class="col-md-4">
                  <p>
                    <strong>Name:</strong>
                    {{ current_user.name }}
                  </p>
                </div>
                <div class="col-md-4">
                  <p>
                    <strong>Email:</strong>
                    {{ current_user.email }}
                  </p>
                </div>
                <div class="col-md-4">
                  <p>
                    <strong>National ID:</strong>
                    {{ current_user.security_id }}
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <p>
                    <strong>Gender:</strong>
                    {{ current_user.gender }}
                  </p>
                </div>
                <div class="col-md-6">
                  <p>
                    <strong>Address:</strong>
                    {{ current_user.address }}
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <p>
                    <strong>Status:</strong>
                    {{ current_user.status }}
                  </p>
                </div>
                <div class="col-md-4">
                  <p>
                    <strong>Work Hours:</strong>
                    {{ current_user.work_hours }}
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <p>
                    <strong>Phone:</strong>
                    {{ current_user.phone }}
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

    <!-- Activate Modal -->
    <div
      class="modal fade activate-modal"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">
              Disactivate Security Man
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body" v-if="status == true">
            Are you sure you want to disactivate this {{ current_user.name }}?
          </div>
          <div class="modal-body" v-else>
            Are you sure you want to activate this {{ current_user.name }}?
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
              class="button-xs-danger"
              style="width: 6rem"
              v-if="status == true"
              data-bs-dismiss="modal"
              @click="activateSecurity(current_user.id)"
            >
              Disactivate
            </button>
            <button
              type="button"
              class="button-xs-success"
              v-else
              data-bs-dismiss="modal"
              @click="activateSecurity(current_user.id)"
            >
              Activate
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
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">
              Delete Security Man
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            Are you sure you want to delete {{ current_user.name }}?
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
              @click="deleteSecurity(current_user.id)"
              class="button-xs-danger"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Add Modal -->
    <div
      class="modal fade add-modal"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add Security Man</h5>
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
                    <i class="bi bi-person sm-icon" />
                    <label for="name" class="form-label">Name</label>
                    <input
                      type="text"
                      v-model="new_user.name"
                      class="form-control input-lg"
                      id="name"
                      required
                    />
                  </div>
                  <div class="col-md-6">
                    <i class="bi bi-envelope sm-icon" />
                    <label for="email" class="form-label">Email</label>
                    <input
                      type="email"
                      v-model="new_user.email"
                      class="form-control input-lg"
                      id="email"
                      required
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <i class="bi bi-person-lines-fill sm-icon" />
                    <label for="nationalId" class="form-label"
                      >National ID</label
                    >
                    <input
                      type="number"
                      v-model="new_user.security_id"
                      class="form-control input-lg"
                      id="nationalId"
                      required
                    />
                  </div>
                  <div class="col-md-6">
                    <i class="bi bi-gender-ambiguous sm-icon" />
                    <label for="gender" class="form-label">Gender</label>
                    <select
                      class="form-select selector-lg"
                      id="gender"
                      v-model="new_user.gender"
                      required
                    >
                      <option selected>Choose Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-12">
                    <i class="bi bi-geo-alt sm-icon" />
                    <label for="address" class="form-label">Address</label>
                    <input
                      type="text"
                      v-model="new_user.address"
                      class="form-control input-lg"
                      id="address"
                      required
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <i class="bi bi-calendar2-week sm-icon" />
                    <label for="dateOfBirth" class="form-label"
                      >Date of Birth</label
                    >
                    <input
                      type="date"
                      v-model="new_user.dob"
                      class="form-control input-lg date"
                      id="dateOfBirth"
                      required
                    />
                  </div>
                  <div class="col-md-6">
                    <i class="bi bi-clock sm-icon" />
                    <label for="workHours" class="form-label">Work Hours</label>
                    <input
                      type="text"
                      v-model="new_user.work_hours"
                      class="form-control input-lg"
                      id="workHours"
                      required
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <i class="bi bi-telephone sm-icon" />
                    <label for="phone" class="form-label">Phone</label>
                    <input
                      type="text"
                      v-model="new_user.phone"
                      class="form-control input-lg"
                      id="phone"
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
              data-bs-dismiss="modal"
              @click="addSecurity"
              class="button-xs-fill"
            >
              Add
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
  mounted() {
    this.show();
  },
  methods: {
    show() {
      axios
        .get(`/security/${this.parking_id}`)
        .then((response) => {
          this.rows = response.data.parking.map((item) => ({
            ...item,
          }));
          console.log(response.data);
        })
        .catch((errors) => {
          console.log(errors.data);
        });
    },
    addSecurity() {
      console.log(this.new_user);
    },
    updateSecurity(id) {
      axios
        .post(`/security/update/${id}`, {
          id: this.current_user.security_id,
          name: this.current_user.name,
          email: this.current_user.email,
          address: this.current_user.address,
          gender: this.current_user.gender,
          dob: this.current_user.dob,
          phone: this.current_user.phone,
          status: this.current_user.status,
          work_hours: this.current_user.work_hours,
          date: this.current_user.date,
        })
        .then((response) => {
          console.log(response.data);
          this.show();
        })
        .catch((errors) => {
          console.log(errors.data);
        });
      console.log("updated");
    },
    activateSecurity(id) {
      axios
        .post(`/security/${id}`, {
          status: this.current_user.status,
        })
        .then((response) => {
          if (this.status == true) {
            this.status = false;
            console.log("disactivated");
          } else {
            this.status = true;
            console.log("activated");
          }
          console.log(response.data);
        })
        .catch((errors) => {
          console.log(errors.data);
        });
    },
    deleteSecurity(id) {
      axios
        .delete(`/security/delete/${id}`)
        .then((response) => {
          console.log("Security Man has been deleted successfully");
          this.show();
        })
        .catch((errors) => {
          console.log(errors);
        });
    },
  },
  data() {
    return {
      parking_id: 1,
      current_user: {
        id: "",
        name: "",
        security_id: "",
        email: "",
        address: "",
        gender: "",
        phone: "",
        dob: "",
        date: "",
        work_hours: "",
        status: "",
      },
      new_user: {
        id: "",
        name: "",
        security_id: "",
        email: "",
        address: "",
        gender: "",
        phone: "",
        dob: "",
        date: "",
        work_hours: "",
        status: "",
      },
      status: true,
      searchInput: "",
      label: "Security Men",
      href: "/securityMen",
      columns: [
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
          label: "Work Hours",
          field: "work_hours",
          sortable: false,
        },
        {
          label: "Date of Employment",
          field: "date",
          sortable: false,
          dateInputFormat: "yyyy-MM-dd",
          dateOutputFormat: "MMM do yyyy",
        },
        {
          label: "Status",
          field: "status",
          sortable: false,
          width: "150px",
        },
        {
          label: "Action",
          field: "button",
          sortable: false,
          width: "200px",
        },
      ],
      rows: [],
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

.icon {
  padding-left: 20px;
  padding-top: 10px;
  font-size: 14pt;
}

span > a {
  text-decoration: none;
}

.form-label {
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: normal;
  font-size: 16pt;
  margin-bottom: 0px;
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
  border: 2px solid #374258;
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
  background-position: calc(100% - 25px) calc(0.6em + 0.5px),
    calc(100% - 19.8px) calc(0.6em + 5px);
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