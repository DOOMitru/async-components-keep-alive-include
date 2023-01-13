<template>
    <div>
        <h1>AboutView</h1>
        <input v-model="text" />
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, onActivated, onDeactivated } from 'vue'

const text = ref('')

onMounted(() => console.log('AboutView onMounted...'))
onActivated(() => console.log('AboutView onActivated...'))

onDeactivated(() => console.log('AboutView onDeactivated...'))
onUnmounted(() => console.log('AboutView onUnmounted...'))
</script>
