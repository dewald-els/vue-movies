<script setup>import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';

const route = useRoute()
const router = useRouter()
const store = useStore()

onMounted(async () => {
    await store.dispatch("fetchMovieById", route.params.movieId)
})

</script>
<template>
    <h4>Movie detail</h4>
</template>