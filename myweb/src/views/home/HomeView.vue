<template>
  <section class="relative bg-white-21 px-12vw py-20 text-center text-black transition-colors duration-normal dark:bg-black-21 dark:text-white">
    <h1 class="pb-6 font-MyFont text-5xl font-bold">欢迎来到 码上学</h1>
    <p class="pb-12">提供在线编程课程，为广大编程爱好者提供良好的学习环境，在这里您可以学到如下内容</p>
    <SkillsCard />
  </section>

  <section class="wave relative grid grid-cols-1 bg-white-19 px-15vw py-20 transition-colors duration-normal dark:bg-black-28 dark:text-white lg:grid-cols-2">
    <div class="flex flex-col items-start justify-around py-12">
      <h1 class="pb-6 text-3xl font-bold">如何成为一个全栈工程师？</h1>
      <p class="pb-10">前端包括Web端、移动端、PC端。目前一般都采用前后端分离架构，所有前端可以共用一个后端服务</p>
      <RouterLink class="layer flex h-12 w-40 items-center justify-center rounded-md bg-green text-lg text-white" :to="{ name: 'Courses' }"> 学习路线 &nbsp;&gt; </RouterLink>
      <p class="pt-6">您可以点击上方按钮了解更多前后端的学习路线，以帮助您决定下一步学习什么，或者查看下面的 "❤️热门课程"。</p>
    </div>
    <!-- <img class="pl-14" src="/public/svg/bg.svg" alt="" /> -->
    <img class="pl-14" src="/public/svg/html.svg" alt="" />
  </section>

  <section class="linear relative z-10 px-15vw py-20 transition-all duration-normal dark:bg-black-28 dark:text-white">
    <div class="text-center">
      <div class="left"></div>
      <div class="right"></div>
      <h1 class="mb-10 text-3xl font-bold">成为全栈开发者，从这里开始</h1>
      <p class="mb-10 px-10vw text-lg">
        全程无废话，精讲编程语言基础知识。通过实战项目，巩固应用所学知识，掌握前后端开发流程，获取
        <span class="text-yellow">优质编码教程</span>
        。
      </p>
      <div class="course-buttons py-5">
        <RouterLink class="layer rounded-md bg-green text-lg leading-[48px] text-white" :to="{ name: 'Courses' }"> 浏览所有课程 &nbsp;&gt; </RouterLink>
        <RouterLink class="layer rounded-md bg-yellow text-lg leading-[48px] text-white" :to="{ name: 'Courses' }"> 大师班课程 &nbsp;&gt; </RouterLink>
      </div>
    </div>
  </section>

  <section class="relative px-15vw py-20 dark:text-white">
    <h1 class="pb-6 text-3xl font-bold">❤️热门课程</h1>
    <div class="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3">
      <CoursesCard class="card" v-for="c in popCourses" :key="c.id" :course="c"></CoursesCard>
    </div>
  </section>

  <section class="relative px-15vw pb-20 dark:text-white">
    <h1 class="pb-6 text-3xl font-bold">🚀最新课程</h1>
    <div class="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3">
      <CoursesCard class="card" v-for="c in newCourses" :key="c.id" :course="c"></CoursesCard>
    </div>
  </section>

  <Fotter />
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import SkillsCard from '@/components/SkillsCard.vue'
import CoursesCard from '@/components/CoursesCard.vue'
import { onMounted, onUnmounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useWebInfo, type Course } from '@/stores/webInfo'
import Fotter from '@/components/Fotter.vue'
import router from '@/router'

const popCourses = [
  {
    id: 1,
    title: 'JavaScript 进阶',
    description: '深入理解 JavaScript 的高级特性和最佳实践, 在这里您可以提升您的编程能力,学会如何更能好的使用Javascript.快来一起学习吧',
    image: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/EyEZlt0rTNeOafVHQ880',
    author: '小李',
    price: '￥199',
  },
  {
    id: 2,
    title: 'JavaScript 进阶',
    description: '深入理解 JavaScript 的高级特性和最佳实践',
    image: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/n7ZKac3OSKIG7KBCZdoN',
    author: '小李',
    price: '￥199',
  },
  {
    id: 3,
    title: 'JavaScript 进阶',
    description: '深入理解 JavaScript 的高级特性和最佳实践',
    image: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/3MDeaElSiezfKFe0rBvS',
    author: '小李',
    price: '￥199',
  },
  {
    id: 4,
    title: 'JavaScript 进阶',
    description: '深入理解 JavaScript 的高级特性和最佳实践',
    image: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/XH1uraRcm0lp45lzPhgk',
    author: '小李',
    price: '￥199',
  },
  {
    id: 5,
    title: 'JavaScript 进阶',
    description: '深入理解 JavaScript 的高级特性和最佳实践',
    image: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/MfPQZP48RnO3JxiZ20R0',
    author: '小李',
    price: '￥199',
  },
]

const newCourses = [
  {
    id: 1,
    title: 'JavaScript 进阶',
    description: '深入理解 JavaScript 的高级特性和最佳实践, 在这里您可以提升您的编程能力,学会如何更能好的使用Javascript.快来一起学习吧',
    image: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/EyEZlt0rTNeOafVHQ880',
    author: '小李',
    price: '￥199',
  },
  {
    id: 2,
    title: 'JavaScript 进阶',
    description: '深入理解 JavaScript 的高级特性和最佳实践',
    image: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/n7ZKac3OSKIG7KBCZdoN',
    author: '小李',
    price: '￥199',
  },
  {
    id: 3,
    title: 'JavaScript 进阶',
    description: '深入理解 JavaScript 的高级特性和最佳实践',
    image: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/3MDeaElSiezfKFe0rBvS',
    author: '小李',
    price: '￥199',
  },
  {
    id: 4,
    title: 'JavaScript 进阶',
    description: '深入理解 JavaScript 的高级特性和最佳实践',
    image: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/XH1uraRcm0lp45lzPhgk',
    author: '小李',
    price: '￥199',
  },
  {
    id: 5,
    title: 'JavaScript 进阶',
    description: '深入理解 JavaScript 的高级特性和最佳实践',
    image: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/MfPQZP48RnO3JxiZ20R0',
    author: '小李',
    price: '￥199',
  },
]

const { isDark } = storeToRefs(useWebInfo())
const colors = ['#c2993a', '#36a3ff', '#ff4545']
onMounted(() => {
  const cards = document.querySelectorAll('.card') as NodeListOf<HTMLElement>
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
  cards.forEach((card) => {
    card.addEventListener('mouseenter', handleMouseEnter)
    card.addEventListener('mouseleave', handleMouseLeave)
  })
  onUnmounted(() => {
    cards.forEach((card) => {
      card.removeEventListener('mouseenter', handleMouseEnter)
      card.removeEventListener('mouseleave', handleMouseLeave)
    })
  })
})
</script>

<style>
.left {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  transition: all 0.3s;
  clip-path: polygon(0 0, 65% 0, 35% 100%, 0 100%);
  background-color: #f7f7f7;
}

.right {
  width: 100%;
  height: 100%;
  right: 0;
  top: 0;
  z-index: -1;
  position: absolute;
  transition: all 0.3s;
  clip-path: polygon(65% 0, 100% 0, 100% 100%, 35% 100%);
  background-color: #eeeeee;
}

.dark .left {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  transition: all 0.3s;
  clip-path: polygon(0 0, 65% 0, 35% 100%, 0 100%);
  background-color: #242424;
}

.dark .right {
  width: 100%;
  height: 100%;
  right: 0;
  top: 0;
  z-index: -1;
  position: absolute;
  transition: all 0.3s;
  clip-path: polygon(65% 0, 100% 0, 100% 100%, 35% 100%);
  background-color: #191919;
}

.course-buttons {
  display: grid;
  gap: 20px;
  grid-auto-rows: 48px;
  grid-template-columns: repeat(auto-fit, minmax(110px, 220px));
  justify-content: center;
}
</style>
