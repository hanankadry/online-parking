<template>
  <div class="Navbar">
    <nav class="navbar navbar-light">
      <div class="container-fluid">
        <div class="row">
          <a href="#" class="col-md-1 mt-1"><i class="bi bi-list nav-icon"></i></a>
          <div class="col-auto me-auto input-icons mt-1">
            <i class="bi bi-search icon" />
            <input
              type="text"
              class="m-1 input-md"
              placeholder="Search"
            />
          </div>
          <div class="col justify-content-end">
            <ul class="nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"
                  ><i class="bi bi-house-door nav-icon"></i>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i class="bi bi-bell nav-icon"></i>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">
                  <i class="bi bi-person-circle nav-icon"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #374258;
}
a:hover {
  text-decoration: none;
  color: black;
}
.navbar {
  background-color: #f74464;
}

.nav-icon {
  font-size: 24pt;
  position: relative;
}

.icon {
  margin-left: 8px;
  margin-top: 4px;
}
</style>