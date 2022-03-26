<template>
  <div class="container">
    <p class="name">
      {{ title }}
      <img class="image float-end" src="@/assets/images/person-circle.svg" alt="profile-image" />
    </p>
    <p class="body">
      {{ body }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["name", "msg", "imageSrc"],
  data() {
    return {
      title: this.name,
      body: this.msg,
      image: "@/assets/images/person-circle.svg",
    };
  },
};
</script>

<style scoped>
.container {
  width: 18.5rem;
  background-color: white;
  margin: 0.5rem;
  padding: 0.5rem;
  padding-left: 1rem;
  max-height: 5rem;
  min-height: 3.5rem;
  left: 0.5rem;
}
.name {
  color: #f74464;
  font-size: 16pt;
  text-transform: capitalize;
  margin-bottom: 5px;
}
.body {
  color: black;
  font-size: 12pt;
  text-align: left;
}
.image {
  border-radius: 50%;
  margin-top: 5px;
  height: 35px;
  width: 35px;
  border: 1px solid #f74464;
}
</style>