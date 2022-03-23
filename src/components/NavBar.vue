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
              <a class="nav-link active" aria-current="page" href="#"
                ><i class="bi bi-house-door nav-icon"></i>
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle notification-ui_icon"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                @click="
                  notification ? (notification = true) : (notification = false)
                "
              >
                <i class="bi bi-bell nav-icon"></i>
                <span class="unread-notification"></span>
              </a>
              <div
                class="dropdown-menu notification-ui_dd show"
                aria-labelledby="navbarDropdown"
                v-if="notification == true"
              >
                <div class="notification-ui_dd-header">
                  <h3 class="text-center">Notification</h3>
                </div>
                <div class="notification-ui_dd-footer">
                  <a href="#!" class="btn btn-success btn-block">View All</a>
                </div>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle notification-ui_icon"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                @click="profile ? (profile = true) : (profile = false)"
              >
                <i class="bi bi-person-circle nav-icon"></i>
              </a>
              <div
                class="dropdown-menu notification-ui_dd show"
                aria-labelledby="navbarDropdown"
                v-if="profile == true"
              ></div>
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

.notification-ui a:after {
  display: none;
}

.notification-ui_icon {
  position: relative;
}

.notification-ui_icon .unread-notification {
  display: inline-block;
  height: 7px;
  width: 7px;
  border-radius: 7px;
  background-color: #66bb6a;
  position: absolute;
  top: 7px;
  left: 12px;
}

@media (min-width: 900px) {
  .notification-ui_icon .unread-notification {
    left: 20px;
  }
}

.notification-ui_dd {
  padding: 0;
  border-radius: 10px;
  -webkit-box-shadow: 0 5px 20px -3px rgba(0, 0, 0, 0.16);
  box-shadow: 0 5px 20px -3px rgba(0, 0, 0, 0.16);
  border: 0;
  max-width: 400px;
}

@media (min-width: 900px) {
  .notification-ui_dd {
    min-width: 400px;
    position: absolute;
    left: -192px;
    top: 70px;
  }
}

.notification-ui_dd:after {
  content: "";
  position: absolute;
  top: -30px;
  left: calc(50% - 7px);
  border-top: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 15px solid #fff;
  border-left: 15px solid transparent;
}

.notification-ui_dd .notification-ui_dd-header {
  border-bottom: 1px solid #ddd;
  padding: 15px;
}

.notification-ui_dd .notification-ui_dd-header h3 {
  margin-bottom: 0;
}

.notification-ui_dd .notification-ui_dd-content {
  max-height: 500px;
  overflow: auto;
}

.notification-list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 20px 0;
  margin: 0 25px;
  border-bottom: 1px solid #ddd;
}

.notification-list--unread {
  position: relative;
}

.notification-list--unread:before {
  content: "";
  position: absolute;
  top: 0;
  left: -25px;
  height: calc(100% + 1px);
  border-left: 2px solid #29b6f6;
}

.notification-list .notification-list_img img {
  height: 48px;
  width: 48px;
  border-radius: 50px;
  margin-right: 20px;
}

.notification-list .notification-list_detail p {
  margin-bottom: 5px;
  line-height: 1.2;
}

.notification-list .notification-list_feature-img img {
  height: 48px;
  width: 48px;
  border-radius: 5px;
  margin-left: 20px;
}
</style>