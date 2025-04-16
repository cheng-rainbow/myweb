<template>
  <nav class="h-full flex items-center justify-between">
    <div>
      <RouterLink :to="{ name: 'Home' }" class="text-light-tt dark:text-dark-tt transition-all duration-normal py-2 group relative inline-block">
        <h1 class="text-3xl">Xiao Lii</h1>
        <span class="absolute bottom-0 left-0 w-full h-[2px] bg-light-tt dark:bg-dark-tt transform scale-x-0 origin-left transition-transform duration-quick group-hover:scale-x-100 group-hover:opacity-100"></span>
      </RouterLink>
    </div>

    <div>
      <ul class="flex flex-row text-xl">
        <li v-for="item in navItems" :key="item.id" class="px-5 py-2 relative">
          <RouterLink class="hover:text-light-tx-hg active:text-light-tx-hg dark:hover:text-dark-tx-hg dark:active:text-dark-tx-hg transition-all duration-quick group" :to="{}">
            {{ item.name }}
            <span class="absolute bottom-0 left-1/4 w-1/2 h-[2px] bg-light-tx-hg dark:bg-dark-tx-hg transform scale-x-0 origin-left transition-transform duration-quick group-hover:scale-x-100 group-hover:opacity-100"></span>
          </RouterLink>
        </li>
      </ul>
    </div>

    <div>
      <button @click="toggleTheme" :aria-label="t('theme.toggle')" class="w-14 h-14 mx-2 rounded-full border-2 border-light dark:border-dark hover:border-dark dark:hover:border-light transition-all duration-normal">
        <Icon v-if="isDark" icon="line-md:sunny-loop" width="32" height="32" class="mx-auto" />
        <Icon v-else icon="line-md:moon-simple" width="32" height="32" class="mx-auto" />
      </button>
      <button @click="toggleLanguage" :aria-label="t('language.toggle')" class="w-14 h-14 mx-2 text-center rounded-full border-2 border-light dark:border-dark hover:border-dark dark:hover:border-light transition-all duration-normal">
        <Icon :icon="currentLocale === 'en' ? 'flagpack:cn' : 'flagpack:us'" width="32" height="32" class="mx-auto" />
      </button>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue/dist/iconify.js'
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const navItems = [
  {
    id: '1',
    name: '首页',
  },
  {
    id: '2',
    name: '博文',
  },
  {
    id: '3',
    name: '关于',
  },
  {
    id: '4',
    name: '我的',
  },
]

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
</script>
