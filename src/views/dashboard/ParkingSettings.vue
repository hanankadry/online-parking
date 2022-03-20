<template>
  <nav-bar />
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
              id="loaction"
              required
            />
          </div>
          <div class="col-lg-4">
            <i class="bi bi-list-task sm-icon" />
            <label for="category" class="form-label">Category</label>
            <select
              class="form-select selector-xl"
              v-model="parkingSpace.category"
              id="category"
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
              id="capacity"
              required
            />
          </div>
          <div class="col-lg-3 col-md-4">
            <label for="slotNaming" class="form-label ms-4">Slot Naming</label>
            <select
              class="form-select selector-xl mt-1"
              v-model="parkingSpace.slotNaming"
              id="slotNaming"
              required
            >
              <option selected>Choose</option>
              <option value="alpha">Alphanumerical</option>
              <option value="numerical">Numerical</option>
            </select>
          </div>
          <div
            class="col-lg-3 col-md-4"
            v-if="parkingSpace.slotNaming == 'alpha'"
          >
            <label for="alphabets" class="form-label ms-4">Alphabets</label>
            <input
              type="number"
              v-model="numOfAlpha"
              class="form-control input-xl mt-1"
              id="alphabet"
              required
            />
          </div>
          <div
            class="col-lg-3 col-md-4"
            v-if="parkingSpace.slotNaming == 'alpha'"
          >
            <label for="numberPerAlphabet" class="form-label ms-4"
              >Number/Alphabet</label
            >
            <input
              type="number"
              v-model="numPerAlpha"
              class="form-control input-xl mt-1"
              id="numberPerAlphabet"
              required
            />
          </div>
        </div>
        <div class="row">
          <button
            class="button-sm-fill col offset-md-10 me-5"
            @click="editting = true"
            v-if="editting == false"
          >
            Edit
          </button>
          <div class="buttons col offset-md-8 me-4" v-else>
            <button
              class="button-sm-unfill me-2"
              type="button"
              @click="editting = false"
            >
              Cancel
            </button>
            <button
              class="button-sm-fill"
              type="button"
              @click="editting = false"
            >
              Save
            </button>
          </div>
        </div>
      </section>
    </form>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  data() {
    return {
      editting: false,
      label: "Parking Settings",
      href: "/parkingSettings",
    };
  },
  setup() {
    const parkingSpace = ref({
      location: "",
      category: ["mall", "club", "public"],
      description: "",
      levels: 0,
      fees: false,
      fee: 0,
      capacity: 0,
      name: "",
      slotNaming: ["alpha", "numerical"],
      slotLevel: 0,
    });
    const numOfAlpha = ref(0);
    const numPerAlpha = ref(0);
    var slots = [];
    const Alphabets = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

    const getSlots = (endValue, numValue) => {
      slots = [];
      const letters = Alphabets.slice(0, endValue);
      const numOfSlots = [...Array(numValue - 1 + 1).keys()].map((x) => x + 1);

      for (let i = 0; i < letters.length; i++) {
        for (let j = 0; j < numOfSlots.length; j++) {
          const slotName = letters[i] + numOfSlots[j];
          slots.push(slotName);
        }
      }
      return slots;
    };

    return {
      parkingSpace,
      numOfAlpha,
      numPerAlpha,
      getSlots,
    };
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
</style>