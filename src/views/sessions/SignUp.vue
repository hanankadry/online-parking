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
          <div class="error-box">
            <ul>
              <li v-if="v$.user.name.$error">
                {{ v$.user.name.$errors[0].$message }}
              </li>
              <li v-if="v$.user.email.$error">
                {{ v$.user.email.$errors[0].$message }}
              </li>
              <li v-if="v$.user.national_id.$error">
                {{ v$.user.national_id.$errors[0].$message }}
              </li>
              <li v-if="v$.user.password.$error">
                {{ v$.user.password.$errors[0].$message }}
              </li>
              <li v-if="v$.user.confirm_password.$error">
                {{ v$.user.confirm_password.$errors[0].$message }}
              </li>
              <li v-if="v$.user.gender.$error">
                {{ v$.user.gender.$errors[0].$message }}
              </li>
              <li v-if="v$.user.address.$error">
                {{ v$.user.address.$errors[0].$message }}
              </li>
              <li v-if="v$.user.dob.$error">
                {{ v$.user.dob.$errors[0].$message }}
              </li>
              <li v-if="v$.user.phone.$error">
                {{ v$.user.phone.$errors[0].$message }}
              </li>
            </ul>
          </div>
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
              <label for="national_id" class="form-label">National ID</label>
              <input
                type="text"
                v-model="user.national_id"
                class="form-control input-xl"
                id="national_id"
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
              <label for="confirm_password" class="form-label"
                >Confirm Password</label
              >
              <input
                type="password"
                v-model="user.confirm_password"
                class="form-control input-xl"
                id="confirm_password"
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
            <div class="col-lg-4">
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
              <i class="bi bi-telephone sm-icon" />
              <label for="phone" class="form-label">Phone</label>
              <input
                type="tel"
                pattern="[0-9]{4}-[0-9]{3}-[0-9]{4}"
                v-model="user.phone"
                class="form-control input-xl"
                id="phone"
                required
              />
            </div>
            <div class="col-lg-4">
              <i class="bi bi-calendar2-week sm-icon" />
              <label for="dob" class="form-label">Date of Birth</label>
              <input
                type="date"
                v-model="user.dob"
                @change="getAge"
                class="form-control input-xl date"
                id="dob"
                required
              />
            </div>
          </div>
        </section>
        <hr class="separator" />

        <!-- parking space info -->
        <section>
          <div class="error-box">
            <ul>
              <li v-if="v$.parkingSpace.location.$error">
                {{ v$.parkingSpace.location.$errors[0].$message }}
              </li>
              <li v-if="v$.parkingSpace.name.$error">
                {{ v$.parkingSpace.name.$errors[0].$message }}
              </li>
              <li v-if="v$.parkingSpace.category.$error">
                {{ v$.parkingSpace.category.$errors[0].$message }}
              </li>
              <li v-if="v$.parkingSpace.description.$error">
                {{ v$.parkingSpace.description.$errors[0].$message }}
              </li>
              <li v-if="v$.parkingSpace.levels.$error">
                {{ v$.parkingSpace.levels.$errors[0].$message }}
              </li>
              <li v-if="v$.parkingSpace.capacity.$error">
                {{ v$.parkingSpace.capacity.$errors[0].$message }}
              </li>
              <!-- <li v-if="v$.parkingSpace.slotNaming.$error">
                {{ v$.parkingSpace.slotNaming.$errors[0].$message }}
              </li> -->
            </ul>
          </div>
          <p class="heading mt-5">Parking Space Information</p>
          <div class="row pb-3 px-5">
            <div class="col-lg-4">
              <i class="bi bi-geo-alt sm-icon" />
              <label for="location" class="form-label">Location</label>
              <input
                type="text"
                v-model="parkingSpace.location"
                class="form-control input-xl"
                id="location"
                required
              />
            </div>
            <div class="col-lg-4">
              <i class="bi bi-house sm-icon" />
              <label for="parking_name" class="form-label">Parking Name</label>
              <input
                type="text"
                v-model="parkingSpace.name"
                class="form-control input-xl"
                id="parking_name"
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
                <option selected value="default">Choose Category</option>
                <option value="mall">Mall</option>
                <option value="club">Sports Club</option>
                <option value="public">Public Parking</option>
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
                id="capacity"
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
                id="fees"
                required
              />
            </div>
            <!-- <div class="col-lg-3 col-md-4">
              <label for="slotNaming" class="form-label ms-4"
                >Slot Naming</label
              >
              <select
                class="form-select selector-xl mt-1"
                v-model="parkingSpace.slotNaming"
                id="slotNaming"
                required
              >
                <option selected value="default">Choose</option>
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
            </div> -->
          </div>
        </section>
        <div class="row col-md-3 offset-md-5 py-5">
          <button
            class="button-xl-fill"
            type="submit"
            @click.prevent="createAccount"
          >
            <!-- @click.prevent="
              createAccount(numOfAlpha, numPerAlpha, parkingSpace.capacity)
            "
          > -->
            Create Account
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import useValidate from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  maxLength,
  sameAs,
  numeric,
  helpers,
  maxValue,
} from "@vuelidate/validators";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import axios from "axios";

export default {
  data() {
    return {
      slotStatus: "available",
      role: "admin",
      v$: useValidate(),
      parkingSpace: {
        id: "",
        location: "",
        category: "",
        description: "",
        levels: "",
        fees: false,
        fee: "",
        capacity: "",
        name: "",
        // slotNaming: ["default", "alpha", "numerical"],
        // slotLevel: "",
      },
      user: {
        name: "",
        national_id: "",
        email: "",
        address: "",
        password: "",
        confirm_password: "",
        gender: "",
        phone: "",
        dob: "",
      },
      // numOfAlpha: 0,
      // numPerAlpha: 0,
      thisYear: new Date().toLocaleDateString("en-us", {
        year: "numeric",
      }),
      minValue: null,
      // slots: [],
      // levels: [],
      // Alphabets: Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ"),
    };
  },
  beforeMount() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.$router.replace(`/dashboard/${this.user.national_id}`);
      }
    });
  },
  methods: {
    getAge() {
      const year = this.user.dob.split("-", 1);
      this.minValue = this.thisYear - year;
      return this.minValue;
    },
    goBack() {
      this.$router.push("/login");
    },
    // createAccount(endValue, numValue, capacity) {
    createAccount() {
      this.v$.$validate();
      if (!this.v$.$error) {
        this.addUser();
        // this.addParkingSlot(endValue, numValue, capacity);
        this.addParkingSpace();
      }
    },
    register() {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.user.email, this.user.password)
        .then((userCredential) => {
          const user = userCredential.user;
          this.$router.push(`/dashboard/${this.parkingSpace.id}`);
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
    addUser() {
      axios
        .post("/user/insert", {
          id: this.user.national_id,
          username: this.user.name,
          address: this.user.address,
          email: this.user.email,
          gender: this.user.gender,
          phone: this.user.phone,
          role: this.role,
          dob: this.user.dob,
          password: this.user.password,
        })
        .then((response) => {
          this.register();
          this.parkingSpace.id = response.data.parkingspace.id;
          console.log(this.parkingSpace.id);
          console.log(response.data);
        })
        .catch((errors) => {
          console.log(errors.data);
        });
    },
    addParkingSpace() {
      axios
        .post("/parkingspace/insert", {
          location: this.parkingSpace.location,
          description: this.parkingSpace.description,
          capacity: this.parkingSpace.capacity,
          name: this.parkingSpace.name,
          admin_id: this.user.national_id,
          fees: this.parkingSpace.fee,
          category: this.parkingSpace.category,
          levels: this.parkingSpace.levels,
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((errors) => {
          console.log(errors.data);
        });
    },
    // addParkingSlot(endValue, numValue, capacity) {
    //   this.slots = this.getSlots(endValue, numValue, capacity);
    //   this.levels = this.getLevels();
    //   for (let i = 0; i < this.slots.length; i++) {
    //     axios
    //       .post("/parkingslot/insert", {
    //         name: this.slots[i],
    //         level: this.levels[i],
    //         parking_id: this.parkingSpace.id,
    //         status: this.slotStatus,
    //       })
    //       .then((response) => {
    //         console.log(response.data);
    //       })
    //       .catch((errors) => {
    //         console.log(errors.data);
    //       });
    //   }
    // },
    // getLevels() {
    //   this.levels = [];
    //   const slotPerLevel =
    //     this.parkingSpace.capacity / this.parkingSpace.levels;
    //   for (let j = 0; j < this.parkingSpace.levels; j++) {
    //     for (let k = 0; k < slotPerLevel; k++) {
    //       this.levels.push(j + 1);
    //     }
    //   }
    //   console.log(this.levels);
    //   return this.levels;
    // },
    // getSlots(endValue, numValue, capacity) {
    //   this.slots = [];
    //   if (this.parkingSpace.slotNaming == "alpha") {
    //     const letters = this.Alphabets.slice(0, endValue);
    //     const numOfSlots = [...Array(numValue - 1 + 1).keys()].map(
    //       (x) => x + 1
    //     );
    //     for (let i = 0; i < letters.length; i++) {
    //       for (let j = 0; j < numOfSlots.length; j++) {
    //         const slotName = letters[i] + numOfSlots[j];
    //         this.slots.push(slotName);
    //       }
    //     }
    //     console.log(this.slots);
    //     return this.slots;
    //   } else if (this.parkingSpace.slotNaming == "numerical") {
    //     for (let i = 1; i <= parseInt(capacity); i++) {
    //       this.slots.push(i);
    //     }
    //     console.log(this.slots);
    //     return this.slots;
    //   }
    // },
  },
  validations() {
    return {
      parkingSpace: {
        location: {
          required: helpers.withMessage("Location is required", required),
        },
        category: {
          required: helpers.withMessage("Category is required", required),
        },
        description: {
          required: helpers.withMessage("Description is required", required),
        },
        levels: {
          required: helpers.withMessage("Levels is required", required),
          maxValue: helpers.withMessage(
            "Levels must be less than 10",
            maxValue(10)
          ),
        },
        capacity: {
          required: helpers.withMessage("Capacity is required", required),
        },
        name: {
          required: helpers.withMessage(
            "Parking Space name is required",
            required
          ),
        },
        // slotNaming: {
        //   required: helpers.withMessage(
        //     "Slot Naming convention is required",
        //     required
        //   ),
        // },
      },
      user: {
        name: { required: helpers.withMessage("Name is required", required) },
        national_id: {
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
        password: {
          required: helpers.withMessage("Password is required", required),
          minLength: helpers.withMessage(
            "Password must be at least 8 characters long",
            minLength(8)
          ),
          containsPasswordRequirement: helpers.withMessage(
            () =>
              `The password requires an uppercase, lowercase, number and special character`,
            (value) =>
              /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/.test(value)
          ),
        },
        confirm_password: {
          required: helpers.withMessage(
            "Password Confirmation is required",
            required
          ),
          sameAsPassword: helpers.withMessage(
            "Password and Password Confirmation must be match",
            sameAs(this.user.password)
          ),
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
      },
    };
  },
};
</script>

<style scoped>
.error-box {
  background-color: rgba(255, 64, 0, 0.4);
  margin: 10px;
  border-radius: 3px;
}
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