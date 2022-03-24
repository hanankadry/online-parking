<template>
  <nav class="navbar navbar-collapse">
    <div class="container-fluid">
      <span class="float-start">
        <div class="row">
          <button
            class="navbar-toggler col-auto me-auto px-0"
            type="button"
            @click.prevent="showOffcanvasMenu()"
          >
            <i class="bi bi-list nav-icon" />
          </button>
          <div class="input-icons mt-1 col-auto">
            <i class="bi bi-search icon" />
            <input type="text" class="m-1 input-md" placeholder="Search" />
          </div>
        </div>
      </span>
      <span class="float-end">
        <div class="row">
          <ul class="nav">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/dashboard"
                ><i class="bi bi-house-door nav-icon"></i>
              </router-link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-expanded="false"
              >
                <i class="bi bi-bell nav-icon"></i
              ></a>
              <ul class="dropdown-menu">
                <div class="container">
                  <p>Notification</p>
                </div>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="bi bi-person-circle nav-icon"></i>
              </a>
              <ul class="dropdown-menu">
                <div class="container">
                  <p>Notification</p>
                </div>
              </ul>
            </li>
          </ul>
        </div>
      </span>
    </div>
    <div
      class="offcanvas offcanvas-start"
      :class="showMenu ? 'show' : ''"
      tabindex="-1"
      :style="{ visibility: showMenu ? 'visible' : 'hidden' }"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="">
          <a class="nav-brand" href="/">
            <img src="@/assets/images/logo.jpg" class="logo" />
          </a>
        </h5>
        <button
          type="button"
          class="me-3 btn-close text-reset"
          @click.prevent="showOffcanvasMenu()"
        ></button>
      </div>
      <div class="offcanvas-body container mt-5">
        <router-link to="/dashboard" class="nav"
          ><i class="bi bi-columns nav-icon" />Dashboard</router-link
        >
        <router-link to="/parkingSettings" class="nav">
          <img class="sp-icon" />Parking Settings
        </router-link>
        <router-link to="/securityMen" class="nav"
          ><i class="bi bi-person nav-icon" />Security Men</router-link
        >
        <router-link to="/users" class="nav"
          ><i class="bi bi-person nav-icon" />Users</router-link
        >
        <router-link to="/reports" class="nav"
          ><i class="bi bi-exclamation-octagon nav-icon" />Reports</router-link
        >
        <router-link to="/registrations" class="nav"
          ><i class="bi bi-list-ul nav-icon" />Registrations</router-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
      notification: false,
      profile: false,
    };
  },
  methods: {
    showOffcanvasMenu() {
      this.showMenu ? (this.showMenu = false) : (this.showMenu = true);
    },
  },
};
</script>

<style scoped>
a .nav-link {
  text-decoration: none;
  color: #374258;
}

a .nav-link:hover {
  text-decoration: none;
  color: black;
}

.navbar {
  background-color: #f74464;
}

.navbar-toggler {
  border: none;
  margin-bottom: 5px;
}
.navbar-toggler:focus {
  outline: none;
}

.nav-icon {
  font-size: 24pt;
  position: relative;
  color: #374258;
  margin-left: 10px;
}

.icon {
  margin-left: 8px;
  margin-top: 4px;
}

.logo {
  border: 2px solid #f74464;
}

.offcanvas {
  background-color: #374258;
  columns: 1;
  column-span: 100px;
}

.offcanvas-body .nav-icon {
  font-size: 32px;
  color: white;
  margin-right: 0.7rem;
  margin-top: 0.1rem;
}

.sp-icon {
  background: url("@/assets/images/icons8-parking-32.png") no-repeat center;
  background-size: 45px;
  color: white;
  margin-right: 0.5rem;
  margin-left: 0.2rem;
  width: 45px;
  background-clip: padding-box;
}

.offcanvas-body .nav:hover,
.offcanvas-body .nav-icon:hover {
  color: #f74464;
}

.sp-icon:hover {
  background-image: url("@/assets/images/icons8-parking-32-pink.png");
}

.offcanvas-body .nav {
  font-size: 24pt;
  text-decoration: none;
  color: white;
  margin-bottom: 0.7rem;
}
</style>