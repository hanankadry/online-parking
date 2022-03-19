<template>
  <!-- Start Header -->
  <header class="header">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid justify-content-between">
        <a class="nav-brand" href="/">
          <img src="@/assets/images/logo.jpg" class="logo" />
        </a>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link mt-2" href="#about-sec">About</a>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link">
              <button class="button-sm-fill">Login</button>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  <!-- End Header -->

  <!-- Start Center Section -->
  <section>
    <div class="container-fluid">
      <div class="image-container">
        <img class="bg-img" src="@/assets/images/landingpage-bg.svg" alt="" />
        <div class="image-content">
          <p class="text">Park anywhere</p>
          <p class="text">only one click</p>
          <a class="btn btn-google ms-3" href="#" title="Google Play"
            >Google Play</a
          >
        </div>
      </div>
    </div>
  </section>
  <!-- End Center Section -->

  <!-- Start About Section -->
  <section class="about-sec pad-50" id="about-sec">
    <div class="container">
      <div class="row mb-50">
        <div class="col-lg-6 col-md-6 col-sm-12 col-12">
          <div class="about-black-div">
            <div>
              <img src="" alt="" class="smart-logo mb-3" />
              <p>About Us</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-7 col-md-7 col-sm-12 col-12 align-self-center">
          <div class="image-container">
            <h2 class="mb-3">Best Choice</h2>
            <p>About Text 2</p>
          </div>
        </div>
        <div class="col-lg-5 col-md-5 col-sm-12 col-12">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  </section>
  <!-- End About Section -->

  <!-- Start Footer -->
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div
          class="
            col-lg-6 col-md-8 col-sm-12 col-12
            text-start
            align-self-center
          "
        >
          <p class="copyright">&copy;2022 GoNPark All Rights Reserved</p>
        </div>
        <div class="col-lg-6 col-md-4 col-sm-12 col-12 text-end text-left">
          <a href="#" class="smart-logo"><img src="" /></a>
        </div>
      </div>
    </div>
  </footer>
  <!-- End Footer -->
</template>

<style scoped>
.logo {
  background-color: #f74464;
  padding: 3px;
  border: none;
  border-radius: 50%;
  color: white;
  width: 25%;
}
.header {
  background-color: #374258;
}
.bg-img {
  position: relative;
  height: 70%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.image-content {
  position: absolute;
  top: 200px;
  left: 3rem;
  color: white;
}

.image-content .text {
  margin: -1px;
  padding: -1px;
  font-size: 40pt;
  font-weight: lighter;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-family: 'TT Firs Neue Medium';
}

a.btn-google {
  color: #fff;
}
.btn {
  padding: 10px 16px;
  margin: 5px;
  font-size: 32px;
  line-height: 1.3333333;
  border-radius: 6px;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  font-weight: 500;
  text-decoration: none;
  display: inline-block;
}
.btn:active:focus,
.btn:focus {
  outline: 0;
}
.btn:focus,
.btn:hover {
  color: #333;
  text-decoration: none;
  outline: 0;
}
.btn:active {
  outline: 0;
  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
}
.btn-google {
  color: #fff;
  background-color: #111;
  border-color: #000;
  padding: 15px 16px 5px 40px;
  position: relative;
  font-weight: 600;
}
.btn-google:focus {
  color: #fff;
  background-color: #555;
  border-color: #000;
}
.btn-google:active,
.btn-google:hover {
  color: #fff;
  background-color: #555;
  border-color: #000;
}
.btn-google:before {
  content: "";
  background-image: url(https://4.bp.blogspot.com/-52U3eP2JDM4/WSkIT1vbUxI/AAAAAAAArQA/iF1BeARv2To-2FGQU7V6UbNPivuv_lccACLcB/s30/nexus2cee_ic_launcher_play_store_new-1.png);
  background-size: cover;
  background-repeat: no-repeat;
  width: 40px;
  height: 40px;
  position: absolute;
  left: 5px;
  top: 40%;
  margin-top: -15px;
}
.btn-google:after {
  content: "GET IT ON";
  position: absolute;
  top: 5px;
  left: 45px;
  font-size: 15px;
  font-weight: 400;
}
</style>
