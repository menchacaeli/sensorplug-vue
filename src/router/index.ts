import { createRouter, createWebHistory } from 'vue-router'
import GetStarted from '../views/GetStarted.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'get-started',
      component: GetStarted
    },
    {
      path: '/geolocation',
      name: 'geolocation',
      component: () => import('../views/Geolocation.vue')
    },
    {
      path: '/motion',
      name: 'motion',
      component: () => import('../views/Motion.vue')
    },
    {
      path: '/orientation',
      name: 'orientation',
      component: () => import('../views/Orientation.vue')
    }
  ]
})

export default router
