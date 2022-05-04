<template>
  <div class="container-fluid">
    <router-link v-if="loggedIn == false" :to="{ path: `/` }">
      <i class="bi bi-chevron-left nav-icon"
    /></router-link>
    <router-link v-else :to="{ path: `/${user_id}` }">
      <i class="bi bi-chevron-left nav-icon"
    /></router-link>
    <form class="vue-form" @submit.prevent="submit">
      <div class="error-message">
        <p v-show="!email.valid">Oh, please enter a valid email address.</p>
      </div>

      <fieldset>
        <legend>Contact Form</legend>
        <div>
          <label class="label" for="name">Name</label>
          <input type="text" name="name" id="name" required v-model="name" />
        </div>
        <div>
          <label class="label" for="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            :class="{ email, error: !email.valid }"
            v-model="email.value"
          />
        </div>
        <div>
          <label class="label" for="textarea">Message</label>
          <textarea
            class="message"
            name="textarea"
            id="textarea"
            required
            v-model="message.text"
            :maxlength="message.maxlength"
          ></textarea>
          <span class="counter"
            >{{ message.text.length }} / {{ message.maxlength }}</span
          >
        </div>
        <div>
          <button
            type="submit"
            class="button-md-fill offset-md-7"
            @click.prevent="signIn"
          >
            Send Form
          </button>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  props: ["id"],
  data() {
    return {
      user_id: this.id,
      loggedIn: false,
      emailRegExp: RegExp(
        /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
      ),
      name: "",
      email: {
        value: "",
        valid: true,
      },
      message: {
        text: "",
        maxlength: 255,
      },
      submitted: false,
    };
  },
  beforeMount() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    });
  },
  methods: {
    submit() {
      this.submitted = true;
    },
    // validate by type and value
    validate(type, value) {
      if (type === "email") {
        this.email.valid = this.isEmail(value) ? true : false;
      }
    },
    // check for valid email adress
    isEmail(value) {
      return emailRegExp.test(value);
    },
  },
  watch: {
    // watching nested property
    "email.value"(value) {
      this.validate("email", value);
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Source+Code+Pro:300,400");

.nav-icon {
  position: relative;
  color: #f74464;
  margin-top: 10px;
  font-size: 32pt;
}

*,
*::after,
*::before {
  box-sizing: border-box;
}

html,
body,
.container {
  min-height: 100vh;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

a {
  color: #374258;
  text-decoration: none;
}

header {
  position: relative;
  height: 150px;
  padding-top: 100px;
}

header h1 {
  text-align: center;
  font-size: 2.4rem;
  font-weight: 300;
}

.vue-form {
  font-size: 16px;
  width: 500px;
  padding: 15px 30px;
  border-radius: 4px;
  margin: 50px auto;
  width: 500px;
  background-color: #fff;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.3);
}
.vue-form fieldset {
  margin: 24px 0 0 0;
}
.vue-form legend {
  padding-bottom: 10px;
  border-bottom: 1px solid #ecf0f1;
}
.vue-form div {
  position: relative;
  margin: 20px 0;
}
.vue-form h4,
.vue-form .label {
  color: #94aab0;
  margin-bottom: 10px;
}
.vue-form .label {
  display: block;
}
.vue-form input,
.vue-form textarea,
.vue-form label {
  color: #374258;
}
.vue-form input[type="text"],
.vue-form input[type="email"],
.vue-form textarea,
.vue-form legend {
  display: block;
  width: 100%;
  appearance: none;
}
.vue-form input[type="text"],
.vue-form input[type="email"],
.vue-form textarea,
.vue-form select {
  padding: 12px;
  border: 1px solid #cfd9db;
  background-color: #ffffff;
  border-radius: 0.25em;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.08);
}
.vue-form input[type="text"]:focus,
.vue-form input[type="email"]:focus,
.vue-form textarea:focus {
  outline: none;
  border-color: #374258;
  box-shadow: 0 0 5px rgba(44, 151, 222, 0.2);
}
.vue-form textarea {
  min-height: 120px;
  resize: vertical;
  overflow: auto;
}
.vue-form input[type="submit"] {
  border: none;
  background: #374258;
  border-radius: 0.25em;
  padding: 12px 20px;
  color: #ffffff;
  font-weight: bold;
  float: right;
  cursor: pointer;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  appearance: none;
}
.vue-form .error-message {
  height: 35px;
  margin: 0px;
}
.vue-form .error-message p {
  background-color: rgba(255, 64, 0, 0.4);
  color: #ffffff;
  font-size: 1.4rem;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  border-radius: 0.25em;
  padding: 16px;
}
.vue-form .error {
  border-color: rgba(255, 64, 0, 0.4) !important;
}
.vue-form .counter {
  background-color: #ecf0f1;
  position: absolute;
  right: 0px;
  top: 0px;
  font-size: 10px;
  padding: 4px;
}

@-webkit-keyframes cd-bounce {
  0%,
  100% {
    -webkit-transform: scale(1);
  }
  50% {
    -webkit-transform: scale(0.8);
  }
}
@-moz-keyframes cd-bounce {
  0%,
  100% {
    -moz-transform: scale(1);
  }
  50% {
    -moz-transform: scale(0.8);
  }
}
@keyframes cd-bounce {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.8);
  }
}
</style>