<template>
    <v-app id="inspire">
        <v-main class="bg-grey-lighten-3">
            <v-container>
                <div>
                    <h2>{{ error.statusCode }}</h2>
                    <p>Ooops</p>
                    <p>{{ error.message }}</p>
                    <v-btn @click="handleClearError">На главную страницу</v-btn>
                </div>
            </v-container>
        </v-main>
    </v-app>
</template>

<script setup>
defineProps(['error'])
const handleClearError = () => clearError({ redirect: '/' })
</script>