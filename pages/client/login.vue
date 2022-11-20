<script lang="ts" setup>
async function login() {
  // eslint-disable-next-line no-undef
  await $fetch("/api/client/login", {
    method: "POST",
    body: data,
  });
}
// eslint-disable-next-line no-undef
const data = reactive({
  email: "",
  password: "",
});
</script>

<template>
  <div>
    <h1>Login</h1>
    <NuxtLink to="/">Accueil</NuxtLink>

    <form id="app" method="post" @submit="login">
      <p>
        <label for="age">email</label>
        <input id="age" v-model="data.email" type="test" />
      </p>
      <p>
        <label for="age">password</label>
        <input id="age" v-model="data.password" type="password" />
      </p>
      <p>
        <input type="submit" value="Submit" />
      </p>
    </form>
  </div>
</template>

<style></style>
