<script setup>
    import { ref,reactive } from 'vue'
    import RadioBox from './RadioBox.vue';
    import {useStore} from "vuex"
    import { computed } from "vue";

    const store = useStore()
    
    const radioName = ref(
        [
            { id: 1, text: 'Income' },
            { id: 2, text: 'Expense' }
        ]
    )

    const radioType = ref("")
    const text = ref("")
    const amount = ref("")

    const selectType = (type) => {
        radioType.value = type
    }

    const addList = () => {
        const list = {
            id: Math.floor(Math.random() * 100000000),
            text: text.value,
            amount: +amount.value,
            type: radioType.value
        };
        text.value = ""
        amount.value = ""
        store.commit("addIncomeList", {list, radioType} )
        }

</script>

<template>
  <div class="dashboard">
    <div class="dashboard__type">
        <RadioBox v-for="name in radioName" :type="name" @onSelect="selectType"></RadioBox>
    </div> 
    <div class="dashboard__input">
        <input v-model="text" class="dashboard__input__text" type="text" placeholder="Add Description" />
        <input v-model="amount" class="dashboard__input__value" type="text" placeholder="Add Value" />
        <button @click="addList" class="dashboard__input__btn">Add</button>
    </div>
  </div>

</template>


<style lang="scss" scoped>
.dashboard{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;

    &__type{
        display: flex;
    }

    &__input{
        display: flex;
        justify-content: center;
        align-self: center;
        width: 100%;

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
            margin-right: 10px;
        }

        &__value{
            width: 30%;
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
            width: 10%;
            margin-left: 5px;
            border: none;
            background-color: #121212;
            border: 2px solid #212121;
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