import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', () => {
  const isLoggedIn = ref(false)

  const handleLogin = () => {
    isLoggedIn.value = true
    useRouter().push({name: 'index'})
  }

  return {
    isLoggedIn,
    handleLogin
  }
})