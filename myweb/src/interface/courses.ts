import type { ComputedRef, Ref } from 'vue'

export interface LearnedKnowledges {
  id: number
  content: string
}

export interface Video {
  videoId: number
  title: string
  time: number
}

export interface Chapter {
  chapterId: number
  chapterTitle: string
  isOpen: Ref<boolean>
  isOpenComputed?: ComputedRef<boolean>
  videos: Video[]
}

export interface Course {
  id: number
  title: string
  description: string
  image: string
  author: string
  price: string
}
