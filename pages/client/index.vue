<script lang="ts" setup>
// eslint-disable-next-line no-undef
const { data: res } = await useFetch("/api/client");
const clients = res._rawValue;
async function deleteClient(id: string) {
  // eslint-disable-next-line no-undef
  await $fetch(`/api/client/${id}`, {
    method: "DELETE",
  });
}
</script>

<template>
  <div>
    <h1>Clients</h1>
    <NuxtLink to="/">Accueil</NuxtLink>

    <div v-for="client in clients" :key="client.id">
      <div>
        id: {{ client.uuid }} <br />
        name: {{ client.name }} <br />
        email: {{ client.email }} <br />
        <NuxtLink :to="`/client/detail/${client.uuid}`"
          ><button>Detail</button></NuxtLink
        >
        <button @click="deleteClient(client.uuid)">Supprimer</button> <br />
      </div>
    </div>
  </div>
</template>

<style></style>
