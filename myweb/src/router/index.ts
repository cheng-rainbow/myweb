import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: HomeView,
    },

    {
      path: '/courses',
      name: 'Courses',
      component: () => import('@/views/CoursesView.vue'),
    },
    {
      path: '/courses/courseInfo/:courseId',
      name: 'CourseInfo',
      component: () => import('@/views/CourseInfoView.vue'),
    },
    {
      path: '/blogs',
      name: 'Blogs',
      component: () => import('@/views/BlogsView.vue'),
    },
    {
      path: '/blogs/blogInfo',
      name: 'BlogInfo',
      component: () => import('@/views/BlogInfoview.vue'),
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/community',
      name: 'Community',
      component: () => import('@/views/Community.vue'),
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
      redirect: {
        name: 'Home',
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { top: 0 }
  },
})

export default router
