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
              id="btn-update-close"
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
                <div class="row">
                  <div class="col-md-6">
                    <i class="bi bi-clock sm-icon" />
                    <label for="workHours" class="form-label">Work Hours</label>
                    <input
                      type="text"
                      v-model="current_user.work_hours"
                      class="form-control col-3 input-lg"
                      id="from"
                      required
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="button-xs-unfill">Cancel</button>
            <button
              type="button"
              class="button-xs-fill"
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
                <div class="col-md-6">
                  <p>
                    <strong>Created At:</strong>
                    {{ current_user.created_at }}
                  </p>
                </div>
                <div class="col-md-6">
                  <p>
                    <strong>ID:</strong>
                    {{ current_user.id }}
                  </p>
                </div>
              </div>
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
              id="btn-activate-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body" v-if="current_user.status == 'active'">
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
              v-if="current_user.status == 'active'"
              @click="activateSecurity(current_user.id)"
            >
              Disactivate
            </button>
            <button
              type="button"
              class="button-xs-success"
              v-else
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
              id="btn-delete-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            Are you sure you want to delete {{ current_user.name }}?
          </div>
          <div class="modal-footer">
            <button type="button" class="button-xs-unfill">Cancel</button>
            <button
              type="button"
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
              id="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="error-box">
              <ul>
                <li v-if="v$.new_user.name.$error">
                  {{ v$.new_user.name.$errors[0].$message }}
                </li>
                <li v-if="v$.new_user.security_id.$error">
                  {{ v$.new_user.security_id.$errors[0].$message }}
                </li>
                <li v-if="v$.new_user.email.$error">
                  {{ v$.new_user.email.$errors[0].$message }}
                </li>
                <li v-if="v$.new_user.address.$error">
                  {{ v$.new_user.address.$errors[0].$message }}
                </li>
                <li v-if="v$.new_user.gender.$error">
                  {{ v$.new_user.gender.$errors[0].$message }}
                </li>
                <li v-if="v$.new_user.phone.$error">
                  {{ v$.new_user.phone.$errors[0].$message }}
                </li>
                <li v-if="v$.new_user.dob.$error">
                  {{ v$.new_user.dob.$errors[0].$message }}
                </li>
                <li v-if="v$.new_user.work_hours.from.$error">
                  {{ v$.new_user.work_hours.from.$errors[0].$message }}
                </li>
                <li v-if="v$.new_user.work_hours.to.$error">
                  {{ v$.new_user.work_hours.to.$errors[0].$message }}
                </li>
                <li v-if="v$.new_user.status.$error">
                  {{ v$.new_user.status.$errors[0].$message }}
                </li>
              </ul>
            </div>
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
                      @change="getAge"
                      class="form-control input-lg date"
                      id="dateOfBirth"
                      required
                    />
                  </div>
                  <div class="col-md-6">
                    <i class="bi bi-clock sm-icon" />
                    <label for="status" class="form-label">Status</label>
                    <select
                      class="form-select selector-lg"
                      id="status"
                      v-model="new_user.status"
                      required
                    >
                      <option selected>Choose Status</option>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
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
                  <div class="col-md-6 row">
                    <div>
                      <i class="bi bi-clock sm-icon" />
                      <label for="workHours" class="form-label"
                        >Work Hours</label
                      >
                    </div>
                    <div class="col">
                      <label for="from" class="form-label">From</label>
                      <input
                        type="time"
                        v-model="new_user.work_hours.from"
                        class="form-control col-3 input-lg"
                        id="from"
                        required
                      />
                    </div>
                    <div class="col">
                      <label for="to" class="form-label">To</label>
                      <input
                        type="time"
                        v-model="new_user.work_hours.to"
                        class="form-control col-3 input-lg"
                        id="to"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="button-xs-unfill">Cancel</button>
            <button type="button" @click="create" class="button-xs-fill">
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
import useValidate from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  maxLength,
  numeric,
  helpers,
} from "@vuelidate/validators";

export default {
  data() {
    return {
      v$: useValidate(),
      parking_id: this.id,
      current_user: {
        id: "",
        name: "",
        security_id: "",
        email: "",
        address: "",
        gender: "",
        phone: "",
        dob: "",
        created_at: "",
        work_hours: "",
        status: "",
      },
      new_user: {
        name: "",
        security_id: "",
        email: "",
        address: "",
        gender: "",
        phone: "",
        dob: "",
        created_at: "",
        work_hours: {
          from: "",
          to: "",
        },
        status: "",
      },
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
          field: "created_at",
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
      thisYear: new Date().toLocaleDateString("en-us", {
        year: "numeric",
      }),
      minValue: null,
    };
  },
  props: ["id"],
  mounted() {
    this.show(this.parking_id);
  },
  validations() {
    return {
      new_user: {
        name: { required: helpers.withMessage("Name is required", required) },
        security_id: {
          required: helpers.withMessage("National ID is required", required),
          numeric: helpers.withMessage("National ID must be numeric", numeric),
          maxLength: helpers.withMessage(
            "National ID must be 14 digits long",
            maxLength(14)
          ),
          minLength: helpers.withMessage(
            "National ID must be 14 digits long",
            maxLength(14)
          ),
        },
        email: {
          required: helpers.withMessage("Email is required", required),
          email,
        },
        address: {
          required: helpers.withMessage("Address is required", required),
        },
        gender: {
          required: helpers.withMessage("Gender is required", required),
        },
        phone: {
          required: helpers.withMessage("Phone Number is required", required),
          numeric: helpers.withMessage("Phone Number must be numeric", numeric),
          maxLength: helpers.withMessage(
            "Phone Number must be 11 digits long",
            maxLength(11)
          ),
          minLength: helpers.withMessage(
            "Phone Number must be 11 digits long",
            minLength(11)
          ),
        },
        dob: {
          required: helpers.withMessage("Date of Birth is required", required),
          checkAge: helpers.withMessage(
            () => "Age must be greater than 21",
            () => this.minValue >= 21
          ),
        },
        work_hours: {
          from: {
            required: helpers.withMessage("From value is required", required),
          },
          to: {
            required: helpers.withMessage("To value is required", required),
          },
        },
        status: {
          required: helpers.withMessage("Status is required", required),
        },
      },
    };
  },
  methods: {
    getAge() {
      const year = this.new_user.dob.split("-", 1);
      this.minValue = this.thisYear - year;
      return this.minValue;
    },
    makeToast(msg, type) {
      this.$toast.show(msg, { type: type });
    },
    show(id) {
      axios
        .get(`/security/${id}`)
        .then((response) => {
          this.rows = response.data.security.map((item) => ({
            ...item,
          }));
          console.log(response.data);
        })
        .catch((errors) => {
          console.log(errors.data);
        });
    },
    create() {
      this.v$.$validate();
      if (!this.v$.$error) {
        this.addSecurity();
        const trigger = document.getElementById("btn-close");
        trigger.click();
      }
    },
    addSecurity() {
      axios
        .post(`/security/${this.parking_id}/insert`, {
          security_id: this.new_user.security_id,
          name: this.new_user.name,
          email: this.new_user.email,
          gender: this.new_user.gender,
          address: this.new_user.address,
          dob: this.new_user.dob,
          work_hours:
            this.new_user.work_hours.from + " - " + this.new_user.work_hours.to,
          phone: this.new_user.phone,
          status: this.new_user.status,
          created_at: this.new_user.created_at,
        })
        .then((response) => {
          this.makeToast("insert successful", "success");
          this.show(this.parking_id);
          console.log(response.data);
        })
        .catch((errors) => {
          this.makeToast("insert failed", "error");
          console.log(errors.data);
        });
      console.log(this.new_user);
    },
    updateSecurity(id) {
      axios
        .post(`/security/update/${id}`, {
          security_id: this.current_user.security_id,
          name: this.current_user.name,
          email: this.current_user.email,
          gender: this.current_user.gender,
          address: this.current_user.address,
          dob: this.current_user.dob,
          work_hours: this.current_user.work_hours,
          phone: this.current_user.phone,
        })
        .then((response) => {
          console.log(response.data);
          this.show(this.parking_id);
          const trigger = document.getElementById("btn-update-close");
          trigger.click();
          this.makeToast("update succesful", "success");
        })
        .catch((errors) => {
          this.makeToast("update failed", "error");
          console.log(errors.data);
        });
      console.log("updated");
    },
    activateSecurity(id) {
      if ((this.current_user.status = "active")) {
        axios
          .post(`/security/${id}`, {
            status: "inactive",
          })
          .then((response) => {
            this.show(this.parking_id);
            const trigger = document.getElementById("btn-activate-close");
            trigger.click();
            this.makeToast("status change succesful", "success");
            console.log(response.data);
          })
          .catch((errors) => {
            this.makeToast("status change failed", "error");
            console.log(errors.data);
          });
        console.log("disactivated");
      } else {
        axios
          .post(`/security/${id}`, {
            status: "active",
          })
          .then((response) => {
            this.show(this.parking_id);
            const trigger = document.getElementById("btn-activate-close");
            trigger.click();
            this.makeToast("status change succesful", "success");
            console.log(response.data);
          })
          .catch((errors) => {
            this.makeToast("status change failed", "error");
            console.log(errors.data);
          });
        console.log("activated");
      }
    },
    deleteSecurity(id) {
      axios
        .delete(`/security/delete/${id}`)
        .then((response) => {
          this.makeToast("delete successful", "success");
          console.log(response.data);
          const trigger = document.getElementById("btn-delete-close");
          trigger.click();
          this.show(this.parking_id);
        })
        .catch((errors) => {
          this.makeToast("delete failed", "error");
          console.log(errors.data);
        });
    },
  },
};
</script>
<style scoped>
.error-box {
  background-color: rgba(255, 64, 0, 0.4);
  margin: 10px;
  border-radius: 3px;
}
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
  padding-left: 2rem;
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

input[type="time"]::-webkit-calendar-picker-indicator {
  background-image: url("@/assets/images/icons8-clock-96.png");
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