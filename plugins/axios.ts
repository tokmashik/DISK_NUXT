import axios from "@nuxtjs/axios";

export default defineNuxtPlugin(async () => {
    return {
        provide: {
            axios: axios,
        }
    }
})