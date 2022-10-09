<script setup>
    const props = defineProps(["image","show"])
    const emit = defineEmits(["update:show"])

    const clickHandler = () => {
        emit("update:show" , false)
    }

</script>

<template>
    <div v-if="show" class="modal">
        <div class="modal__layer" @click="clickHandler">
        </div>
        <div class="modal__content">
            <img class="img" :src="props.image.url + '.gif'"  >
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .modal{
        width: 100%;
        height: 100vh;
        position: fixed;
        z-index: 99;
        left: 0;
        right: 0;

        &__layer{
            width: 100%;
            height: 100vh;
            background-color: rgba(0, 0, 0, 0.176);
        }

        &__content{
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            left: 50%;
            top: 50%;
            padding: 20px;
            background-color: #18191A;
            border: 2px solid #212121;
            border-radius: 24px;
            transform: translate(-50%,-50%);
            min-width: 800px;
            min-height: 600px;
            color: white;

            .img{
                width:100%;
                max-height: 400px;
                object-fit: cover;
            }

        }
    }
</style>