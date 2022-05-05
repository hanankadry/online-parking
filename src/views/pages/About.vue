<template>
  <nav-bar :id="parking_id" />
  <div class="card text-center">
    <div class="card-header">WHO ARE WE</div>
    <div class="card-body">
      <div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">Project Info</h5>
          <p class="card-text">
            It is a graduation project for Alexandria University - Faculty of
            Science students.
          </p>
        </div>
      </div>
      <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Us</h5>
    <p class="card-text">We are a Group of friends graduate at July 2022.
      Implement graduation project 
      Under supervision Dr. Islam El Kabani
    </p>
  </div>
</div>

<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Contact us</h5>
    <p class="card-text">Contact Us at ..........@gmail.com</p>
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
.footer {
  background-color: #374258;
  color: white;
  padding-top: 17px;
  margin-top:auto;
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
.card{
  display:inline;
}
.card-header{
  background-color: #374258;
  color: white;
}



</style>