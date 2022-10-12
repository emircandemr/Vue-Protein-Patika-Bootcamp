<script setup>
    import { ref ,computed} from 'vue'
    import {useStore} from "vuex"
    const store = useStore()
    
    const props = defineProps(["deneme"])

    const text = ref("")
    const amount = ref("")

    const modalState = computed(() => store.state.isModalActive)
    const type = computed(() => store.state.type)

    const addList = () => {
        const list = {
            id: new Date().getTime(),
            text: text.value,
            amount: +amount.value,
            type : type.value
        };
        if(text.value === "" || amount.value === "") return
        store.commit("addIncomeList", {list, radioType : props.radioType} )
        store.commit("changeModalState")
        amount.value = ""
        text.value = ""
        }

</script>

<template>
    <div v-if="modalState" class="modal">
        <div class="modal--layer"></div>
        <div class="modal--content">
            <h2>{{type}}</h2>
            <input v-model="text" class="modal--content__text" type="text" placeholder="Add Description" />
            <input v-model="amount" class="modal--content__value" type="text" placeholder="Add Value" />
            <button @click="addList" class="modal--content__btn">Add</button>
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

            &__text{
                width: 60%;
                border: none;
                background-color: #121212;
                border: 2px solid #212121;
                border-radius: 15px;
                padding: 5px 15px;
                font-size: 1.2rem;
                color: #dcdcdc;
                outline: none;
                margin: 2rem 0px;
            }

            &__value{
                width: 60%;
                border: none;
                background-color: #121212;
                border: 2px solid #212121;
                border-radius: 15px;
                padding: 5px 15px;
                font-size: 1.2rem;
                color: #dcdcdc;
                outline: none;
            }

            &__btn{
                width: 60%;
                margin: 2rem 0px;
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