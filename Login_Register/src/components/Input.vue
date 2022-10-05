
<script setup>
    import { computed } from '@vue/reactivity';

    const props = defineProps(["name","label"])
    const emits = defineEmits(["update:name",])

    const nameHandler = (event) => {
        emits("update:name",event.target.value)
    }

    const nameValid = computed(() => {
        return props.name.length > 1
    })

   
</script>


<template>
    <div class="textInput" >
        {{nameValid}}
        <label for="text" class="textInput__label">{{props.label}}</label>
        <input type="text" id="text" autocomplete="off" :value="props.name" @input="nameHandler"  class="textInput__input" :class="{'notValid' : !nameValid}"  :placeholder="props.label" />
    </div>

</template>

<style lang="scss" scoped>

    .textInput {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        width: 65%;
        margin-bottom: 20px;
        padding: 10px 0px;

        &__label {
            color: #EEBB4D;
            font-size: 1.2rem;
            margin-bottom: 1rem;
        }

        &__input {
            width: 100%;
            border: 2px solid #212121;
            border-radius: 10px;
            padding: 0.4rem 1rem;
            font-size: 1.2rem;
            background-color: #121212;
            color: #dcdcdc;
            box-shadow: #18191A , 0px 50px 100px -20px, #18191A 0px 30px 60px -30px, #18191A 0px -2px 6px 0px inset;

            &:focus {
                outline: none;
            }

            &::placeholder {
                color: gray;
                font-size: 15px;
            }

        }
    }

    .notValid{
        border: 1px solid red;
    }

</style>