<script setup>
    import { ref } from 'vue'
    import RadioBox from './RadioBox.vue';
    import ModalComp from './Modal/Modal.vue';
    
    import {useStore} from "vuex"
    const store = useStore()
    
    const radioName = ref(
        [
            { id: 1, text: 'Income' },
            { id: 2, text: 'Expense' }
        ]
    )

    const radioType = ref("")


    const selectType = (type) => {
        radioType.value = type
        store.commit("changeModalState")
    }


</script>

<template>
  <div class="dashboard">
    <div class="dashboard__type">
        <RadioBox v-for="name in radioName" :type="name" @onSelect="selectType"></RadioBox>
    </div> 
    <Teleport to="body">
        <ModalComp :radioType="radioType" />
    </Teleport>
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