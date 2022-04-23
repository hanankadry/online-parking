<template>
  <div class="container-fluid">
    <router-link :to="{ path: `/${id}` }">
      <i class="bi bi-chevron-left nav-icon"
    /></router-link>
  </div>
</template>

<script>
export default {
  props: ["id"],
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