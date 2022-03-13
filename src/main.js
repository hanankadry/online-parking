import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Background from '@/components/Background'
import VueApexCharts from "vue3-apexcharts"
import { initializeApp } from "firebase/app"
import Breadcrumb from "@/components/Breadcrumb.vue"
import VueGoodTablePlugin from 'vue-good-table-next'


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

initializeApp(firebaseConfig);
app.use(router).mount('#app')
app.use(VueApexCharts)
app.use(VueGoodTablePlugin)
app.component("breadcrumb", Breadcrumb)
app.component("background", Background)
