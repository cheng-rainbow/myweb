<template>
  <div class="relative px-15vw py-10">
    <h1 class="pb-5">课程中心</h1>
    <h3 class="flex items-center justify-start gap-3 flex-wrap pb-8 transition-all duration-normal">
      <span class="text-lg">标签：</span>
      <li @click="handleTagClick(tag.id)" v-for="tag in tags" class="px-3 py-2 list-none cursor-pointer rounded-xl" :key="tag.id">{{ tag.name }}</li>
    </h3>
    <section>
      <div id="courseView-card" class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 gap-5">
        <CoursesItem @click="handleCourseClicked(c)" v-for="c in courses" :key="c.id" :course="c"></CoursesItem>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import CoursesItem from '@/components/CoursesItem.vue'
import { storeToRefs } from 'pinia'
import { useWebInfo, type Course } from '@/stores/webInfo'
import router from '@/router'

const SelectedTagId = ref<number>(1)
const webInfo = useWebInfo()
const { isDark } = storeToRefs(webInfo)
const courses = webInfo.courses
const colors = ['#c2993a', '#36a3ff', '#ff4545']

const handleTagClick = (tagId: number) => {
  SelectedTagId.value = tagId
}

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

const handleCourseClicked = (course: Course) => {
  router.push({ name: 'CourseInfo', params: { courseId: course.id } })
}

onMounted(() => {
  const cards = document.getElementById('courseView-card') as HTMLElement
  const handleMouseEnter = (e: Event) => {
    const card = e.currentTarget as HTMLElement
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    const borderColor = isDark.value ? '#191919' : '#f6f6f6' // 注意 .value
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
