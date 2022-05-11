<template>
  <nav-bar :id="parking_id" />
  <div class="container-fluid background">
    <breadcrumb :crumbLabel="label" :crumbHref="href" />
    <form class="mt-5">
      <section>
        <div class="row pb-3 px-5">
          <div class="col-lg-8">
            <i class="bi bi-geo-alt sm-icon" />
            <label for="location" class="form-label">Location</label>
            <input
              type="text"
              v-model="parkingSpace.location"
              class="form-control input-xl"
              id="location"
              required
              disabled
            />
          </div>
          <div class="col-lg-4">
            <i class="bi bi-list-task sm-icon" />
            <label for="category" class="form-label">Category</label>
            <select
              class="form-select selector-xl"
              v-model="parkingSpace.category"
              id="category"
              disabled
              required
            >
              <option selected>Choose Category</option>
              <option value="mall">Mall</option>
              <option value="club">Sports Club</option>
              <option value="publicParking">Public Parking</option>
            </select>
          </div>
        </div>
        <div class="row pb-3 px-5">
          <div class="col-lg-4">
            <i class="bi bi-file-earmark-text sm-icon" />
            <label for="description" class="form-label">Description</label>
            <input
              type="text"
              v-model="parkingSpace.description"
              class="form-control input-xl"
              id="description"
              disabled
              required
            />
          </div>
          <div class="col-lg-4 col-md-6">
            <i class="bi bi-stack sm-icon" />
            <label for="levels" class="form-label">Levels</label>
            <input
              type="number"
              v-model="parkingSpace.levels"
              class="form-control input-xl"
              id="levels"
              disabled
              required
            />
          </div>
          <div class="col-lg-4 col-md-6">
            <i class="bi bi-box sm-icon" />
            <label for="capacity" class="form-label">Capacity</label>
            <input
              type="number"
              v-model="parkingSpace.capacity"
              class="form-control input-xl"
              id="capacity"
              disabled
              required
            />
          </div>
        </div>
        <div class="row pb-3 px-5">
          <div class="col-lg-3">
            <input
              class="form-check-input"
              type="checkbox"
              v-model="parkingSpace.fees"
              id="fees"
            />
            <label for="fees" class="form-label ms-3">Fees</label>
            <i class="bi bi-cash-coin sm-icon" />
            <input
              type="number"
              v-model="parkingSpace.fee"
              class="form-control input-xl"
              v-if="parkingSpace.fees == true"
              id="fee"
              disabled
              required
            />
          </div>
        </div>
        <div class="row">
          <button
            class="button-sm-fill col-1 offset-md-10 me-5"
            @click="enable"
            v-if="editting == false"
          >
            Edit
          </button>
          <div class="buttons col offset-md-9 me-4" v-else>
            <button class="button-sm-unfill me-2" type="button" @click="cancel">
              Cancel
            </button>
            <button class="button-sm-fill" type="button" @click="disable">
              Save
            </button>
          </div>
        </div>
      </section>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["id"],
  data() {
    return {
      editting: false,
      label: "Parking Settings",
      href: "/parkingSettings",
      parking_id: this.id,
      user_id: "",
      parkingSpace: {
        location: "",
        category: "",
        description: "",
        levels: "",
        fees: false,
        fee: "",
        capacity: "",
        name: "",
      },
    };
  },
  mounted() {
    this.getParkingSpace(this.parking_id);
    if (this.parkingSpace.fee != null) {
      this.parkingSpace.fees = true;
    }
  },
  methods: {
    getParkingSpace(id) {
      axios
        .get(`/parkingspace/${id}`)
        .then((response) => {
          response.data.map((item) => {
            this.parkingSpace.location = item.location;
            this.parkingSpace.description = item.description;
            this.parkingSpace.capacity = item.capacity;
            this.parkingSpace.name = item.name;
            this.user_id = item.admin_id;
            this.parkingSpace.fee = item.fees;
            this.parkingSpace.category = item.category;
            this.parkingSpace.levels = item.levels;
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
    cancel() {
      const condition =
        (this.parkingSpace.location ||
          this.parkingSpace.category ||
          this.parkingSpace.description ||
          this.parkingSpace.levels ||
          this.parkingSpace.fee ||
          this.parkingSpace.capacity ||
          this.parkingSpace.name) != null;
      if (condition) {
        if (confirm("Are you sure you want to cancel these changes?") == true) {
          console.log("confirm");
          this.disable();
          this.getParkingSpace(this.parking_id);
        } else {
          console.log("cancel");
        }
      } else {
        this.disable();
      }
    },
    enable() {
      this.editting = true;
      document.getElementById("location").disabled = "";
      document.getElementById("category").disabled = "";
      document.getElementById("description").disabled = "";
      document.getElementById("levels").disabled = "";
      document.getElementById("capacity").disabled = "";
      document.getElementById("fees").disabled = "";
      document.getElementById("fee").disabled = "";
    },
    disable() {
      this.editting = false;
      document.getElementById("location").disabled = "true";
      document.getElementById("category").disabled = "true";
      document.getElementById("description").disabled = "true";
      document.getElementById("levels").disabled = "true";
      document.getElementById("capacity").disabled = "true";
      document.getElementById("fees").disabled = "true";
      if (this.parkingSpace.fee != null) {
        this.parkingSpace.fees = true;
        document.getElementById("fee").disabled = "true";
      } else {
        this.parkingSpace.fees = false;
      }
      this.update(this.parking_id);
    },
    update(id) {
      axios
        .post(`/parkingspace/update/${id}`, {
          location: this.parkingSpace.location,
          description: this.parkingSpace.description,
          capacity: this.parkingSpace.capacity,
          name: this.parkingSpace.name,
          admin_id: this.user_id,
          fees: this.parkingSpace.fee,
          category: this.parkingSpace.category,
          levels: this.parkingSpace.levels,
        })
        .then((response) => {
          this.makeToast("update successful", "success");
          console.log(response.data);
        })
        .catch((errors) => {
          this.makeToast("update failed", "error");
          console.log(errors.data);
        });
    },
  },
};
</script>

<style scoped>
.form-box {
  width: 100vw;
  padding-left: 5rem;
  padding-right: 5rem;
  justify-content: center;
  background-color: white;
  color: #374258;
  border-radius: 50px 50px 0 0;
}

.icon {
  color: #f74464;
  font-size: 5rem;
  position: absolute;
  margin-top: 0;
  top: -1px;
}

h1,
h4 {
  font-weight: bold;
  margin: 0;
  text-align: end;
}

.sm-icon {
  color: #f74464;
  font-size: 1.5rem;
  padding-right: 10px;
}

.md-icon {
  color: #f74464;
  font-size: 2rem;
  text-align: end;
}

.input-xl {
  border-radius: 95px;
  height: 60px;
  background-color: #374258;
  color: white;
  border: none;
  padding-left: 30px;
}

.selector-xl {
  border-radius: 95px;
  height: 60px;
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

.selector-xl > option {
  background-color: #f74464;
  color: #374258;
  border: none;
  font-weight: bold;
  padding: 10px;
}

.selector-xl > option:hover {
  background-color: white;
  color: #374258;
}

input[type="date"]::-webkit-calendar-picker-indicator {
  background-image: url("@/assets/images/icons8-calendar-96.png");
  background-position: end;
  background-size: 20px 20px, 20px 20px;
  background-repeat: no-repeat;
}

.form-label {
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: normal;
  font-size: 16pt;
  margin-bottom: 0px;
}

.form-check-input {
  background-color: white;
  border: 2px solid #f74464;
  height: 25px;
  width: 25px;
  margin: 0 0 0 2px;
}

.button-sm-unfill {
  color: #374258;
  border: 3px solid #f74464;
}

@media screen and (max-width: 960px) {
  .form-check-input {
    height: 20px;
    width: 20px;
    margin-top: 5px;
  }
}

.form-check-input:checked {
  background-color: #f74464;
}

.addon {
  background-color: #f74464;
  border-radius: 0 95px 95px 0;
  font-size: 22pt;
  padding-top: 0;
  border: 2px solid #374258;
  width: 40px;
}

.button-xl-fill {
  align-content: center !important;
}

.input-file-lg {
  border-radius: 95px;
  height: 60px;
  width: 28.4rem;
  background-color: #374258;
  color: white;
  border: none;
}

input[type="file"]::-webkit-file-upload-button {
  border: none;
  height: 60px;
  border-radius: 95px;
  background-color: #f74464;
}
</style>