import { defineStore } from 'pinia'

export interface User {
  id: number
  isLogin: boolean
  nickName: string
  email: string
}
export const useUserInfo = defineStore('userinfo', () => {
  const user: User = {
    id: -1,
    isLogin: false,
    nickName: '',
    email: '',
  }

  return { user }
})
