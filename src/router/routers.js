import { createRouter, createWebHistory } from 'vue-router'
const purchase = () => import('@/views/purchase')

const routes = [
  {
    path: '/',
    component: purchase,
    name: 'purchase',
    meta: { title: '购买' }
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

