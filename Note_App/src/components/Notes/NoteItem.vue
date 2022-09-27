<script setup>
    import moment from "moment";
    const props = defineProps(["note"])

    const emits = defineEmits(["deleteNote", "completedNote"])

    const completeHandler = (id) => {
        emits("completedNote", id)
    }

    const deleteHandler = (id) => {
        emits("deleteNote", id)
    }

</script>

<template>
    <div class="card_back" >
        <div class="card_front" >
            <div class="card_front__header">
                <div>
                    <i class="fa-regular fa-clock"></i>
                    <span  class="card_front__date" >{{ moment(note.createdAt).format("ddd,hA")}}</span>
                </div>
                <div class="card_front__backIcon">
                    <i class="fa-solid fa-rotate-left"></i>
                </div>
            </div>
            <div class="card_front__text" :class="{'completed' : note.completed === true}" >
                {{note.description}}
            </div>
            <div class="card_front__button" >
                <button class="card_front__button--delete" @click="deleteHandler(note.id)" >Delete</button>
                <button class="card_front__button--complete" @click="completeHandler(note.id)" >Complete</button>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .card_back{
        width: 400px;
        height: 230px;
        background-color: #DCDCDC;
        position: relative;
        border-radius: 8px;
        margin: 20px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
    .card_front{
        width: 400px;
        height: 230px;
        background-color: #3A3B3C;
        border-radius: 8px;
        padding: 10px;
        position: absolute;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        top:8px;
        left: 8px;

        &__header{
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #fff;
            font-size: 0.9rem;
            margin-bottom: 10px;
        }

        &__text{
            color: #fff;
            font-size: 1.2rem;
            margin-bottom: 10px;

        }

        &__date{
            margin-left: 5px;
            }

        &__backIcon{
            font-size: 1.1rem;
            cursor: pointer;
            margin-right: 5px;
        }

        &__button{
            position: absolute;
            bottom: 15px;
            right: 15px;

            &--delete{
                background-color: #E74C3C;
                color: #fff;
                border: none;
                padding: 5px 10px;
                border-radius: 5px;
                margin-right: 10px;
                cursor: pointer;

            }

            &--complete{
                background-color: #2ECC71;
                color: #fff;
                border: none;
                padding: 5px 10px;
                border-radius: 5px;
                cursor: pointer;
            }
        }

    }
    .completed{
        text-decoration: line-through;
    }
</style>