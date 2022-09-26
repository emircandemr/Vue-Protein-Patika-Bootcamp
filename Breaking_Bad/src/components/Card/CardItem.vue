<script setup >

    import { defineProps} from 'vue';

    const props = defineProps(["character"])

</script>


<template>
    
    <div class="characters_container"  >
        <img class="characters_container__img" :src="props.character.img" />
        <p>{{props.character.name}}</p>
    </div>

</template>


<style lang="scss" scoped >

    .characters_container{
        width: 300px;
        height: 300px;
        // background-color: #080308;
        background-color: #1b121b;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 15px 20px;
        padding: 8px;
        border-radius: 15px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        transition: all 0.3s ease-in-out;
        font-family: 'Caveat Brush', cursive;
        font-size: 24px;
        cursor: pointer;
        &:hover{
            transform: scale(1.05);
            transition: all 0.3s ease-in-out;
        }

        &__img{
            width: 50%;
            height: 80%;
            margin-top: 10px;
            border-radius: 10px;
        }
    }

</style>