<script setup>
definePageMeta({
  layout: 'plain'
})
</script>

<template>
  <div>
    <form>
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
    </form>
  </div>
</template>