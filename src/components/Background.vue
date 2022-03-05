<template>
  <div class="shape" style="background-image: linear-gradient(to left, #0F121A, #374258); left: -55px; top: -100px; width: 250px;"/>
  <div class="shape" style="border: 3px solid #F74464; left: -80px; top: -80px; width: 250px;"/>
  <div class="shape" style="background-image: linear-gradient(to left, #416BC0, #374258); left: 25rem; top: -155px; width: 85px;"/>
  <div class="shape" style="border: 3px solid #F74464; left: 25.6rem; top: -165px; width: 85px;"/>
  <div class="shape" style="background-image: linear-gradient(to left, #374258, #416AAF); top: 25rem; left: 15rem; width: 80px;"/>
  <div class="shape" style="border: 3px solid #F74464; top: 25.7rem; left: 14.3rem; width: 80px;"/>
  <div class="shape" style="background-image: linear-gradient(to left, #7186AF, #374258); top: 20rem; left: 30rem; width: 200px;"/>
  <div class="shape" style="border: 3px solid #F74464; top: 19.2rem; left: 31.5rem; width: 200px;"/>
  <div class="box"/>
</template>

<script>
export default {};
</script>

<style scoped>
.shape {
    height: 600px;
    border-radius: 220px;
    transform: rotate(-45deg);
    position: fixed;
    align-content: flex-start;
}
.box {
    height: 100%;
    width: 35%;
    top: -1px;
    left: 65%;
    position: fixed;
    border-radius: 95px 0 0 95px;
    background-image: linear-gradient(#374258, #151D2E);
}
</style>