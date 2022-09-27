<script setup>
import NoteItem from './NoteItem.vue';

    const props = defineProps(["notes"])

    const emits = defineEmits(["deleteNote", "completedNote"])

    const completedHandler = (id) => {
        emits("completedNote" , id)
    }

    const deleteHandler = (id) => {
        emits("deleteNote" , id)
    }

</script>


<template>
    <div class="notelist" >
        <NoteItem v-for="note in notes" :note="note" @completedNote ="completedHandler" @deleteNote="deleteHandler"  />
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