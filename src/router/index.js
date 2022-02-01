import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/reymanda',
    name: 'ReyManda',
    component: () => import(/* webpackChunkName: "reymanda" */ '../views/ReyManda.vue')
  },
  {
    path: '/yonunca',
    name: 'YoNunca',
    component: () => import(/* webpackChunkName: "yonunca" */ '../views/YoNunca.vue')
  },
  {
    path: '/masprobable',
    name: 'MasProbable',
    component: () => import(/* webpackChunkName: "yonunca" */ '../views/MasProbable.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router