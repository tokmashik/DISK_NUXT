<template>
    <NuxtLayout :name="layout">
        <TheNavigation />
        <div class="app">
  <TheNavigation />
  <div class="container">
      <NuxtPage />
  </div>

  </div>

    </NuxtLayout>
  </template>


  <script setup>
  // You might choose this based on an API call or logged-in status
  const layout = "custom";
  </script>

  <style>
.container {
  margin: 60px auto 0;
  padding: 1rem;
  min-width: 960px;
}
</style>