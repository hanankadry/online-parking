import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/sessions/Forgot.vue'

//we'll group related routes.

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/sessions/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
