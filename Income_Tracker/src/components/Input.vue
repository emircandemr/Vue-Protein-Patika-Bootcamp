<script setup>
  import {useStore} from "vuex"
  import { ref, computed } from 'vue'
  import ModalComp from "./Modal/Modal.vue";
  
  const store = useStore()
  const incomeList = computed( () => store.state.incomeList)
  
  const destroy = (id) => {
    console.log(id)
    store.commit("deleteIncomeList",id)
  }

  const edit = (id) => {
    console.log(id)
    store.commit("changeModalState")
  }

</script>

<template >
  <div v-for="item in incomeList" class="input" :class=item.type>
    <div class="input__text">
      {{item.text}}
    </div>
    <div class="input__value">
       <span class="input__value--text">$ {{item.amount}}</span>
       <span class="material-symbols-outlined" @click="edit(item.id)">
          edit
      </span>
       <span class="material-symbols-outlined" @click="destroy(item.id)" >
          close
      </span>
    </div>
  </div>
  <Teleport to="body">
        <ModalComp :radioType="radioType" > </ModalComp>
    </Teleport>
</template>


<style lang="scss" scoped>
  .input{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #121212;
    border-radius: 15px;
    padding: 0px 15px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    margin: 10px 0;
    transition: all 0.3s ease-in-out;

    &.Income{
      border : 1px solid #799062;
    }

    &.Expense{
      border : 1px solid #FF285C;
    }

    &:hover{
      background-color: #212121;
      border:  2px solid #121212;
    }

    .input__text{
      color: #fff;
      font-size: 1.2rem;
      margin: 10px 0;
    }

    .input__value{
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 1.2rem;
      margin: 10px ;

      &--text{
        margin-right: 1rem;
      }

      .material-symbols-outlined{
        font-size: 1.5rem;
        margin: 0 5px 0 5px;
        cursor: pointer;
      }

    }

    .input__btn{
      background-color: #212121;
      border:  2px solid #121212;
      color: #fff;
      font-size: 1.2rem;
      padding: 5px 10px;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &:hover{
        background-color: #121212;
        border:  2px solid #212121;
      }
    }
  }

</style>