<template>
  <div class="flex flex-col rounded-md bg-[#F8F8F8] p-4 pb-3 text-[#222] shadow-sm transition-colors duration-normal dark:bg-black-2A dark:text-[#bbb]">
    <div class="flex grow gap-4">
      <div class="grow">
        <h2 class="pb-2 text-[#1B76CF] transition-colors duration-normal dark:text-yellow">
          <span class="line-clamp-2 cursor-pointer">{{ problem.title }}</span>
        </h2>
        <p class="line-clamp-2 text-[14px] text-[#333333] transition-colors duration-normal dark:text-[#eee]">{{ problem.content }}</p>
      </div>
    </div>
    <div class="flex items-center justify-start gap-3 pb-2 pt-1 text-sm">
      <button class="my-1 rounded-md bg-white-2A px-1 text-[12px] text-[#3B4044] transition-colors duration-normal hover:bg-[#D9D9D9] dark:bg-black-2C dark:text-white-2A dark:hover:bg-[#777]" v-for="tag in tags" :key="tag.id">{{ tag.name }}</button>
    </div>
    <div class="flex grow-[2] items-center justify-between border-t pt-2 text-[13px] transition-colors duration-normal dark:border-[#3B4044]">
      <div class="flex w-44 items-center justify-between md:w-72">
        <li class="flex cursor-pointer list-none items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="m20.975 12.185l-.739-.128zm-.705 4.08l-.74-.128zM6.938 20.477l-.747.065zm-.812-9.393l.747-.064zm7.869-5.863l.74.122zm-.663 4.045l.74.121zm-6.634.411l-.49-.568zm1.439-1.24l.49.569zm2.381-3.653l-.726-.189zm.476-1.834l.726.188zm1.674-.886l-.23.714zm.145.047l.229-.714zM9.862 6.463l.662.353zm4.043-3.215l-.726.188zm-2.23-1.116l-.326-.675zm8.561 9.925l-.705 4.08l1.478.256l.705-4.08zm-6.991 9.193H8.596v1.5h4.649zm-5.56-.837l-.812-9.393l-1.495.129l.813 9.393zm11.846-4.276c-.507 2.93-3.15 5.113-6.286 5.113v1.5c3.826 0 7.126-2.669 7.764-6.357zM13.255 5.1l-.663 4.045l1.48.242l.663-4.044zm-6.067 5.146l1.438-1.24l-.979-1.136L6.21 9.11zm4.056-5.274l.476-1.834l-1.452-.376l-.476 1.833zm1.194-2.194l.145.047l.459-1.428l-.145-.047zm-1.915 4.038a8.4 8.4 0 0 0 .721-1.844l-1.452-.377A7 7 0 0 1 9.2 6.11zm2.06-3.991a.89.89 0 0 1 .596.61l1.452-.376a2.38 2.38 0 0 0-1.59-1.662zm-.863.313a.51.51 0 0 1 .28-.33l-.651-1.351c-.532.256-.932.73-1.081 1.305zm.28-.33a.6.6 0 0 1 .438-.03l.459-1.428a2.1 2.1 0 0 0-1.548.107zm2.154 8.176h5.18v-1.5h-5.18zm.581-5.641a5.5 5.5 0 0 0-.104-2.284l-1.452.377a4 4 0 0 1 .076 1.664zM8.596 21.25a.916.916 0 0 1-.911-.837l-1.494.129a2.416 2.416 0 0 0 2.405 2.208zm.03-12.244c.68-.586 1.413-1.283 1.898-2.19L9.2 6.109c-.346.649-.898 1.196-1.553 1.76zm13.088 3.307a2.416 2.416 0 0 0-2.38-2.829v1.5c.567 0 1 .512.902 1.073zm-9.122-3.168a1.583 1.583 0 0 0 1.562 1.84v-1.5a.083.083 0 0 1-.082-.098zm-5.72 1.875a.92.92 0 0 1 .316-.774l-.98-1.137a2.42 2.42 0 0 0-.83 2.04z"
              stroke-width="0.5"
              stroke="currentColor"
            />
            <path fill="currentColor" d="m3.972 21.47l-.748.066zM3 10.235l.747-.064a.75.75 0 0 0-1.497.064zm1.719 11.172L3.747 10.17l-1.494.129l.971 11.237zm-.969.107v-11.28h-1.5v11.279zm-.526.022a.263.263 0 0 1 .263-.285v1.5c.726 0 1.294-.622 1.232-1.344zm.263-.285c.146 0 .263.119.263.263h-1.5c0 .682.553 1.237 1.237 1.237z" opacity="0.5" stroke-width="0.5" stroke="currentColor" />
          </svg>
          点赞
        </li>
        <li class="flex cursor-pointer list-none items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24">
            <g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1">
              <path stroke-linecap="round" stroke-width="1.5" d="M12 21a9 9 0 1 0-8-4.873L3 21l4.873-1c1.236.639 2.64 1 4.127 1" />
              <path stroke-width="3" d="M7.5 12h.01v.01H7.5zm4.5 0h.01v.01H12zm4.5 0h.01v.01h-.01z" />
            </g>
          </svg>
          评论
        </li>
        <li class="flex cursor-pointer list-none items-center gap-1">
          <svg viewBox="64 64 896 896" focusable="false" data-icon="star" width="14px" height="14px" fill="currentColor" aria-hidden="true">
            <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"></path>
          </svg>
          收藏
        </li>
      </div>
      <div>小李</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Problem } from '@/interface/community'

const tags = [
  {
    id: 1,
    name: 'Java',
  },
  {
    id: 2,
    name: 'Vue',
  },
  {
    id: 3,
    name: 'React',
  },
]
const { problem } = defineProps<{
  problem: Problem
}>()
</script>

<style scoped></style>
