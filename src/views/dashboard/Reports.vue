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
            <button
              class="button-sm-fill dropdown-toggle"
              type="button"
              id="find-by"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Find By
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><a class="dropdown-item" href="#">Year</a></li>
              <li><a class="dropdown-item" href="#">Month</a></li>
              <li><a class="dropdown-item" href="#">Weekly</a></li>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target=".custom-modal"
                  >Custom</a
                >
              </li>
            </ul>
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
        >
        </vue-good-table>
      </div>
      <div class="data-container offset-9">
        Total Number of Data: {{ rows.length }}
      </div>

      <div
        class="modal fade custom-modal"
        data-bs-keyboard="false"
        tabindex="-1"
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
              <button type="button" class="button-xs-fill">Find</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      parking_id: this.id,
      label: "Reports",
      href: "/reports",
      searchInput: "",
      date: {
        from: "",
        to: "",
      },
      rows: [],
      columns: [
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
.dropdown {
  display: inline-block;
  position: relative;
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
  font-size: 1.5rem;
  padding-right: 10px;
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


