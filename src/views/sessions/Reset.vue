<template>
  <background />
  <div class="container">
    <div class="row justify-content-end">
      <h2>Reset Your Password</h2>
      <h4 class="mb-5">Using the code we sent you</h4>

      <form>
        <div class="mt-5">
          <!-- <div class="input-icons">
            <i class="bi bi-123 icon" />
            <input
              class="form-control input-lg"
              type="number"
              placeholder="Enter Code"
              required
            />
          </div> -->
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
                <h5>Resend Code</h5></a
              >
            </div>
            <div class="col-lg-3 col-md-3">
              <p id="timer" v-if="timerEnabled">00:{{ timerCount }}</p>
              <p id="timer" v-else>01:00</p>
            </div>
          </div>
          <div class="btn-group-vertical mt-5">
            <button type="submit" class="button-lg-fill" @click="reset">
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
import { getAuth, confirmPasswordReset, checkActionCode } from "firebase/auth";
export default {
  data() {
    return {
      auth: getAuth(),
      min: "1:00,
      timerEnabled: false,
      timerCount: 59,
      password: "",
      confirm_pass: "",
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
        if(this.timerCount==0){
        this.timerEnabled=false;
        this.timerCount=59;
      }
      },
      immediate: true, // This ensures the watcher is triggered upon creation
    },
  },

  methods: {
    reset() {
      this.$router.push("/login");
    },
    goBack() {
      this.$router.push("/forgot");
    },
    play() {
      this.timerEnabled = true;
    },
  },
};
</script>

<style scoped>
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