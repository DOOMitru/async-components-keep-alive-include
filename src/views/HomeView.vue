<template>
    <div>
        <h1>HomeView</h1>
        <input v-model="text" />
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, onActivated, onDeactivated } from 'vue'

const text = ref('')

onMounted(() => console.log('HomeView onMounted...'))
onActivated(() => console.log('HomeView onActivated...'))

onDeactivated(() => console.log('HomeView onDeactivated...'))
onUnmounted(() => console.log('HomeView onUnmounted...'))
</script>
