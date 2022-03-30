<template>
  <div class="card-counter">
    <div class="icon-bg">
      <i :class="icon"></i>
    </div>
    <p class="card-numbers">{{ this.value }}</p>
    <p class="card-name">{{ this.label }}</p>
  </div>
</template>

<script>
export default {
  props: ["cardValue", "cardLabel", "cardIcon"],
  data() {
    return {
      value: this.cardValue,
      label: this.cardLabel,
      icon: this.cardIcon,
    };
  },
};
</script>

<style scoped>
.card-counter {
  margin: 10px;
  padding: 20px 10px;
  background-color: #e5e7eb;
  height: 100px;
  border-radius: 5px;
  box-shadow: 5px 10px #374258;
}

.icon-bg {
  background-color: #f74464;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
}

.lg-icon {
  left: 8.5px;
  font-size: 5em;
  color: white;
  font-size: 2rem;
  position: relative;
}

.card-numbers {
  font-size: 32px;
  text-align: end;
  color: #374258;
  margin: 0;
}

.card-name {
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 2px;
  text-align: end;
  display: block;
  font-size: 16pt;
  color: #374258;
}

@media screen and (max-width: 1140px) {
  .card-name {
    font-size: 14pt;
  }
}
@media screen and (max-width: 990px) {
  .card-name {
    font-size: 10pt;
    margin-top: 5px;
  }
}
@media screen and (max-width: 767.2px) {
  .card-name {
    font-size: 16pt;
    margin-top: 0px;
  }
}
</style>