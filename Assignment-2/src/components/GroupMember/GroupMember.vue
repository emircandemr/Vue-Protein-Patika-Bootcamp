<script setup >
    const props = defineProps(["student","groupName"])
</script>

<template>

    <div class="memberContainer" :class="[props.student.type == 'assistant' ? props.groupName : '']"  >
        <p>{{student.name}}</p>
    </div>

</template>


<style lang="scss" >
    .memberContainer{
    height: 120px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    border-radius: 10px;
    background-color: #0f0e0e79;
    cursor: pointer;
    box-sizing: border-box;
 
    &:hover{
        border: 1px solid #0f0e0e79;
        transform: scale(1.1);
        transition: all 0.5s ease-in-out;
    }
}

    .Orchid{
        background-color: orchid;
        font-weight: bolder;
        color: #333;
        padding: 8px 10px;
        border-radius: 10px;
        }
    .SteelBlue{
        background-color: steelblue;
        font-weight: bolder;
        color: #333;
        padding: 8px 10px;
        border-radius: 10px;
    }
    .IndianRed{
        background-color: indianred;
        font-weight: bolder;
        color: #333;
        padding: 8px 10px;
        border-radius: 10px;
        }
    .YellowGreen{
        background-color: yellowgreen;
        font-weight: bolder;
        color: #333;
        padding: 8px 10px;
        border-radius: 10px;
    }
    .LightSeaGreen{
        background-color: lightseagreen;
        font-weight: bolder;
        color: #333;
        padding: 8px 10px;
        border-radius: 10px;
        }
        
        
    
</style>