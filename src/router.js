import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '@/views/pages/NotFound'

//we'll group related routes.

const routes = [

  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
  },
  
  //sessions
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/sessions/Login'),

  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('@/views/sessions/SignUp'),

  },
  {
    path: '/forgot',
    name: 'forgot',
    component: () => import('@/views/sessions/Forgot'),

  },
  {
    path: '/reset',
    name: 'reset',
    component: () => import('@/views/sessions/Reset'),

  },

  //pages
  {
    path: '/settings',
    name: 'settings',
    component: () => import('@/views/pages/Settings')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not found',
    component: NotFound
  },

  //dashboard
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/dashboard/Dashboard')
  },
  {
    path: '/registrations',
    name: 'registrations',
    component: () => import('@/views/dashboard/Registrations')
  },
  {
    path: '/parkingSettings',
    name: 'parkingSettings',
    component: () => import('@/views/dashboard/ParkingSettings')
  },
  {
    path: '/reports',
    name: 'reports',
    component: () => import('@/views/dashboard/Reports')
  },
  {
    path: '/securityMen',
    name: 'securityMen',
    component: () => import('@/views/dashboard/SecurityMen')
  },
  // change into parking slots 
  {
    path: '/users',
    name: 'users',
    component: () => import('@/views/dashboard/Users')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
