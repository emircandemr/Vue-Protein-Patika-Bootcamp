<script setup>
    const props = defineProps(["buttonName"])

    const emits = defineEmits(["setButtonName"])

    const nameHandler = (name,id) => {
        emits("setButtonName" , name,id)

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
        transition: all 0.3s ease-in-out;
    }

    .active{
        background-color: #ff9900;
        color: #18191A;
    }

</style>