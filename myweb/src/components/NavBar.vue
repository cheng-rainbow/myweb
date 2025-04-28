<template>
  <nav class="flex h-full items-center justify-between">
    <RouterLink :to="{ name: 'Home' }" class="group relative inline-block py-2 text-black transition-colors duration-normal dark:text-white">
      <h1>码上学</h1>
      <span class="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 transform bg-black transition-transform duration-normal group-hover:scale-x-100 group-hover:opacity-100 dark:bg-white"></span>
    </RouterLink>

    <ul class="hidden flex-row lg:flex">
      <li v-for="item in navItems" :key="item.id" :class="item.id == actNavItemId ? 'text-black dark:text-white' : ''" class="relative px-5 py-3">
        <RouterLink :class="item.id != actNavItemId ? 'hover:text-black dark:hover:text-red' : ''" class="transition-colors duration-normal" :to="{ name: item.routeName }">
          {{ item.name }}
          <img class="absolute bottom-0 w-8" :class="item.id == actNavItemId ? 'block' : 'hidden'" src="/public/svg/yello-line.svg" />
        </RouterLink>
      </li>
    </ul>

    <div class="flex items-center justify-center">
      <!-- 主题切换 -->
      <button @click="toggleTheme" class="mx-2 hidden h-14 w-14 lg:block">
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
      <!-- 小屏菜单栏 -->
      <button @click="toggleMenu" class="mx-2 block h-14 w-14 lg:hidden">
        <svg v-if="!showOpenMenu" xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24">
          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 5L12 5L19 5M5 12H19M5 19L12 19L19 19">
            <animate fill="freeze" attributeName="d" dur="0.1s" values="M5 5L12 5L19 5M5 12H19M5 19L12 19L19 19;M5 5L12 12L19 5M12 12H12M5 19L12 12L19 19" />
          </path>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" stroke-dasharray="16" stroke-dashoffset="16" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
            <path d="M5 5h14">
              <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.1s" values="16;0" />
            </path>
            <path d="M5 12h14">
              <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.1s" dur="0.1s" values="16;0" />
            </path>
            <path d="M5 19h14">
              <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.1s" values="16;0" />
            </path>
          </g>
        </svg>
      </button>
      <button @click="() => router.push({ name: 'Login' })" class="h-10 w-10 rounded-full">登陆</button>
    </div>
  </nav>

  <ul v-if="!showOpenMenu" class="absolute left-0 z-50 flex w-full flex-col bg-white-28 transition-all duration-normal dark:bg-black-28">
    <li v-for="item in navItems" @click="handleMenuClicked(item)" :key="item.id" :class="item.id == actNavItemId ? 'text-black dark:text-white' : ''" class="relative cursor-pointer border-b-[1px] border-dashed border-gray-300 px-8vw py-3 dark:border-gray-44 dark:hover:text-red">
      <RouterLink :to="{ name: item.routeName }">
        {{ item.name }}
        <img class="absolute w-8" :class="item.id == actNavItemId ? 'block' : 'hidden'" src="/public/svg/yello-line.svg" alt="" />
      </RouterLink>
    </li>
    <li @click="toggleTheme" class="w-full cursor-pointer border-b-[1px] border-dashed border-gray-300 px-8vw py-3 dark:border-gray-44">
      <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24">
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
      <svg v-else xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" stroke-dasharray="64" stroke-dashoffset="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 3c-4.97 0 -9 4.03 -9 9c0 4.97 4.03 9 9 9c3.53 0 6.59 -2.04 8.06 -5c0 0 -6.06 1.5 -9.06 -3c-3 -4.5 1 -10 1 -10Z">
          <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="64;0" />
        </path>
      </svg>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import router from '@/router'
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useWebInfo } from '@/stores/webInfo'
import { storeToRefs } from 'pinia'

interface NavItem {
  id: number
  name: string
  routeName: string
}

const { isDark } = storeToRefs(useWebInfo())
const route = useRoute()
const showOpenMenu = ref<boolean>(true)
const mediaWidth = window.matchMedia('(min-width: 1024px)')
const actNavItemId = ref<number>(1)

const navItems: NavItem[] = [
  {
    id: 1,
    name: '首页',
    routeName: 'Home',
  },
  {
    id: 2,
    name: '课程',
    routeName: 'Courses',
  },
  {
    id: 3,
    name: '社区',
    routeName: 'Community',
  },
  {
    id: 4,
    name: '博客',
    routeName: 'Blogs',
  },
  // {
  //   id: 5,
  //   name: '关于',
  //   routeName: 'About',
  // },
]

watch(
  () => route.path,
  (newV, oldV) => {
    let f = 0
    for (let i = 0; i < navItems.length; i++) {
      if (newV.includes(navItems[i].routeName.toLowerCase())) {
        actNavItemId.value = navItems[i].id
        f = 1
        break
      }
    }
    if (f == 0) actNavItemId.value = -1
  },
)

const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark')
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
    isDark.value = true
  } else {
    document.documentElement.classList.remove('dark')
    isDark.value = false
  }

  mediaWidth.addEventListener('change', (e) => {
    if (e.matches) {
      showOpenMenu.value = true
    }
  })
})

const handleMenuClicked = (item: NavItem) => {
  showOpenMenu.value = true
  router.push({ name: item.routeName })
}

const toggleMenu = () => {
  showOpenMenu.value = !showOpenMenu.value
}
</script>
<style scoped>
.text-white {
  color: white !important;
}
</style>
