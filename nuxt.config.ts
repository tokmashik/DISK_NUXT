import { defineNuxtConfig } from 'nuxt/config'

// Подтягивает шрифты, но не UI компоненты
export default defineNuxtConfig({
  css: ['vuetify/lib/styles/main.sass'],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})

/*
import { defineNuxtConfig } from 'nuxt/config'

// Подтягивает цвета, но не UI компоненты
export default defineNuxtConfig({
    css: [
        'primevue/resources/themes/saga-blue/theme.css',
        'primevue/resources/primevue.css',
        'primeicons/primeicons.css',
        'primeflex/primeflex.css',
    ],    
    build: {
        transpile: ['primevue']
    }
})*/
