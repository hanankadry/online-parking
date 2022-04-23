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
          <button class="btn" @click="goBack">
            <i class="col bi bi-chevron-left nav-icon" />
          </button>
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
                    <i class="bi bi-envelope md-icon" />
                    <label for="email" class="form-label">Email</label>
                    <input
                      type="email"
                      v-model="user.email"
                      class="form-control input-lg"
                      id="email"
                      disabled
                      required
                    />
                  </div>
                  <div class="col-md-6">
                    <i class="bi bi-image md-icon" />
                    <label for="picture" class="form-label"
                      >Profile Picture</label
                    >
                    <input
                      type="file"
                      :change="user.photoURL"
                      class="form-control-lg input-file-lg"
                      id="picture"
                      disabled
                      required
                    />
                  </div>
                </div>
                <div class="row pb-3 px-5">
                  <div class="col-lg-4">
                    <i class="bi bi-person-lines-fill md-icon" />
                    <label for="nationalID" class="form-label"
                      >National ID</label
                    >
                    <input
                      type="text"
                      v-model="user.national_id"
                      class="form-control input-lg"
                      id="nationalID"
                      disabled
                      required
                    />
                  </div>
                  <div class="col-lg-4">
                    <i class="bi bi-telephone md-icon" />
                    <label for="phone" class="form-label">Phone</label>
                    <input
                      type="text"
                      v-model="user.phone"
                      class="form-control input-lg"
                      id="phone"
                      disabled
                      required
                    />
                  </div>
                  <div class="col-lg-4">
                    <i class="bi bi-calendar2-week md-icon" />
                    <label for="dateOfBirth" class="form-label"
                      >Date of Birth</label
                    >
                    <input
                      type="date"
                      v-model="user.dob"
                      class="form-control input-lg date"
                      @change="getAge"
                      id="dateOfBirth"
                      disabled
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
                      disabled
                      required
                    />
                  </div>
                </div>
                <div class="row pb-3 px-5" v-if="editting == true">
                  <div class="error-box" v-if="v$.$error">
                    <ul>
                      <li v-if="v$.user.email.$error">
                        {{ v$.user.email.$errors[0].$message }}
                      </li>
                      <li v-if="v$.user.national_id.$error">
                        {{ v$.user.national_id.$errors[0].$message }}
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
                </div>
                <div class="row pt-4 pb-3 px-5" v-if="editting == false">
                  <button
                    class="button-md-fill col-3 offset-lg-9 offset-sm-8"
                    @click="enable"
                  >
                    Edit
                  </button>
                </div>
                <div class="row pt-4 pb-3 px-5" v-else>
                  <div class="buttons offset-sm-5 offset-lg-7">
                    <button
                      class="button-md-unfill col me-2"
                      type="button"
                      @click="disable"
                    >
                      Cancel
                    </button>
                    <button
                      class="button-md-fill col"
                      type="button"
                      @click="updateUser"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
              <!-- re-authenticate modal -->
              <!-- <div
                class="modal fade delete-modal"
                id="myModal"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="staticBackdropLabel">
                        Re-authenticate
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
                      <form class="row g-3">
                        <div class="col-auto">
                          <label for="staticEmail2" class="visually-hidden"
                            >Email</label
                          >
                          <input
                            type="text"
                            readonly
                            class="form-control-plaintext"
                            id="staticEmail2"
                            value="email@example.com"
                          />
                        </div>
                        <div class="col-auto">
                          <label for="inputPassword2" class="visually-hidden"
                            >Password</label
                          >
                          <input
                            type="password"
                            class="form-control"
                            id="inputPassword2"
                            placeholder="Password"
                          />
                        </div>
                        <div class="col-auto">
                          <button type="submit" class="btn btn-primary mb-3">
                            Confirm identity
                          </button>
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="button-xs-unfill">
                        Cancel
                      </button>
                      <button
                        type="button"
                        @click="deleteSecurity(current_user.id)"
                        class="button-xs-danger"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div> -->
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
                  <div class="error-box" v-if="v$.$error">
                    <ul>
                      <li v-if="v$.update.oldPass.$error">
                        {{ v$.update.oldPass.$errors[0].$message }}
                      </li>
                      <li v-if="v$.update.newPass.$error">
                        {{ v$.update.newPass.$errors[0].$message }}
                      </li>
                      <li v-if="v$.update.confirmNewPass.$error">
                        {{ v$.update.confirmNewPass.$errors[0].$message }}
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="row pb-3 px-5">
                  <div class="buttons col offset-lg-6">
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
import {
  getAuth,
  updateProfile,
  updateEmail,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from "firebase/auth";
import axios from "axios";
import useValidate from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  maxLength,
  numeric,
  helpers,
  sameAs,
} from "@vuelidate/validators";
import { use } from "chai";
export default {
  props: ["id"],
  data() {
    return {
      auth: getAuth(),
      v$: useValidate(),
      parking_id: this.id,
      show: false,
      showCheck: false,
      confirm: false,
      oldPass: false,
      newPass: false,
      user: {
        national_id: "",
        name: "",
        email: "",
        address: "",
        gender: "",
        phone: "",
        dob: "",
        password: "",
        photoURL: "",
      },
      update: {
        oldPass: "",
        newPass: "",
        confirmNewPass: "",
      },
      editting: false,
      thisYear: new Date().toLocaleDateString("en-us", {
        year: "numeric",
      }),
      minValue: null,
    };
  },
  validations() {
    return {
      update: {
        oldPass: {
          required: helpers.withMessage("Old Password is required", required),
          sameAsPassword: helpers.withMessage(
            "Old Passwaord isn't a match",
            sameAs(this.user.password)
          ),
        },
        newPass: {
          required: helpers.withMessage("New Password is required", required),
        },
        confirmNewPass: {
          required: helpers.withMessage(
            "New Password Confirmation is required",
            required
          ),
          sameAsPassword: helpers.withMessage(
            "New Password and Password Confirmation must be match",
            sameAs(this.update.newPass)
          ),
        },
      },
      user: {
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
  mounted() {
    this.getUser();
    console.log(this.user.email);
  },
  methods: {
    //check age if < 21
    getAge() {
      const year = this.user.dob.split("-", 1);
      this.minValue = this.thisYear - year;
      return this.minValue;
    },
    //get user data
    getUser() {
      axios
        .get(`/admin/id/${this.parking_id}`)
        .then((response) => {
          response.data.user.map((user) => {
            this.user.dob = user.dob;
            this.user.name = user.username;
            this.user.gender = user.gender;
            this.user.national_id = user.id;
            this.user.email = user.email;
            this.user.address = user.address;
            this.user.phone = user.phone;
            this.user.password = user.password;
          });
          const userAuth = this.auth.currentUser;
          if (userAuth !== null) {
            this.user.photoURL = userAuth.photoURL;
            const uid = userAuth.uid;
          }
          console.log(this.user);
          console.log(response.data);
        })
        .catch((errors) => {
          console.log(errors.data);
        });
    },
    //return to previous page
    goBack() {
      this.$router.back();
    },
    //show to toast on change made
    makeToast(msg, type) {
      this.$toast.show(msg, { type: type });
    },
    //general settings save btn action
    updateGeneral() {
      this.v$.$validate();
      if (!this.v$.$error) {
        this.updateUser();

        // this.updatePass();
      }
    },
    //change password save btn action
    update() {
      this.v$.$validate();
      if (!this.v$.$error) {
        // this.updateUser();
        this.updatePass();
      }
    },
    //input enable action
    enable() {
      this.editting = true;
      document.getElementById("email").disabled = "";
      document.getElementById("picture").disabled = "";
      document.getElementById("nationalID").disabled = "";
      document.getElementById("phone").disabled = "";
      document.getElementById("dateOfBirth").disabled = "";
      document.getElementById("address").disabled = "";
    },
    //input disable action
    disable() {
      this.editting = false;
      document.getElementById("email").disabled = "true";
      document.getElementById("picture").disabled = "true";
      document.getElementById("nationalID").disabled = "true";
      document.getElementById("phone").disabled = "true";
      document.getElementById("dateOfBirth").disabled = "true";
      document.getElementById("address").disabled = "true";
    },
    //change user data in database and firebase
    updateUser() {
      const user = this.auth.currentUser;
      axios
        .post(`/user/update/${this.user.national_id}`, {
          dob: this.user.dob,
          username: this.user.name,
          gender: this.user.gender,
          id: this.user.national_id,
          email: this.user.email,
          address: this.user.address,
          phone: this.user.phone,
          role: "admin",
        })
        .then((response) => {
          this.makeToast("update successful", "success");
          this.getUser();
          this.disable();
          console.log(response.data);
        })
        .catch((errors) => {
          this.makeToast("update failed", "error");
          console.log(errors.data);
        });
      if (this.user.photoURL != null) {
        updateProfile(this.auth.currentUser, {
          photoURL: this.user.photoURL,
        })
          .then((response) => {
            alert("successful photo");
            console.log(response);
          })
          .catch((error) => {
            console.log(error.data);
          });
      }
      if (this.user.email != user.email) {
        updateEmail(user, this.user.email)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            if (error.code == "auth/requires-recent-login") {
              const credential = EmailAuthProvider.credential(
                user.email,
                this.user.password
              );
              reauthenticateWithCredential(user, credential)
                .then((response) => {
                  console.log(response);
                  console.log("email change successful");
                })
                .catch((error) => {
                  console.log(error.data);
                  console.log("email change failed");
                });
            } else {
              const errorMessage = error.message;
              console.log(errorMessage);
            }
          });
      }
    },
    //
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
.error-box {
  background-color: rgba(255, 64, 0, 0.4);
  margin: 10px;
  border-radius: 3px;
}
.btn {
  background-color: transparent;
  border: none;
  padding: 0;
}

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
  padding-top: 15px;
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
  text-decoration: none;
}

/* .nav-link:focus {
  background-color: #374258;
  border: none;
} */

.nav-link:is(.active) {
  background-color: #374258 !important;
  border: none;
  border-radius: 95px;
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

.input-file-lg {
  border-radius: 95px;
  height: 50px;
  width: calc(100% - 5px);
  background-color: white;
  border: none;
  color: black;
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

input[type="file"]::-webkit-file-upload-button {
  border: none;
  height: 50px;
  border-radius: 95px;
  background-color: #f74464;
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

#general-settings {
  overflow-x: hidden;
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