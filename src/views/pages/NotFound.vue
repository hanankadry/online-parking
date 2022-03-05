<template>
  <div class="center">
    <div class="error">
      <div class="number">4</div>
      <div class="illustration">
        <div class="circle" />
        <div class="clip">
          <div class="paper">
            <div class="face">
              <div class="eyes">
                <div class="eye eye-left" />
                <div class="eye eye-right" />
              </div>
              <div class="rosyCheeks rosyCheeks-left" />
              <div class="rosyCheeks rosyCheeks-right" />
              <div class="mouth" />
            </div>
          </div>
        </div>
      </div>
      <div class="number">4</div>
    </div>
    <div class="text">
      You seem lost. The page you're looking for isn't found.
    </div>
    <a class="button" href="/">Go Back Home</a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.center {
  margin-top: 6rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.error {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
}

.number {
  font-weight: 900;
  font-size: 15rem;
  line-height: 1;
  color: #374258;
}

.illustration {
  position: relative;
  width: 12.2rem;
  margin: 0 2.1rem;
}

.circle {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 12.2rem;
  height: 11.4rem;
  border-radius: 50%;
  background-color: #374258;
}

.clip {
  position: absolute;
  bottom: 0.3rem;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  width: 12.5rem;
  height: 13rem;
  border-radius: 0 0 50% 50%;
}

.paper {
  position: absolute;
  bottom: -0.3rem;
  left: 50%;
  transform: translateX(-50%);
  width: 9.2rem;
  height: 12.4rem;
  border: 0.3rem solid #374258;
  background-color: white;
  border-radius: 0.8rem;
}

.face {
  position: relative;
  margin-top: 2.3rem;
}

.eyes {
  position: absolute;
  top: 0;
  left: 2rem;
  width: 4.6rem;
  height: 0.8rem;
}

.eye {
  position: absolute;
  bottom: 0;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background-color: #374258;
  animation-name: eye;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}
.eye-left {
  left: 0;
}

.eye-right {
  right: 0;
}

@keyframes eye {
  0% {
    height: 0.8rem;
  }
  50% {
    height: 0.8rem;
  }
  52% {
    height: 0.1rem;
  }
  54% {
    height: 0.8rem;
  }
  100% {
    height: 0.8rem;
  }
}

.rosyCheeks {
  position: absolute;
  top: 1.6rem;
  width: 1rem;
  height: 0.2rem;
  border-radius: 50%;
  background-color: #f74464;
}

.rosyCheeks-left {
  left: 1.4rem;
}

.rosyCheeks-right {
  right: 1.4rem;
}

.mouth {
  position: absolute;
  top: 3.1rem;
  left: 50%;
  width: 1.6rem;
  height: 0.2rem;
  border-radius: 0.1rem;
  transform: translateX(-50%);
  background-color: #374258;
}

.text {
  margin-top: 5rem;
  font-weight: normal;
  color: #f74464;
}

.button {
  margin-top: 4rem;
  padding: 1rem 2.5rem;
  border-radius: 220px;
  color: #374258;
  font-weight: bold;
  background-color: #f74464;
  text-decoration: none;
  border: none;
}

.button:hover {
  background-color: #c52c45;
}
</style>