<template>
  <div class="flex h-[100vh] w-[100vw] items-center justify-center bg-white-2A px-5vw dark:bg-[#212121]">
    <RouterLink :to="{ name: 'Home' }" class="group fixed left-6 top-5 inline-block py-2 text-black transition-colors duration-normal dark:text-white">
      <h1>码上学</h1>
      <span class="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 transform bg-black transition-transform duration-normal group-hover:scale-x-100 group-hover:opacity-100 dark:bg-white"></span>
    </RouterLink>
    <button @click="toggleTheme" class="fixed right-6 top-5 block h-14 w-14">
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
    <div class="relative flex w-full max-w-md overflow-hidden rounded-xl bg-white-19 shadow-xl dark:bg-neutral-900">
      <div class="w-full p-6">
        <h2 class="dark:text-yellow-300 mb-4 text-center text-2xl font-bold text-yellow">欢迎注册</h2>

        <form @submit.prevent="handleRegister" class="mb-4">
          <div class="mb-4">
            <label for="email" class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-100"> 邮箱 </label>
            <input id="email" v-model="email" type="email" required class="w-full rounded-lg border border-gray-300 px-3 py-2 transition-shadow duration-normal focus:outline-none focus:ring-2 focus:ring-yellow dark:border-neutral-700 dark:bg-neutral-800" placeholder="请输入邮箱" />
          </div>
          <div class="mb-4">
            <label for="password" class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-100"> 密码 </label>
            <input id="password" v-model="password" type="password" required class="w-full rounded-lg border border-gray-300 px-3 py-2 transition-shadow duration-normal focus:outline-none focus:ring-2 focus:ring-yellow dark:border-neutral-700 dark:bg-neutral-800" placeholder="请输入密码" />
          </div>
          <div class="mb-6">
            <label for="confirm-password" class="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-100"> 确认密码 </label>
            <input id="confirm-password" v-model="confirmPassword" type="password" required class="w-full rounded-lg border border-gray-300 px-3 py-2 transition-shadow duration-normal focus:outline-none focus:ring-2 focus:ring-yellow dark:border-neutral-700 dark:bg-neutral-800" placeholder="请再次输入密码" />
          </div>
          <button type="submit" class="layer dark:bg-yellow-400 w-full rounded-lg bg-yellow px-4 py-2 text-white dark:text-neutral-900">注册</button>
        </form>

        <p class="mt-4 text-center text-sm text-gray-600 dark:text-gray-300">
          已有账号？
          <RouterLink :to="{ name: 'Login' }" href="#" class="text-yellow hover:underline"> 立即登录 </RouterLink>
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
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const handleRegister = () => {
  console.log('注册尝试：', {
    username: username.value,
    email: email.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
  })
}

const handleThirdPartyLogin = (platform: string) => {
  console.log(`使用 ${platform} 注册`)
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark')
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}
</script>

<style scoped></style>
