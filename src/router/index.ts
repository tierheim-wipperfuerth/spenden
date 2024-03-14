import { createRouter, createWebHistory } from 'vue-router'
import Slide1 from '../views/1.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '1',
      component: Slide1
    },
    {
      path: '/2',
      name: '2',
      component: () => import('../views/2.vue')
    }
  ]
})

export default router
