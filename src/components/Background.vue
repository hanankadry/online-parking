<template>
  <div
    class="shape"
    style="
      background-image: linear-gradient(to left, #0f121a, #374258);
      left: -55px;
      top: -100px;
      width: 250px;
    "
  />
  <div
    class="shape"
    style="border: 3px solid #f74464; left: -80px; top: -80px; width: 250px"
  />
  <div
    class="shape"
    style="
      background-image: linear-gradient(to left, #416bc0, #374258);
      left: 25rem;
      top: -155px;
      width: 85px;
    "
  />
  <div
    class="shape"
    style="border: 3px solid #f74464; left: 25.6rem; top: -165px; width: 85px"
  />
  <div
    class="shape"
    style="
      background-image: linear-gradient(to left, #374258, #416aaf);
      top: 25rem;
      left: 15rem;
      width: 80px;
    "
  />
  <div
    class="shape"
    style="border: 3px solid #f74464; top: 25.7rem; left: 14.3rem; width: 80px"
  />
  <div
    class="shape"
    style="
      background-image: linear-gradient(to left, #7186af, #374258);
      top: 20rem;
      left: 30rem;
      width: 200px;
    "
  />
  <div
    class="shape"
    style="border: 3px solid #f74464; top: 19.2rem; left: 31.5rem; width: 200px"
  />
  <div class="container box" />
</template>

<style scoped>
.shape {
  height: 600px;
  border-radius: 220px;
  transform: rotate(-45deg);
  position: fixed;
}
.box {
  height: 100%;
  width: 35%;
  top: -1px;
  left: 65%;
  position: fixed;
  border-radius: 95px 0 0 95px;
  background-image: linear-gradient(#374258, #151d2e);
}

@media screen and (max-width: 1140px) {
  .box {
    left: 50%;
    width: 50%;
  }
}

@media screen and (max-width: 960px) {
  .box {
    left: 50%;
    width: 50%;
  }
}

@media screen and (max-width: 720px) {
  .box {
    left: 40%;
    width: 60%;
  }
}

@media screen and (max-width: 540px) {
  .box {
    left: 0%;
    width: 100%;
    border-radius: 0;
  }
}
</style>