import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home/HomeView.vue'
import CourseInfoView from '@/views/courses/CourseInfoView.vue'

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
      component: () => import('@/views/courses/CoursesView.vue'),
    },
    {
      path: '/courses/courseInfo/:courseId',
      name: 'CourseInfo',
      component: CourseInfoView,
    },
    {
      path: '/community',
      name: 'Community',
      component: () => import('@/views/community/Community.vue'),
    },
    {
      path: '/blogs',
      name: 'Blogs',
      component: () => import('@/views/blogs/BlogsView.vue'),
    },
    {
      path: '/blogs/blogInfo',
      name: 'BlogInfo',
      component: () => import('@/views/blogs/BlogInfoview.vue'),
    },
    {
      path: '/me',
      name: 'Me',
      component: () => import('@/views/me/MeView.vue'),
      children: [
        {
          path: 'myinfo',
          name: 'Myinfo',
          component: () => import('@/components/me/MyInfo.vue'),
        },
        {
          path: 'mycourses',
          name: 'MyCourses',
          component: () => import('@/components/me/MyCourses.vue'),
        },
      ],
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/login/LoginView.vue'),
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/views/login/RegisterView.vue'),
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/views/about/AboutView.vue'),
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
