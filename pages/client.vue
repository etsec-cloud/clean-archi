<script  lang='ts' setup>
const { data: res } = await useFetch('/api/client')
const clients = res._rawValue

</script>


<template>
    <div>
        <h1>Clients</h1>
        <div v-for="client in clients" :key="client.id"> 
            <div>
                ------------------------------  <br />
                id: {{client.uuid}} <br />
                name: {{client.name}}  <br />
                email: {{client.email}} <br />
                <NuxtLink :to="`/client-detail/${client.uuid}`">Document</NuxtLink> <br />
                ------------------------------  <br />
            </div>
        </div>
    </div>
</template>


<style>

</style>
