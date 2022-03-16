<template>
  <div class="sidebar">
    <div id="mySidenav" class="sidenav">
      <i class="bi bi-circle"></i>

      <a href="javascript:void(0)" class="closebtn" @click="closeNav()"
        ><i class="bi bi-x"></i
      ></a>
      <router-link to="/dashboard"
        ><i class="bi bi-columns nav-icon"></i>Dashboard</router-link
      >
      <router-link to="/parkingSettings">
        <svg
          class="nav-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 31.5 31.5"
        >
          <path
            id="Icon_awesome-parking"
            data-name="Icon awesome-parking"
            d="M28.125,2.25H3.375A3.376,3.376,0,0,0,0,5.625v24.75A3.376,3.376,0,0,0,3.375,33.75h24.75A3.376,3.376,0,0,0,31.5,30.375V5.625A3.376,3.376,0,0,0,28.125,2.25ZM16.875,22.5H13.5v3.375A1.128,1.128,0,0,1,12.375,27h-2.25A1.128,1.128,0,0,1,9,25.875V10.125A1.128,1.128,0,0,1,10.125,9h6.75a6.75,6.75,0,0,1,0,13.5Zm0-9H13.5V18h3.375a2.25,2.25,0,0,0,0-4.5Z"
            transform="translate(0 -2.25)"
            fill="#fff"
          />
        </svg>
        Parking Settings</router-link
      >
      <router-link to="/securityMen"
        ><i class="bi bi-person nav-icon">Security Men</i></router-link
      >
      <router-link to="/users"
        ><i class="bi bi-person nav-icon">Users</i></router-link
      >
      <router-link to="/reports"
        ><i class="bi bi-exclamation-octagon nav-icon"></i>Reports</router-link
      >
      <router-link to="/registrations"
        ><i class="bi bi-list-ul nav-icon"></i>Registrations</router-link
      >
    </div>

    <div>
      <span class="span" @click="openNav()"><i class="bi bi-list"></i></span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openNav() {
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
    },
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
    },
  },
};
</script>

<style scoped>
.nav-icon {
  margin-left: 10px;
}
.span {
  font-size: 30px;
  cursor: pointer;
}
.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(55, 66, 88);
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  font-style: normal;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: white;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
  color: rgb(247, 68, 100);
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
</style>