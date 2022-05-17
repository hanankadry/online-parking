<template>
  <background />
  <div class="container">
    <div class="row justify-content-end">
      <h2>Reset Your Password</h2>
      <h4 class="mb-5">Using the code we sent you</h4>

      <form autocomplete="off">
        <div class="mt-5">
          <p class="lead" v-show="errorMsg != null">{{ errorMsg }}</p>
          <div class="input-icons">
            <i class="bi bi-envelope icon" />
            <input
              class="form-control input-lg"
              type="email"
              v-model="email"
              placeholder="Enter Email"
              required
            />
          </div>
          <div class="input-icons">
            <i class="bi bi-lock icon" />
            <input
              type="password"
              class="form-control input-lg"
              placeholder="Enter Password"
              v-model="password"
              required
            />
          </div>
          <div class="input-icons">
            <i class="bi bi-lock icon" />
            <input
              type="password"
              class="form-control input-lg"
              placeholder="Confirm Password"
              v-model="confirm_pass"
              required
            />
          </div>

          <div class="row mt-0 mx-2">
            <div class="col-xl-2 col-lg-3 col-md-4">
              <a href="#" class="resend-code" id="link" @click="play">
                <h5>Resend Email</h5></a
              >
            </div>
            <div class="col-lg-3 col-md-3">
              <p id="timer" v-if="timerEnabled">00:{{ timerCount }}</p>
              <p id="timer" v-else>01:00</p>
            </div>
          </div>
          <div class="btn-group-vertical mt-5">
            <button
              type="submit"
              class="button-lg-fill"
              @click.prevent="resetPass"
            >
              Reset Password
            </button>
            <button type="button" class="button-lg-unfill" @click="goBack">
              Re-enter Email
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {
  getAuth,
  confirmPasswordReset,
  sendPasswordResetEmail,
} from "firebase/auth";
import axios from "axios";
export default {
  data() {
    return {
      errorMsg: null,
      auth: getAuth(),
      min: "1:00",
      timerEnabled: false,
      timerCount: 59,
      code: this.$route.query.oobCode,
      password: "",
      confirm_pass: "",
      email: "",
    };
  },

  watch: {
    timerEnabled(value) {
      if (value) {
        setTimeout(() => {
          this.timerCount--;
        }, 1000);
      }
    },

    timerCount: {
      handler(value) {
        if (value > 0 && this.timerEnabled) {
          setTimeout(() => {
            this.timerCount--;
          }, 1000);
        }
        if (this.timerCount == 0) {
          this.timerEnabled = false;
          this.timerCount = 59;
        }
      },
      immediate: true, // This ensures the watcher is triggered upon creation
    },
  },

  methods: {
    reset() {
      confirmPasswordReset(this.auth, this.code, this.password)
        .then((response) => {
          console.log(response);
          console.log("success");
          // this.resetPass();
        })
        .catch((errors) => {
          console.log("failure");
          const errorCode = errors.code;
          if (errorCode == "auth/invalid-action-code") {
            this.errorMsg =
              "Reset code had expired! Click Resend Email to get a new one.";
          }
          console.log(errorCode);
        });
      this.$router.push("/login");
    },
    resetPass() {
      if (this.password == this.confirm_pass) {
        axios
          .post(`/admin/newpass/${this.email}`, {
            password: this.password,
          })
          .then((response) => {
            this.reset();
            console.log("success");
            console.log(response.data);
          })
          .catch((errors) => {
            console.log("failure");
            console.log(errors.data);
          });
      } else {
        this.errorMsg = "Password and Confirm Password don't match.";
      }
    },
    goBack() {
      this.$router.push("/forgot");
    },
    play() {
      sendPasswordResetEmail(this.auth, this.email)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);
        });
      console.log(this.email);
      this.timerEnabled = true;
    },
  },
};
</script>

<style scoped>
.lead {
  color: white;
  width: 20rem;
  text-align: justify;
  background-color: rgba(255, 64, 0, 0.4);
  padding: 5px;
  font-size: 12pt;
}
.container {
  font-weight: bold;
  text-align: justify;
  margin-top: 5rem;
  top: -1px;
  left: 70%;
  position: fixed;
  color: white;
}

h2,
h4 {
  font-weight: bold;
}

.input-lg {
  border-radius: 95px;
  height: 40px;
  width: 20rem;
  padding-left: 2.5rem;
  padding-bottom: 8px;
  border: none;
}

.icon {
  position: absolute;
  padding-top: 7px;
  padding-left: 1rem;
  min-width: 40px;
  color: #f74464;
}
.resend-code {
  margin-top: 0;
  color: white;
  position: relative;
  text-decoration: none;
}

@media screen and (max-width: 1140px) {
  .container {
    left: 60%;
  }
}
@media screen and (max-width: 960px) {
  .container {
    left: 57%;
  }
}

@media screen and (max-width: 720px) {
  .container {
    left: 47%;
  }
}

@media screen and (max-width: 540px) {
  .container {
    left: 18%;
  }
}

.forget-code {
  color: white;
  position: relative;
}
.forget-code:hover {
  color: #f74464;
}
.remember-me {
  color: #f74464;
  position: absolute;
}

.form-check-input {
  color: #f74464;
}

.form-check-input:checked {
  background-color: #f74464;
}
</style>