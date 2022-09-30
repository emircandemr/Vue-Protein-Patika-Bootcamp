<script setup>

  import GroupsName from './components/GroupsName/GroupsName.vue';
  import GroupMember from './components/GroupMember/GroupMember.vue';
  import getGroups from './assets/script/getGroups.js';
  import getGroup from './assets/script/getGroup.js';
  import {ref} from 'vue';


  const groupsName = ref([]);
  const studentList = ref([]);

  const groupName = ref('');


  const groups = getGroups();
  groupsName.value = groups;

  const getStudentList =  (groupName) => {
    studentList.value =  getGroup(groupName);
  }

  const getGroupName =  (name) => {
    groupName.value = name
    getStudentList(groupName.value)
  }
  
</script>


<template>

  <h2 class="title" >Assignment 2 </h2>

  <div class="groupNameContainer" >
    <GroupsName v-for="groupName in groupsName" :key="groupName" :groupName ="groupName" @sendGroupName = "getGroupName" />
  </div>
  <div class="groupMemberContainer">
    <template v-if="studentList.length > 0">
      <GroupMember v-for="student in studentList" :key="student.id" :student = "student" :groupName="groupName"  />
    </template>
    <div v-else>
      <h2 class="emptyList">Student List is Empty</h2>
    </div>
  </div> 

</template>


<style lang="scss" scoped>

  .title{
    font-size: 30px;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    // color: #f4e699;
    color :#e7c642;
    margin-top: 40px;
  }

  .groupNameContainer{
    width: 75%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .groupMemberContainer{
    width: 65%;
    min-height: 50vh;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 20px;
    margin: auto;
    overflow: auto;
    background-color: #1e1d1dce;
  }
  .emptyList{
    color :#e7c642;
  }

</style>