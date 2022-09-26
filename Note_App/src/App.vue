<script setup >

  import { ref } from "vue";
  import Button from "./components/Button.vue";
  import NoteList from "./components/Notes/NoteList.vue";

  const buttonNames = {
    all: "All",
    active: "Active",
    completed: "Completed",
  };

  const text = ref("");
  const notes = ref([])

  
  

  const addNote = () => {
    const note = {
    id: new Date().getTime(),
    description: text.value,
    completed: false,
    };
    notes.value = [ ...notes.value, note];
    text.value = "";
  console.log(notes.value);
  };
  

</script>


<template>
  <div class="container" >
   
    <h2 class="title" >Notes App</h2>
    <div class="noteGroup">
      <textarea class="noteGroup__textarea" v-model="text" @keydown.enter="addNote()" placeholder="Enter your note here" />
      <div class="noteGroup__button">
        <Button v-for="buttonName in buttonNames" :buttonName="buttonName" />
      </div>
    </div>
    <NoteList :notes="notes" />
    
  </div>
</template>


<style lang="scss" scoped>
  .container{
    width: 100%;
    height: 100vh;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
  }
  
  .title{
    font-size: 2rem;
    font-weight: 600;
    margin: 20px 0px;
  }
  .noteGroup{
    width: 40%;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    &__textarea{
      width: 60%;
      height: 200px;
      margin-top: 20px;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      resize: none;
      font-size: 16px;
    }

    &__button{
      width: 40%;
      display: flex;
    }

  }
</style>