<script setup>
    import { ref } from 'vue';

    const props = defineProps(["buttonName","activeButton"])

    const emits = defineEmits(["setButtonName"])

    const nameHandler = (buttonName,buttonID) => {
        emits("setButtonName" , buttonName,buttonID)

    }

</script>

<template>
    <button class="btn" @click="nameHandler(props.buttonName.name, props.buttonName.id)" :class="{'active' : props.buttonName.active}" >
        {{props.buttonName.name}}
    </button>
</template>


<style lang="scss" scoped >
    .btn{
        width: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 6px 10px;
        margin: 20px 10px 10px 10px;
        color: gray;
        background-color: #18191A;
        border: 2px solid #212121;
        border-radius: 5px;
        font-size: 14px;
        cursor: pointer;

        // &:hover{
        //     background-color: #212121;
        //     color: #cdcdcd;
        // }

    }

    .active{
        background-color: #ff9900;
        color: #18191A;
    }

</style>