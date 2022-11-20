<script lang="ts" setup>
// eslint-disable-next-line no-undef
const route = useRoute();
// eslint-disable-next-line no-undef
const {
  data: {
    value: { res: document },
  },
} = await useFetch(`/api/document/${route.params.id}`);
</script>

<template>
  <div>
    <h1>Document</h1>
    <br />
    <NuxtLink to="/">Accueil</NuxtLink> <br />
    title: {{ document.title }} <br />
    fileName: {{ document.fileName }} <br />
  </div>
</template>

<style></style>
