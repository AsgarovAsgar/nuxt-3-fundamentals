<script setup>
definePageMeta({
  layout: 'plain'
})

// const isLoggedIn = useIsLoggedIn()

// const handleLogin = () => {
//   isLoggedIn.value = true
//   useRouter().push({name: 'index'})
// }

import {useUserStore} from '@/stores/userStore'
const userStore = useUserStore()
</script>

<template>
  <div>
    <form @submit.prevent="userStore.handleLogin">
      <h1>Login</h1>
      <label for="username">
        Username
        <input id="username" type="text">
      </label>
      <br><br>
      <label for="password">
        Password
        <input type="password" id="password">
      </label>
      <button>Log in</button>
    </form>
  </div>
</template>