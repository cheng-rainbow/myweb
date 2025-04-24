<template>
  <div class="cursor-pointer bg-white dark:bg-black-19 transition-all duration-normal rounded-md overflow-hidden">
    <div class="">
      <img :src="course.image" class="" />
    </div>
    <div class="flex-1 p-4 flex flex-col justify-between">
      <div>
        <div class="text-lg text-black dark:text-white flex items-center">{{ course.title }}</div>
        <div class="line-clamp-2 h-[3rem]">{{ course.description }}</div>
      </div>
      <div class="flex items-center justify-between">
        <span>{{ course.author }}</span> <span>{{ course.price }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Course } from '@/stores/webInfo'
import { defineProps } from 'vue'

const props = defineProps<{
  course: Course
}>()
</script>

<style scoped>
/* .card:hover {
  transform-origin: center;
  transform: rotateZ(-2deg);
  scale: 1.08;
} */
</style>
