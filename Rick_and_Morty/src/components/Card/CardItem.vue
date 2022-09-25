<script setup >

    import { defineProps,defineEmits } from 'vue';

    const props = defineProps(["character"])

</script>


<template>
    
    <div class="character_container"  >
        <img class="character_container__img" :src="props.character.image" />
        <p>{{props.character.name}}</p>
    </div>

</template>


<style lang="scss" scoped >

    .character_container{
        width: 400px;
        height: 300px;
        // background-color: #080308;
        background-color: #191319;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 15px 20px;
        padding: 10px;
        border-radius: 15px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        &:hover{
            transform: scale(1.05);
            transition: all 0.3s ease-in-out;
        }

        &__img{
            width: 90%;
            height: 80%;
            margin-top: 10px;
            border-radius: 10px;
        }
    }

</style>