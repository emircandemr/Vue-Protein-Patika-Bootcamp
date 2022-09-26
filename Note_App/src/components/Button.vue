<script setup>

    const props = defineProps(["buttonName"])

</script>

<template>
    <button class="btn" >
        {{props.buttonName}}
    </button>
</template>


<style lang="scss" scoped >

    .btn{
        width: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        margin: 20px 10px 10px 10px;
        color: white;
        background-color: #404040;
        border: 1px solid #dcdcdc;
        border-radius: 5px;
        font-size: 16px;
        cursor: pointer;
    }

</style>