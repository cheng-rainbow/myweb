<template>
  <div class="overflow-hidden rounded-md bg-[#F9F9F9] transition-all duration-normal hover:scale-[1.02] dark:bg-[#2B2B2B]">
    <div @click="handleCourseClicked" class="cursor-pointer">
      <img :src="course.image" class="" />
    </div>
    <div class="flex flex-1 flex-col justify-between p-4 text-[#333333] dark:text-[#EEEEEE]">
      <div>
        <div @click="handleCourseClicked" class="flex cursor-pointer items-center text-lg text-[#0089DD] dark:text-yellow">
          {{ course.title }}
        </div>
        <div class="line-clamp-2 h-[3rem]">
          {{ course.description }}
        </div>
      </div>
      <div class="flex items-center justify-between">
        <span @click="handleClickedAuthor" class="cursor-pointer">{{ course.author }}</span>
        <span @click="handleCourseClicked" class="cursor-pointer">{{ course.price }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import router from '@/router'
import type { Course } from '@/stores/webInfo'
import { defineProps } from 'vue'

const { course } = defineProps<{
  course: Course
}>()

const handleCourseClicked = () => {
  router.push({
    name: 'CourseInfo',
    params: { courseId: course.id },
  })
}

const handleClickedAuthor = () => {}
</script>

<style scoped>
/* .card:hover {
  transform-origin: center;
  transform: rotateZ(-2deg);
  scale: 1.08;
} */
</style>
