<script lang="ts" setup>
async function registerClient() {
  // eslint-disable-next-line no-undef
  await $fetch("/api/client/register", {
    method: "POST",
    body: data,
  });
}
// eslint-disable-next-line no-undef
const data = reactive({
  name: "",
  email: "",
  password: "",
});
</script>

<template>
  <div>
    <h1>Register</h1>
    <NuxtLink to="/">Accueil</NuxtLink>
    <form id="app" method="post" @submit="registerClient">
      <p>
        <label for="age">Name</label>
        <input id="name" v-model="data.name" type="text" />
      </p>
      <p>
        <label for="email">email</label>
        <input id="email" v-model="data.email" type="email" />
      </p>
      <p>
        <label for="age">password</label>
        <input id="password" v-model="data.password" type="password" />
      </p>
      <p>
        <input type="submit" value="Submit" />
      </p>
    </form>
  </div>
</template>

<style></style>
