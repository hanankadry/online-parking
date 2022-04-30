<template>
  <background />
  <div class="container">
    <div class="row justify-content-end">
      <h1>Let's Get Started</h1>
      <h4 class="mb-5">Good to see you back</h4>

      <form>
        <div class="mt-5">
          <p class="lead" v-show="errorMsg != null">{{ errorMsg }}</p>
          <div class="input-icons">
            <i class="bi bi-envelope icon" />
            <input
              class="form-control input-lg"
              v-model="user.email"
              type="email"
              placeholder="Enter Email"
              required
            />
          </div>
          <div class="input-icons">
            <i class="bi bi-lock icon" />
            <input
              type="password"
              v-model="user.password"
              class="form-control input-lg"
              placeholder="Enter Password"
              required
            />
          </div>
          <div class="row mx-3">
            <router-link to="/forgot" class="forget-code"
              >Forget Your Password?</router-link
            >
          </div>
          <div class="row mx-3">
            <div class="col-xl-2 col-lg-3 col-md-4">
              <label class="form-check-label remember-me" for="toggle"
                >Remember Me</label
              >
            </div>
            <div class="col-lg-3 col-md-3">
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="toggle"
                  v-model="user.remember"
                />
              </div>
            </div>
          </div>

          <div class="btn-group-vertical mt-5">
            <button
              type="submit"
              class="button-lg-fill"
              @click.prevent="signIn"
            >
              Sign In
            </button>
            <button type="button" class="button-lg-unfill" @click="signUp">
              Create Account
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
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import axios from "axios";

export default {
  data() {
    return {
      auth: getAuth(),
      errorMsg: null,
      user: {
        id: "",
        email: "",
        password: "",
        rememeber: false,
      },
      parking_id: null,
    };
  },
  beforeMount() {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.getUser();
        this.$router.replace(`/dashboard/${this.parking_id}`);
      }
    });
  },
  methods: {
    signIn() {
      this.getUser();
    },
    getUser() {
      axios
        .get(`/admin/${this.user.email}`)
        .then((response) => {
          if (response.data.code == 200) {
            response.data.user.map((user) => {
              this.user.id = user.id;
            });
            this.checkUser(this.user.id);

            console.log(response.data);
          } else {
            this.errorMsg = "Email or Password is incorrect.";
          }
        })
        .catch((errors) => {
          console.log(errors.data);
        });
    },
    getParkingID(user_id) {
      axios
        .get(`/admin/parking/${user_id}`)
        .then((response) => {
          this.parking_id = response.data.parking.find((item) => item.id).id;
          console.log(this.parking_id);
          console.log(response.data);
        })
        .catch((errors) => {
          console.log(errors.data);
        });
    },
    async checkUser(user_id) {
      if (this.user.rememeber == true) {
        setPersistence(this.auth, browserLocalPersistence)
          .then(() => {
            console.log("Local");
            return this.firebaseSignIn(user_id);
          })
          .catch((error) => {
            const errorCode = error.code;
            console.log(errorCode);
          });
      } else {
        setPersistence(this.auth, browserSessionPersistence)
          .then(() => {
            console.log("Session");
            return this.firebaseSignIn(user_id);
          })
          .catch((error) => {
            const errorCode = error.code;
            console.log(errorCode);
          });
      }
    },
    async firebaseSignIn(user_id) {
      await signInWithEmailAndPassword(
        this.auth,
        this.user.email,
        this.user.password
      )
        .then((userCredential) => {
          const user = userCredential.user;
          this.getParkingID(user_id);
          console.log(this.parking_id);
          this.$router.push(`/dashboard/${this.parking_id}`);
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);
        });
    },
    signUp() {
      this.$router.push("/signup");
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

h1,
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

.addon {
  background-color: #f74464;
  border-radius: 0 95px 95px 0;
  font-size: 22pt;
  padding-top: 0;
  border: 2px solid #374258;
  width: 40px;
}

@media screen and (max-width: 1140px) {
  .container {
    left: 60%;
  }
}
@media screen and (max-width: 960px) {
  .container {
    left: 55%;
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
}

.form-check-input {
  color: #f74464;
}

.form-check-input:checked {
  background-color: #f74464;
}
</style>