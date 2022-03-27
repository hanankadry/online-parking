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
              <a class="nav-link mt-1">About</a>
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
    <div class="container">
      <div class="main">
        <p class="head">Parking Made Easy</p>
        <p class="body">With just three clicks, you're booked.</p>
      </div>
      <div class="explain my-5">
        <div class="row g-3 justify-content-center">
          <div class="col-md">
            <p class="title">Create Account</p>
            <img class="mobile" src="@/assets/images/signup-user.png" alt="" />
          </div>
          <div class="col-md">
            <p class="title">Search</p>
            <img class="mobile" src="@/assets/images/search.png" alt="" />
          </div>
          <div class="col-md">
            <p class="title">Register</p>
            <img class="mobile" src="@/assets/images/register.png" alt="" />
          </div>
        </div>
        <div class="main">
          <p class="head">Or</p>
          <p class="body">
            You can add your parking space, and manage it here.
          </p>
        </div>
        <div class="explain my-2">
          <div class="row g-3 justify-content-center">
            <div class="col-md">
              <p class="title">Create Account</p>
              <img
                class="website mt-5"
                src="@/assets/images/signup-admin.png"
                alt=""
              />
            </div>
            <div class="col-md">
              <p class="title">Add Parking Space Data</p>
              <img
                class="website"
                src="@/assets/images/parking-space.png"
                alt=""
              />
            </div>
            <div class="col-md">
              <p class="title">Get Daily Reports, and more.</p>
              <img class="website" src="@/assets/images/reports.png" alt="" />
            </div>
          </div>
        </div>
        <p class="head text-center mb-3">And You're Done.</p>
      </div>
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
  <!-- Start Download Section -->
  <section class="download-sec mb-0">
    <div class="container-fluid">
      <div class="image-container">
        <img class="bg-img" alt="" />
        <div class="image-content">
          <p class="head">Book when you want</p>
          <p class="body">Download our app</p>
          <a target="_blank" class="market-btn google-btn" role="button">
            <span class="market-button-subtitle">Download on the</span>
            <span class="market-button-title">Google Play</span>
          </a>
        </div>
      </div>
    </div>
  </section>
  <!-- End Download Section -->
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
.main-sec {
  margin-top: 2rem;
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
.bg-img {
  content: url("@/assets/images/landingpage-bg-light.svg");
  position: relative;
  padding: 0;
  right: -0.75rem;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
}
.image-content {
  position: absolute;
  left: 3.5rem;
  bottom: calc(-98rem + 30vh);
  color: white;
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
  text-align: start;
  font-size: calc(15px + 1.5vw);
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #f74464;
}

.market-btn {
  display: inline-block;
  padding: 0.3125rem 0.875rem;
  padding-left: 2.8125rem;
  -webkit-transition: border-color 0.25s ease-in-out,
    background-color 0.25s ease-in-out;
  transition: border-color 0.25s ease-in-out, background-color 0.25s ease-in-out;
  border: 1px solid #374258;
  background-position: center left 0.75rem;
  background-color: #374258;
  background-size: 1.5rem 1.5rem;
  background-repeat: no-repeat;
  text-decoration: none;
  border-radius: 5px;
}

.market-btn .market-button-title {
  display: block;
  color: white;
  font-size: 1.125rem;
}

.market-btn .market-button-subtitle {
  display: block;
  margin-bottom: -0.25rem;
  color: white;
  font-size: 0.75rem;
}

.market-btn:hover {
  background-color: #2b3344;
  text-decoration: none;
}

.google-btn {
  background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPHBvbHlnb24gc3R5bGU9ImZpbGw6IzVDREFERDsiIHBvaW50cz0iMjkuNTMsMCAyOS41MywyNTEuNTA5IDI5LjUzLDUxMiAyOTkuMDA0LDI1MS41MDkgIi8+Cjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNCREVDQzQ7IiBwb2ludHM9IjM2OS4wNjcsMTgwLjU0NyAyNjIuMTc1LDExOS40NjcgMjkuNTMsMCAyOTkuMDA0LDI1MS41MDkgIi8+Cjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNEQzY4QTE7IiBwb2ludHM9IjI5LjUzLDUxMiAyOS41Myw1MTIgMjYyLjE3NSwzODMuNTUxIDM2OS4wNjcsMzIyLjQ3IDI5OS4wMDQsMjUxLjUwOSAiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0ZGQ0E5NjsiIGQ9Ik0zNjkuMDY3LDE4MC41NDdsLTcwLjA2Myw3MC45NjFsNzAuMDYzLDcwLjk2MWwxMDguNjg4LTYyLjg3N2M2LjI4OC0zLjU5Myw2LjI4OC0xMS42NzcsMC0xNS4yNyAgTDM2OS4wNjcsMTgwLjU0N3oiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==);
}

.footer {
  background-color: #374258;
  color: white;
  height: 4rem;
  padding-top: 17px;
}

.footer a {
  text-decoration: none;
}

.footer-icon {
  color: white;
  font-size: 18pt;
}

.footer-icon:hover {
  color: #f74464;
}
@media (min-width: 1200px) {
  .image-content {
    bottom: -115rem;
  }
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

@media (max-width: 650px) {
  .image-content {
    left: 2.5rem;
  }
}
</style>
