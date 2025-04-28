<template>
  <div class="wave fixed top-0 z-50 flex h-[100vh] w-[100vw] items-center justify-center bg-white-2A px-5vw dark:bg-neutral-950">
    <RouterLink :to="{ name: 'Home' }" class="group fixed left-6 top-5 inline-block py-2 text-black transition-colors duration-normal dark:text-white">
      <h1>码上学</h1>
      <span class="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 transform bg-black transition-transform duration-normal group-hover:scale-x-100 group-hover:opacity-100 dark:bg-white"></span>
    </RouterLink>
    <button @click="toggleTheme" class="fixed right-3 top-4 block h-14 w-14">
      <svg class="mx-auto" v-if="isDark" xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
          <path stroke-dasharray="36" stroke-dashoffset="36" d="M12 7c2.76 0 5 2.24 5 5c0 2.76 -2.24 5 -5 5c-2.76 0 -5 -2.24 -5 -5c0 -2.76 2.24 -5 5 -5">
            <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.25s" values="36;0" />
          </path>
          <path stroke-dasharray="2" stroke-dashoffset="2" d="M12 19v1M19 12h1M12 5v-1M5 12h-1" opacity="0">
            <animate fill="freeze" attributeName="d" begin="0.3s" dur="0.1s" values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1" />
            <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.1s" values="2;0" />
            <set fill="freeze" attributeName="opacity" begin="0.3s" to="1" />
            <animateTransform attributeName="transform" dur="15s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" />
          </path>
          <path stroke-dasharray="2" stroke-dashoffset="2" d="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5" opacity="0">
            <animate fill="freeze" attributeName="d" begin="0.4s" dur="0.1s" values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5" />
            <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.1s" values="2;0" />
            <set fill="freeze" attributeName="opacity" begin="0.4s" to="1" />
            <animateTransform attributeName="transform" dur="15s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" />
          </path>
        </g>
      </svg>
      <svg v-else class="mx-auto" xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" stroke-dasharray="64" stroke-dashoffset="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 3c-4.97 0 -9 4.03 -9 9c0 4.97 4.03 9 9 9c3.53 0 6.59 -2.04 8.06 -5c0 0 -6.06 1.5 -9.06 -3c-3 -4.5 1 -10 1 -10Z">
          <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="64;0" />
        </path>
      </svg>
    </button>
    <div class="relative flex w-full max-w-3xl overflow-hidden rounded-xl bg-white-19 shadow-xl dark:bg-neutral-900">
      <div class="hidden w-1/2 bg-cover bg-center sm:block" style="background-image: url('https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=2070&auto=format&fit=crop')"></div>

      <div class="w-full p-6 sm:w-1/2">
        <h2 class="dark:text-yellow-300 mb-4 text-center text-2xl font-bold text-yellow">欢迎登录</h2>

        <form @submit.prevent="handleLogin" class="mb-4">
          <div class="mb-4">
            <label for="username" class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-100"> 用户名 </label>
            <input id="username" v-model="username" type="text" required class="w-full rounded-lg border border-gray-300 px-3 py-2 transition-shadow duration-normal focus:outline-none focus:ring-2 focus:ring-yellow dark:border-neutral-700 dark:bg-neutral-800" placeholder="请输入用户名" />
          </div>
          <div class="mb-6">
            <label for="password" class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-100"> 密码 </label>
            <input id="password" v-model="password" type="password" required class="w-full rounded-lg border border-gray-300 px-3 py-2 transition-shadow duration-normal focus:outline-none focus:ring-2 focus:ring-yellow dark:border-neutral-700 dark:bg-neutral-800" placeholder="请输入密码" />
          </div>
          <button type="submit" class="layer dark:bg-yellow-400 w-full rounded-lg bg-yellow px-4 py-2 text-white dark:text-neutral-900">登录</button>
        </form>

        <div class="relative my-2">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300 dark:border-neutral-700"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="bg-white-21 px-2 text-gray-500 dark:bg-neutral-900 dark:text-gray-300"> 或使用第三方登录 </span>
          </div>
        </div>

        <div class="flex justify-around">
          <button @click="handleThirdPartyLogin('wechat')" class="flex items-center justify-center rounded-full bg-green p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
              <path fill="#fff" d="M15.85 8.14c.39 0 .77.03 1.14.08C16.31 5.25 13.19 3 9.44 3c-4.25 0-7.7 2.88-7.7 6.43c0 2.05 1.15 3.86 2.94 5.04L3.67 16.5l2.76-1.19c.59.21 1.21.38 1.87.47c-.09-.39-.14-.79-.14-1.21c-.01-3.54 3.44-6.43 7.69-6.43M12 5.89a.96.96 0 1 1 0 1.92a.96.96 0 0 1 0-1.92M6.87 7.82a.96.96 0 1 1 0-1.92a.96.96 0 0 1 0 1.92" stroke-width="0.5" stroke="#fff" />
              <path fill="#fff" d="M22.26 14.57c0-2.84-2.87-5.14-6.41-5.14s-6.41 2.3-6.41 5.14s2.87 5.14 6.41 5.14c.58 0 1.14-.08 1.67-.2L20.98 21l-1.2-2.4c1.5-.94 2.48-2.38 2.48-4.03m-8.34-.32a.96.96 0 1 1 .96-.96c.01.53-.43.96-.96.96m3.85 0a.96.96 0 1 1 0-1.92a.96.96 0 0 1 0 1.92" stroke-width="0.5" stroke="#fff" />
            </svg>
          </button>
          <button @click="handleThirdPartyLogin('qq')" class="flex items-center justify-center rounded-full bg-blue0 p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 20 20">
              <path fill="#fff" d="M18.496 13.607c-.134-1.931-1.372-3.55-2.088-4.387c.1-.243.341-1.653-.593-2.615q.003-.035.002-.068C15.817 2.743 13.237.012 10 0C6.763.013 4.183 2.743 4.183 6.537q0 .035.002.068c-.934.962-.692 2.372-.593 2.615c-.715.837-1.953 2.456-2.088 4.387c-.024.508.051 1.248.288 1.577c.289.4 1.081-.081 1.648-1.362c.158.594.521 1.5 1.345 2.649c-1.378.33-1.771 1.752-1.307 2.53c.327.548 1.075.999 2.365.999c2.296 0 3.31-.645 3.763-1.095q.138-.147.394-.146q.256-.001.394.146c.453.45 1.467 1.095 3.762 1.095c1.29 0 2.039-.45 2.366-.999c.464-.778.07-2.2-1.307-2.53c.824-1.15 1.188-2.055 1.345-2.649c.567 1.281 1.36 1.763 1.648 1.362c.237-.33.312-1.07.288-1.577" stroke-width="0.5" stroke="#fff" />
            </svg>
          </button>
        </div>

        <p class="mt-4 text-center text-sm text-gray-600 dark:text-gray-300">
          还没有账号？
          <RouterLink :to="{ name: 'Register' }" href="#" class="text-yellow hover:underline"> 立即注册 </RouterLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useWebInfo } from '@/stores/webInfo'
import { storeToRefs } from 'pinia'
const { isDark } = storeToRefs(useWebInfo())
const username = ref('')
const password = ref('')

const handleLogin = () => {
  console.log('登录尝试：', {
    username: username.value,
    password: password.value,
  })
}

const handleThirdPartyLogin = (platform: string) => {
  console.log(`使用 ${platform} 登录`)
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark')
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}
</script>

<style scoped></style>
