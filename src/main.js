import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Background from '@/components/Background'
import VueApexCharts from "vue3-apexcharts"
import { initializeApp } from "firebase/app"
import { getMessaging } from 'firebase/messaging/sw'
import Breadcrumb from "@/components/Breadcrumb.vue"
import NavBar from "@/components/NavBar.vue"
import NotificationContainer from "@/components/NotificationContainer.vue"
import VueGoodTablePlugin from 'vue-good-table-next'
import axios from 'axios'
import Toaster from "@meforma/vue-toaster"

axios.defaults.baseURL = "http://localhost:8000/api/"
axios.defaults.withCredentials = false;
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*"
axios.defaults.headers.common["Accept"] = "application/json"
axios.defaults.headers = {
  'Cache-Control': 'no-cache',
  'Pragma': 'no-cache',
  'Expires': '0',
};

const firebaseConfig = {
  apiKey: "AIzaSyBB8YSbamKhUF4D5cMhPlbrfZyJ3gkYdpA",
  authDomain: "online-parking-d5cfb.firebaseapp.com",
  projectId: "online-parking-d5cfb",
  storageBucket: "online-parking-d5cfb.appspot.com",
  messagingSenderId: "1097629580013",
  appId: "1:1097629580013:web:b284f0ed49d99e55ec2ae4"
};

import '@popperjs/core'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import 'bootstrap-icons/font/bootstrap-icons.css'
import "vue-good-table-next/dist/vue-good-table-next.css"

const app = createApp(App)


const firebaseApp = initializeApp(firebaseConfig);
getMessaging(firebaseApp);

app.use(router).use(VueApexCharts).use(VueGoodTablePlugin).use(Toaster, {
  position: "top-right",
  max: 5
}).mount('#app');

app.config.globalProperties.$vapidKey = "BGF_T3MOOtpyY1hB7Vo9ipZb0nQb9D8QxsTwDMoM8ZK5lkYCmsaVPQQWDjz1fdzyjeqV1DaTg_t1pqLPcwhT4xI";

app.component("breadcrumb", Breadcrumb)
app.component("background", Background)
app.component("nav-bar", NavBar)
app.component("notification-container", NotificationContainer)
