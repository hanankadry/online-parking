<template>
  <Background />
  <div class="container">
    <h1>Forgot Password?</h1>
    <h4>Don't worry. You can reset it.</h4>

    <b-form @submit="onSubmit" style="margin-top: 5rem">
      <label for="email" style="margin-left: 10px">Enter Account Email</label>
      <b-form-input
        id="email"
        type="email"
        v-model="user.email"
        placeholder="Enter Email"
        style="border-radius: 95px; height: 40px; width: 20rem; margin: 5px"
        required
      >
      </b-form-input>

      <b-button-group vertical style="margin-top: 10rem">
        <b-button
          type="submit"
          style="
            background-color: #f74464;
            border-radius: 95px;
            height: 40px;
            width: 20rem;
            color: white;
            position: relative;
            margin: 5px;
            border: none;
            font-weight: bold;
          "
        >
          Send Email
        </b-button>
        <b-button
          @click="signIn"
          style="
            border: 3px solid #f74464;
            border-radius: 95px;
            height: 40px;
            background-color: transparent;
            width: 20rem;
            padding-top: 0;
            margin: 5px;
            font-weight: bold;
          "
        >
          Sign In
        </b-button>
      </b-button-group>
    </b-form>
  </div>
</template>

<script>
import Background from "@/components/Background";
export default {
  data() {
    return {
      user: {
        id: "",
        email: "",
      },
    };
  },
  components: {
    Background,
  },
  methods: {
    onSubmit() {
      //send code through mail and switch to reset password page
      console.log(this.user.email);
    },
    signIn() {
      //return to login page
      this.$router.push('/login');
    }
  },
};
</script>

<style scoped>
.container {
  font-weight: bold;
  text-align: justify;
  margin-top: 5rem;
  top: -1px;
  left: 72.5%;
  position: fixed;
  color: white;
}
h1, h4 {
  font-weight: bold;
  margin: 0;
}
</style>