<template>
  <div class="px-12vw pt-10">
    <div class="mb-6 rounded-md bg-[#F8F8F8] p-4 shadow-sm transition-colors duration-normal dark:bg-[#2B2B2B] dark:text-white">
      <p class="mb-4 flex min-h-8 flex-wrap items-center">
        <span class="font-bold dark:text-white">类别：</span>
        <span @click="changeSelectedSortId(sort)" class="mr-3 h-8 w-12 cursor-pointer rounded-md px-2 py-1 transition-colors duration-normal" :class="{ 'bg-[#0089DD] text-[#EEEEEE] dark:bg-[#404040] dark:text-yellow': selectedSortId == sort.id }" v-for="sort in sorts" :key="sort.id">
          {{ sort.name }}
        </span>
      </p>
      <p v-if="selectedSortId == 1" class="flex min-h-8 flex-wrap items-center">
        <span class="font-bold dark:text-white">课程：</span>
        <span @click="changeSelectedCourseId(c)" class="mr-3 h-8 min-w-12 cursor-pointer rounded-md px-2 py-1 transition-colors duration-normal" :class="{ 'bg-[#0089DD] text-[#EEEEEE] dark:bg-[#404040] dark:text-yellow': selectedCourseId == c.id }" v-for="c in courses" :key="c.id">
          {{ c.name }}
        </span>
      </p>
      <p v-if="selectedSortId == 2" class="flex min-h-8 flex-wrap items-center">
        <span class="font-bold dark:text-white">标签：</span>
        <span @click="changeSelectedDailyTagId(t)" class="mr-3 h-8 min-w-12 cursor-pointer rounded-md px-2 py-1 transition-colors duration-normal" :class="{ 'bg-[#0089DD] text-[#EEEEEE] dark:bg-[#404040] dark:text-yellow': selectedDailyTagId == t.id }" v-for="t in dailyTags" :key="t.id">
          {{ t.name }}
        </span>
      </p>
      <p v-if="selectedSortId == 3" class="flex min-h-8 flex-wrap items-center">
        <span class="font-bold dark:text-white">地址：</span>
        <span @click="changeSelectedIpId(ip)" class="mr-3 h-8 w-12 cursor-pointer rounded-md px-2 py-1 transition-colors duration-normal" :class="{ 'bg-[#0089DD] text-[#EEEEEE] dark:bg-[#404040] dark:text-yellow': selectedIpId == ip.id }" v-for="ip in ips" :key="ip.id">
          {{ ip.name }}
        </span>
      </p>
    </div>
    <section>
      <RouterView />
    </section>
  </div>
</template>

<script lang="ts" setup>
import type { Courses, DailyTags, Ips, Sorts } from '@/interface/blog'
import router from '@/router'
import { ref } from 'vue'

const selectedSortId = ref(1)

const selectedCourseId = ref(0)
const selectedDailyTagId = ref(1)
const selectedIpId = ref(1)
const sorts: Sorts[] = [
  {
    id: 1,
    name: '讲义',
    routeName: 'NotesBlog',
  },
  {
    id: 2,
    name: '日常',
    routeName: 'DailyBlog',
  },
  {
    id: 3,
    name: '旅行',
    routeName: 'TravelBlog',
  },
]

const courses: Courses[] = [
  {
    id: 0,
    name: '全部',
  },
  {
    id: 1,
    name: 'Java进阶课',
  },
  {
    id: 2,
    name: 'JavaScript基础入门课',
  },
  {
    id: 3,
    name: 'C++进阶课',
  },
  {
    id: 4,
    name: 'Java进阶课程',
  },
  {
    id: 5,
    name: 'Java进阶课程',
  },
]

const dailyTags: DailyTags[] = [
  {
    id: 1,
    name: '美食',
  },
  {
    id: 2,
    name: '工作',
  },
  {
    id: 3,
    name: '学习',
  },
]

const ips: Ips[] = [
  {
    id: 1,
    name: '北京',
  },
  {
    id: 2,
    name: '上海',
  },
  {
    id: 3,
    name: '广州',
  },
  {
    id: 4,
    name: '深圳',
  },
  {
    id: 5,
    name: '成都',
  },
]

const changeSelectedSortId = (sort: Sorts) => {
  selectedSortId.value = sort.id
  router.push({ name: sort.routeName })
}

const changeSelectedIpId = (ip: Ips) => {
  selectedIpId.value = ip.id
}
const changeSelectedCourseId = (course: Courses) => {
  selectedCourseId.value = course.id
}
const changeSelectedDailyTagId = (tag: DailyTags) => {
  selectedDailyTagId.value = tag.id
}
</script>

<style scoped></style>
