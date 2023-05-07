<template>


<TheReg />

<v-layout>
     <!-- <v-app-bar>
        <div style="display: flex; align-items: center; justify-content: space-between;">

        
        <div>
          <NuxtLink to="/">DISK</NuxtLink>
        </div>
        <div>

        
        <ul>
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/login">login</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/register">register</NuxtLink>
      </li>
      <v-btn @click="toggleTheme">change theme</v-btn>
    </ul>
      
    </div>
  
  </div>
      </v-app-bar>-->
    </v-layout>

    <h3></h3>
    <NuxtLink to="/admin">admin</NuxtLink>
    <NuxtLink to="/user">user</NuxtLink>
    
</template>


<script>

import register from './register.vue';

import { useTheme } from 'vuetify'

/*export default {
  setup () {
    const theme = useTheme()

    return {
      theme,
      toggleTheme: () => theme.global.name.value = theme.global.current.value.dark ? 'dark' : 'light'
    }
  }
}*/
</script>

