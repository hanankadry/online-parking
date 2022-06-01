<template>
<!-- Start Header -->
  <header class="header">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <router-link class="nav-brand" :to="{ path: `/` }" v-if="loggedIn == false">
          <img src="@/assets/images/logo.jpg" class="logo" />
        </router-link>
        <router-link class="nav-brand" :to="{ path: `/${user_id}` }" v-else>
          <img src="@/assets/images/logo.jpg" class="logo" />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target=".navbar-collapse"
          aria-controls="navbar-collapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse justify-content-end">
          <ul class="navbar-nav">
            <li class="nav-item" v-if="loggedIn == false">
              <router-link
                :to="{ path: `/` }"
                class="nav-link"
              >
                <button class="button-sm-fill">Home</button>
              </router-link>
            </li>
            <li class="nav-item" v-else>
              <router-link
                :to="{ path: `/${user_id}` }"
                class="nav-link"
              >
                <button class="button-sm-fill">Home</button>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <!-- End Header -->
  <div class="container">
    <div class="card-header text-center">About</div>
    
      <div class="card-body">
        <h5 class="card-title text-center">Team Info</h5>
        <p class="card-text">
          Donia Hesham: 
          <ul>
            <li>Project Leader</li>
            <li>Mobile Application Developer</li>
            <li>Contact at: (+200) 123-456-7890</li>
            <li>Email: donia@gmail.com</li>
          </ul>

          Rowan Essam: 
          <ul>
            <li>Mobile Application Developer</li>
            <li>Contact at: (+200) 123-456-7890</li>
            <li>Email: rowan@gmail.com</li>
          </ul>

          Ramy Mahmoud: 
          <ul>
            <li>Mobile Application Developer</li>
            <li>Contact at: (+200) 123-456-7890</li>
            <li>Email: ramy@gmail.com</li>
          </ul>

          Hanan Abd El-kader: 
          <ul>
            <li>Web Application Developer</li>
            <li>Contact at: (+200) 155-458-9890</li>
            <li>Email: hanan.kadry@outlook.com</li>
          </ul>

          Toka Magdy: 
          <ul>
            <li>Web Application Developer</li>
            <li>Contact at: (+200)1003553146</li>
            <li>Email: toka.fmagdy@gmail.com</li>
          </ul>
        </p>
      </div>
    
    
      <div class="card-body">
        <h5 class="card-title text-center">Us</h5>
        <p class="card-text">
          We are a Group of friends graduate at July 2022. Implement
          graduation project Under supervision Dr. Islam El Kabani
        </p>
      </div>
    
    
      <div class="card-body">
        <h5 class="card-title text-center">Contact Us</h5>
        <p class="card-text">Contact Us at ..........@gmail.com</p>
      </div>
    
  </div>
    <!-- Start Footer -->
  <footer class="footer">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-sm-6 text-start align-self-center">
          <p class="copyright">&copy;2022 Go N Park, All Rights Reserved</p>
        </div>
        <div class="col-sm-6 text-end text-left">
          <a href="facebook.com">
            <i class="bi bi-facebook footer-icon mx-2"
          /></a>
          <a href="twitter.com">
            <i class="bi bi-twitter footer-icon mx-2"
          /></a>
          <a href="instagram.com">
            <i class="bi bi-instagram footer-icon mx-2"
          /></a>
        </div>
      </div>
    </div>
  </footer>
    <!-- End Footer -->
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
.header {
  background-color: #374258;
  width: 100%;
}
.logo {
  border: 3px solid #f74464;
}
.nav-link {
  cursor: pointer;
}

.footer {
  background-color: #374258;
  color: white;
  padding-top: 17px;
  margin-top: auto;
  left: 0;
  bottom: 0;
  width: 100%;
}
.footer > a {
  text-decoration: none;
}

.footer-icon {
  color: white;
  font-size: 18pt;
}

.footer-icon:hover {
  color: #f74464;
}
.card {
  display: inline;
}
.card-header {
  font-size: 24pt;
  color: #f74464;
  text-transform: uppercase;
  background-color: transparent;
}
.card-text {
  text-align: start;
}
.container {
  align-content: center;
  width: 40rem;
}
</style>