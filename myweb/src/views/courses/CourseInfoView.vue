<template>
  <section class="relative grid gap-6 bg-white-21 px-15vw py-10 text-[#333333] transition-colors duration-normal dark:bg-black-28 dark:text-[#EEEEEE] sm:grid-cols-1 lg:grid-cols-2">
    <img :src="curCourse.image" class="h-full w-full rounded-sm object-fill" />
    <div>
      <h1 class="pb-3 text-3xl text-[#0089DF] transition-colors duration-normal dark:text-yellow">
        {{ curCourse.title }}
      </h1>
      <h2 class="pb-5 text-xl text-black dark:text-white">课程总时长：20H</h2>
      <p class="pb-4">React 是一个非常流行的前端库，用于创建快速、动态且交互性强的网站。在本课程中，您将学习如何从零开始使用 React 和 Firebase 创建网站，并在此过程中创建 4 个完整的应用程序。</p>
      <p class="pb-3">您将了解钩子、上下文 API、reducer、数据库、身份验证、文件上传等。</p>
      <p>查看页面底部的课程预览以了解更多信息。</p>
    </div>
  </section>

  <section class="wave relative bg-white-24 px-15vw py-10 text-[#333333] transition-colors duration-normal dark:bg-black-24 dark:text-[#EEEEEE]">
    <h1 class="text-center text-3xl text-black transition-colors duration-normal dark:text-white">您将会学到</h1>
    <div class="grid gap-5 pb-8 pt-10 sm:grid-cols-1 lg:grid-cols-2">
      <p v-for="k in learnedKnowledges" :key="k.id">
        <Icon class="mr-1 inline-block" icon="dashicons:yes" width="30px" height="30px" style="color: #2bc17f" />
        {{ k.content }}
      </p>
    </div>
    <div class="text-center text-black transition-colors duration-normal dark:text-white">
      <button class="layer rounded-md bg-green px-8 py-3">
        立即购买
        <span class="font-bold">{{ curCourse.price }}</span>
      </button>
    </div>
  </section>

  <section class="relative bg-white-28 px-15vw py-10 pb-24 transition-colors duration-normal dark:bg-black-2A">
    <h1 class="pb-10 text-3xl text-black transition-colors duration-normal dark:text-white">课程内容</h1>
    <div class="flex flex-wrap items-center justify-between">
      <h3 class="inline-block pb-2">
        {{ courseVideos.length + 1 }} 章节 · {{ videosCnt }} 小节 ·
        {{ formattedTime }}
      </h3>
      <button v-if="allChaptersIsOpen" @click="closeAllChapter" class="dark:text-white">折叠所有章节</button>
      <button v-else @click="openAllChapter" class="dark:text-white">展开所有章节</button>
    </div>
    <div class="rounded-sm bg-white-21 p-5 transition-colors duration-normal dark:bg-black-2B">
      <div v-for="c in courseVideos" :key="c.chapterId">
        <h2 @click="toggleChapterOpen(c)" class="flex cursor-pointer select-none items-center bg-[#dfdfdf] p-2 text-xl text-black transition-colors duration-normal dark:bg-black-2A dark:text-white">
          <svg :class="c.isOpenComputed?.value ? '' : '-rotate-90'" class="relative top-[0.1rem] mr-2 inline transition-transform duration-normal" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24">
            <g fill="none" fill-rule="evenodd">
              <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
              <path fill="currentColor" d="M12.707 15.707a1 1 0 0 1-1.414 0L5.636 10.05A1 1 0 1 1 7.05 8.636l4.95 4.95l4.95-4.95a1 1 0 0 1 1.414 1.414z" />
            </g>
          </svg>
          {{ c.chapterTitle }}
        </h2>
        <div :class="!c.isOpenComputed?.value ? 'hidden' : ''">
          <p @click="PlayVideoFromId(v)" class="relative flex cursor-pointer select-none flex-wrap items-center text-wrap px-3 py-1 leading-8 transition-colors duration-normal hover:bg-white-2A hover:text-[#2b2b2b] hover:dark:bg-black-2C dark:hover:text-[#eee]" v-for="v in c.videos" :key="v.videoId">
            <svg class="mr-2 inline-block" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24">
              <path fill="#2BC17F" d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1h5c1.1 0 1.99-.9 1.99-2L23 5a2 2 0 0 0-2-2m-1 14H4c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1m-5.52-5.13l-3.98 2.28c-.67.38-1.5-.11-1.5-.87V8.72c0-.77.83-1.25 1.5-.87l3.98 2.28c.67.39.67 1.35 0 1.74" />
            </svg>
            <span>{{ v.videoId }} -</span>
            {{ v.title }}
            <span class="inline">（{{ v.time }}）</span>
            <!-- <button class="absolute right-3 hidden rounded-md bg-[#d91f47] px-3 py-1 text-sm text-[#ededed] dark:bg-[#872D3C] dark:text-[#D1D5DA] sm:inline-block">播放</button> -->
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="relative bg-white-24 px-15vw pb-20 pt-10 text-center transition-colors duration-normal dark:bg-black-28">
    <h1 class="noise pb-8 text-3xl text-black dark:text-white">课程预览</h1>
    <img class="relative mx-auto" src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/EyEZlt0rTNeOafVHQ880" alt="" />
  </section>

  <Fotter />
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue/dist/iconify.js'
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import Fotter from '@/components/Fotter.vue'
import type { Chapter, Course, LearnedKnowledges, Video } from '@/interface/courses'
import router from '@/router'
import { useWebInfo } from '@/stores/webInfo'

const route = useRoute()
const courseId = Number(route.params.courseId)
const videosCnt = ref(0)
const videosAllTime = ref(0)
const allChaptersIsOpen = ref(true)
let curCourse: Course = useWebInfo().courses.find((c: Course) => c.id == courseId)!

const learnedKnowledges: LearnedKnowledges[] = [
  {
    id: 1,
    content: 'Generative AI生成式人工智能的核心概念和原理',
  },
  {
    id: 2,
    content: '了解如何使用LangChain接入各种LLM大语言模型',
  },
  {
    id: 3,
    content: '了解如何使用提示模板让LLM按照我们的指令进行操作',
  },
  {
    id: 4,
    content: '了解如何使用Chain链接各种Primitive基本单元让LLM实现复杂行为',
  },
  {
    id: 5,
    content: '了解如何为LLM大语言模型添加记忆功能记住上下文',
  },
  {
    id: 6,
    content: '了解如何使用RAG增强搜索生成功能加载和搜索PDF和网站信息',
  },
  {
    id: 7,
    content: '了解如何使用Chunking技术分割文档，避免太小的丢失语意，主要花费重要的陷阱',
  },
  {
    id: 8,
    content: '了解如何使用Chroma和FAISS实现数据库实现RAG增强检索生成功能 学习如何制作AI代理',
  },
]

const courseVideos: Chapter[] = [
  {
    chapterId: 1,
    chapterTitle: 'JavaScript 核心概念',
    isOpen: ref(true),
    videos: [
      {
        videoId: 1,
        title: '变量与作用域',
        time: 19.08,
      },
      {
        videoId: 2,
        title: '闭包详解',
        time: 19.08,
      },
      {
        videoId: 3,
        title: 'this 关键字与上下文',
        time: 19.08,
      },
      {
        videoId: 4,
        title: '原型与继承',
        time: 19.08,
      },
    ],
  },
  {
    chapterId: 2,
    chapterTitle: '异步编程',
    isOpen: ref(true),
    videos: [
      {
        videoId: 5,
        title: '回调函数与事件循环',
        time: 19.08,
      },
      {
        videoId: 6,
        title: 'Promise 的使用与原理',
        time: 19.08,
      },
      {
        videoId: 7,
        title: 'async/await 实践',
        time: 19.08,
      },
      {
        videoId: 8,
        title: '错误处理与调试',
        time: 19.08,
      },
      {
        videoId: 9,
        title: '微任务与宏任务',
        time: 19.08,
      },
    ],
  },
  {
    chapterId: 3,
    chapterTitle: '函数式编程',
    isOpen: ref(true),
    videos: [
      {
        videoId: 10,
        title: '高阶函数简介',
        time: 19.08,
      },
      {
        videoId: 11,
        title: '纯函数与不可变数据',
        time: 19.08,
      },
      {
        videoId: 12,
        title: '柯里化与部分应用',
        time: 19.08,
      },
    ],
  },
  {
    chapterId: 4,
    chapterTitle: 'ES6+ 现代语法',
    isOpen: ref(true),
    videos: [
      {
        videoId: 13,
        title: 'let/const 与块级作用域',
        time: 19.08,
      },
      {
        videoId: 14,
        title: '箭头函数与解构赋值',
        time: 19.08,
      },
      {
        videoId: 15,
        title: '模块化与 import/export',
        time: 19.08,
      },
      {
        videoId: 16,
        title: 'Proxy 与 Reflect',
        time: 19.08,
      },
    ],
  },
  {
    chapterId: 5,
    chapterTitle: '性能优化与最佳实践',
    isOpen: ref(true),
    videos: [
      {
        videoId: 17,
        title: '防抖与节流',
        time: 19.08,
      },
      {
        videoId: 18,
        title: '内存管理与垃圾回收',
        time: 19.08,
      },
      {
        videoId: 19,
        title: '代码分割与懒加载',
        time: 19.08,
      },
      {
        videoId: 20,
        title: '编写可维护的代码',
        time: 19.08,
      },
    ],
  },
]

onMounted(() => {
  courseVideos.forEach((chapter) => {
    chapter.isOpenComputed = computed(() => {
      return chapter.isOpen.value
    })
  })
  const v = courseVideos[courseVideos.length - 1].videos
  videosCnt.value = v[v.length - 1].videoId
})

const PlayVideoFromId = (v: Video) => {
  const url = router.resolve({
    name: 'CourseVideo',
    params: { courseId: curCourse.id, videoId: v.videoId },
  }).href
  window.open(url, '_blank')
}
const formattedTime = computed(() => {
  const totalMinutes = videosAllTime.value
  const hours = Math.floor(totalMinutes / 60) // 1小时 = 60分钟
  const minutes = (totalMinutes % 60).toFixed(0) // 剩余分钟
  return `${hours}小时${minutes}分钟`
})

const toggleChapterOpen = (course: Chapter) => {
  course.isOpen.value = !course.isOpen.value
}

const closeAllChapter = () => {
  allChaptersIsOpen.value = !allChaptersIsOpen.value
  courseVideos.forEach((chapter) => {
    chapter.isOpen.value = false
  })
}

const openAllChapter = () => {
  allChaptersIsOpen.value = !allChaptersIsOpen.value
  courseVideos.forEach((chapter) => {
    chapter.isOpen.value = true
  })
}
</script>

<style scoped></style>
