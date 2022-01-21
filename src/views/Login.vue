<script setup>
import { useRouter } from "vue-router";
import LoginRegisterForm from '../components/LoginRegisterForm.vue';

const router = useRouter()

const handleAuthSuccess = () => {
    console.log("user is available")
    router.push("/movies")
}
</script>

<template>
    <main class="container mx-auto px-4">
        <h1 class="mb-3 text-2xl">Login to get started</h1>

        <LoginRegisterForm @onAuthSuccess="handleAuthSuccess" />
    </main>
</template> 