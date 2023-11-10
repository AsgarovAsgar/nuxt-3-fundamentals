<script setup>
const route = useRoute()
const { apiBaseUrl } = useRuntimeConfig().public

const { data } = await useFetch(`${apiBaseUrl}&i=${route.params.id}`, {
  pick: ['Title', 'Plot', 'Poster'],
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

useHead({
  title: data.value.Title,
  meta: [
    { name: 'description', content: data.value.Plot },
    { property: 'og:title', content: data.value.title },
    { property: 'og:description', content: data.value.Plot },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://nuxt.com' },
    { property: 'og:locale', content: 'en_US' },
    { property: 'og:image', content: data.value.Poster },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
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

