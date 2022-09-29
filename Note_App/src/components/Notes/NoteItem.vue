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
    <div class="card-back" :class="{'__completed' : note.completed}" >
        <div class="card-front" >
            <div class="card-front__header">
                <div>
                    <i class="fa-regular fa-clock"></i>
                    <span  class="card-front__date" >{{ moment(note.createdAt).format("ddd,hA")}}</span>
                </div>
                <div v-if="note.completed" class="card-front__backIcon">
                    <i @click="completeHandler(note.id)" class="fa-solid fa-rotate-left"></i>
                </div>
            </div>
            <div class="card-front__text" :class="{'completed' : note.completed}" >
                {{note.description}}
            </div>
            <div class="card-front__button" >
                <button v-if="note.completed" class="card-front__button--delete" @click="deleteHandler(note.id)"> Delete </button>
                <button v-else class="card-front__button--complete" @click="completeHandler(note.id)"> Complete </button>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .card-back{
        min-width: 380px;
        min-height: 210px;
        background-color: #ff9900;
        border: 2px solid #212121;
        border-radius: 8px;
        position: relative;
        border-radius: 8px;
        margin: 20px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

        &.__completed{
            background-color: #c32210;
        }

    }
    .card-front{
        max-width: 380px;
        min-height: 210px;
        overflow-y: auto;
        background-color: #18191A;
        border: 2px solid #212121;
        border-radius: 8px;
        padding: 10px;
        position: relative  ;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        top:5px;
        left:5px;

        &__header{
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #aaaaaa;
            font-size: 0.9rem;
            margin-bottom: 10px;
        }

        &__text{
            color: #cdcdcd;
            font-size: 1rem;
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
                background-color: #c32210;
                color: #fff;
                border: none;
                padding: 8px 10px;
                border-radius: 5px;
                font-size: 10px;
                cursor: pointer;

            }

            &--complete{
                background-color: #ff9900;
                color: #fff;
                border: none;
                padding: 8px 10px;
                border-radius: 5px;
                font-size: 10px;
                cursor: pointer;
            }
        }

    }
    .completed{
        text-decoration: line-through;
        font-style: italic;
        color: #aaaaaa;
    }
</style>