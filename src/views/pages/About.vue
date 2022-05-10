<template>
<!-- Start Header -->
  <header class="header">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <router-link class="nav-brand" :to="{ path: `/` }">
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
            <li class="nav-item">
              <router-link
                :to="{ path: `/` }"
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
  <div class="card text-center">
    <div class="card-header">WHO ARE WE</div>
    <div class="card-body">
      <div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">Team Info</h5>
          <p class="card-text">
            Donia Hesham: 
            <ul>
              <li>Project Leader</li>
              <li>Mobile Application Developer</li>
            </ul>
             Contact at: (+200) 123-456-7890
          </p>
        </div>
      </div>
      <div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">Us</h5>
          <p class="card-text">
            We are a Group of friends graduate at July 2022. Implement
            graduation project Under supervision Dr. Islam El Kabani
          </p>
        </div>
      </div>

      <div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">Contact us</h5>
          <p class="card-text">Contact Us at ..........@gmail.com</p>
        </div>
      </div>
    </div>
  </div>
    <!-- Start Footer -->
    <footer class="footer my-0">
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
  </div>
</template>
<style scoped>
.header {
  background-color: #374258;
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
  position: fixed;
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
</style>