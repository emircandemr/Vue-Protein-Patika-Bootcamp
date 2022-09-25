<script setup>
    
    import axios from "axios"
    import { onMounted, ref } from "vue";
    import { useRoute } from "vue-router";

    const route = useRoute()
    const character = ref([])

    onMounted(() => {
        const id = route.params.id;
        axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(res => character.value = res.data)
        });

</script>


<template>

    <div>
        <h1>{{character.name}}</h1>
    </div>
</template>

<style lang="scss" >

</style>