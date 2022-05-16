import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '@/views/pages/NotFound'

//we'll group related routes.

const routes = [

  {
    path: '/home/:id*',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    props: true,
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
    path: '/reset/:pathMatch(.*)*',
    name: 'reset',
    component: () => import('@/views/sessions/Reset'),
    props: true

  },
  {
    path: '/sent/:email',
    name: 'sent',
    component: () => import('@/views/sessions/Sent'),
    props: true
  },

  //pages
  {
    path: '/settings/:id',
    name: 'settings',
    component: () => import('@/views/pages/Settings'),
    props: true
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not found',
    component: NotFound
  },
  {
    path: '/about/:id*',
    name: 'about',
    component: () => import('@/views/pages/About'),
    props: true
  },

  //dashboard
  {
    path: '/dashboard/:id',
    name: 'dashboard',
    component: () => import('@/views/dashboard/Dashboard'),
    props: true
  },
  {
    path: '/registrations/:id',
    name: 'registrations',
    component: () => import('@/views/dashboard/Registrations'),
    props: true

  },
  {
    path: '/parkingSettings/:id',
    name: 'parkingSettings',
    component: () => import('@/views/dashboard/ParkingSettings'),
    props: true

  },
  {
    path: '/reports/:id',
    name: 'reports',
    component: () => import('@/views/dashboard/Reports'),
    props: true

  },
  {
    path: '/securityMen/:id',
    name: 'securityMen',
    component: () => import('@/views/dashboard/SecurityMen'),
    props: true

  },
  // change into parking slots 
  {
    path: '/parkingSlots/:id',
    name: 'parkingslots',
    component: () => import('@/views/dashboard/ParkingSlots'),
    props: true

  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
