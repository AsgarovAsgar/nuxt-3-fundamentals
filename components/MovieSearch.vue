<script setup>
const query = ref('batman')
const movies  = ref([])
const { apiBaseUrl } = useRuntimeConfig().public
const handleSearch = async () => {
  const { Search } = await $fetch(`${apiBaseUrl}&s=${query.value}`)
  movies.value = Search
}

handleSearch()
</script>

<template>
  <div>
    <div>
      Page: Movies Page
    </div>
    <form @submit.prevent="handleSearch">
      <input type="text" v-model="query">
      <button>Search</button>
    </form>
    <ul style="display: flex; flex-wrap: wrap; gap: 10px; list-style: none;">
      <li v-for="movie in movies" :key="movie.imdbID">
        <NuxtLink :to="{ name: 'movies-id', params: {id: movie.imdbID} }">
          <NuxtImg 
            :src="movie.Poster" 
            :alt="movie.title" 
            width="300" 
            format="webp"
            loading="lazy"
            sizes="xs:100vw md:100vw lg:100vw xl:100vw"
          />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
