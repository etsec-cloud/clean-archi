<script lang="ts" setup></script>

<template>
  <div class="container-row">
    <div class="container-column">
      <h1>Documents</h1>
      <NuxtLink to="/document/"><button>List documents</button></NuxtLink>
      <NuxtLink to="/document/create"
        ><button>Create document</button></NuxtLink
      >
    </div>
    <div class="container-column">
      <h1>Clients</h1>
      <NuxtLink to="/client/"> <button>List clients</button></NuxtLink>
      <div>
        <NuxtLink to="/client/register"><button>Register</button></NuxtLink>
        <NuxtLink to="/client/login"><button>Login</button></NuxtLink>
      </div>
    </div>
  </div>
</template>

<style>
.container-row {
  display: flex;
  justify-content: space-around;
}
.container-column {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
button {
  margin: 10px;
  background: rgb(11, 46, 111);
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}
</style>
