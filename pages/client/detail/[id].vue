<script lang="ts" setup>
const route = useRoute();
const { data: res } = await useFetch(`/api/client/${route.params.id}`);
const client = res._rawValue.res;
</script>

<template>
  <div>
    <h1>Clients</h1>
    <br />
    <NuxtLink to="/">Accueil</NuxtLink> <br />
    Name: {{ client.name }} <br />
    Email: {{ client.email }} <br />
  </div>
</template>

<style></style>
