<template>
  <div class="container-fluid">
    <router-link v-if="loggedIn == false" :to="{ path: `/` }">
      <i class="bi bi-chevron-left nav-icon"
    /></router-link>
    <router-link v-else :to="{ path: `/${user_id}` }">
      <i class="bi bi-chevron-left nav-icon"
    /></router-link>
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
};
</script>

<style scoped>
.nav-icon {
  position: relative;
  color: #f74464;
  margin-top: 10px;
  font-size: 32pt;
}
</style>