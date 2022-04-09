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
            <p class="name">Go N Park</p>
          </div>
        </div>
      </span>
      <span class="float-end">
        <div class="row">
          <ul class="nav">
            <li class="nav-item">
              <router-link
                class="nav-link active"
                aria-current="page"
                :to="{ path: `/${user.id}` }"
                ><i class="bi bi-house-door nav-icon"></i>
              </router-link>
            </li>
            <li class="nav-item notifications dropdown">
              <a
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-expanded="false"
              >
                <i class="bi bi-bell nav-icon"
                  ><span
                    class="
                      alert
                      top-0
                      start-100
                      translate-middle
                      p-2
                      rounded-circle
                    "
                    v-if="this.newNotifications.length > 0"
                  >
                    <span class="visually-hidden" /></span></i
              ></a>
              <ul class="dropdown-menu dropdown-menu-end">
                <div
                  class="notification-container"
                  v-if="this.newNotifications.length > 0"
                >
                  <p class="title">
                    New Notifications<span class="badge float-end">{{
                      this.newNotifications.length
                    }}</span>
                  </p>
                  <div class="notification-container">
                    <notification-container
                      v-for="notification in newNotifications"
                      :key="notification.id"
                      :imageSrc="notification.imageSrc"
                      :name="notification.name"
                      :msg="notification.body"
                    >
                    </notification-container>
                  </div>
                  <li><hr class="dropdown-divider" /></li>
                </div>
                <div class="notification-container">
                  <p class="title">Old Notifications</p>
                  <div class="old-notification-container">
                    <notification-container
                      v-for="notification in oldNotifications"
                      :key="notification.id"
                      :imageSrc="notification.imageSrc"
                      :name="notification.name"
                      :msg="notification.body"
                    >
                    </notification-container>
                  </div>
                </div>
              </ul>
            </li>
            <li class="nav-item profile dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="bi bi-person-circle nav-icon"></i>
              </a>
              <ul class="dropdown-menu dropdown-menu-end">
                <div class="profile-container">
                  <img
                    class="profile-image mx-auto d-block"
                    src="@/assets/images/person-circle.svg"
                    alt="profile-picture"
                  />
                  <li class="text mt-5">
                    <i class="bi bi-person sm-icon" />{{ user.name }}
                  </li>
                  <li class="text">
                    <i class="bi bi-geo-alt-fill sm-icon" />{{ user.address }}
                  </li>
                  <li class="text">
                    <i class="bi bi-envelope sm-icon" />{{ user.email }}
                  </li>
                  <li class="text">
                    <i class="bi bi-telephone sm-icon" />
                    {{ user.phone }}
                  </li>
                  <div class="text-center mt-3">
                    <button
                      class="button-xs-unfill"
                      type="button"
                      @click="edit"
                    >
                      Edit
                    </button>
                    <button
                      class="button-sm-fill"
                      type="button"
                      @click="signOut"
                    >
                      Sign Out
                    </button>
                  </div>
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
        <router-link :to="{ path: `/dashboard/${parking_id}` }" class="nav"
          ><i class="bi bi-columns nav-icon" />Dashboard</router-link
        >
        <router-link :to="{ path: `/parkingSettings/${parking_id}` }" class="nav">
          <img class="sp-icon" />Parking Settings
        </router-link>
        <router-link :to="{ path: `/securityMen/${parking_id}` }" class="nav"
          ><i class="bi bi-person nav-icon" />Security Men</router-link
        >
        <router-link :to="{ path: `/users/${parking_id}` }" class="nav"
          ><i class="bi bi-person nav-icon" />Users</router-link
        >
        <router-link :to="{ path: `/reports/${parking_id}` }" class="nav"
          ><i class="bi bi-exclamation-octagon nav-icon" />Reports</router-link
        >
        <router-link :to="{ path: `/registrations/${parking_id}` }" class="nav"
          ><i class="bi bi-list-ul nav-icon" />Registrations</router-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";
import { getMessaging, getToken } from "firebase/messaging";
import axios from "axios";

export default {
  props: ["id"],
  data() {
    return {
      myVapidKey: this.vapidKey,
      showMenu: false,
      notification: false,
      profile: false,
      user: {
        id: null,
        name: "",
        email: "",
        address: "",
        phone: "",
      },
      parking_id: this.id,
      newNotifications: [
        {
          imageSrc: "@/assets/images/logo.jpg",
          name: "User",
          body: "a slot had been registered",
        },
        {
          imageSrc: "@/assets/images/logo.jpg",
          name: "User",
          body: "a slot had been registered",
        },
        {
          imageSrc: "@/assets/images/logo.jpg",
          name: "User",
          body: "a slot had been registered",
        },
      ],
      oldNotifications: [
        {
          imageSrc: "@/assets/images/logo.jpg",
          name: "User",
          body: "a slot had been registered",
        },
        {
          imageSrc: "@/assets/images/logo.jpg",
          name: "User",
          body: "a slot had been registered",
        },
        {
          imageSrc: "@/assets/images/logo.jpg",
          name: "User",
          body: "a slot had been registered",
        },
      ],
    };
  },
  mounted() {
    this.getUserID();
  },
  methods: {
    getUserID() {
      axios
        .get(`/admin/id/${this.parking_id}`)
        .then((response) => {
          response.data.user.map((user) => {
            this.user.name = user.username;
            this.user.email = user.email;
            this.user.address = user.address;
            this.user.phone = user.phone;
          });
          console.log(response.data);
        })
        .catch((errors) => {
          console.log(errors.data);
        });
    },
    getParkingID() {
      axios
        .get(`/parking/${this.user.id}`)
        .then((response) => {
          response.data.user.map((user) => {
            this.user.name = user.username;
            this.user.email = user.email;
            this.user.address = user.address;
            this.user.phone = user.phone;
          });
          response.data.parking.map((item) => {
            this.parking_id = item.id;
          });
          console.log(response.data);
        })
        .catch((errors) => {
          console.log(errors.data);
        });
    },
    updateNotifications() {
      const messaging = getMessaging();
      getToken(messaging, {
        vapidKey: this.myVapidKey,
      })
        .then((currentToken) => {
          if (currentToken) {
            // Send the token to your server and update the UI if necessary
            // ...
          } else {
            // Show permission request UI
            console.log(
              "No registration token available. Request permission to generate one."
            );
            // ...
          }
        })
        .catch((err) => {
          console.log("An error occurred while retrieving token. ", err);
          // ...
        });
    },
    showOffcanvasMenu() {
      this.showMenu ? (this.showMenu = false) : (this.showMenu = true);
    },
    edit() {
      this.$router.push("/settings");
    },
    signOut() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          this.$router.push("/login");
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
</script>

<style scoped>
.name {
  font-size: 18pt;
  margin-bottom: 0;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #374258;
}

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

.alert {
  position: absolute;
  background-color: #02b902;
  font-size: 10px;
}
.badge {
  background-color: #f74464;
  margin-right: 1.3rem;
  margin-top: 0.3rem;
}

.dropdown-menu {
  background-color: #374258;
  border: none;
  overflow-x: hidden;
}

.notifications .dropdown-menu {
  min-height: 10rem;
  max-height: 22rem;
  width: 20rem;
  overflow-y: scroll;
  border-radius: 25px 0 0 0;
}

.notifications .dropdown-menu p {
  margin-left: 1rem;
  color: white;
  font-size: 18pt;
}

.profile .dropdown-menu {
  height: 27.5rem;
  width: 17rem;
}

.profile-image {
  height: 10rem;
  width: 10rem;
  border-radius: 50%;
  margin-top: 1rem;
}

.sm-icon {
  color: #f74464;
  font-size: 14pt;
}

.text {
  margin-left: 1.5rem;
  color: white;
  font-size: 14pt;
}

.dropdown-divider {
  background-color: white;
  height: 2px;
  opacity: 100%;
}

.old-notification-container {
  opacity: 75%;
}
</style>