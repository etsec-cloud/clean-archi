<script lang="ts" setup>
// eslint-disable-next-line no-undef
let { data: res } = await useFetch("/api/document");
console.log(res);
const documents = res._rawValue;
async function deleteDocument(id: string) {
  // eslint-disable-next-line no-undef
  await $fetch(`/api/document/${id}`, {
    method: "DELETE",
  });
}
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
        <a :href="`/${document.fileName}.pdf`"
        ><button>View</button></a
        >
        <NuxtLink :to="`/document/detail/${document.uuid}`"
          ><button>Detail</button></NuxtLink
        >
        <button @click="deleteDocument(document.uuid)">Supprimer</button> <br />
      </div>
    </div>
  </div>
</template>
