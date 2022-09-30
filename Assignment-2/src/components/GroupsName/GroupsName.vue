<script setup>
    const props = defineProps(["groupName"])

    const emit = defineEmits(["sendGroupName"])
    const getGroupName = () => {
        emit("sendGroupName", props.groupName)
    }

</script>

<template>
    <div class="groupCard">
        <div class="groupCard__front">
            <button  @click="getGroupName(groupName)" > Get Students </button>
        </div>
        <div class="groupCard__back">
            <h3 :class=groupName >{{groupName}}</h3>
        </div>
    </div>

</template>

<style lang="scss" scoped>

.groupCard{
    height: 160px;
    width: 190px;
    display: flex;
    margin: 30px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    
    &:hover &__back{
        animation: none;
        transform: translate(190px);

    }
    &__front{
        height: 100%;
        width: 100%;
        border-radius: 10px;
        background-color: #1e1d1dce;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        position:absolute;
        top: 0;
        font-weight: 700;
        color: #333;
        cursor: pointer;
        
    }
    
    &__back{
        height: 100%;
        width: 100%;
        background-color: #1e1d1d;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
        font-size: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        position:absolute;
        top: 0;
        transition: 0.8s ease-in-out;
        
    }
    

}

</style>