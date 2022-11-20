<script lang="ts" setup>
import { useDocumentsStore } from "~~/stores/documents";
import { ref } from "vue";

// eslint-disable-next-line no-undef
const route = useRoute();
// eslint-disable-next-line no-undef

const document = ref(useDocumentsStore().getDocumentById(route.params.id));

if (!document.value) {
  // eslint-disable-next-line no-undef
  const { data: res } = await useFetch(`/api/document/${route.params.id}`);
  useDocumentsStore().add(res._rawValue.res);
  document.value = res._rawValue.res;
}
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
