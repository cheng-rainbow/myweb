<template>
  <div class="gap-8 px-10vw">
    <aside class="scrollbar fixed left-[10vw] top-20 hidden h-[calc(100vh-80px)] w-48 cursor-pointer overflow-y-auto border-r border-gray-99 py-8 transition-colors duration-normal dark:border-gray-44 md:block [&>*:hover]:dark:bg-black-2C [&>*]:rounded-sm [&>*]:p-2">
      <div class="flex items-center">
        <svg class="mr-2 inline-block" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24">
          <path fill="currentColor" d="M4 19v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-3q-.425 0-.712-.288T14 20v-5q0-.425-.288-.712T13 14h-2q-.425 0-.712.288T10 15v5q0 .425-.288.713T9 21H6q-.825 0-1.412-.587T4 19" />
        </svg>
        首页
      </div>
      <div class="flex items-center">
        <svg class="mr-2 inline-block" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24">
          <path fill="currentColor" d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zM11 14v2h2v-2zM8.567 8.813l1.962.393A1.5 1.5 0 1 1 12 11h-1v2h1a3.5 3.5 0 1 0-3.433-4.187" />
        </svg>
        问题
      </div>

      <div class="flex items-center">
        <svg class="mr-2 inline-block" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 1024 1024">
          <path fill="currentColor" d="M924.3 338.4a447.6 447.6 0 0 0-96.1-143.3a443.1 443.1 0 0 0-143-96.3A443.9 443.9 0 0 0 512 64h-2c-60.5.3-119 12.3-174.1 35.9a444.1 444.1 0 0 0-141.7 96.5a445 445 0 0 0-95 142.8A449.9 449.9 0 0 0 65 514.1c.3 69.4 16.9 138.3 47.9 199.9v152c0 25.4 20.6 46 45.9 46h151.8a447.7 447.7 0 0 0 199.5 48h2.1c59.8 0 117.7-11.6 172.3-34.3A443.2 443.2 0 0 0 827 830.5c41.2-40.9 73.6-88.7 96.3-142c23.5-55.2 35.5-113.9 35.8-174.5c.2-60.9-11.6-120-34.8-175.6M312.4 560c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48s47.9 21.5 47.9 48s-21.4 48-47.9 48m199.6 0c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48s47.9 21.5 47.9 48s-21.5 48-47.9 48m199.6 0c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48s47.9 21.5 47.9 48s-21.5 48-47.9 48" stroke-width="25.5" stroke="currentColor" />
        </svg>
        闲聊
      </div>

      <div class="flex items-center">
        <svg class="mr-2 inline-block" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 36 36">
          <path fill="currentColor" d="M8 19v-8H5a3 3 0 0 0-3 3v18a1 1 0 0 0 .56.89a1 1 0 0 0 1-.1L8.71 29h13.44A2.77 2.77 0 0 0 25 26.13V25H14a6 6 0 0 1-6-6" class="clr-i-solid clr-i-solid-path-1" stroke-width="1" stroke="currentColor" />
          <path fill="currentColor" d="M31 4H14a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h13.55l4.78 3.71a1 1 0 0 0 1 .11a1 1 0 0 0 .57-.9V7A3 3 0 0 0 31 4" class="clr-i-solid clr-i-solid-path-2" stroke-width="1" stroke="currentColor" />
          <path fill="none" d="M0 0h36v36H0z" />
        </svg>
        面经
      </div>
      <div class="flex items-center">
        <svg class="mr-2 inline-block" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24">
          <path fill="currentColor" d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m-6 0h-4V4h4z" stroke-width="0.5" stroke="currentColor" />
        </svg>
        职场
      </div>

      <p @click="toggleIsOpenMyNavItems" class="items-centert mt-5 flex cursor-pointer rounded-sm p-2 text-black transition-colors duration-normal dark:text-white hover:dark:bg-black-2C">
        <svg :class="isOpenMyNavItems ? '' : '-rotate-90'" class="relative top-[0.1rem] mr-2 transition-transform duration-normal" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24">
          <g fill="none" fill-rule="evenodd">
            <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
            <path fill="currentColor" d="M12.707 15.707a1 1 0 0 1-1.414 0L5.636 10.05A1 1 0 1 1 7.05 8.636l4.95 4.95l4.95-4.95a1 1 0 0 1 1.414 1.414z" />
          </g>
        </svg>
        我的课程
      </p>
      <div :class="{ hidden: !isOpenMyNavItems }" class="flex cursor-pointer items-center rounded-sm p-2 hover:dark:bg-black-2C" v-for="(item, idx) in myNavItems" :key="item.id">
        <span
          :style="{
            backgroundColor: colors[idx % colors.length],
          }"
          class="ml-1 mr-[9px] h-3 w-3 flex-none rounded-full"
        ></span>
        {{ item.name }}
      </div>
    </aside>

    <div class="relative left-0 flex w-full gap-5 py-8 md:left-48 md:w-[calc(100%-192px)] md:px-6">
      <div class="h-full w-full xl:w-3/4">
        <div class="mb-3 h-full w-full rounded-md bg-white-19 text-[#333333] transition-colors duration-normal dark:bg-[#2B2B2B] dark:text-white">
          <div class="mb-6 p-4">
            <h3 class="mb-3 flex w-full flex-wrap items-center">
              <span class="h-8 font-bold leading-8">标签：</span>
              <button @click="changeSelectedTagId(tag.id)" class="mr-3 h-8 rounded-md px-2 py-1 transition-colors duration-normal" :class="{ 'bg-[#0089DD] text-[#EEEEEE] dark:bg-[#404040] dark:text-yellow': selectedTagId == tag.id }" v-for="tag in tags" :key="tag.id">{{ tag.name }}</button>
            </h3>
            <div class="flex w-full items-center justify-between">
              <div class="rounded-md">
                <span class="inline-block h-8 font-bold leading-8">排序：</span>
                <button class="rounded-md px-2 py-1" @click="changeSelectedSoryId(item.id)" :class="{ 'bg-[#0089DD] text-[#EEEEEE] dark:bg-[#404040] dark:text-yellow': selectedSortId == item.id, 'mr-3': idx != sortByItems.length - 1 }" v-for="(item, idx) in sortByItems" :key="item.id">
                  {{ item.name }}
                </button>
              </div>
              <div class="relative h-8">
                <input class="h-full w-24 rounded-md border bg-white-19 pl-7 pr-3 outline-none transition-shadow duration-normal focus:shadow-[0_0_0_2px_#1B76CF] dark:border-0 dark:bg-[#404040] dark:focus:shadow-[0_0_0_2px_#B7903A] sm:w-full" type="text" placeholder="搜索..." />
                <svg class="absolute left-1 top-1/2 inline-block -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M10.44 2.75a7.69 7.69 0 1 0 4.615 13.842c.058.17.154.329.29.464l3.84 3.84a1.21 1.21 0 0 0 1.71-1.712l-3.84-3.84a1.2 1.2 0 0 0-.463-.289A7.69 7.69 0 0 0 10.44 2.75m-5.75 7.69a5.75 5.75 0 1 1 11.5 0a5.75 5.75 0 0 1-11.5 0" clip-rule="evenodd" /></svg>
              </div>
            </div>
          </div>
        </div>
        <Comment :problem="p" class="mb-6" v-for="p in problems" :key="p.id" />
      </div>

      <div class="hidden xl:block xl:w-1/4">
        <PostCard />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import Comment from '@/components/community/Comment.vue'
import PostCard from '@/components/community/PostCard.vue'
import type { Problem } from '@/interface/community'

const isOpenMyNavItems = ref(true)
const selectedSortId = ref(1)
const selectedTagId = ref(1)

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
]
const sortByItems = [
  {
    id: 1,
    name: '综合',
  },
  {
    id: 2,
    name: '最新',
  },
]

const tags = [
  {
    id: 1,
    name: '所有',
  },
  {
    id: 2,
    name: '前端',
  },
  {
    id: 3,
    name: '后端',
  },
  {
    id: 4,
    name: 'Vue',
  },
  {
    id: 5,
    name: 'Java',
  },
]

const problems: Problem[] = reactive([
  {
    id: 1,
    title: '什么是闭包 (Closure)？在 JavaScript 中如何使用？',
    content: '请解释 JavaScript 中闭包的概念，并提供至少一个实际的使用场景代码示例。',
  },
  {
    id: 2,
    title: '解释一下 React 中的虚拟 DOM (Virtual DOM) 及其工作原理。',
    content: '详细描述 React 如何使用虚拟 DOM 来提高性能，并与直接操作真实 DOM 进行比较。',
  },
  {
    id: 3,
    title: '在 Python 中，列表 (list) 和元组 (tuple) 有什么区别？',
    content: '比较 Python 中列表和元组的特性、可变性以及它们各自适用的场景。',
  },
  {
    id: 4,
    title: '什么是 RESTful API？设计一个简单的获取用户信息的 RESTful API 接口。',
    content: '解释 RESTful API 的核心原则，并设计一个包含请求方法、URL 和响应格式的 API 接口，用于获取特定 ID 的用户信息。',
  },
  {
    id: 5,
    title: '解释一下面向对象编程 (OOP) 的四大基本原则。',
    content: '详细阐述封装、继承、多态和抽象这四个 OOP 的基本原则，并简要说明它们在软件设计中的作用。',
  },
  {
    id: 6,
    title: '什么是 SQL 注入？如何防止 SQL 注入攻击？',
    content: '解释 SQL 注入攻击的原理和危害，并列举至少两种有效的防御方法。',
  },
  {
    id: 7,
    title: '在 Git 中，`merge` 和 `rebase` 命令有什么不同？',
    content: '比较 Git 中 `merge` 和 `rebase` 命令的功能和使用场景，并说明它们对提交历史的影响。',
  },
  {
    id: 8,
    title: '解释一下什么是 HTTP 协议中的状态码 (Status Code)。列举几个常见的状态码及其含义。',
    content: '描述 HTTP 状态码的作用，并解释例如 200, 404, 500 等常见状态码的含义。',
  },
  {
    id: 9,
    title: '什么是算法的时间复杂度？请分析冒泡排序算法的时间复杂度。',
    content: '解释算法时间复杂度的概念，以及如何使用大 O 符号表示。分析冒泡排序算法在最好、最坏和平均情况下的时间复杂度。',
  },
  {
    id: 10,
    title: '解释一下什么是微服务架构 (Microservices Architecture)？它有哪些优缺点？',
    content: '描述微服务架构的概念和核心思想，并列举至少两个优点和两个缺点。',
  },
])

const toggleIsOpenMyNavItems = () => {
  isOpenMyNavItems.value = !isOpenMyNavItems.value // 简化为直接取反
}

const changeSelectedSoryId = (id: number) => {
  selectedSortId.value = id
}

const changeSelectedTagId = (id: number) => {
  selectedTagId.value = id
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
