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
            Add New Slot
          </button>
        </div>
      </div>
      <div class="box" v-if="full == true">
        <div class="row">
          <div class="col-auto me-auto">
            <strong>{{ errorMsg }}</strong>
          </div>
          <div class="col-auto">
            <button
              type="button"
              class="btn-close"
              @click="full = false"
              aria-label="Close"
            ></button>
          </div>
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
        ><template #table-row="props">
          <span v-if="props.column.field == 'status'">
            <span
              class="status-success"
              v-if="props.row.status == 'available'"
              >{{ props.row.status }}</span
            ><span
              class="status-danger"
              v-else-if="props.row.status == 'unavailable'"
              >{{ props.row.status }}</span
            >
            <span class="status-warning" v-else>{{ props.row.status }}</span>
          </span>
          <span v-if="props.column.field == 'button'">
            <a
              href=""
              data-bs-toggle="modal"
              data-bs-target=".edit-modal"
              @click="current_slot = props.row"
            >
              <i class="bi bi-pencil-square table-icon"></i>
              {{ props.row.button }}</a
            >
            <a
              href=""
              data-bs-toggle="modal"
              data-bs-target=".info-modal"
              @click="current_slot = props.row"
            >
              <i class="bi bi-info-circle table-icon text-success"></i>
              {{ props.row.button }}</a
            >
            <a
              href=""
              data-bs-toggle="modal"
              data-bs-target=".activate-modal"
              @click="current_slot = props.row"
            >
              <i class="bi bi-clock table-icon text-warning"></i>
              {{ props.row.button }}</a
            >
            <a
              href=""
              data-bs-toggle="modal"
              data-bs-target=".delete-modal"
              @click="current_slot = props.row"
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
              Edit Parking Slot "{{ current_slot.name }}"
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
                  <div class="col-lg-6">
                    <i class="bi bi-card-text sm-icon" />
                    <label for="name" class="form-label">Name</label>
                    <input
                      type="text"
                      v-model="current_slot.name"
                      class="form-control input-lg"
                      id="name"
                      required
                    />
                  </div>
                  <div class="col-lg-6">
                    <i class="bi bi-stack sm-icon" />
                    <label for="level" class="form-label">Level</label>
                    <input
                      type="number"
                      v-model="current_slot.level"
                      class="form-control input-lg"
                      id="level"
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
              @click="cancel(current_slot, 'edit')"
            >
              Cancel
            </button>
            <button
              type="button"
              class="button-xs-fill"
              @click="updateSlot(current_slot.id)"
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
              Parking Slot "{{ current_slot.name }}"
            </h5>
          </div>
          <div class="modal-body">
            <div class="container">
              <div class="row">
                <div class="col-md-4">
                  <p>
                    <strong>Name:</strong>
                    {{ current_slot.name }}
                  </p>
                </div>
                <div class="col-md-4">
                  <p>
                    <strong>Level:</strong>
                    {{ current_slot.level }}
                  </p>
                </div>
                <div class="col-md-4">
                  <p>
                    <strong>Status:</strong>
                    {{ current_slot.status }}
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
              Change Parking Slot "{{ current_slot.name }}" Status
            </h5>
            <button
              type="button"
              class="btn-close"
              id="btn-activate-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="col-md-6">
                <i class="bi bi-clock sm-icon" />
                <label for="status" class="form-label">Status</label>
                <select
                  class="form-select selector-lg"
                  id="status"
                  v-model="current_slot.status"
                  required
                >
                  <option selected>Choose Status</option>
                  <option value="available">Available</option>
                  <option value="unavailable">Unavailable</option>
                  <option value="out of order">Out of Order</option>
                </select>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="button-xs-unfill">Cancel</button>
            <button
              type="button"
              class="button-xs-danger"
              @click="changeStatus(current_slot.id)"
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
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">
              Delete Slot "{{ current_slot.name }}"
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
            Are you sure you want to delete "{{ current_slot.name }}"?
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
              @click="deleteSlot(current_slot.id)"
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
            <h5 class="modal-title">Add Parking Slot</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              id="btn-add-close"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                  @click="type = 'single'"
                >
                  Single
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                  @click="type = 'group'"
                >
                  Group
                </button>
              </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <form>
                  <div class="row form-box justify-content-center">
                    <div class="row">
                      <div class="col-lg-4">
                        <i class="bi bi-card-text sm-icon" />
                        <label for="name" class="form-label">Name</label>
                        <input
                          type="text"
                          v-model="new_slot.name"
                          class="form-control input-lg"
                          id="name"
                          required
                        />
                      </div>
                      <div class="col-lg-4">
                        <i class="bi bi-stack sm-icon" />
                        <label for="level" class="form-label">Level</label>
                        <input
                          type="number"
                          v-model="new_slot.level"
                          class="form-control input-lg"
                          id="level"
                          required
                        />
                      </div>
                      <div class="col-lg-4">
                        <i class="bi bi-clock sm-icon" />
                        <label for="status" class="form-label">Status</label>
                        <select
                          class="form-select selector-lg"
                          id="status"
                          v-model="new_slot.status"
                          required
                        >
                          <option value="choose">Choose Status</option>
                          <option value="available">Available</option>
                          <option value="unavailable">Unavailable</option>
                          <option value="out of order">Out of Order</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div
                class="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <form>
                  <div class="row">
                    <div class="col-lg-3">
                      <p class="ms-2">
                        <strong>Capacity Left: </strong
                        >{{ parkingSpace.capacity - rows.length }}
                      </p>
                    </div>
                    <div class="col-lg-3">
                      <p class="ms-2">
                        <strong>Levels: </strong>{{ parkingSpace.levels }}
                      </p>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-check form-check-inline radio-item">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="ritema"
                          name="ritem"
                          value="option1"
                          v-model="slotNaming"
                          checked
                        />
                        <label class="form-check-label" for="ritema"
                          >Alphanumerical</label
                        >
                      </div>

                      <div class="form-check form-check-inline radio-item">
                        <input
                          class="form-check-input"
                          type="radio"
                          id="ritemb"
                          name="ritem"
                          value="option2"
                          v-model="slotNaming"
                        />
                        <label class="form-check-label" for="ritemb"
                          >Numerical</label
                        >
                      </div>
                    </div>
                  </div>
                  <div class="row" v-if="slotNaming == 'option1'">
                    <div
                      class="row"
                      v-for="(input, index) in parkingSlots"
                      :key="index"
                    >
                      <div class="col-lg-4">
                        <label for="alphabet" class="form-label ms-4"
                          >Alphabet</label
                        >
                        <select
                          class="form-select selector-lg mt-1"
                          v-model="input.alphabet"
                          id="alphabet"
                          required
                        >
                          <option
                            v-for="(option, index) in Alphabets"
                            :key="index"
                            :value="option"
                          >
                            {{ option }}
                          </option>
                        </select>
                      </div>
                      <div class="col-lg-5">
                        <label for="number" class="form-label ms-4"
                          >Number of Slots</label
                        >
                        <input
                          type="number"
                          v-model="input.number"
                          class="form-control input-lg mt-1"
                          id="number"
                          required
                        />
                      </div>
                      <div class="col-lg-2">
                        <label for="level" class="form-label ms-4">Level</label>
                        <input
                          type="number"
                          v-model="input.level"
                          class="form-control input-lg mt-1"
                          id="level"
                          required
                        />
                      </div>
                      <div class="col-lg-1 mt-4">
                        <i class="bi bi-plus-circle sm-icon" @click="add" />
                        <i
                          class="bi bi-dash-circle sm-icon"
                          v-show="parkingSlots.length > 1"
                          @click="remove"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row" v-else>
                    <div class="col-lg-4">
                      <label for="number" class="form-label ms-4"
                        >Number of Slots</label
                      >
                      <input
                        type="number"
                        v-model="numOfSlots"
                        class="form-control input-lg mt-1"
                        id="number"
                        required
                      />
                    </div>
                    <div class="col-lg-3">
                      <label for="level" class="form-label ms-4">Level</label>
                      <input
                        type="number"
                        v-model="slotLevel"
                        class="form-control input-lg mt-1"
                        id="level"
                        required
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="button-xs-unfill"
              @click="cancel(new_slot, 'add')"
            >
              Cancel
            </button>
            <button type="button" @click="addSlot(type)" class="button-xs-fill">
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
  props: ["id"],
  data() {
    return {
      parking_id: this.id,
      type: "single",
      current_slot: {
        id: "",
        name: "",
        level: "",
        status: "",
      },
      new_slot: {
        id: "",
        name: "",
        level: "",
        status: "choose",
      },
      full: false,
      errorMsg: "",
      slotStatus: "available",
      slots: [],
      levels: [],
      Alphabets: [
        "Choose Alphabet",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ],
      slotNaming: "option1",
      slotLevel: "",
      numOfSlots: "",
      searchInput: "",
      label: "Parking Slots",
      href: "/parkingSlots",
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
          label: "Level",
          field: "level",
          sortable: false,
        },
        {
          label: "Status",
          field: "status",
          sortable: false,
        },
        {
          label: "Action",
          field: "button",
          sortable: false,
        },
      ],
      rows: [],
      parkingSlots: [{ alphabet: "Choose Alphabet", number: "", level: "" }],
      parkingSpace: {
        capacity: "",
        levels: "",
      },
    };
  },
  mounted() {
    this.show(this.parking_id);
    this.getParkingSpace();
  },
  methods: {
    add() {
      this.parkingSlots.push({
        alphabet: "Choose Alphabet",
        number: "",
        level: "",
      });
    },
    remove() {
      this.parkingSlots.pop();
    },
    cancel(slot, modal) {
      const condition = (slot.name || slot.level || slot.status) != null;
      if (modal == "edit") {
        if (condition) {
          if (
            confirm("Are you sure you want to cancel these changes?") == true
          ) {
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
      } else if (modal == "add") {
        if (condition) {
          if (
            confirm("Are you sure you want to cancel these changes?") == true
          ) {
            console.log("confirm");
            this.new_slot = {
              id: "",
              name: "",
              level: "",
              status: "choose",
            };
            this.parkingSlots = [
              { alphabet: "Choose Alphabet", number: "", level: "" },
            ];
            this.slotLevel = "";
            this.numOfSlots = "";
            const trigger = document.getElementById("btn-add-close");
            trigger.click();
            this.show(this.parking_id);
          } else {
            console.log("cancel");
          }
        } else {
          this.new_slot = {
            id: "",
            name: "",
            level: "",
            status: "choose",
          };
          this.parkingSlots = [
            { alphabet: "Choose Alphabet", number: "", level: "" },
          ];
          this.slotLevel = "";
          this.numOfSlots = "";
          const trigger = document.getElementById("btn-add-close");
          trigger.click();
        }
      }
    },
    makeToast(msg, type) {
      this.$toast.show(msg, { type: type });
    },
    show(id) {
      axios
        .get(`/parkingslot/parking/${id}`)
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
    updateSlot(id) {
      axios
        .post(`/parkingslot/update/${id}`, {
          name: this.current_slot.name,
          level: this.current_slot.level,
          parking_id: this.parking_id,
          status: this.current_slot.status,
        })
        .then((response) => {
          this.makeToast("update succesful", "success");
          const trigger = document.getElementById("btn-update-close");
          trigger.click();
          this.show(this.parking_id);
          console.log(response.data);
        })
        .catch((errors) => {
          this.makeToast("update failed", "error");
          console.log(errors.data);
        });
    },
    changeStatus(id) {
      axios
        .post(`/parkingslot/updatestatus/${id}`, {
          status: this.current_slot.status,
          parking_id: this.parking_id,
        })
        .then((response) => {
          this.makeToast("status change succesful", "success");
          const trigger = document.getElementById("btn-activate-close");
          trigger.click();
          this.show(this.parking_id);
          console.log(response.data);
        })
        .catch((errors) => {
          this.makeToast("status change failed", "error");
          console.log(errors.log);
        });
    },
    deleteSlot(id) {
      axios
        .post(`/parkingslot/delete/${id}`)
        .then((response) => {
          this.makeToast("delete succesful", "success");
          const trigger = document.getElementById("btn-delete-close");
          trigger.click();
          this.show(this.parking_id);
          console.log(response.data);
        })
        .catch((errors) => {
          this.makeToast("delete failed", "error");
          console.log(errors.data);
        });
    },
    addSlot(type) {
      const condition = this.rows.length < this.parkingSpace.capacity;
      if (condition) {
        if (type == "single") {
          axios
            .post("/parkingslot/insert", {
              name: this.new_slot.name,
              level: this.new_slot.level,
              parking_id: this.parking_id,
              status: this.new_slot.status,
            })
            .then((response) => {
              this.makeToast("insert successful", "success");
              this.new_slot = {
                id: "",
                name: "",
                level: "",
                status: "choose",
              };
              this.parkingSlots = [
                { alphabet: "Choose Alphabet", number: "", level: "" },
              ];
              this.slotLevel = "";
              this.numOfSlots = "";
              const trigger = document.getElementById("btn-add-close");
              trigger.click();
              this.show(this.parking_id);
              console.log(response.data);
            })
            .catch((errors) => {
              this.makeToast("insert failed", "error");
              console.log(errors.data);
            });
        } else {
          this.addAllSlots(this.parkingSlots);
        }
      } else {
        this.makeToast("insert failed", "error");
        this.full = true;
        this.errorMsg = "Parking Space Capacity is full";
        const trigger = document.getElementById("btn-add-close");
        trigger.click();
        this.new_slot = {};
      }
    },
    addAllSlots(array) {
      this.slots = this.getSlots(array);
      this.levels = this.getLevels(array);
      for (let i = 0; i < this.slots.length; i++) {
        axios
          .post("/parkingslot/insert", {
            name: this.slots[i],
            level: this.levels[i],
            parking_id: this.parking_id,
            status: this.slotStatus,
          })
          .then((response) => {
            this.makeToast("insert successful", "success");
            this.new_slot = {
              id: "",
              name: "",
              level: "",
              status: "choose",
            };
            this.parkingSlots = [
              { alphabet: "Choose Alphabet", number: "", level: "" },
            ];
            this.slotLevel = "";
            this.numOfSlots = "";
            const trigger = document.getElementById("btn-add-close");
            trigger.click();
            this.show(this.parking_id);
            console.log(response.data);
          })
          .catch((errors) => {
            this.makeToast("insert failed", "error");
            console.log(errors.data);
          });
      }
    },
    getParkingSpace() {
      axios
        .get(`/parkingspace/${this.parking_id}`)
        .then((response) => {
          response.data.map((item) => {
            this.parkingSpace.capacity = item.capacity;
            this.parkingSpace.levels = parseInt(item.levels);
          });
          console.log(response.data);
        })
        .catch((errors) => {
          console.log(errors.data);
        });
    },
    getLevels(array) {
      this.levels = [];
      var value = this.parkingSpace.capacity - this.rows.length;
      if (this.slotNaming == "option1") {
        for (let j = 0; j < array.length; j++) {
          for (let k = 0; k < array[j].number; k++) {
            this.levels.push(array[j].level);
          }
        }
        console.log(this.levels);
        return this.levels;
      } else if (this.slotNaming == "option2") {
        for (let i = 0; i < this.numOfSlots; i++) {
          this.levels.push(this.slotLevel);
        }
        console.log(this.levels);
        return this.levels;
      }
    },
    getSlots(array) {
      this.slots = [];
      if (this.slotNaming == "option1") {
        for (let i = 0; i < array.length; i++) {
          for (let j = 1; j <= array[i].number; j++) {
            this.slots.push(array[i].alphabet + j);
          }
        }
        console.log(this.slots);
        return this.slots;
      } else if (this.slotNaming == "option2") {
        var value = this.parkingSpace.capacity - this.rows.length;
        if (this.numOfSlots <= value) {
          for (let i = 1; i <= this.numOfSlots; i++) {
            this.slots.push(i);
          }
          console.log(this.slots);
          return this.slots;
        }
      }
    },
  },
};
</script>

<style scoped>
.nav-link {
  border: 3px solid #f74464;
  background-color: transparent;
  border-radius: 95px;
  height: 50px;
  margin-left: 10px;
  color: #374258;
  position: relative;
  font-weight: bold;
  font-size: larger;
  text-decoration: none;
}

.nav-link:is(.active) {
  background-color: #f74464 !important;
  border: none;
  border-radius: 95px;
}

.input-lg {
  border-radius: 95px;
  height: 50px;
  background-color: #374258;
  color: white;
  border: none;
  padding-left: 30px;
}

.header {
  letter-spacing: 10px;
  font-size: 40px;
  color: #f74464;
  text-transform: uppercase;
  font-weight: lighter;
  text-align: start;
  padding-left: 50px;
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

.radio-item {
  display: inline-block;
  position: relative;
  padding: 0 6px;
  margin: 10px 0 0;
}

.radio-item input[type="radio"] {
  display: none;
}

.radio-item label {
  color: #666;
  font-weight: normal;
}

.radio-item label:before {
  content: " ";
  display: inline-block;
  position: relative;
  top: 5px;
  margin: 0 5px 0 0;
  width: 20px;
  height: 20px;
  border-radius: 11px;
  border: 2px solid #f74464;
  background-color: transparent;
}

.radio-item input[type="radio"]:checked + label:after {
  border-radius: 11px;
  width: 12px;
  height: 12px;
  position: absolute;
  top: 9px;
  left: 10px;
  content: " ";
  display: block;
  background: #f74464;
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

.box {
  background-color: rgb(255, 0, 0, 0.3);
  padding: 12px;
  margin: 10px 0px 10px 0px;
}
</style>