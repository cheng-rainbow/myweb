<template>
  <div class="relative px-15vw py-10">
    <div class="mb-5 space-y-3 rounded-md bg-[#F9F9F9] p-2 transition-all duration-normal dark:bg-[#2B2B2B]">
      <h3 class="flex flex-wrap items-center justify-start text-[#333333] transition-colors duration-normal dark:text-white">
        <span class="font-bold">标签：</span>
        <li @click="changeSelectedTagId(tag.id)" class="mr-2 cursor-pointer list-none rounded-md px-2 py-1 transition-colors duration-normal" :class="{ 'bg-[#0089DD] text-white dark:bg-[#404040] dark:text-yellow': selectedTagId == tag.id }" v-for="tag in tags" :key="tag.id">
          {{ tag.name }}
        </li>
      </h3>

      <h3 class="flex flex-wrap items-center justify-between text-[#333333] transition-colors duration-normal dark:text-white">
        <div class="flex items-center">
          <span class="font-bold">类型：</span>
          <li @click="changeSelectedTypeId(t.id)" class="mr-2 cursor-pointer list-none rounded-md px-2 py-1 transition-colors duration-normal" :class="{ 'bg-[#0089DD] text-white dark:bg-[#404040] dark:text-yellow': selectedTypeId == t.id }" v-for="t in types" :key="t.id">
            {{ t.name }}
          </li>
        </div>
        <div class="relative hidden h-8 items-center sm:flex">
          <input class="h-full rounded-md border bg-white-19 pl-7 pr-3 outline-none transition-shadow duration-normal focus:shadow-[0_0_0_2px_#1B76CF] dark:border-0 dark:bg-[#404040] dark:focus:shadow-[0_0_0_2px_#B7903A] sm:w-full" type="text" placeholder="搜索..." />
          <svg class="absolute left-1 top-1/2 inline-block -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M10.44 2.75a7.69 7.69 0 1 0 4.615 13.842c.058.17.154.329.29.464l3.84 3.84a1.21 1.21 0 0 0 1.71-1.712l-3.84-3.84a1.2 1.2 0 0 0-.463-.289A7.69 7.69 0 0 0 10.44 2.75m-5.75 7.69a5.75 5.75 0 1 1 11.5 0a5.75 5.75 0 0 1-11.5 0" clip-rule="evenodd" /></svg>
        </div>
        <div class="relative flex h-12 items-center py-2 sm:hidden">
          <input class="h-full rounded-md border bg-white-19 pl-7 pr-3 outline-none transition-shadow duration-normal focus:shadow-[0_0_0_2px_#1B76CF] dark:border-0 dark:bg-[#404040] dark:focus:shadow-[0_0_0_2px_#B7903A] sm:w-full" type="text" placeholder="搜索..." />
          <svg class="absolute left-1 top-1/2 inline-block -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M10.44 2.75a7.69 7.69 0 1 0 4.615 13.842c.058.17.154.329.29.464l3.84 3.84a1.21 1.21 0 0 0 1.71-1.712l-3.84-3.84a1.2 1.2 0 0 0-.463-.289A7.69 7.69 0 0 0 10.44 2.75m-5.75 7.69a5.75 5.75 0 1 1 11.5 0a5.75 5.75 0 0 1-11.5 0" clip-rule="evenodd" /></svg>
        </div>
      </h3>
    </div>

    <section>
      <div id="courseView-card" class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        <CoursesCard v-for="c in courses" :key="c.id" :course="c"></CoursesCard>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import CoursesCard from '@/components/CoursesCard.vue'
import { storeToRefs } from 'pinia'
import { useWebInfo, type Course } from '@/stores/webInfo'
import router from '@/router'

const SelectedTagId = ref<number>(1)
const webInfo = useWebInfo()
const { isDark } = storeToRefs(webInfo)
const courses = webInfo.courses
const colors = ['#c2993a', '#36a3ff', '#ff4545']

const tags = [
  {
    id: 1,
    name: '全部',
  },
  {
    id: 2,
    name: '实战项目',
  },
  {
    id: 3,
    name: '前端',
  },
  {
    id: 4,
    name: '后端',
  },
  {
    id: 5,
    name: 'Java',
  },
  {
    id: 6,
    name: 'Vue',
  },
]
const types = [
  {
    id: 1,
    name: '全部',
  },
  {
    id: 2,
    name: '免费',
  },
  {
    id: 3,
    name: '付费',
  },
]

const selectedTagId = ref(1)
const selectedTypeId = ref(1)

const changeSelectedTagId = (id: number) => {
  selectedTagId.value = id
  console.log(selectedTagId.value)
}
const changeSelectedTypeId = (id: number) => {
  selectedTypeId.value = id
  console.log(selectedTypeId.value)
}

onMounted(() => {
  const cards = document.getElementById('courseView-card') as HTMLElement
  const handleMouseEnter = (e: Event) => {
    const card = e.currentTarget as HTMLElement
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    const borderColor = isDark.value ? '#212121' : '#ffffff' // 注意 .value
    card.style.boxShadow = `0 0 0 4px ${borderColor}, 0 0 0 6px ${randomColor}`
  }
  const handleMouseLeave = (e: Event) => {
    const card = e.currentTarget as HTMLElement
    card.style.boxShadow = 'none'
  }
  cards.childNodes.forEach((card) => {
    card.addEventListener('mouseenter', handleMouseEnter)
    card.addEventListener('mouseleave', handleMouseLeave)
  })
  onUnmounted(() => {
    cards.childNodes.forEach((card) => {
      card.removeEventListener('mouseenter', handleMouseEnter)
      card.removeEventListener('mouseleave', handleMouseLeave)
    })
  })
})
</script>

<style scoped></style>
