<template>
  <div class="container-fluid">
    <div class="d-flex align-items-start">
      <div
        class="nav flex-column nav-pills me-3"
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      >
        <div class="row row-cols-auto mb-5 mt-2">
          <a href="/dashboard">
            <i class="col bi bi-chevron-left nav-icon"
          /></a>
          <p class="col title text-start">
            <i class="col bi bi-gear-fill nav-icon me-1" />Settings
          </p>
        </div>
        <button
          class="nav-link mb-3 active"
          id="v-pills-settings-tab"
          data-bs-toggle="pill"
          data-bs-target="#general-settings"
          type="button"
          role="tab"
          aria-controls="v-pills-settings"
          aria-selected="true"
        >
          General Settings
        </button>
        <button
          class="nav-link"
          id="v-pills-password-tab"
          data-bs-toggle="pill"
          data-bs-target="#change-password"
          type="button"
          role="tab"
          aria-controls="v-pills-password"
          aria-selected="false"
        >
          Change Password
        </button>
      </div>
      <div class="tab-content" id="v-pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="general-settings"
          role="tabpanel"
          aria-labelledby="v-pills-settings-tab"
        >
          <div class="container">
            <div class="body">
              <p class="header">General Settings</p>
              <form class="mt-5">
                <div class="row pb-3 px-5">
                  <div class="col-md-6">
                    <i class="bi bi-image md-icon" />
                    <label for="name" class="form-label">Profile Picture</label>
                    <input
                      type="file"
                      class="form-control form-control-lg upload-input"
                      id="name"
                      required
                    />
                  </div>
                  <div class="col-md-6">
                    <i class="bi bi-person md-icon" />
                    <label for="email" class="form-label">Name</label>
                    <input
                      type="email"
                      v-model="user.email"
                      class="form-control input-lg"
                      id="email"
                      required
                    />
                  </div>
                </div>
                <div class="row pb-3 px-5">
                  <div class="col-md-6">
                    <i class="bi bi-person-lines-fill md-icon" />
                    <label for="nationalID" class="form-label"
                      >National ID</label
                    >
                    <input
                      type="text"
                      v-model="user.nationalID"
                      class="form-control input-lg"
                      id="nationalID"
                      required
                    />
                  </div>
                  <div class="col-lg-6">
                    <i class="bi bi-calendar2-week md-icon" />
                    <label for="dateOfBirth" class="form-label"
                      >Date of Birth</label
                    >
                    <input
                      type="date"
                      v-model="user.dateOfBirth"
                      class="form-control input-lg date"
                      id="dateOfBirth"
                      required
                    />
                  </div>
                </div>
                <div class="row pb-3 px-5">
                  <div class="col-lg-12">
                    <i class="bi bi-geo-alt md-icon" />
                    <label for="address" class="form-label">Address</label>
                    <input
                      type="text"
                      v-model="user.address"
                      class="form-control input-lg"
                      id="address"
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
                    <i class="bi bi-telephone md-icon" />
                    <label for="phone1" class="form-label">Phone</label>
                    <div class="input-group mb-3">
                      <input
                        type="text"
                        v-model="input.phone"
                        class="form-control input-lg"
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
                <div class="row pb-3 px-5">
                  <button
                    class="button-md-fill col offset-md-9 me-5"
                    @click="editting = true"
                    v-if="editting == false"
                  >
                    Edit
                  </button>
                  <div class="buttons col offset-md-7" v-else>
                    <button
                      class="button-md-unfill me-2"
                      type="button"
                      @click="editting = false"
                    >
                      Cancel
                    </button>
                    <button
                      class="button-md-fill"
                      type="button"
                      @click="editting = false"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="change-password"
          role="tabpanel"
          aria-labelledby="v-pills-password-tab"
        >
          <div class="container">
            <div class="body">
              <p class="header">Change Password</p>
              <form class="mt-5">
                <div class="row pb-3 px-5">
                  <div class="col-lg-5">
                    <i class="bi bi-lock md-icon" />
                    <label for="oldPassword" class="form-label"
                      >Old Password</label
                    >
                    <span
                      class="badge bg-success float-end"
                      v-show="show == true"
                      v-if="oldPass == true"
                      ><i class="bi bi-check-circle-fill badge-icon"
                    /></span>
                    <span
                      class="badge bg-warning float-end"
                      v-else
                      v-show="show == true"
                      ><i class="bi bi-x-circle-fill badge-icon"
                    /></span>
                    <input
                      type="password"
                      v-model="update.oldPass"
                      @change="checkPass"
                      class="form-control input-lg"
                      id="oldPassword"
                      required
                    />
                  </div>
                </div>
                <div class="row pb-3 px-5">
                  <div class="col-lg-5">
                    <i class="bi bi-lock md-icon" />
                    <label for="newPassword" class="form-label"
                      >New Password</label
                    >
                    <span
                      class="badge bg-success float-end"
                      v-show="showCheck == true"
                      v-if="newPass == true"
                      ><i class="bi bi-check-circle-fill badge-icon"
                    /></span>
                    <span
                      class="badge bg-warning float-end"
                      v-else
                      v-show="showCheck == true"
                      ><i class="bi bi-x-circle-fill badge-icon"
                    /></span>
                    <input
                      type="password"
                      v-model="update.newPass"
                      class="form-control input-lg"
                      id="newPassword"
                      required
                    />
                  </div>
                </div>
                <div class="row pb-3 px-5">
                  <div class="col-lg-5">
                    <i class="bi bi-lock md-icon" />
                    <label for="confirmPassword" class="form-label"
                      >Confirm New Password</label
                    >
                    <span
                      class="badge bg-success float-end"
                      v-show="showCheck == true"
                      v-if="confirm == true"
                      ><i class="bi bi-check-circle-fill badge-icon"
                    /></span>
                    <span
                      class="badge bg-warning float-end"
                      v-else
                      v-show="showCheck == true"
                      ><i class="bi bi-x-circle-fill badge-icon"
                    /></span>
                    <input
                      type="password"
                      v-model="update.confirmNewPass"
                      class="form-control input-lg"
                      id="confirmPassword"
                      required
                    />
                  </div>
                </div>
                <div class="row pb-3 px-5">
                  <div class="buttons col offset-md-7">
                    <button class="button-md-unfill me-2" type="button">
                      Cancel
                    </button>
                    <button
                      class="button-md-fill"
                      type="button"
                      @click.prevent="updatePass"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      showCheck: false,
      confirm: false,
      oldPass: false,
      newPass: false,
      user: {
        name: "",
        nationalID: 0,
        email: "",
        address: "",
        password: "",
        gender: ["male", "female"],
        phoneNumbers: [{ phone: "" }],
        dateOfBirth: "",
      },
      update: {
        oldPass: "",
        newPass: "",
        confirmNewPass: "",
      },
      editting: false,
    };
  },
  methods: {
    addPhone(value, array) {
      array.push({ value: "" });
      console.log(array);
    },
    removePhone(index, array) {
      array.splice(index, 1);
      console.log(array);
    },
    updateUser() {
      this.user.password = this.update.newPass;
    },
    checkPass() {
      this.show = true;
      if (this.update.oldPass == this.user.password) {
        this.oldPass = true;
      } else {
        this.oldPass = false;
      }
    },
    updatePass() {
      this.showCheck = true;
      if (this.update.newPass == this.update.oldPass) {
        this.newPass = false;
      } else {
        this.newPass = true;
        if (this.update.confirmNewPass != this.update.newPass) {
          this.confirm = false;
        } else {
          this.confirm = true;
          this.showCheck = false;
          this.user.password = this.update.newPass;
          this.show = false;
          this.update.oldPass = "";
          this.update.newPass = "";
          this.update.confirmNewPass = "";
        }
      }
    },
  },
};
</script>

<style scoped>
.container-fluid {
  top: 0;
  background-color: #374258;
  padding: 0;
  height: inherit;
}

.nav {
  background-color: #f74464;
  height: 100vh;
  width: 20%;
  padding: 10px;
  align-content: center;
}

.nav-icon {
  position: relative;
  color: #374258;
  font-size: 24pt;
}

.badge-icon {
  color: #374258;
  font-size: 20pt;
}

.title {
  font-size: 30px;
}

.nav-link {
  border: 3px solid #374258;
  background-color: transparent;
  border-radius: 95px;
  height: 55px;
  color: white;
  padding-bottom: 15px;
  position: relative;
  font-weight: bold;
  font-size: larger;
}

.nav-link:focus {
  background-color: #374258;
  border: none;
}

.nav-link:active {
  background-color: #374258;
  border: none;
}

.body {
  padding: 20px;
  color: white;
  width: 70vw;
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

.form-label {
  font-size: 20pt;
}

.input-lg {
  border-radius: 95px;
  height: 50px;
  background-color: white;
  border: none;
  padding-left: 30px;
}

.upload-input {
  border-radius: 95px;
  background-color: white;
  border: none;
  padding-left: 30px;
}

.addon {
  background-color: #f74464;
  border-radius: 0 95px 95px 0;
  font-size: 22pt;
  padding-top: 0;
  border: 2px solid white;
  width: 40px;
}

input[type="date"]::-webkit-calendar-picker-indicator {
  background-image: url("@/assets/images/icons8-calendar-96-pink.png");
  background-position: end;
  background-size: 20px 20px, 20px 20px;
  background-repeat: no-repeat;
}
.selector-lg {
  border-radius: 95px;
  height: 50px;
  background-color: white;
  border: none;
  padding-left: 30px;
  background-image: url("@/assets/images/icons8-chevron-down-96-pink.png");
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

@media (max-width: 1255px) {
  .nav {
    width: 25%;
  }
}
@media (max-width: 986px) {
  .nav {
    width: 30%;
  }
}
@media (max-width: 816px) {
  .nav {
    width: 35%;
  }
}
@media (max-width: 692px) {
  .nav {
    width: 40%;
  }
}
</style>