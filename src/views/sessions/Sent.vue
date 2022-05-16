<template>
  <div class="center">
    <div class="error">
      <img src="@/assets/images/email_sent.jpg" alt="email_sent" />
    </div>
    <div class="text">We just sent you an email, check your inbox.</div>
    <router-link class="mt-2 button-md-fill" to="/login">Go Login </router-link>
    <button class="mt-2 button-md-unfill" @click="resend">Resend Email</button>
  </div>
</template>

<script>
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
export default {
  data() {
    return {
      auth: getAuth(),
    };
  },
  props: ["email"],
  mounted() {
    console.log(this.email);
  },
  methods: {
    resend() {
      sendPasswordResetEmail(this.auth, this.email)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);
        });
      console.log(this.email);
    },
  },
};
</script>

<style scoped>
.center {
  margin-top: 6rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.error {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
}
.text {
  margin-top: 2rem;
  font-weight: normal;
  color: #f74464;
}

.button-md-fill {
  color: #374258;
  font-weight: bold;
  padding-top: 15px;
  background-color: #f74464;
  text-decoration: none;
  text-align: center;
}

.button-md-fill:hover {
  background-color: #c52c45;
}
.button-md-unfill {
  color: #f74464;
}
.button-md-unfill:hover {
  color: #c52c45;
  border: 3px solid #c52c45;
}
</style>