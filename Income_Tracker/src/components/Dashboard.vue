<script setup>
    import { ref } from 'vue'
    import RadioBox from './RadioBox.vue';

    const types = ref(
        [
            { id: 1, text: 'Income' },
            { id: 2, text: 'Expense' },
        ]
    )

    const log = (e) => {
        console.log(e)
    }

</script>

<template>
  <div class="dashboard">
    <div class="dashboard__type">
        <RadioBox v-for="type in types" :type="type" :key="type.id"  @onSelect="log" />
    </div>
    <div class="dashboard__input">
        <input class="dashboard__input__text" type="text" placeholder="Add Description" />
        <input class="dashboard__input__value" type="text" placeholder="Add Value" />

    </div>
  </div>

</template>


<style lang="scss" scoped>
.dashboard{
    width: 70%;
    display: flex;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;

    &__type{
        display: flex;
    }

    &__input{
        display: flex;
        width: 100%;

        &__text{
            width: 70%;
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



    }

}
    
</style>