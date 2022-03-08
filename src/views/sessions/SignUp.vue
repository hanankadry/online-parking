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
        <p class="heading mt-5">Personal Information</p>
        <div class="row pb-3 px-5">
          <div class="col-4">
            <i class="bi bi-person sm-icon" />
            <label for="name" class="form-label">Name</label>
            <input
              type="text"
              class="form-control input-xl"
              id="name"
              required
            />
          </div>
          <div class="col-4">
            <i class="bi bi-person-lines-fill sm-icon" />
            <label for="nationalID" class="form-label">National ID</label>
            <input
              type="text"
              class="form-control input-xl"
              id="nationalID"
              required
            />
          </div>
          <div class="col-4">
            <i class="bi bi-envelope sm-icon" />
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              class="form-control input-xl"
              id="email"
              required
            />
          </div>
        </div>
        <div class="row pb-3 px-5">
          <div class="col-4">
            <i class="bi bi-lock sm-icon" />
            <label for="password" class="form-label">Password</label>
            <input
              type="password"
              class="form-control input-xl"
              id="password"
              required
            />
          </div>
          <div class="col-4">
            <i class="bi bi-lock sm-icon" />
            <label for="confirmPassword" class="form-label"
              >Confirm Password</label
            >
            <input
              type="password"
              class="form-control input-xl"
              id="confirmPassword"
              required
            />
          </div>
          <div class="col-4">
            <i class="bi bi-gender-ambiguous sm-icon" />
            <label for="gender" class="form-label">Gender</label>
            <select class="form-select selector-xl" id="gender" required>
              <option selected>Choose Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
        <div class="row pb-3 px-5">
          <div class="col-8">
            <i class="bi bi-geo-alt sm-icon" />
            <label for="address" class="form-label">Address</label>
            <input
              type="text"
              class="form-control input-xl"
              id="address"
              required
            />
          </div>
          <div class="col-4">
            <i class="bi bi-calendar2-week sm-icon" />
            <label for="dateOfBirth" class="form-label">Date of Birth</label>
            <input
              type="date"
              class="form-control input-xl"
              id="dateOfBirth"
              required
            />
          </div>
        </div>
        <div class="row pb-3 px-5">
          <div class="col-4">
            <i class="bi bi-telephone sm-icon" />
            <label for="phone1" class="form-label">Phone</label>
            <div class="input-group mb-3">
              <input
                type="number"
                class="form-control input-xl"
                id="phone1"
                required
              />
              <button
                class="addon"
                type="button"
                v-if="phone1 == false"
                @click="checkPhone1"
              >
                +
              </button>
              <button class="addon" type="button" v-else @click="checkPhone1">
                -
              </button>
            </div>
          </div>
          <div class="col-4">
            <i class="bi bi-telephone sm-icon" />
            <label for="phone2" class="form-label">Phone</label>
            <div class="input-group mb-3">
              <input
                type="number"
                class="form-control input-xl"
                id="phone2"
                required
              />
              <button
                class="addon"
                type="button"
                v-if="phone2 == false"
                @click="checkPhone2"
              >
                +
              </button>
              <button class="addon" type="button" v-else @click="checkPhone2">
                -
              </button>
            </div>
          </div>
          <div class="col-4">
            <i class="bi bi-telephone sm-icon" />
            <label for="phone3" class="form-label">Phone</label>
            <div class="input-group mb-3">
              <input
                type="number"
                class="form-control input-xl"
                id="phone3"
                required
              />
              <button
                class="addon"
                type="button"
                v-if="phone3 == false"
                @click="checkPhone3"
              >
                +
              </button>
              <button class="addon" type="button" v-else @click="checkPhone3">
                -
              </button>
            </div>
          </div>
        </div>
        <hr class="separator" />

        <!-- parking space info -->
        <p class="heading mt-5">Parking Space Information</p>
        <div class="row pb-3 px-5">
          <div class="col-8">
            <i class="bi bi-geo-alt sm-icon" />
            <label for="location" class="form-label">Location</label>
            <input
              type="text"
              class="form-control input-xl"
              id="loaction"
              required
            />
          </div>
          <div class="col-4">
            <i class="bi bi-list-task sm-icon" />
            <label for="category" class="form-label">Category</label>
            <select class="form-select selector-xl" id="category" required>
              <option selected>Choose Category</option>
              <option value="mall">Mall</option>
              <option value="club">Sports Club</option>
              <option value="publicParking">Public Parking</option>
            </select>
          </div>
        </div>
        <div class="row pb-3 px-5">
          <div class="col-4">
            <i class="bi bi-file-earmark-text sm-icon" />
            <label for="description" class="form-label">Descriptions</label>
            <input
              type="text"
              class="form-control input-xl"
              id="description"
              required
            />
          </div>
          <div class="col-3">
            <i class="bi bi-stack sm-icon" />
            <label for="levels" class="form-label">Levels</label>
            <input
              type="number"
              class="form-control input-xl"
              id="levels"
              required
            />
          </div>
          <div class="col-3">
            <label for="slotsPerLevel" class="form-label">Slots/Level</label>
            <input
              type="number"
              class="form-control input-xl"
              id="slotsPerLevel"
              required
            />
          </div>
          <div class="col-2">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="fees"
            />
            <label for="fees" class="form-label">Fees</label>
            <i class="bi bi-cash-coin sm-icon" />
            <input
              type="number"
              class="form-control input-xl"
              id="fees"
              required
            />
          </div>
        </div>
        <div class="row pb-3 px-5">
          <div class="col-3">
            <i class="bi bi-box sm-icon" />
            <label for="capacity" class="form-label">Capacity</label>
            <input
              type="number"
              class="form-control input-xl"
              id="capacity"
              required
            />
          </div>
          <div class="col-3">
            <label for="slotNaming" class="form-label">Slot Naming</label>
            <select class="form-select selector-xl" id="slotNaming" required>
              <option selected>Choose</option>
              <option value="alpha">Alphanumerical</option>
              <option value="numerical">Numerical</option>
            </select>
          </div>
          <div class="col-3">
            <label for="alphabets" class="form-label">Alphabets</label>
            <input
              type="number"
              class="form-control input-xl"
              id="alphabet"
              required
            />
          </div>
          <div class="col-3">
            <label for="numberPerAlphabet" class="form-label"
              >No/Alphabet</label
            >
            <input
              type="number"
              class="form-control input-xl"
              id="numberPerAlphabet"
              required
            />
          </div>
        </div>
        <div class="row g-1 col-3">
          <button class="button-xl-fill" type="submit">Create Account</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import router from '@/router';
export default {
  setup() {
    const phone1 = ref(false);
    const phone2 = ref(false);
    const phone3 = ref(true);

    const goBack = () => {
      router.push("/login");
    };

    const checkPhone1 = () => {
      if (phone1.value == false) {
        phone1.value = true;
      } else {
        phone1.value = false;
      }
    };
    const checkPhone2 = () => {
      if (phone2.value == false) {
        phone2.value = true;
      } else {
        phone2.value = false;
      }
    };
    const checkPhone3 = () => {
      if (phone3.value == false) {
        phone3.value = true;
      } else {
        phone3.value = false;
      }
    };

    return {
      phone1,
      phone2,
      phone3,
      checkPhone1,
      checkPhone2,
      checkPhone3,
      goBack,
    };
  },
};
</script>

<style scoped>
.container-fluid {
  background-color: #374258;
  color: #f74464;
  font-weight: bold;
  position: fixed;
}

.form-box {
  width: 100vw;
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
}

.form-label {
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: normal;
  font-size: 16pt;
  margin-bottom: 0;
}

.form-check-input {
  background-color: white;
  border: 2px solid #f74464;
  margin: 10px;
}

.form-check-input:checked {
  background-color: #f74464;
}
.addon {
  background-color: #f74464;
  border-radius: 0 95px 95px 0;
  font-size: 22pt;
  padding-top: 0;
  border: none;
  width: 40px;
}
</style>