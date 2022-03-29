<template>
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
</template>

<style scoped>
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
  top: calc(8rem + 0.3vh);
  color: white;
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

@media (max-width: 650px) {
  .image-content {
    left: 2.5rem;
  }
}
@media (min-width: 1200px) {
  .image-content {
    top: 13rem;
  }
  .head {
    font-size: 2.7rem;
  }
  .body {
    font-size: 25px;
  }
}
</style>