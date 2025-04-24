<template>
  <div class="flex px-10vw">
    <div class="w-52"></div>
    <nav class="w-52 py-8 border-r fixed h-[calc(100vh-80px)] scrollbar overflow-y-auto border-gray-99 dark:border-gray-44">
      <div class="p-2 hover:dark:bg-black-2C rounded-sm cursor-pointer flex items-center">
        <svg class="inline-block mr-2" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24"><path fill="currentColor" d="M4 19v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-3q-.425 0-.712-.288T14 20v-5q0-.425-.288-.712T13 14h-2q-.425 0-.712.288T10 15v5q0 .425-.288.713T9 21H6q-.825 0-1.412-.587T4 19" /></svg>
        首页
      </div>
      <div class="p-2 hover:dark:bg-black-2C rounded-sm cursor-pointer flex items-center">
        <svg class="inline-block mr-2" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24"><path fill="currentColor" d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zM11 14v2h2v-2zM8.567 8.813l1.962.393A1.5 1.5 0 1 1 12 11h-1v2h1a3.5 3.5 0 1 0-3.433-4.187" /></svg>
        问题
      </div>

      <div class="p-2 hover:dark:bg-black-2C rounded-sm cursor-pointer flex items-center">
        <svg class="inline-block mr-2" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 1024 1024"><path fill="currentColor" d="M924.3 338.4a447.6 447.6 0 0 0-96.1-143.3a443.1 443.1 0 0 0-143-96.3A443.9 443.9 0 0 0 512 64h-2c-60.5.3-119 12.3-174.1 35.9a444.1 444.1 0 0 0-141.7 96.5a445 445 0 0 0-95 142.8A449.9 449.9 0 0 0 65 514.1c.3 69.4 16.9 138.3 47.9 199.9v152c0 25.4 20.6 46 45.9 46h151.8a447.7 447.7 0 0 0 199.5 48h2.1c59.8 0 117.7-11.6 172.3-34.3A443.2 443.2 0 0 0 827 830.5c41.2-40.9 73.6-88.7 96.3-142c23.5-55.2 35.5-113.9 35.8-174.5c.2-60.9-11.6-120-34.8-175.6M312.4 560c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48s47.9 21.5 47.9 48s-21.4 48-47.9 48m199.6 0c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48s47.9 21.5 47.9 48s-21.5 48-47.9 48m199.6 0c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48s47.9 21.5 47.9 48s-21.5 48-47.9 48" stroke-width="25.5" stroke="currentColor" /></svg>
        闲聊
      </div>

      <div class="p-2 hover:dark:bg-black-2C rounded-sm cursor-pointer flex items-center">
        <svg class="inline-block mr-2" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 36 36">
          <path fill="currentColor" d="M8 19v-8H5a3 3 0 0 0-3 3v18a1 1 0 0 0 .56.89a1 1 0 0 0 1-.1L8.71 29h13.44A2.77 2.77 0 0 0 25 26.13V25H14a6 6 0 0 1-6-6" class="clr-i-solid clr-i-solid-path-1" stroke-width="1" stroke="currentColor" />
          <path fill="currentColor" d="M31 4H14a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h13.55l4.78 3.71a1 1 0 0 0 1 .11a1 1 0 0 0 .57-.9V7A3 3 0 0 0 31 4" class="clr-i-solid clr-i-solid-path-2" stroke-width="1" stroke="currentColor" />
          <path fill="none" d="M0 0h36v36H0z" />
        </svg>
        面经
      </div>
      <div class="p-2 hover:dark:bg-black-2C rounded-sm cursor-pointer flex items-center">
        <svg class="inline-block mr-2" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24"><path fill="currentColor" d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m-6 0h-4V4h4z" stroke-width="0.5" stroke="currentColor" /></svg>
        职场
      </div>

      <p @click="toggleIsOpenMyNavItems" class="text-black dark:text-white p-2 mt-5 flex items-centert hover:dark:bg-black-2C rounded-sm cursor-pointer transition-colors duration-normal">
        <svg :class="isOpenMyNavItems ? '' : '-rotate-90'" class="mr-2 relative top-[0.1rem] transition-transform duration-normal" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24">
          <g fill="none" fill-rule="evenodd">
            <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
            <path fill="currentColor" d="M12.707 15.707a1 1 0 0 1-1.414 0L5.636 10.05A1 1 0 1 1 7.05 8.636l4.95 4.95l4.95-4.95a1 1 0 0 1 1.414 1.414z" />
          </g>
        </svg>
        我的课程
      </p>
      <div :class="{ hidden: !isOpenMyNavItems }" class="p-2 flex items-center hover:dark:bg-black-2C rounded-sm cursor-pointer" v-for="(item, idx) in myNavItems" :key="item.id">
        <span :style="{ backgroundColor: colors[idx % colors.length] }" class="w-3 h-3 ml-1 mr-[9px] flex-none rounded-full"></span>
        {{ item.name }}
      </div>
    </nav>
    <div class="flex-grow py-8 px-6">
      <Comment v-for="i in 16" :key="i" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Fotter from '@/components/Fotter.vue'
import Comment from '@/components/Comment.vue'

const isOpenMyNavItems = ref(true)
const isOpenCoursesNavItems = ref(true)

const myNavItems = [
  {
    id: 1,
    name: 'Python 基础入门',
  },
  {
    id: 2,
    name: '深入理解 JavaScript',
  },
  {
    id: 3,
    name: 'Vue.js 实战开发',
  },
  {
    id: 4,
    name: 'React 前端框架',
  },
  {
    id: 5,
    name: 'Node.js 后端开发',
  },
  {
    id: 6,
    name: 'TypeScript 进阶',
  },
  {
    id: 7,
    name: '算法与数据结构',
  },
  {
    id: 8,
    name: 'Web 性能优化',
  },
  {
    id: 9,
    name: '前端工程化实践',
  },
  {
    id: 10,
    name: 'GraphQL API 开发',
  },
  {
    id: 1,
    name: 'Python 基础入门',
  },
  {
    id: 2,
    name: '深入理解 JavaScript',
  },
  {
    id: 3,
    name: 'Vue.js 实战开发',
  },
  {
    id: 4,
    name: 'React 前端框架',
  },
  {
    id: 5,
    name: 'Node.js 后端开发',
  },
  {
    id: 6,
    name: 'TypeScript 进阶',
  },
  {
    id: 7,
    name: '算法与数据结构',
  },
  {
    id: 8,
    name: 'Web 性能优化',
  },
  {
    id: 9,
    name: '前端工程化实践',
  },
  {
    id: 10,
    name: 'GraphQL API 开发',
  },
]

const toggleIsOpenMyNavItems = () => {
  isOpenMyNavItems.value = !isOpenMyNavItems.value // 简化为直接取反
}

const colors = ['#FF6B6B', '#FF9F43', '#FFD60A', '#2ECC71', '#1ABC9C', '#4FC1E9', '#3F51B5', '#AC80FF', '#FF81C0', '#6B7280']
</script>

<style scoped>
.scrollbar::-webkit-scrollbar {
  width: 6px;
}
.scrollbar::-webkit-scrollbar-button:vertical:decrement {
  background-size: 4px;
}

.scrollbar::-webkit-scrollbar-button:vertical:increment {
  background-size: 4px;
}
</style>
