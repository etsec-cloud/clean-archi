<script  lang='ts' setup>
// const data = await useFetch('/api/client')
async function registerClient(input: IInputClient) {
    await $fetch('/api/client/register', {
        method: 'POST',
        body: data
    });
}
const data = reactive({
    name: '',
    email: '',
    password: '',
})
</script>


<template>
    <div>
        <h1>Clients</h1>
        <form id="app" method="post" @submit="registerClient">
            <p>
                <label for="age">Name</label>
                <input id="name" v-model="data.name" type="text">
            </p>
            <p>
                <label for="age">email</label>
                <input id="age" v-model="data.email" type="test">
            </p>
            <p>
                <label for="age">password</label>
                <input id="age" v-model="data.password" type="password">
            </p>
            <p>
                <input type="submit" value="Submit">
            </p>

        </form>

    </div>
</template>


<style>

</style>
