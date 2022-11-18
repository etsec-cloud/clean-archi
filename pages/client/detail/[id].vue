<script lang="ts" setup>
const route = useRoute();
const { data: res } = await useFetch(`/api/client/${route.params.id}`);
const client = res._rawValue.res;
console.log(client);
</script>

<template>
  <div>
    <h1>Clients</h1>
    <br />
    <NuxtLink to="/">Accueil</NuxtLink> <br />
    Name: {{ client.name }} <br />
    Email: {{ client.email }} <br />
    Documents linked:
    <div v-for="document in client.documents" :key="document.id">
      <ul>
        Title :{{
          document.title
        }}
        <NuxtLink :to="`/document/detail/${document.uuid}`"
          ><button>Detail</button></NuxtLink
        >
      </ul>
    </div>
    <br />
  </div>
</template>

<style></style>
