import { createRouter, createWebHistory } from 'vue-router'
import Slide1 from '../views/1.vue'

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
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
      path: '/5',
      name: '5',
      component: () => import('../views/5.vue')
    },{
      path: '/6',
      name: '6',
      component: () => import('../views/6.vue')
    },{
      path: '/7',
      name: '7',
      component: () => import('../views/7.vue')
    }, {
      path: '/8',
      name: '8',
      component: () => import('../views/8.vue')
    },{
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
