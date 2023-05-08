<template>
    <v-app id="inspire">
        <v-app-bar class="px-3" color="white" flat density="compact">
            <NuxtLink to="/">DISK</NuxtLink>
            <v-spacer></v-spacer>
            <v-tabs centered color="grey-darken-2">
                <ul>
                    <li>
                        <v-tab>
                            <NuxtLink to="/">Home</NuxtLink>
                        </v-tab>
                    </li>
                    <li>
                        <v-tab>
                            <NuxtLink to="/second">Second</NuxtLink>
                        </v-tab>
                    </li>
                    <li>
                        <v-tab>
                            <NuxtLink to="/dictionary">Словарь</NuxtLink>
                        </v-tab>
                    </li>
                </ul>
            </v-tabs>
            <v-spacer></v-spacer>
            <v-avatar class="hidden-sm-and-down" color="grey-darken-1" size="32"></v-avatar>
        </v-app-bar>
        <v-main class="bg-grey-lighten-3">
            <v-container class="d-flex justify-center align-center text-h5" style="min-height: 300px;">
                <div>
                    <NuxtPage />
                </div>
            </v-container>
        </v-main>
    </v-app>
</template>
    
<script>



</script>