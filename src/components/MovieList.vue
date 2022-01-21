<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import MovieListItem from "./MovieListItem.vue";

const store = useStore()

const movies = computed(() => store.getters.filterMoviesBySearchText)

</script>

<template>
    <ul>
        <MovieListItem v-for="movie in movies" :key="movie.id" :movie="movie" />
    </ul>
</template>

<style scoped>
.grid-responsive {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
</style>