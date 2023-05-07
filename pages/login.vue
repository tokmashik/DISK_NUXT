<template>
    <NuxtPage />
    <v-card
      class="mx-auto"
      max-width="400"
      title="Войти в аккаунт"
    >
      <v-container>
        <v-text-field
          v-model="first"
          color="primary"
          label="Имя"
          variant="underlined"
        ></v-text-field>
  
        <v-text-field
          v-model="last"
          color="primary"
          label="Фамилия"
          variant="underlined"
        ></v-text-field>
  
        <v-text-field
          v-model="email"
          color="primary"
          label="Email"
          variant="underlined"
        ></v-text-field>
  
        <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Normal with hint text"
            hint="At least 8 characters"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>

          <!--
            <v-text-field
        v-model="password"
        color="primary"
        label="Password"
        placeholder="Enter your password"
        variant="underlined"
      ></v-text-field>

          -->
      </v-container>
  
      
      <v-divider></v-divider>
  
      <v-card-actions>
        <v-spacer></v-spacer>
  
        <v-btn color="deep-purple-darken-2">
            Войти в аккаунт
          <v-icon icon="mdi-chevron-right" end></v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </template>

<script>
export default {
  data: () => ({
    first: null,
    last: null,
    email: null,
    password: null,
    terms: false,
  }),

  data () {
      return {
        show1: false,
        show2: true,
        password: 'Password',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => (`The email and password you entered don't match`),
        },
      }
    },
}
</script>