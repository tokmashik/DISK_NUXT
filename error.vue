<template>
    <div>
        <p>{{ error.statusCode }}</p>
        <p>oops</p>
        <p>{{ error.message }}</p>
        <button @click="handleClearError">На главную страницу</button>
    </div>
</template>

<script setup>
defineProps(['error'])
const handleClearError = () => clearError({ redirect: '/'})
</script>

<style>

</style>