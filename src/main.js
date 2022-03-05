import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue3, IconsPlugins } from 'bootstrap-vue-3'

import '@popperjs/core';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const app = createApp(App)

app.use(router).use(BootstrapVue3).use(IconsPlugins).mount('#app')
