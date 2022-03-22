<template>
  <div class="container-fluid">
    <div class="d-flex align-items-start">
      <div
        class="nav flex-column nav-pills me-3"
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      >
        <div class="row row-cols-auto mb-5 mt-2">
          <a href="/dashboard">
            <i class="col bi bi-chevron-left nav-icon"
          /></a>
          <p class="col title text-start">
            <i class="col bi bi-gear-fill nav-icon me-1" />Settings
          </p>
        </div>

        <button
          class="nav-link active mb-3"
          id="v-pills-home-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-home"
          type="button"
          role="tab"
          aria-controls="v-pills-home"
          aria-selected="true"
        >
          Change Personal Info
        </button>
        <button
          class="nav-link"
          id="v-pills-profile-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-profile"
          type="button"
          role="tab"
          aria-controls="v-pills-profile"
          aria-selected="false"
        >
          Change Password
        </button>
      </div>
      <div class="tab-content" id="v-pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="v-pills-home"
          role="tabpanel"
          aria-labelledby="v-pills-home-tab"
        >
          <div class="contianer"></div>
        </div>
        <div
          class="tab-pane fade"
          id="v-pills-profile"
          role="tabpanel"
          aria-labelledby="v-pills-profile-tab"
        >
          <div class="container"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container-fluid {
  top: 0;
  background-color: #374258;
  padding: 0;
  height: 100rem;
}

.nav {
  background-color: #f74464;
  height: 100rem;
  width: 20%;
  padding: 10px;
  align-content: center;
}

.nav-icon {
  position: relative;
  color: #374258;
  font-size: 20pt;
}

.title {
  font-size: 20pt;
}

.nav-link .active {
  background-color: #f74464;
  border-radius: 95px;
  height: 40px;
  color: white;
  position: relative;
  border: none;
  font-weight: bold;
  font-size: large;
}

.nav-link {
  border: 3px solid #f74464;
  background-color: transparent;
  border-radius: 95px;
  height: 60px;
  color: white;
  position: relative;
  border: none;
  font-weight: bold;
  font-size: larger;
}

@media (max-width: 1255px) {
    .nav{
        width: 25%;
    }
}
@media (max-width: 986px) {
    .nav{
        width: 30%;
    }
}
@media (max-width: 816px) {
    .nav{
        width: 35%;
    }
}
@media (max-width: 692px) {
    .nav{
        width: 40%;
    }
}
</style>