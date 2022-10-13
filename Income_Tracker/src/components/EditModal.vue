<script setup>

import {useStore} from "vuex"
import { computed , ref ,reactive} from "vue";
import InputComp from './Input.vue';
const store = useStore()

const props = defineProps(["selected"])

const isEditModalActive = computed(() => store.state.isEditModalActive)
const list = computed(() => store.state.incomeList?.find(item => item.id === props.selected))


const editList = () => {
    console.log(list.text)
}

</script>

<template>
    <div v-if="isEditModalActive" class="modal">
        <div class="modal--layer"></div>
        <div class="modal--content">
            <h2>Edit</h2>
            {{list.text}}
            <InputComp v-model:value="list.text" ></InputComp>
            <InputComp v-model:value="list.amount" ></InputComp>
            <button @click="editList" class="modal--content__btn">Add</button>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.modal{
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99;
        transition: all 0.3s ease-in-out;


        &--layer{
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.582);
            transition: all 0.3s ease-in-out;
        }

        &--content{
            width: 50%;
            height: 50%;
            background-color: #121212;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            transition: all 0.3s ease-in-out;


            &__btn{
                width: 60%;
                margin: 1rem 0px;
                border: none;
                background-color: #212121;
                border-radius: 15px;
                padding: 5px 15px;
                font-size: 1.2rem;
                color: #dcdcdc;
                outline: none;
                cursor: pointer;
            }

        }

    }
</style>