<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore()

const user = computed(() => store.state.user)
const hasMovies = computed(() => store.getters.hasMovies)


</script>

<template>
    <nav class="sticky top-0 bg-yellow-500 p-4 mb-3 flex justify-between items-center">
        <router-link to="/movies" class="font-bold">Vue Movies</router-link>
        
        <div v-if="hasMovies">
            <router-link v-if="user !== null" to="/profile">Profile</router-link>
        </div>
    </nav>
</template>