<script setup>
import { computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import Navbar from '../components/Navbar.vue';
const store = useStore()
const router = useRouter()

onMounted(async () => {
    store.dispatch("fetchUserFavourites")
})

const user = computed(() => store.state.user)
const favourites = computed(() => store.state.userFavourites)

const onLogoutClick = async () => {
    const logout = confirm("Are you sure?")
    if (!logout) {
        return
    }

    await store.dispatch("logout")
    router.replace("/") // Login
}

</script>
<template>
    <main class="container mx-auto px-4">

        <header class="flex justify-between items-center">
            <h1 class="text-2xl flex items-center mb-3">
                <span class="material-icons">account_circle</span>
                Welcome, {{ user.username }}
            </h1>
            <button class="flex items-center" @click="onLogoutClick">
                <span class="material-icons">lock_open</span>
                <span>Logout</span>
            </button>
        </header>

        <h4 class="font-bold flex items-center">
            <span class="material-icons text-yellow-500">star</span>
            <span>Here are your favourite movies</span>
        </h4>
        <ul>
            <li v-for="favourite in favourites">{{ favourite.title }}</li>
        </ul>
    </main>
</template>