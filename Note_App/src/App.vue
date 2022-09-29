<script setup >

  import { ref } from "vue";
  import Button from "./components/Button.vue";
  import NoteList from "./components/Notes/NoteList.vue";
  import {useToast} from 'vue-toast-notification';
  import { computed } from "@vue/reactivity";

  const $toast = useToast();

  const buttonNames = ref([
    { name: "All", active: true , id:1 },
    { name: "Active", active: false , id:2},
    { name: "Completed", active: false , id:3},
  ]);

  const text = ref("");
  const notes = ref([])
  const activeButton = ref(buttonNames.name = "All"); // default olarak All butonu aktif olacak

  const toaster = (message) => {
    return $toast.success(message, {
        position: 'top-right',
        duration: 2000,
      });
  }
    
  const addNote = () => {
    const note = {
      id: new Date().getTime(),
      createdAt : new Date().getTime(),
      description: text.value,
      completed: false,
    };
    notes.value = [ ...notes.value, note];
    text.value = "";
    toaster("Note Added");
  };

  const completedNote = (id) => {
    const findNote = notes.value.find((note) => note.id === id);
    findNote.completed = !findNote.completed;
  };

  const deleteNote = (id) => {
    notes.value = notes.value.filter((note) =>note.id !== id);
    toaster("Note Deleted");
  };

  const filterNotes = (name,id) => { // Button componentinden emits ile buttonName ve buttonID geliyor.
    activeButton.value = name;  
    buttonNames.value.map((button) => {
      return button.id === id ? button.active = true : button.active = false;
    });
  }

  const filteredNotes = computed(() => {  
    if (activeButton.value === (buttonNames.name = "Active")) {
      return  notes.value.filter((note) => !note.completed);
    } 
    else if (activeButton.value === (buttonNames.name = "Completed")) {
      return notes.value.filter((note) => note.completed);
    } 
    else {
      return notes.value;
    }
  });

</script>


<template>
  <div class="container" >
    <h2 class="title"> Notes App </h2>
    <div class="note">
      <textarea class="note__textarea" v-model="text" @keydown.enter="addNote()" placeholder="Enter your note here" />
      <div class="note__button">
        <Button v-for="buttonName in buttonNames" :key="buttonName.id" :buttonName="buttonName" @setButtonName="filterNotes" />
      </div>
    </div>
    <template v-if="notes.length> 0" >
      <NoteList :notes="filteredNotes" @completedNote="completedNote" @deleteNote="deleteNote" />
    </template>
    <template v-else >
      <p class="empty"> Note List is Empty </p>
    </template>
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
    width: 40%;
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
    margin-top: 15px;
    color: #ff9900;
  }
  .note{
    width: 40%;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &__textarea{
      width: 60%;
      height: 200px;
      margin-top: 10px;
      padding: 10px;
      border: 2px solid #212121;
      border-radius: 5px;
      resize: none;
      font-size: 16px;
      background-color: #18191A;
      color: #dcdcdc;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

      &:focus{
        outline: none;
      }
    }

    &__button{
      width: 60%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

  }
  .empty{
    width: 40%;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 15px;
    color: #ff9900;
  }


  @media screen and (max-width: 768px) {
    .title{
      width: 80%;
    }
    .note{
      width: 80%;
      &__textarea{
        width: 100%;
      }
      &__button{
        width: 100%;
      }
    }
    .empty{
      width: 80%;
    }
  }

</style>