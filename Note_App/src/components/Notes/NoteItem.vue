<script setup>

    const props = defineProps(["note"])

</script>

<template>
    <div class="note_card_back" >
        <div class="note_card_front">
            {{props.note.description}}
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .note_card_back{
        width: 400px;
        height: 230px;
        background-color: #DCDCDC;
        position: relative;
        border-radius: 8px;
        margin: 20px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
    .note_card_front{
        width: 400px;
        height: 230px;
        background-color: #3A3B3C;
        border-radius: 8px;
        padding: 10px;
        position: absolute;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        top:8px;
        left: 8px;
    }
</style>