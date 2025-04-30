<template>
  <header class="noise-nav fixed top-0 z-40 pl-4 pr-10 h-20 w-full bg-light-bg  text-light-text transition-colors duration-normal dark:bg-dark-bg dark:text-dark-text">
    <NavBar />
  </header>
  <section class="grid h-[calc(100vh-80px)] relative top-20 w-[100vw] grid-cols-12 ">
    <button @click="toggleMenu" class="absolute z-50 left-[14px] top-[16px] block lg:hidden">
      <svg v-if="ifShowThreeLine" xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" stroke-dasharray="16" stroke-dashoffset="16" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
            <path d="M5 5h14">
              <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.1s" values="16;0" />
            </path>
            <path d="M5 12h14">
              <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.1s" dur="0.1s" values="16;0" />
            </path>
            <path d="M5 19h14">
              <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.1s" values="16;0" />
            </path>
          </g>
        </svg>  
      <svg v-else  xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24">
          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 5L12 5L19 5M5 12H19M5 19L12 19L19 19">
            <animate fill="freeze" attributeName="d" dur="0.1s" values="M5 5L12 5L19 5M5 12H19M5 19L12 19L19 19;M5 5L12 12L19 5M12 12H12M5 19L12 12L19 19" />
          </path>
        </svg>
      </button>
    <div class=" chapter hidden absolute lg:static lg:inline-block lg:col-span-3 h-full overflow-y-scroll transition-colors duration-normal bg-[#FAFAFA] dark:bg-[#363738] p-3">
      <div class="flex h-32 pb-3 w-full dark:text-[#EEEEEE] transition-colors duration-normal flex-col items-center justify-around border-b text-xl font-bold">
        <h2>{{ curCourse.title }}</h2>
        <div class="progress"></div>
        <div class="font-bold ">完成 85%</div>
      </div>
      <div class="rounded-sm text-sm dark:text-[#EEEEEE] transition-colors duration-normal text-[#555555]">
        <div v-for="c in courseVideos" :key="c.chapterId">
          <h2 class="flex items-center font-medium bg-white  dark:bg-[#444] p-2 py-5 text-xl  transition-colors duration-normal">
            {{ c.chapterTitle }}
          </h2>
          <div >
            <p class="relative flex items-center transition-colors duration-normal hover:bg-[#F7C8D2] text-[#555555] dark:hover:bg-[#555] dark:hover:text-[#eee] dark:text-[#D1D5DA] cursor-pointer select-none text-wrap px-3 py-1 font-[500] leading-8" @click="changePlayedVideo(v)" :class="v.videoId == playedVideo.videoId?'bg-[#F7C8D2] dark:bg-[#555]':''" v-for="v in c.videos" :key="v.videoId">
              <div class="circle shrink-0 m-2"></div>
              <div>
                <svg class="mr-2 fill-[#BBB] dark:fill-[#AAA]  inline-block shrink-0" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24">
                <path  d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1h5c1.1 0 1.99-.9 1.99-2L23 5a2 2 0 0 0-2-2m-1 14H4c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1m-5.52-5.13l-3.98 2.28c-.67.38-1.5-.11-1.5-.87V8.72c0-.77.83-1.25 1.5-.87l3.98 2.28c.67.39.67 1.35 0 1.74" />
              </svg>
              <span>{{ v.videoId }} -</span>
              {{ v.title }}（{{ v.time }}）
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-12 lg:col-span-9 pb-6 px-10">
      <h3 class="flex pl-5 h-16 flex-wrap space-y-3 items-center justify-between text-black transition-colors duration-normal dark:text-white text-lg">
        <span >
          <svg class="fill-[#000] dark:fill-[#fff] transition-colors duration-normal mr-2 inline-block shrink-0" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
            <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1h5c1.1 0 1.99-.9 1.99-2L23 5a2 2 0 0 0-2-2m-1 14H4c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1m-5.52-5.13l-3.98 2.28c-.67.38-1.5-.11-1.5-.87V8.72c0-.77.83-1.25 1.5-.87l3.98 2.28c.67.39.67 1.35 0 1.74" />
          </svg>
          {{ playedVideo.videoId }} - {{ playedVideo.title }}</span>
        <div class="space-x-5">
          <button @click=" GoToNotesBlog" class="py-1 px-3 layer  text-white rounded-md  bg-[#D91A42]">讲义</button>
          <button @click=" GoToCommunity" class="py-1 px-3 layer  text-white rounded-md  bg-[#D91A42]">讨论</button>
        </div>
      </h3>
      <div class="w-full h-[calc(100%-64px)] flex items-center justify-center">
        <VideoPlayer/>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { Chapter, Course, Video } from '@/interface/courses'
import { useWebInfo } from '@/stores/webInfo'
import { onMounted, onUnmounted, ref, type Ref } from 'vue'
import { useRoute } from 'vue-router'
import VideoPlayer from '@/components/courses/VideoPlayer.vue'
import NavBar from '@/components/NavBar.vue'
import router from '@/router'

const route = useRoute()
let courseId: number = Number(route.params.courseId)
let videoId: number = Number(route.params.videoId)
const curCourse: Course = useWebInfo().courses.find((c: Course) => c.id == courseId)!
const courseVideos: Chapter[] = [
  {
    chapterId: 1,
    chapterTitle: 'JavaScript 核心概念',
    isOpen: ref(true),
    videos: [
      {
        videoId: 1,
        title: '变量与作用域你好，年法大师傅撒旦大三哈哈哈哈哈哈',
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
const videosList = courseVideos.flatMap(c => c.videos);
const playedVideo:Ref<Video> = ref(courseVideos[0].videos[0]);
const ifShowThreeLine = ref<boolean>(true)

  
const changePlayedVideo = (v:Video) => {
  playedVideo.value = v;
  if (ifShowThreeLine.value == true) return;
  ifShowThreeLine.value = true
  const c = document.getElementsByClassName('chapter')[0] as HTMLElement
  c.style.display = 'none'
}

const toggleMenu = () => {
  ifShowThreeLine.value = !ifShowThreeLine.value
  const c = document.getElementsByClassName('chapter')[0] as HTMLElement
  if (!ifShowThreeLine.value)  c.style.display = 'block'
  else c.style.display = 'none'
}

const handleResize = () => {
  const c = document.getElementsByClassName('chapter')[0] as HTMLElement
  if (window.innerWidth >= 1024) {
    c.style.removeProperty('display') // 移除内联 display 样式(none)
    ifShowThreeLine.value = true // 重置菜单图标为“三条线”
  }
}

const GoToCommunity = () => {
  const s = router.resolve({name:'Community', params: {'navId': courseId}})
  window.open(s.href, '_blank')
}

const GoToNotesBlog = () => {
  const s = router.resolve({name:'NotesBlog'})
  console.log(s.href)
  window.open(s.href, '_blank')
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  handleResize()
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.progress {
  content: '';
  position: relative;
  height: 8px;
  border-radius: 8px;
  width: 80%;
  background-color: #e3e3e3;
}
.progress::after {
  content: '';
  height: 8px;
  position: absolute;
  left: 0;
  border-radius: 8px;
  width: 80%;
  background-color: #D91A42;
}

.circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: #D91A42 solid 2px;
  background: conic-gradient(#D91A42 0deg 110deg, transparent 90deg 360deg);
}

@media (max-width: 1024px) { 
  .chapter {
    width: 100%;
    z-index: 10;
  }
}
</style>
