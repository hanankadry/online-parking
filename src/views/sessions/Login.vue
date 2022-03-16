<template>
  <background />
  <div class="container">
    <div class="row justify-content-end">
      <h1>Let's Get Started</h1>
      <h4 class="mb-5">Good to see you back</h4>

      <form>
        <div class="mt-5">
          <div class="input-icons">
            <i class="bi bi-envelope icon" />
            <input
              class="form-control input-lg"
              type="email"
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
                <input class="form-check-input" type="checkbox" id="toggle" />
              </div>
            </div>
          </div>

          <div class="btn-group-vertical mt-5">
            <button type="submit" class="button-lg-fill" @click="signIn">
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
export default {
  methods: {
    signIn() {
      this.$router.push("/dashboard");
    },
    signUp() {
      this.$router.push("/signUp");
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