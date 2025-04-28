<template>
  <div class="px-12vw pt-10">
    <p class="pb-6">
      <span class="dark:text-white">地址：</span>
      <span class="h-8 w-12 px-4 py-2" v-for="ip in ips">{{ ip }}</span>
    </p>
    <p class="pb-6">
      <span class="dark:text-white">类别：</span>
      <span class="h-8 w-12 px-4 py-2" v-for="tag in blogs[0].tags">
        {{ tag }}
      </span>
    </p>
    <section class="">
      <div class="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="blog in blogs" :key="blog.title" class="group relative cursor-pointer overflow-hidden rounded-xl bg-white shadow-xl transition-all duration-500 hover:shadow-2xl">
          <img :src="blog.image" :alt="blog.title" class="group-hover:scale-120 h-64 w-full object-cover transition-transform duration-700 ease-out" />
          <div class="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/30 to-transparent"></div>
          <div class="absolute left-6 top-6 text-white-28">
            <h3 class="animate-fade-in text-2xl font-bold tracking-wide drop-shadow-lg">
              {{ blog.title }}
            </h3>
          </div>
          <div class="absolute bottom-0 left-0 w-full p-6 text-sm text-white opacity-80">
            <p>
              <span class="font-medium text-white">地点：</span>
              {{ blog.address }}
            </p>
            <p>
              <span class="font-medium text-white">发布：</span>
              {{ blog.date }}
            </p>
            <p>
              <span class="font-medium text-white">阅读：</span>
              {{ blog.readTime }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
const blogs = [
  {
    title: '乌布的热带冒险',
    tags: ['日常', '美食', '旅行'],
    address: '北京',
    date: '2025年3月15日',
    readTime: '5分钟',
    image: 'https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: '埃菲尔铁塔的浪漫之旅',
    tags: ['日常', '美食', '旅行'],
    address: '法国巴黎埃菲尔铁塔',
    date: '2025年2月10日',
    readTime: '7分钟',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop',
  },
  {
    title: '时代广场的都市脉动',
    tags: ['日常', '美食', '旅行'],
    address: '美国纽约时代广场',
    date: '2025年1月25日',
    readTime: '6分钟',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: '乌布的热带冒险',
    tags: ['日常', '美食', '旅行'],
    address: '北京',
    date: '2025年3月15日',
    readTime: '5分钟',
    image: 'https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: '埃菲尔铁塔的浪漫之旅',
    tags: ['日常', '美食', '旅行'],
    address: '法国巴黎埃菲尔铁塔',
    date: '2025年2月10日',
    readTime: '7分钟',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop',
  },
  {
    title: '时代广场的都市脉动',
    tags: ['日常', '美食', '旅行'],
    address: '美国纽约时代广场',
    date: '2025年1月25日',
    readTime: '6分钟',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: '乌布的热带冒险',
    tags: ['日常', '美食', '旅行'],
    address: '北京',
    date: '2025年3月15日',
    readTime: '5分钟',
    image: 'https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: '埃菲尔铁塔的浪漫之旅',
    tags: ['日常', '美食', '旅行'],
    address: '法国巴黎埃菲尔铁塔',
    date: '2025年2月10日',
    readTime: '7分钟',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop',
  },
  {
    title: '时代广场的都市脉动',
    tags: ['日常', '美食', '旅行'],
    address: '美国纽约时代广场',
    date: '2025年1月25日',
    readTime: '6分钟',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: '乌布的热带冒险',
    tags: ['日常', '美食', '旅行'],
    address: '北京',
    date: '2025年3月15日',
    readTime: '5分钟',
    image: 'https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: '埃菲尔铁塔的浪漫之旅',
    tags: ['日常', '美食', '旅行'],
    address: '法国巴黎埃菲尔铁塔',
    date: '2025年2月10日',
    readTime: '7分钟',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop',
  },
  {
    title: '时代广场的都市脉动',
    tags: ['日常', '美食', '旅行'],
    address: '美国纽约时代广场',
    date: '2025年1月25日',
    readTime: '6分钟',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop',
  },
]

const ips = ['上海', '北京', '重庆', '西安']
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateX(10px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideUp {
  0% {
    opacity: 0;
    transform: translateX(10px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.group:hover .group-hover\:scale-120 {
  transform: scale(1.15);
}
</style>
