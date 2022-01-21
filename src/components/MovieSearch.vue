<script setup>
import { useStore } from 'vuex';

const store = useStore()
const onKeyUp = (event) => {
    store.commit("setSearchText", event.target.value.trim())
}
</script>

<template>
    <div class="flex items-center border-2 p-1 border-slate-300 mb-3 rounded">
        <input
            class="rounded p-4 mr-3 w-full focus:outline-transparent"
            type="text"
            placeholder="Search a movie..."
            @keyup="onKeyUp"
        />
        <span class="material-icons block pr-3">search</span>
    </div>
</template>