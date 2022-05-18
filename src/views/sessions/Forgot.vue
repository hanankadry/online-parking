<template>
  <background />
  <div class="container">
    <div class="row mt-5 justify-content-end">
      <h1>Forgot Password?</h1>
      <h4 class="mb-5">Don't worry. You can reset it.</h4>

      <form>
        <div class="mt-5">
          <p class="lead" v-show="errorMsg != null">
            {{ errorMsg }}
          </p>
          <label for="email" class="form-label mb-0">Enter Account Email</label>
          <div class="input-icons">
            <i class="bi bi-envelope icon" />
            <input
              type="email"
              class="form-control m-1 mb-5 input-lg"
              id="email"
              placeholder="Enter Email"
              v-model="email"
              required
            />
          </div>
        </div>
        <div class="btn-group-vertical mt-5">
          <button
            type="submit"
            class="button-lg-fill"
            @click.prevent="sendEmail"
          >
            Send Email
          </button>
          <button type="button" class="button-lg-unfill" @click="signIn">
            Sign In
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export default {
  data() {
    return {
      email: "",
      auth: getAuth(),
      errorMsg: null,
    };
  },
  methods: {
    sendEmail() {
      sendPasswordResetEmail(this.auth, this.email)
        .then((response) => {
          console.log(response);
          router.push(`/sent/${this.email}`);
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);
          if (errorCode == "auth/user-not-found") {
            this.errorMsg = "User not found, Please check your email.";
          }
        });
    },
    signIn() {
      router.push("/login");
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
  margin: 0;
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
</style>