<script setup>
  import { ref } from "vue";
  import {getGiphy} from "./service/getGiphy"
  import ModalComp from "./components/ModalComp.vue";

  const giphy = ref({})
  const searchName = ref("")
  const isOpenModal = ref(false)
  const recentSearches = ref([])

  const keyupHandler = async (e) => {
    const {value} = e.target
    const result = await getGiphy(value)
    giphy.value = result.data[0].images["original"]
    isOpenModal.value = true
    searchName.value = ""
    recentSearches.value.push(value)
    recentSearches.value = [... new Set(recentSearches.value)]
  }

  const clickHandler = async (name) => {
    const result = await getGiphy(name)
    giphy.value = result.data[0].images["original"]
    isOpenModal.value = true
  }

</script>

<template>
  <div class="content">
      <img class="logo" src="https://media4.giphy.com/media/Opyx1Gy3R6Y6pJ9imU/giphy.gif?cid=ecf05e477addab261e84b1ff9c9e7ce4b7f1e5dd52bdd815&rid=giphy.gif&ct=s" alt="">
    <h1>Search Giphy</h1>
    <input v-model="searchName" @keyup.enter="keyupHandler" class="input" placeholder="Search" />
    <Teleport to="body">
      <ModalComp :image="giphy" v-model:show="isOpenModal" /> 
    </Teleport>
    <div class="recent" >
      <h2>Recent Searches</h2>
      <ul class="recent__list" >
        <li class="recent__item" v-for="recent in recentSearches " @click="clickHandler(recent)"   >
          {{recent}}
        </li>
      </ul>
    </div>
  </div>

</template>

<style lang="scss" scoped>
  .content{
    width : 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .input{
      min-width : 50%;
      padding: 10px 15px;
      border: 2px;
      background-color: #18191A;
      border: 2px solid #212121;
      color: #ddd;
      border-radius: 15px;
      outline:none;

      &:focus{
        outline: none;
      }
    }
  }
  .recent{
    width: 50%;
    &__list{
      width: 100%;
      display: flex;
      justify-content: flex-start;
      gap: 8px
    }
    &__item{
      width:auto;
      border: 1px dashed white;
      padding: 0px 5px;
      border-radius: 8px;
      cursor: pointer;

      &:hover{
        background-color: #ddd;
        color: #18191A;
        border: 1px dashed #18191A;

      }

    }
  }

  .logo{
    width: 180px;
  }
</style>
