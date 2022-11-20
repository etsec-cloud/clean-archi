<script lang="ts" setup>
const {
  data: { value: clients },
  // eslint-disable-next-line no-undef
} = await useFetch("/api/client");

async function createDocument() {
  if (!data.file) {
    return;
  }
  const form = new FormData();
  form.append("title", data.title);
  form.append("fileName", data.fileName);
  form.append("file", data.file);
  form.append("clientId", data.clientId);
  // eslint-disable-next-line no-undef
  await $fetch("/api/document/create", {
    method: "POST",
    body: form,
  });
}
// eslint-disable-next-line no-undef
const data = reactive({
  title: "",
  fileName: "",
  creationDate: new Date(),
  clientId: "",
  file: null,
});

const handleFileSelection = (e: { target: { files: null[] } }) => {
  data.file = e.target.files[0];
};
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
        <label for="file"> Upload</label>
        <input type="file" accept="application/pdf" @change="handleFileSelection($event)" />
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
