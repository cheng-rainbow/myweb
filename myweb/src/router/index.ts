import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/courses',
      name: 'Courses',
      component: () => import('@/views/CoursesView.vue'),
    },
    {
      path: '/blog',
      name: 'Blog',
      component: () => import('@/views/BlogView.vue'),
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/me',
      name: 'Me',
      component: () => import('@/views/MeView.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/LoginView.vue'),
    },
    {
      path: '/:catchAll(.*)', // 捕获所有未匹配的路径
      component: HomeView,
    },
  ],
})

export default router
