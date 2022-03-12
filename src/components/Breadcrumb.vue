<template>
  <nav class="px-5 pt-5">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="/dashboard">Dashboard</a></li>
    </ol>
    <p class="date">Fri - Mar, 3rd. 2022</p>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  --bs-breadcrumb-divider: ">";
}

.breadcrumb-item > a {
  text-decoration: none;
  text-transform: uppercase;
  font-size: 28pt;
  letter-spacing: 5px;
  color: #f74464;
  position: absolute;
}

.date {
  text-align: end;
  color: #374258;
  letter-spacing: 2px;
  text-transform: capitalize;
  font-size: 16pt;
  position: relative;
}

@media screen and (max-width: 767.2px) {
  .breadcrumb-item > a {
    position: relative;
  }
}
</style>