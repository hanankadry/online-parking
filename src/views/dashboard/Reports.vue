<template>
  <nav-bar :id="parking_id" />
  <div class="report">
    <breadcrumb :crumbLabel="label" :crumbHref="href" />

    <div class="container-fluid">
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
          <div class="col-auto dropdown">
            <div class="row">
              <select
                class="form-select select-sm-fill col me-1"
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
                <!-- <option class="dropdown-item" value="custom">custom</option> -->
              </select>
              <!-- <button
                id="hiddenBtn"
                v-show="false"
                data-bs-toggle="modal"
                data-bs-target=".custom-modal"
              >
                Test
              </button> -->
              <select
                class="form-select select-sm-fill col"
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
            </div>
          </div>
          <div class="col-auto">
            <button class="button-xs-unfill mt-0" type="button" @click="find">
              <i class="bi bi-search sm-icon" />
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
          <template #table-rows="props">
            <span v-if="props.column.field == 'button'">
              <a
                href=""
                data-bs-toggle="modal"
                data-bs-target=".info-modal"
                @click="current_row = props.row"
              >
                <i class="bi bi-info-circle table-icon text-success"></i>
                {{ props.row.button }}</a
              >
            </span>
          </template>
        </vue-good-table>
      </div>
      <div class="data-container offset-9">
        Total Number of Data: {{ this.rows.length }}
      </div>

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
          width: "200px",
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
          .get(`/admin/reports/${this.parking_id}`, {
            filter: this.filter,
          })
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
              this.rows =
                response.data.reports.security.map((item) => ({
                  ...item,
                  type: "Security",
                })) +
                response.data.reports.parkingslots.map((item) => ({
                  ...item,
                  type: "Parking Slot",
                })) +
                response.data.reports.registrations.map((item) => ({
                  id: item.id,
                  name: item.slot_name,
                  type: "Registrations",
                  created_at: item.date,
                  status: item.status,
                }));
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
      axios
        .get(`/admin/reports/custom/${this.parking_id}`, {
          type: this.type,
          from: this.date.from,
          to: this.date.to,
        })
        .then((response) => {
          this.rows = response.data.map((item) => ({
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
.select-sm-fill {
  background-color: #f74464;
  border-radius: 95px;
  color: white;
  border: none;
  width: 8rem;
  font-size: 1rem;
}
.button-xs-unfill {
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


