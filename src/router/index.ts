import { createRouter, createWebHistory } from 'vue-router'
import Slide1 from '../views/1.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '1',
      component: Slide1,
    },
    {
      path: '/2',
      name: '2',
      component: () => import('../views/2.vue')
    },{
      path: '/3',
      name: '3',
      component: () => import('../views/3.vue')
    },{
      path: '/4',
      name: '4',
      component: () => import('../views/4.vue')
    }, {
      path: '/datenschutz',
      name: 'Datenschutz',
      component: () => import('../views/DataprotectionView.vue')
    }, {
      path: '/impressum',
      name: 'Impressum',
      component: () => import('../views/ImprintView.vue')
    }
  ]
})

export default router
