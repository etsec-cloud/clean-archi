<script lang="ts" setup>
// eslint-disable-next-line no-undef
const route = useRoute();
// eslint-disable-next-line no-undef
const {
  data: {
    value: { res: document },
  },
  // eslint-disable-next-line no-undef
} = await useFetch(`/api/document/${route.params.id}`);
</script>

<template>
  <div>
    <h1>Document</h1>
    <br />
    <NuxtLink to="/">Accueil</NuxtLink> <br />
    title: {{ document.title }} <br />
    fileName: {{ document.fileName }} <br />
    file : {{ document.file }}
  </div>
</template>

<style></style>
