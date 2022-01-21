<script setup>
import MovieFavouriteButton from './MovieFavouriteButton.vue';

defineProps({
    movie: {
        type: Object,
        required: true
    }
})

</script>

<template>
    <li class="shadow rounded flex mb-3 overflow-hidden">
        <aside class="mr-3">
            <img :src="movie.cover" :alt="movie.title" class="block min-w-100" />
        </aside>
        <div class="p-3 flex flex-col w-full">
            <header class="flex items-center justify-between">
                <p class="flex items-center">
                    <span class="material-icons text-yellow-500">star</span>
                    <span class="font-bold">{{ movie.rating }}</span>
                </p>
                <MovieFavouriteButton :movie="movie" />
            </header>
            <span class="block text-2xl">{{ movie.title }}</span>
            <p>{{ movie.description }}</p>
            
            <footer class="flex justify-end mt-auto">
                <router-link 
                    :to="`/movies/${movie.id}`"
                    class="border border-cyan-700 px-3 rounded text-cyan-700">
                    View more
                </router-link>
            </footer>
        </div>
    </li>
</template>

<style>
.min-w-100 {
    min-width: 100px;
}
</style>