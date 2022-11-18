<script lang="ts" setup>
async function createDocument() {
  await $fetch("/api/document/create", {
    method: "POST",
    body: data,
  });
}
const data = reactive({
  title: "",
  fileName: "",
  creationDate: new Date(),
  clientId: "1",
});
</script>

<template>
  <div>
    <h1>Create document</h1>
    <NuxtLink to="/">Accueil</NuxtLink>
    <form id="doc" method="post" @submit="createDocument">
      <p>
        <label for="title">title</label>
        <input id="title" v-model="data.title" type="text" />
      </p>
      <p>
        <label for="name">file name</label>
        <input id="name" v-model="data.fileName" type="text" />
      </p>
      <p>
        <input type="submit" value="Submit" />
      </p>
    </form>
  </div>
</template>

<style></style>
