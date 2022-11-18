<script lang="ts" setup>
const { data: res } = await useFetch("/api/document");
console.log(res);
const documents = res._rawValue;
console.log(documents);
</script>

<template>
  <div>
    <h1>Documents</h1>
    <NuxtLink to="/">Accueil</NuxtLink>
    <div v-for="document in documents" :key="document.id">
      <div>
        title: {{ document.title }} <br />
        fileName: {{ document.fileName }} <br />
        creation date: {{ document.creationDate }} <br />
        {{ document.uuid }}
        <NuxtLink :to="`/document/detail/${document.uuid}`"
          ><button>Document</button></NuxtLink
        >
      </div>
    </div>
  </div>
</template>
