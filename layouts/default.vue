<script setup>
// const isLoggedIn = useIsLoggedIn()
import {useUserStore} from '@/stores/userStore'
const userStore = useUserStore()
</script>

<template>
  <nav style="display: flex; gap: 10px;">
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/movies">Movies</NuxtLink>
    <NuxtLink to="https://vueschool.io/" target="_blank">Vue School</NuxtLink>
    <nuxt-link v-if="!userStore.isLoggedIn" to="/login">Login</nuxt-link>
    <a href="#" v-else @click="userStore.isLoggedIn = false">Log out</a>
  </nav>
  <slot></slot>
</template>