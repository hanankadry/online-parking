<template>
  <!-- Start Header -->
  <header class="header">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <a class="nav-brand" href="/">
          <img src="@/assets/images/logo.jpg" class="logo" />
        </a>
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
              <a class="nav-link mt-2">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mt-2">Contact</a>
            </li>
            <li class="nav-item">
              <router-link to="/login" class="nav-link">
                <button class="button-sm-fill">Login</button>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <!-- End Header -->

  <!-- Start Main Section -->

  <section class="main-sec">
    <div class="container-fluid">
      <landing-page style="position: relative; right: -0.75rem;" />
    </div>
  </section>
  <!-- End Main Section -->

  <hr />
  <!-- Start Paces Section -->
  <section class="places-sec">
    <div class="container-fluid">
      <div class="content">
        <p class="head text-center mb-3">Where to find us</p>
        <div class="row g-3 mx-5 my-1 justify-content-start">
          <p class="content-title">Malls</p>
          <p class="content-body">
            Green Plaza <br />
            City Centre
          </p>
        </div>
        <div class="row g-3 mx-5 my-1 justify-content-start">
          <p class="content-title">Sport Clubs</p>
          <p class="content-body">
            Sporting Sports Clubs <br />
            Al Ittihad Alexandria Club, Sporting <br />
            Horses Owners Club Alexandria <br />
            Smouha SC
          </p>
        </div>
        <div class="row g-3 mx-5 my-1 justify-content-start">
          <p class="content-title">Public Parking</p>
          <p class="content-body">
            Beshaghous Public Parking <br />
            Trust Car Egypt Garage <br />
            Sidi Gaber Station Parking <br />
            Alex Garden Car Park <br />
            University Garage
          </p>
        </div>
      </div>
    </div>
  </section>
  <!-- End About Section -->
  <!-- Start Footer -->
  <footer class="footer mt-0">
    <div class="container">
      <div class="row justify-content-between">
        <div
          class="
            col-lg-6 col-md-8 col-sm-12 col-12
            text-start
            align-self-center
          "
        >
          <p class="copyright">&copy;2022 Go'N'Park, All Rights Reserved</p>
        </div>
        <div class="col-lg-6 col-md-4 col-sm-12 col-12 text-end text-left">
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
import LandingPage from "@/components/LandingPage.vue";
export default {
  components: {
    "landing-page": LandingPage,
  },
};
</script>

<style scoped>
body {
  overflow: hidden;
}
.header {
  background-color: #374258;
}
.logo {
  border: 3px solid #f74464;
}
.nav-link {
  cursor: pointer;
}
.main {
  text-align: center;
}
.content {
  background-color: #f74464;
  position: relative;
  margin: 60px;
  border-radius: 25px;
  padding: 20px;
}
.content-title {
  color: white;
  font-size: calc(15px + 1.5vw);
  text-transform: capitalize;
}
.content-body {
  color: black;
  text-transform: capitalize;
  margin-top: -1px;
  font-size: calc(5px + 1.5vw);
}
.mobile {
  width: 30%;
  position: relative;
  align-content: center;
}
.website {
  width: 50%;
}
.head {
  color: black;
  font-weight: bold;
  text-transform: uppercase;
  margin: -1px;
  font-size: calc(0.2rem + 3vw);
  top: 10px;
}
.body {
  color: black;
  text-transform: capitalize;
  margin-top: -1px;
  font-size: calc(5px + 1.5vw);
  top: 10px;
}
.title {
  font-size: calc(15px + 1.5vw);
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #f74464;
}
.footer {
  background-color: #374258;
  color: white;
  height: 4rem;
  padding-top: 17px;
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

.title-container {
  background-color: transparent;
  border-radius: 50px;
  border: 2px solid #374258;
  padding: 20px;
  text-align: center;
}
@media (min-width: 1200px) {
  .head {
    font-size: 2.7rem;
  }
  .body {
    font-size: 25px;
  }
  .title {
    font-size: 30px;
  }
}
</style>
