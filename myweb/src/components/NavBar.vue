<template>
  <nav class="h-full flex items-center justify-between">
    <div class="relative">
      <RouterLink :to="{ name: 'Home' }" class="text-black-0 dark:text-white-0 transition-all duration-normal py-2 group relative inline-block">
        <h1 class="text-3xl">Xiao Lii</h1>
        <span class="absolute bottom-0 left-0 w-full h-[2px] bg-black-0 dark:bg-white-0 transform scale-x-0 origin-left transition-transform duration-quick group-hover:scale-x-100 group-hover:opacity-100"></span>
      </RouterLink>
      <button @click="toggleLanguage" :aria-label="t('language.toggle')" class="w-7 h-5 text-center bg-white-100 dark:bg-black-400 rounded-md absolute top-[-0.5rem]">
        <Icon icon="fa6-solid:language" width="24" class="mx-auto" />
      </button>
    </div>

    <div class="">
      <ul class="hidden lg:flex flex-row text-xl">
        <li v-for="item in navItems" :key="item.id" class="px-5 py-2 relative">
          <RouterLink class="hover:text-light-hg active:text-light-hg dark:hover:text-dark-hg dark:active:text-dark-hg transition-all duration-quick group" :to="{ name: item.routeName }">
            {{ item.name }}
            <span class="absolute bottom-0 left-1/4 w-1/2 h-[2px] bg-light-hg dark:bg-dark-hg transform scale-x-0 origin-left transition-transform duration-quick group-hover:scale-x-100 group-hover:opacity-100"></span>
          </RouterLink>
        </li>
      </ul>
    </div>

    <div class="flex items-center justify-center">
      <button @click="toggleTheme" :aria-label="t('theme.toggle')" class="hidden lg:block w-14 h-14 mx-2 rounded-full border-2 border-white-200 dark:border-black-400 hover:border-black-400 dark:hover:border-white-200 transition-all duration-normal">
        <Icon v-if="isDark" icon="line-md:sunny-loop" width="32" height="32" class="mx-auto" />
        <Icon v-else icon="line-md:moon-simple" width="32" height="32" class="mx-auto" />
      </button>
      <button @click="toggleMenu" class="block lg:hidden w-14 h-14 mx-2 rounded-full border-2 border-white-200 dark:border-black-400 hover:border-black-400 dark:hover:border-white-200 transition-all duration-normal">
        <Icon v-if="!isOpenMenu" icon="line-md:close-to-menu-transition" width="32" height="32" class="mx-auto" />
        <Icon v-else icon="line-md:menu-to-close-transition" width="32" height="32" class="mx-auto" />
      </button>

      <button class="w-14 h-14 mx-2 rounded-full border-2 border-white-200 dark:border-black-400 hover:border-black-400 dark:hover:border-white-200 transition-all duration-normal">
        <Icon icon="icon-park-outline:me" width="32" height="32" class="mx-auto" />
      </button>
    </div>
  </nav>
  <div v-if="isOpenMenu" class="h-[calc(100vh-9rem)] overflow-auto w-full absolute left-0 absolute z-10 bg-white-0 dark:bg-black-200 transition-all duration-normal">
    <ul class="flex flex-col text-xl py-6">
      <li v-for="item in navItems" :key="item.id" class="px-8vw py-9 relative border-y-[1px] cursor-pointer white-200 dark:black-400 hover:text-light-hg active:text-light-hg dark:hover:text-dark-hg dark:active:text-dark-hg transition-all duration-quick">
        <RouterLink class="" :to="{ name: item.routeName }">
          {{ item.name }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue/dist/iconify.js'
import { ref, onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'

// 计算属性：检查当前是否为暗模式
const isDark = ref(false)
const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark')
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

// 当前语言
const { t, locale } = useI18n()
const currentLocale = ref(locale.value)
const toggleLanguage = () => {
  const newLocale = currentLocale.value === 'en' ? 'zh' : 'en'
  locale.value = newLocale
  currentLocale.value = newLocale
  localStorage.setItem('locale', newLocale)
}

onMounted(() => {
  // 从 localStorage 恢复主题，或根据系统偏好设置
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
    isDark.value = true
  } else {
    document.documentElement.classList.remove('dark')
    isDark.value = false
  }

  // 从 localStorage 恢复语言
  const savedLocale = localStorage.getItem('locale')
  if (savedLocale) {
    locale.value = savedLocale
    currentLocale.value = savedLocale
  } else {
    locale.value = 'en' // 默认语言
    currentLocale.value = 'en'
  }
})

const navItems = [
  {
    id: '1',
    name: computed(() => t('nav.home')),
    routeName: 'Home',
  },
  {
    id: '2',
    name: computed(() => t('nav.courses')),
    routeName: 'Courses',
  },
  {
    id: '3',
    name: computed(() => t('nav.blog')),
    routeName: 'Blog',
  },
  {
    id: '4',
    name: computed(() => t('nav.about')),
    routeName: 'About',
  },
  {
    id: '5',
    name: computed(() => t('nav.me')),
    routeName: 'Me',
  },
]

let isOpenMenu = ref(false)
const toggleMenu = () => {
  isOpenMenu.value = !isOpenMenu.value
  console.log(isOpenMenu.value)
}
</script>
