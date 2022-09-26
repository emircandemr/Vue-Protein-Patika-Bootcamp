<script setup >
    import CardItem from './CardItem.vue';
    import { defineProps } from 'vue';

    const props = defineProps(["characters"])

</script>


<template>

    <div class="content" >
        <template v-for="character in props.characters" >  <!-- template içine aldım çünkü router-link içinde flex özelliği çalışmadı  -->
            <router-link :to="{name : 'CharacterPage' , params: {id : character.char_id}}" >
                <CardItem :character="character" :key="character.char_id"  />
            </router-link>
        </template>
    </div>

</template>


<style lang="scss" scoped >

    .content{
        width: 90%;
        height: 100%;
        margin: 10px auto;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: start;
        padding: 15px;
    }

</style>