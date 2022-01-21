<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore()
const emit = defineEmits(["onAuthSuccess"])

const username = ref("")
const password = ref("")
const displayError = ref("")

const onRegisterLogin = async (action) => {

    const error = await store.dispatch("loginRegister", {
        action,
        username, 
        password
    })

    if (error !== null) {
        displayError.value = error
    } else {
        emit("onAuthSuccess")
    }
}

</script>

<template>
    <form class="mb-3">
        <fieldset class="mb-3">
            <label for="username" aria-label="Username" class="block">Username</label>
            <input
                type="text"
                id="username"
                placeholder="E.g., john.doe@email.com"
                class="border border-slate-300"
                v-model="username"
            />
        </fieldset>

        <fieldset class="mb-3">
            <label for="password" aria-label="Password" class="block">Password</label>
            <input
                type="password"
                id="password"
                placeholder="*****"
                class="border border-slate-300"
                v-model="password"
            />
        </fieldset>

        <div class="grid gap-2 grid-cols-2">
            <button
                @click="onRegisterLogin('register')"
                type="button"
                class="bg-indigo-500 text-white p-3 rounded"
            >Register</button>
            <button
                @click="onRegisterLogin('login')"
                type="button"
                class="bg-yellow-500 text-white p-3 rounded"
            >Login</button>
        </div>
    </form>

    <div v-if="displayError" class="bg-red-500 text-white p-3">
        <span class="block text-lg mb-3">Error</span>
        <p>{{ displayError }}</p>
    </div>
</template>