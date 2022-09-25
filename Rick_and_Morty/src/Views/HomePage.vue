<script setup>
    import axios from "axios"
    import { ref , onMounted} from 'vue'
    import Card from '../components/Card/Card.vue';
    

    const characters = ref([])

    const getCharacters = async () => {
        const response = await axios.get('https://rickandmortyapi.com/api/character')
        .then ( res => res )
        return response.data.results
    }

    onMounted( () => {
       characters.value = getCharacters()
    })
 


</script>


<template>
    
    <h1>Rick And Morty</h1>
    <Card/>

</template>

<style lang="scss" scoped >


</style>