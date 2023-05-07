<template>
    <v-card
      class="mx-auto"
      max-width="400"
      title="Регистрация"
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
          color="primary"
          label="Пароль"
          placeholder="Enter your password"
          variant="underlined"
        ></v-text-field>
  
        <v-checkbox
          v-model="terms"
          color="deep-purple-darken-2"
          label="I agree to site terms and conditions"
        ></v-checkbox>

        <p>Уже зарегистрированны в системе?</p>
        <NuxtLink to="/login"> Войти</NuxtLink>
      </v-container>
  
      <v-divider></v-divider>
  
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="deep-purple-darken-2">
          Зарегистрироваться
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
}
</script>