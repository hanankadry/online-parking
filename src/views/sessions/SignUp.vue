<template>
  <div class="container-fluid">
    <div class="row justify-content mt-4">
      <i class="bi bi-chevron-left icon" @click="goBack" />
      <h1>Getting Started?</h1>
      <h4>Create account to continue.</h4>
    </div>
    <div class="row form-box justify-content-center mt-5">
      <form>
        <!-- personal info -->
        <section>
          <p class="heading mt-5">Personal Information</p>
          <div class="row pb-3 px-5">
            <div class="col-md-4">
              <i class="bi bi-person sm-icon" />
              <label for="name" class="form-label">Name</label>
              <input
                type="text"
                v-model="user.name"
                class="form-control input-xl"
                id="name"
                required
              />
            </div>
            <div class="col-md-4">
              <i class="bi bi-envelope sm-icon" />
              <label for="email" class="form-label">Email</label>
              <input
                type="email"
                v-model="user.email"
                class="form-control input-xl"
                id="email"
                required
              />
            </div>
            <div class="col-md-4">
              <i class="bi bi-person-lines-fill sm-icon" />
              <label for="nationalID" class="form-label">National ID</label>
              <input
                type="text"
                v-model="user.nationalID"
                class="form-control input-xl"
                id="nationalID"
                required
              />
            </div>
          </div>
          <div class="row pb-3 px-5">
            <div class="col-lg-4 col-md-6">
              <i class="bi bi-lock sm-icon" />
              <label for="password" class="form-label">Password</label>
              <input
                type="password"
                v-model="user.password"
                class="form-control input-xl"
                id="password"
                required
              />
            </div>
            <div class="col-lg-4 col-md-6">
              <i class="bi bi-lock sm-icon" />
              <label for="confirmPassword" class="form-label"
                >Confirm Password</label
              >
              <input
                type="password"
                v-model="user.confirmPassword"
                class="form-control input-xl"
                id="confirmPassword"
                required
              />
            </div>
            <div class="col-lg-4">
              <i class="bi bi-gender-ambiguous sm-icon" />
              <label for="gender" class="form-label">Gender</label>
              <select
                class="form-select selector-xl"
                v-model="user.gender"
                id="gender"
                required
              >
                <option selected>Choose Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
          <div class="row pb-3 px-5">
            <div class="col-lg-8">
              <i class="bi bi-geo-alt sm-icon" />
              <label for="address" class="form-label">Address</label>
              <input
                type="text"
                v-model="user.address"
                class="form-control input-xl"
                id="address"
                required
              />
            </div>
            <div class="col-lg-4">
              <i class="bi bi-calendar2-week sm-icon" />
              <label for="dateOfBirth" class="form-label">Date of Birth</label>
              <input
                type="date"
                v-model="user.dateOfBirth"
                class="form-control input-xl date"
                id="dateOfBirth"
                required
              />
            </div>
          </div>
          <div class="row pb-3 px-5">
            <div
              class="col-lg-4 col-md-4"
              v-for="(input, index) in user.phoneNumbers"
              :key="`phoneInput-${index}`"
            >
              <i class="bi bi-telephone sm-icon" />
              <label for="phone1" class="form-label">Phone</label>
              <div class="input-group mb-3">
                <input
                  type="text"
                  v-model="input.phone"
                  class="form-control input-xl"
                  id="phone1"
                  required
                />
                <button
                  class="addon"
                  type="button"
                  v-show="user.phoneNumbers.length > 1"
                  @click="removePhone(index, user.phoneNumbers)"
                >
                  -
                </button>
                <button
                  class="addon"
                  type="button"
                  v-show="user.phoneNumbers.length < 3"
                  @click="addPhone(input, user.phoneNumbers)"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </section>
        <hr class="separator" />

        <!-- parking space info -->
        <section>
          <p class="heading mt-5">Parking Space Information</p>
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
              <label for="slotNaming" class="form-label ms-4"
                >Slot Naming</label
              >
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
        </section>
        <div class="row col-md-3 offset-md-5 py-5">
          <button
            class="button-xl-fill"
            type="submit"
            @click.prevent="createAccount(numOfAlpha, numPerAlpha)"
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import router from "@/router";
export default {
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
    const user = ref({
      name: "",
      nationalID: 0,
      email: "",
      address: "",
      password: "",
      confirmPassword: "",
      gender: ["male", "female"],
      phoneNumbers: [{ phone: "" }],
      dateOfBirth: "",
    });
    const numOfAlpha = ref(0);
    const numPerAlpha = ref(0);
    var slots = [];
    const Alphabets = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

    const goBack = () => {
      router.push("/login");
    };
    const createAccount = (val1, val2) => {
      getSlots(val1, val2);
      console.log(user.value, parkingSpace.value);
      router.push("/login");
    };

    const addPhone = (value, array) => {
      array.push({ value: "" });
      console.log(array);
    };

    const removePhone = (index, array) => {
      array.splice(index, 1);
      console.log(array);
    };

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
      user,
      parkingSpace,
      numOfAlpha,
      numPerAlpha,
      addPhone,
      removePhone,
      goBack,
      getSlots,
      createAccount,
    };
  },
};
</script>

<style scoped>
.container-fluid {
  background-color: #374258;
  color: #f74464;
  font-weight: bold;
  position: absolute;
  overflow-x: hidden;
  justify-content: center;
}

.form-box {
  width: 100vw;
  padding-left: 5rem;
  padding-right: 5rem;
  justify-content: center;
  background-color: white;
  color: #374258;
  border-radius: 50px 50px 0 0;
}

.heading {
  letter-spacing: 10px;
  font-size: 40px;
  color: #f74464;
  text-transform: uppercase;
  font-weight: lighter;
  text-align: center;
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