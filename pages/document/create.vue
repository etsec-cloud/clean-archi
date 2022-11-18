<script lang="ts" setup>
const { data: res } = await useFetch("/api/client");
const clients = res._rawValue;

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
  clientId: "",
});
</script>

<template>
  <div>
    <h1>Create document</h1>
    <NuxtLink to="/">Accueil</NuxtLink>
    {{ data }}
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
        <label for="name">file name</label>
        <select v-model="data.clientId">
          <option
            v-for="client in clients"
            :key="client.id"
            :value="client.uuid"
          >
            {{ client.name }}
          </option>
        </select>
      </p>
      <p>
        <input type="submit" value="Submit" />
      </p>
    </form>
  </div>
</template>

<style></style>
