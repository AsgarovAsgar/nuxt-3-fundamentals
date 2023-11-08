<script setup>
const route = useRoute()
const { apiBaseUrl } = useRuntimeConfig().public

const {data} = await useFetch(`${apiBaseUrl}&i=${route.params.id}`, {
  pick: ['Title', 'Plot'],
  key: `/movies/${route.params.id}`,
  onResponse({request, response}) {
    if(response._data.Error === 'Incorrect IMDb ID.') {
      showError({
        statusCode: 404,
        statusMessage: "Page Not Found"
      })
    }
  }
})

// const {data} = await useAsyncData(`/movies/${route.params.id}`, () => {
//   return $fetch(`${apiBaseUrl}&i=${route.params.id}`)
// }, {
//   pick: ['Title', 'Plot']
// })
</script>

<template>
  <pre>
    {{ data }}
  </pre>
</template>

