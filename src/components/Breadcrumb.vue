<template>
  <nav class="px-5 pt-5">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <a :href="href">{{ label }}</a>
      </li>
    </ol>
    <p class="date">{{ this.date }}</p>
  </nav>
</template>

<script>
export default {
  props: ["crumbLabel", "crumbHref"],
  mounted() {
    var today = new Date().toLocaleDateString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    this.date = today;
  },
  methods: {},
  data() {
    return {
      label: this.crumbLabel,
      href: this.crumbHref,
      date: "",
    };
  },
};
</script>

<style scoped>
nav {
  --bs-breadcrumb-divider: ">";
}

.breadcrumb-item > a {
  text-decoration: none;
  text-transform: uppercase;
  font-size: 28pt;
  letter-spacing: 5px;
  color: #f74464;
  position: absolute;
}

.date {
  text-align: end;
  color: #374258;
  letter-spacing: 2px;
  text-transform: capitalize;
  font-size: 16pt;
  position: relative;
}

@media screen and (max-width: 767.2px) {
  .breadcrumb-item > a {
    position: relative;
  }
}
</style>