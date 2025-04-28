<template>
  <div class="grid w-full grid-cols-1 px-10vw py-8 lg:block">
    <aside class="top-28 inline-block space-y-4 lg:fixed lg:w-[calc((100%-20vw)/5)]">
      <div class="rounded-lg bg-[#F9F9F9] p-4 text-[#333333] shadow-sm dark:bg-[#2B2B2B] dark:text-white">
        <div class="flex flex-col items-center space-y-3 text-center">
          <img :src="user.avatar" class="aspect-[1/1] w-full border-2 border-blue-100" alt="用户头像" />
          <h2 class="text-xl font-semibold">
            {{ user.name }}
          </h2>
          <p class="mt-1 flex w-full flex-wrap items-center justify-between gap-3 text-sm">
            <span>关注数：18</span>
            <span>粉丝数：20</span>
          </p>
        </div>
      </div>
      <nav class="rounded-lg bg-[#F9F9F9] p-4 text-[#333333] shadow-sm dark:bg-[#2B2B2B] dark:text-white">
        <ul class="space-y-2">
          <RouterLink to="/profile" class="flex items-center space-x-3 rounded-lg p-3 transition-colors duration-normal hover:bg-[#0089DD] hover:text-[#EEEEEE] dark:hover:bg-[#404040] dark:hover:text-yellow">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
            <span>个人资料</span>
          </RouterLink>

          <RouterLink to="/courses" class="flex items-center space-x-3 rounded-lg p-3 transition-colors duration-normal hover:bg-[#0089DD] hover:text-[#EEEEEE] dark:hover:bg-[#404040] dark:hover:text-yellow">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            <span>我的课程</span>
          </RouterLink>

          <RouterLink to="/community" class="flex items-center space-x-3 rounded-lg p-3 transition-colors duration-normal hover:bg-[#0089DD] hover:text-[#EEEEEE] dark:hover:bg-[#404040] dark:hover:text-yellow">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
            </svg>

            <span>我的问题</span>
          </RouterLink>

          <RouterLink to="/community" class="flex items-center space-x-3 rounded-lg p-3 transition-colors duration-normal hover:bg-[#0089DD] hover:text-[#EEEEEE] dark:hover:bg-[#404040] dark:hover:text-yellow">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>

            <span>收藏帖子</span>
          </RouterLink>
        </ul>
      </nav>

      <!-- 学习概览 -->
      <div class="rounded-lg bg-[#F9F9F9] p-4 text-[#333333] shadow-sm dark:bg-[#2B2B2B] dark:text-white">
        <h3 class="mb-4 font-semibold">学习概览</h3>
        <dl class="space-y-3">
          <div v-for="stat in stats" :key="stat.label" class="flex items-center justify-between">
            <dt class="text-sm">
              {{ stat.label }}
            </dt>
            <dd class="font-medium">
              {{ stat.value }}
            </dd>
          </div>
        </dl>
      </div>
    </aside>

    <!-- 右侧主内容区 -->

    <div class="mt-4 inline-block space-y-8 rounded-lg bg-[#F9F9F9] p-3 text-[#333333] shadow-sm dark:bg-[#2B2B2B] dark:text-white lg:col-span-8 lg:ml-[calc(20%+30px)] lg:mt-0 lg:w-[calc(75%-30px)]">
      <RouterView />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'

// 用户数据
const user = ref({
  name: '张三',
  avatar: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop',
  registerDate: '2023年1月',
})

// 学习数据
const stats = ref([
  { label: '学习时长', value: '128 小时' },
  { label: '完成课程', value: '12 门' },
])
</script>

<style scoped></style>
