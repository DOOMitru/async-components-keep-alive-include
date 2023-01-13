<template>
    <div>
        <h1>ContactView</h1>
        <input v-model="text" />
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, onActivated, onDeactivated } from 'vue'

const text = ref('')

onMounted(() => console.log('ContactView onMounted...'))
onActivated(() => console.log('ContactView onActivated...'))

onDeactivated(() => console.log('ContactView onDeactivated...'))
onUnmounted(() => console.log('ContactView onUnmounted...'))
</script>
