<script setup>
import Balance from "./components/Balance.vue"
import Input from "./components/InputList.vue"
import Dashboard from "./components/Dashboard.vue"

</script>

<template>
  <h1>Income & Expense Tracker</h1>
  <div class="container" >
    <Balance />
    <div class="container--content">
      <Dashboard />
      <Input/>
    </div>
  </div >
</template>


<style lang="scss" scoped>


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

    &--content{
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-top: 20px;
    }

  }

</style>