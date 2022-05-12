<template>
  <router-view />
</template>
<style>
@import url("@/assets/styles/index.css");
</style>
<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  beforeMount() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
      } else {
        this.$router.replace("/");
      }
    });
  },
};
</script>
