import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home/HomeView.vue'
import CourseInfoView from '@/views/courses/CourseInfoView.vue'
import DefaultLayout from '@/DefaultLayout.vue'
import CoursesView from '@/views/courses/CoursesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'DefaultLayout',
      component: DefaultLayout,
      redirect: { name: 'Home' },
      children: [
        {
          path: 'home',
          name: 'Home',
          component: HomeView,
        },
        {
          path: 'courses',
          name: 'Courses',
          component: CoursesView,
        },
        {
          path: 'courses/courseInfo/:courseId',
          name: 'CourseInfo',
          component: CourseInfoView,
        },
        {
          path: 'community/:navId?',
          name: 'Community',
          component: () => import('@/views/community/Community.vue'),
        },
        {
          path: 'blogs',
          name: 'Blogs',
          redirect: { name: 'NotesBlog' },
          component: () => import('@/views/blogs/BlogsView.vue'),
          children: [
            {
              path: 'notes',
              name: 'NotesBlog',
              component: () => import('@/components/blogs/NotesBlog.vue'),
            },
            {
              path: 'daily',
              name: 'DailyBlog',
              component: () => import('@/components/blogs/DailyBlog.vue'),
            },
            {
              path: 'travel',
              name: 'TravelBlog',
              component: () => import('@/components/blogs/TravelBlog.vue'),
            },
          ],
        },
        {
          path: 'blogs/blogInfo',
          name: 'BlogInfo',
          component: () => import('@/views/blogs/BlogInfoview.vue'),
        },
        {
          path: 'me',
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
      ],
    },
    {
      path: '/courses/video/:courseId/:videoId',
      name: 'CourseVideo',
      component: () => import('@/views/courses/CourseVideo.vue'),
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
      path: '/:catchAll(.*)',
      redirect: { name: 'Home' },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return {
        ...savedPosition,
      }
    }
    return {
      left: 0,
      top: 0,
    }
  },
})

export default router
