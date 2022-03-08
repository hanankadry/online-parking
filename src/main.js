import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Background from '@/components/Background'

import '@popperjs/core'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const app = createApp(App)

app.use(router).mount('#app')
app.component("Background", Background)

