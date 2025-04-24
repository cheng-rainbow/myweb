import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export interface Course {
  id: number
  title: string
  description: string
  image: string
  author: string
  price: string
}

export const useWebInfo = defineStore('webinfo', () => {
  const isDark = ref<boolean>(false)

  const courses: Course[] = [
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
    {
      id: 6,
      title: 'JavaScript 进阶',
      description: '深入理解 JavaScript 的高级特性和最佳实践',
      image: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/JtsDpx4ARoCrb8d0bj4T',
      author: '小李',
      price: '￥199',
    },
    {
      id: 7,
      title: 'JavaScript 进阶',
      description: '深入理解 JavaScript 的高级特性和最佳实践',
      image: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/EyEZlt0rTNeOafVHQ880',
      author: '小李',
      price: '￥199',
    },
  ]

  return { isDark, courses }
})
