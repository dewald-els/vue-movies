<script setup>
import { onMounted } from 'vue';
import { useStore } from 'vuex';
import MovieList from '../components/MovieList.vue';
import Navbar from '../components/Navbar.vue';
import MovieSearch from '../components/MovieSearch.vue';

const store = useStore()

onMounted(async () => {
    await store.dispatch("fetchAllMovies")
    await store.dispatch("fetchUserFavourites")
})

</script>

<template>
    <main class="container mx-auto px-4">
        <MovieSearch />
        <MovieList />
    </main>
</template>