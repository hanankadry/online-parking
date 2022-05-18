<template>
  <nav-bar :id="parking_id" />
  <div class="report">
    <breadcrumb :crumbLabel="label" :crumbHref="href" />

    <div class="container-fluid">
      <div class="container-fluid p-3">
        <div class="row">
          <div class="ms-3 col-auto me-auto dropdown">
            <div class="row mb-2">
              <select
                class="form-select select-lg-fill col me-1"
                id="filter"
                v-model="filter"
                aria-expanded="false"
              >
                <option
                  class="dropdown-item"
                  v-for="option in options"
                  :key="option.index"
                  :value="option.value"
                >
                  {{ option.name }}
                </option>
              </select>
              <select
                class="form-select select-md-fill col"
                id="type"
                v-model="type"
                aria-expanded="false"
              >
                <option
                  class="dropdown-item"
                  v-for="option in types"
                  :key="option.index"
                  :value="option.value"
                >
                  {{ option.name }}
                </option>
              </select>
              <button
                class="button-sm-unfill mt-0 col"
                type="button"
                @click.prevent="find"
              >
                <i class="bi bi-search sm-icon" />
              </button>
            </div>
          </div>
          <div class="col-auto">
            <button
              class="button-sm-fill"
              id="hiddenBtn"
              data-bs-toggle="modal"
              data-bs-target=".custom-modal"
            >
              Custom Filter
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
        >
          <template #table-row="props">
            <span v-if="props.column.field == 'status'">
              <span
                class="status-success"
                v-if="
                  props.row.status == 'available' ||
                  props.row.status == 'checkin' ||
                  props.row.status == 'completed' ||
                  props.row.status == 'active'
                "
                >{{ props.row.status }}</span
              ><span
                class="status-danger"
                v-else-if="
                  props.row.status == 'unavailable' ||
                  props.row.status == 'cancelled' ||
                  props.row.status == 'inactive'
                "
                >{{ props.row.status }}</span
              >
              <span class="status-warning" v-else>{{ props.row.status }}</span>
            </span>
            <span v-if="props.column.field == 'button'">
              <a
                href=""
                data-bs-toggle="modal"
                data-bs-target=".info-modal"
                @click="current_row = props.row"
              >
                <i class="bi bi-info-circle table-icon text-success" />
                {{ props.row.button }}</a
              >
            </span>
          </template>
        </vue-good-table>
      </div>
      <div class="data-container offset-9">
        Total Number of Data: {{ this.rows.length }}
      </div>
      <!-- Custom Modal Start -->
      <div
        class="modal fade custom-modal"
        data-bs-keyboard="false"
        tabindex="-1"
        id="exampleModal"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">Custom</h5>
              <button
                type="button"
                id="btn-custom-close"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="row">
                  <div class="col-md-6">
                    <i class="bi bi-calendar2-week sm-icon" />
                    <label for="from" class="form-label">From</label>
                    <input
                      type="date"
                      v-model="date.from"
                      class="form-control input-lg date"
                      id="from"
                      required
                    />
                  </div>
                  <div class="col-md-6">
                    <i class="bi bi-calendar2-week sm-icon" />
                    <label for="to" class="form-label">To</label>
                    <input
                      type="date"
                      v-model="date.to"
                      class="form-control input-lg date"
                      id="to"
                      required
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <i class="bi bi-list-ol sm-icon" />
                    <label for="to" class="form-label">Type</label>
                    <select
                      class="form-select select-sm"
                      id="type"
                      v-model="customType"
                      aria-expanded="false"
                    >
                      <option
                        class="dropdown-item"
                        v-for="option in types"
                        :key="option.index"
                        :value="option.value"
                      >
                        {{ option.name }}
                      </option>
                    </select>
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
              <button type="button" class="button-xs-fill" @click="findCustom">
                Find
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
                Report No. {{ current_row.id }}
              </h5>
            </div>
            <div class="modal-body">
              <div class="container">
                <div class="row">
                  <div class="col-md-6">
                    <p>
                      <strong>Created At:</strong>
                      {{ current_row.created_at || current_row.date }}
                    </p>
                  </div>
                  <div class="col-md-6">
                    <p>
                      <strong>ID:</strong>
                      {{ current_row.id }}
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4">
                    <p>
                      <strong>Name:</strong>
                      {{ current_row.name || current_row.slot_name }}
                    </p>
                  </div>
                  <div class="col-md-4">
                    <p>
                      <strong>Email:</strong>
                      {{ current_row.email ? current_row.email : "-" }}
                    </p>
                  </div>
                  <div class="col-md-4">
                    <p>
                      <strong>Level:</strong>
                      {{ current_row.level ? current_row.level : "-" }}
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4">
                    <p>
                      <strong>Status:</strong>
                      {{ current_row.status }}
                    </p>
                  </div>
                  <div class="col-md-4">
                    <p>
                      <strong>Work Hours:</strong>
                      {{
                        current_row.work_hours ? current_row.work_hours : "-"
                      }}
                    </p>
                  </div>
                  <div class="col-md-4">
                    <p>
                      <strong>Phone:</strong>
                      {{ current_row.phone ? current_row.phone : "-" }}
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-5">
                    <p>
                      <strong>Leave Time:</strong>
                      {{
                        current_row.leave_time ? current_row.leave_time : "-"
                      }}
                    </p>
                  </div>
                  <div class="col-md-5">
                    <p>
                      <strong>Check In Time:</strong>
                      {{
                        current_row.checkin_time
                          ? current_row.checkin_time
                          : "-"
                      }}
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
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["id"],
  data() {
    return {
      current_row: {},
      parking_id: this.id,
      label: "Reports",
      href: "/reports",
      searchInput: "",
      options: [
        { name: "Filter", value: "Filter" },
        { name: "Today", value: "today" },
        { name: "This Week", value: "this-week" },
        { name: "Previous Week", value: "prev-week" },
        { name: "This Month", value: "this-month" },
        { name: "Previous Month", value: "prev-month" },
      ],
      types: [
        { name: "Type", value: "Type" },
        { name: "Registrations", value: "registrations" },
        { name: "Security Men", value: "security" },
        { name: "Parking Slots", value: "parkingslots" },
        { name: "All", value: "all" },
      ],
      type: "Type",
      filter: "Filter",
      date: {
        from: "",
        to: "",
      },
      customType: "Type",
      rows: [],
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
          label: "Type",
          field: "type",
          sortable: false,
        },
        {
          label: "Date",
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
          width: "100px",
        },
      ],
    };
  },
  methods: {
    trigger() {
      console.log("triggered");
      const trigger = document.getElementById("hiddenBtn");
      trigger.click();
    },
    find() {
      if (this.filter != "Filter" && this.type != "Type") {
        axios
          .get(`/admin/reports/${this.parking_id}/${this.filter}`)
          .then((response) => {
            if (this.type == "security") {
              this.rows = response.data.reports.security.map((item) => ({
                ...item,
                type: "Security",
              }));
            } else if (this.type == "registrations") {
              this.rows = response.data.reports.registrations.map((item) => ({
                id: item.id,
                name: item.slot_name,
                type: "Registrations",
                created_at: item.date,
                status: item.status,
              }));
            } else if (this.type == "parkingslots") {
              this.rows = response.data.reports.parkingslots.map((item) => ({
                ...item,
                type: "Parking Slots",
              }));
            } else {
              const security = response.data.reports.security.map((item) => ({
                ...item,
                type: "Security",
              }));
              const slots = response.data.reports.parkingslots.map((item) => ({
                ...item,
                type: "Parking Slot",
              }));
              const registrations = response.data.reports.registrations.map(
                (item) => ({
                  id: item.id,
                  name: item.slot_name,
                  type: "Registrations",
                  created_at: item.date,
                  status: item.status,
                })
              );
              const all = [];
              all.push(security, slots, registrations);
              const simplifyArray = (arr = []) => {
                const res = [];
                arr.forEach((element) => {
                  element.forEach((el) => {
                    res.push(el);
                  });
                });
                return res;
              };
              this.rows = simplifyArray(all);
              console.log(this.rows);
            }
            console.log("success");
            console.log(response.data);
          })
          .catch((errors) => {
            console.log("fail");
            console.log(errors.data);
          });
      } else {
        console.log("Must enter type and filter");
      }
    },
    findCustom() {
      console.log(this.date.from);
      console.log(this.date.to);
      axios
        .get(
          `/admin/reports/custom/${this.parking_id}/${this.date.from}/${this.date.to}`
        )
        .then((response) => {
          if (this.customType == "security") {
            this.rows = response.data.reports.security.map((item) => ({
              ...item,
              type: "Security",
            }));
          } else if (this.customType == "registrations") {
            this.rows = response.data.reports.registrations.map((item) => ({
              id: item.id,
              name: item.slot_name,
              type: "Registrations",
              created_at: item.date,
              status: item.status,
            }));
          } else if (this.customType == "parkingslots") {
            this.rows = response.data.reports.parkingslots.map((item) => ({
              ...item,
              type: "Parking Slots",
            }));
          } else {
            const security = response.data.reports.security.map((item) => ({
              ...item,
              type: "Security",
            }));
            const slots = response.data.reports.parkingslots.map((item) => ({
              ...item,
              type: "Parking Slot",
            }));
            const registrations = response.data.reports.registrations.map(
              (item) => ({
                id: item.id,
                name: item.slot_name,
                type: "Registrations",
                created_at: item.date,
                status: item.status,
              })
            );
            const all = [];
            all.push(security, slots, registrations);
            const simplifyArray = (arr = []) => {
              const res = [];
              arr.forEach((element) => {
                element.forEach((el) => {
                  res.push(el);
                });
              });
              return res;
            };
            this.rows = simplifyArray(all);
            console.log(this.rows);
            this.customType = "Type";
            this.date.from = this.date.to = "";
          }

          const trigger = document.getElementById("btn-custom-close");
          trigger.click();
        })
        .catch((errors) => {
          console.log(errors.data);
        });
    },
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
.form-label {
  margin-left: 10px;
  color: #374258;
  font: 18pt;
  font-weight: bold;
  display: inline-block;
}
.form-control {
  margin-left: 10px;
  display: inline-block;
  width: auto;
}
.select-lg-fill {
  background-color: #f74464;
  border-radius: 95px;
  color: white;
  border: none;
  width: 11.4rem;
  font-size: 1rem;
  font-weight: bold;
}

.select-sm {
  background-color: #374258;
  color: white;
  border: none;
  font-size: 1rem;
  padding-left: 2rem;
  border-radius: 95px;
  height: 50px;
  margin-left: 10px;
  background-image: url("@/assets/images/icons8-chevron-down-96.png");
  background-position: calc(100% - 25px) calc(1em + 0.5px),
    calc(100% - 19.8px) calc(1em + 5px);
  background-size: 20px 20px, 20px 20px;
  background-repeat: no-repeat;
}
.select-sm > option {
  background-color: #f74464;
  color: #374258;
  border: none;
  font-weight: bold;
  padding: 10px;
}
.select-md-fill {
  background-color: #f74464;
  border-radius: 95px;
  color: white;
  border: none;
  width: 10rem;
  font-size: 1rem;
  font-weight: bold;
}
.select-md-fill > option {
  background-color: #374258;
  color: white;
  border: none;
  padding: 10px;
}
.select-lg-fill > option {
  background-color: #374258;
  color: white;
  border: none;
  padding: 10px;
}

.button-sm-fill {
  height: 45px;
}

.button-xs-unfill {
  background-color: transparent;
  height: 40px;
  border: 3px solid #f74464;
}

.button-sm-unfill {
  background-color: transparent;
  height: 40px;
  border: none;
}

ul {
  background-color: #f74464;
}
li > a {
  color: white;
}

.icon {
  padding-left: 20px;
  padding-top: 10px;
  font-size: 14pt;
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
  font-size: 14pt;
  padding-right: 10px;
}

.sm-icon-white {
  color: white;
  font-size: 1.5rem;
}

input[type="date"]::-webkit-calendar-picker-indicator {
  background-image: url("@/assets/images/icons8-calendar-96.png");
  background-position: end;
  background-size: 20px 20px, 20px 20px;
  background-repeat: no-repeat;
}
.data-container {
  font-weight: bold;
  font-size: 14pt;
}
</style>


