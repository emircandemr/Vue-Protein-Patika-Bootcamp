
<script setup>
    import axios from "axios"
    import { ref , onMounted} from 'vue'
    import Card from '../components/Card/Card.vue';
    

    const characters = ref([])

    const getCharacters = async () => {
        const response = await axios.get('https://www.breakingbadapi.com/api/characters')
        return response.data
    }

    onMounted( async () => {
       characters.value =await getCharacters()
    })
 


</script>


<template>
    <div class="container">
        <h1 class="title" >Breaking Bad Characters</h1>
        <Card :characters="characters" />
    </div>

</template>

<style lang="scss" scoped >

    .title{
        font-family: 'Nabla', cursive;

    }

</style>