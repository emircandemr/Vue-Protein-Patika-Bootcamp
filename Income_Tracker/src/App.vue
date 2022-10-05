<script setup>
import { ref, computed } from 'vue'
import Balance from "./components/Balance.vue"
import Input from "./components/Input.vue"
import Dashboard from "./components/Dashboard.vue"

</script>

<template>
  <h1>Expense Tracker</h1>
  <div class="container" >
    <Balance />
    <Dashboard />
    <Input/>
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
  }

</style>