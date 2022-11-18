<script  lang='ts' setup>
const route = useRoute()
console.log(route.params.id)
const { data: res } = await useFetch(`/api/client/${route.params.id}`)
const client = res._rawValue.res
console.log(client)
</script>


<template>
    <div>
        <h1>Clients</h1>
        Name: {{ client.name }} <br/>
        Email: {{ client.email }} <br/>
    </div>
</template>


<style>

</style>
