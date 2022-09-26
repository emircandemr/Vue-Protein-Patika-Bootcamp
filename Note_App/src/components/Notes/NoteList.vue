<script setup>
import NoteItem from './NoteItem.vue';

    const props = defineProps(["notes"])

</script>


<template>
    <div class="notelist" >
        <NoteItem v-for="note in notes" :note="note" />
    </div>

</template>


<style lang="scss" scoped >

    .notelist{
        width: 90%;
        margin-top: 20px;
        padding: 20px;
        display: flex;
        flex-wrap:wrap;
        justify-content: center;
        align-items: center;
    }

</style>