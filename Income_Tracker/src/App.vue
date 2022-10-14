<script setup>
import {ref} from "vue"
import Balance from "./components/Balance.vue"
import RadioBox from "./components/RadioBox.vue";
import AddModal from "./components/AddModal.vue";
import ValueList from "./components/ValueList.vue";

const radioName = ref(
        [
            { id: 1, text: 'Income' },
            { id: 2, text: 'Expense' }
        ]
    )   

</script>

<template>
  <div class="title">
    <h2>Income & Expense Tracker</h2>
  </div>
  <div class="container" >
    <Balance />
    <div class="dashboard">
        <div class="dashboard--header">
            <RadioBox v-for="name in radioName" :type="name" ></RadioBox>
        </div> 
        <div class="dashboard--content" >
          <ValueList></ValueList>
        </div>
    </div>
  </div>
    <Teleport to="body">
        <AddModal></AddModal>
    </Teleport>
</template>


<style lang="scss" scoped>

.title{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0px 0px 0px;
    h2{
        color: #ddd;
        font-size: 1.5rem;
    }
}

  .container{
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #18191A;
    border: 2px solid #212121;
    border-radius: 20px;
    padding: 20px;
    margin-top: 50px;
  }

    .dashboard{
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 10px;

      &--header{
        display: flex;
      }

      &--content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-top: 5px;
      }



    }


</style>