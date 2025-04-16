<template>
  <div class="min-h-[calc(100vh-9rem)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative">
    <!-- 登录卡片 -->
    <div class="max-w-md w-full bg-light-bg-200 dark:bg-dark-bg-100 p-8 rounded-2xl shadow-xl transition-all duration-normal border border-transparent dark:border-dark-tx/20 relative top-[-1rem]">
      <div class="text-center">
        <h2 class="text-3xl font-bold text-light-tt dark:text-dark-tt transition-all duration-normal">{{ t('login.welcome') }}</h2>
        <p class="mt-2 text-sm transition-all duration-normal">{{ t('login.subtext') }}</p>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="handleSubmit">
        <div class="space-y-5">
          <!-- 邮箱输入框 -->
          <div class="relative">
            <label for="email" class="block text-sm font-medium transition-all duration-normal">{{ t('login.email') }}</label>
            <div class="mt-1 relative">
              <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>
              <input id="email" name="email" type="text" required class="block w-full pl-10 pr-3 py-2.5 border border-gray-200 dark:border-dark-tx/30 rounded-lg bg-white dark:bg-dark-bg-100 placeholder-light-tx/50 dark:placeholder-dark-tx/50 focus:outline-none focus:ring-2 focus:ring-light-tx-hg dark:focus:ring-dark-tx-hg focus:border-transparent sm:text-sm transition-all duration-normal" :placeholder="t('login.email')" v-model="email" />
            </div>
          </div>
          <!-- 密码输入框 -->
          <div class="relative">
            <label for="password" class="block text-sm font-medium transition-all duration-normal0">{{ t('login.password') }}</label>
            <div class="mt-1 relative">
              <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0-1.1.9-2 2-2m-2 6v-2m0 0c-1.1 0-2-.9-2-2s.9-2 2-2m0 4c1.1 0 2 .9 2 2m6-9V5a2 2 0 00-2-2H7a2 2 0 00-2 2v4m12 0a2 2 0 012 2v7a2 2 0 01-2 2H7a2 2 0 01-2-2v-7a2 2 0 012-2h10z" />
                </svg>
              </span>
              <input id="password" name="password" type="password" required class="block w-full pl-10 pr-3 py-2.5 border border-gray-200 dark:border-dark-tx/30 rounded-lg bg-white dark:bg-dark-bg-100 placeholder-light-tx/50 dark:placeholder-dark-tx/50 focus:outline-none focus:ring-2 focus:ring-light-tx-hg dark:focus:ring-dark-tx-hg focus:border-transparent sm:text-sm transition-all duration-normal" :placeholder="t('login.password')" v-model="password" />
            </div>
          </div>
        </div>

        <!-- 记住我 & 忘记密码 -->
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-light-tx-hg dark:text-dark-tx-hg focus:ring-light-tx-hg dark:focus:ring-dark-tx-hg border-gray-300 dark:border-dark-tx rounded transition-all duration-normal" />
            <label for="remember-me" class="ml-2 block text-sm transition-all duration-normal">{{ t('login.remember') }}</label>
          </div>
          <div class="text-sm">
            <a href="#" class="font-medium text-light-tx-hg dark:text-dark-tx-hg hover:text-light-tx-hg/80 dark:hover:text-dark-tx-hg/80 transition-all duration-normal">{{ t('login.forgot') }}</a>
          </div>
        </div>

        <!-- 登录按钮 -->
        <div>
          <button type="submit" class="w-full flex justify-center py-2.5 px-4 rounded-lg text-sm font-medium text-white bg-light-tx-hg dark:bg-dark-tx-hg hover:bg-light-tx-hg/90 dark:hover:bg-dark-tx-hg/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-tx-hg dark:focus:ring-dark-tx-hg transition-all duration-normal transform hover:scale-105">{{ t('login.submit') }}</button>
        </div>
      </form>
      <!-- 注册链接 -->
      <p class="mt-4 text-center text-sm transition-all duration-normal">
        {{ t('login.noAccount') }}
        <a href="#" class="font-medium text-light-tx-hg dark:text-dark-tx-hg hover:text-light-tx-hg/80 dark:hover:text-dark-tx-hg/80 transition-all duration-normal">{{ t('login.register') }}</a>
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const email = ref('')
const password = ref('')

const handleSubmit = () => {
  console.log('登录信息:', { email: email.value, password: password.value })
}
</script>
