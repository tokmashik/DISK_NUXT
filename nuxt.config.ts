//import { defineNuxtConfig } from 'nuxt/config'
//import { config } from 'process';
import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  modules: [
    "@nuxtjs/google-fonts",

  ],
  css: ['vuetify/lib/styles/main.sass',
        '@mdi/font/css/materialdesignicons.css',
        '@/assets/settings.scss'],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    ssr: {
      noExternal: ["vuetify"],
    },
  },
  googleFonts: {
    families: {
      Poppins: [100,200,300,400, 500, 600, 700, 800, 900]
    },
    download: false,
    useStylesheet: true,
  }
})


/*export default defineNuxtConfig({
    css: [
        'primevue/resources/themes/bootstrap4-light-blue/theme.css',
        'primevue/resources/primevue.min.css',
        'primevue/resources/primevue.css',
        'primeicons/primeicons.css',
        'primeflex/primeflex.css',
    ],    
    build: {
        transpile: ['primevue']
    }
})


vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },

  modules: [
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', config => config.plugins.push(
        vuetify({
          styles: { configFile: new URL('assets/settings.scss', import.meta.url).pathname }
        })
      ))
    }
  ],
  */
