<script setup>
const route = useRoute()
const message = computed(() => `Page id is: ${route.params.id}`)
</script>

<template>
  <div>
    {{ message }}
  </div>
</template>

