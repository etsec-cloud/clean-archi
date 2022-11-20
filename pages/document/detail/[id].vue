<script lang="ts" setup>
const route = useRoute();
const { data: res } = await useFetch(`/api/document/${route.params.id}`);
const document = res._rawValue.res;
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
