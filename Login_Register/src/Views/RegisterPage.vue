<script setup>
    import Input from '../components/Input.vue';
    import InputEmail from '../components/InputEmail.vue';
    import InputPassword from '../components/InputPassword.vue';
    import { ref } from 'vue';
    import axios from "axios"
    import { computed } from '@vue/reactivity';
    import { useRouter } from 'vue-router'

    const route = useRouter()

    const inputValues = ref(
        {
            username : "",
            email : "",
            password : "",
            confirmPassword : ""
        }
    );
    
    const setUser = async ()  => {
        const {username,email,password,confirmPassword} = inputValues.value;
        await axios.post("http://localhost:3000/users",{
            username,
            email,
            password,
            confirmPassword
        })}
    
    const formValid = computed(() => {
      return  Object.values(inputValues.value).every( (value) => value !== "")
    })

    const passwordMatch = computed(() => {
        return inputValues.value.password === inputValues.value.confirmPassword
    })

    const isPasswordMatch = ref(passwordMatch)
    
    const submitHandler =async () => {
        if(formValid.value && passwordMatch.value){
            await setUser()
        }
        Object.keys(inputValues.value).forEach( key => inputValues.value[key] = "" );
        route.push({name:"Login"})
    }
    

</script>

<template>
    <div class="register" >
        <h1 class="register__title" >Register</h1>
        <form @submit.prevent="submitHandler" class="register-content">
            <Input v-model:name="inputValues.username" label="Username"  />
            <InputEmail v-model:name="inputValues.email" label="Email" />
            <InputPassword v-model:name="inputValues.password"  :isPasswordMatch="isPasswordMatch"  label="Password" />
            <InputPassword v-model:name="inputValues.confirmPassword" :isPasswordMatch="isPasswordMatch"  label="Confirm Password" />
            <button :disabled="!formValid || !passwordMatch " class="register-content__button" >Create Account</button>
            <div class="register-register" >
                <p class="register-register__text">Already have an account ?</p>
                <router-link to="/" class="register-register__link">Sign In</router-link>
            </div>
        </form>
    </div>
</template>

<style lang="scss" scoped>

    .register {
        width: 600px;
        height: 700px;
        background-color: #18191A;
        border : 2px solid #212121;
        border-radius: 20px;
        padding: 10px 0px;
        box-shadow: #18191A , 0px 50px 100px -20px, #18191A 0px 30px 60px -30px, #18191A 0px -2px 6px 0px inset;

        &__title {
            color: #EEBB4D;
            font-size: 2rem;
            text-align: center;
            margin-top: 2rem;
        }

        &-content{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: start;
            height: 80%;
            width: 100%;
            margin-top: 20px;
            
                &__button {
                    width: 65%;
                    padding: 10px;
                    border: 1px solid #212121;
                    border-radius: 10px;
                    background-color: #EEBB4D;
                    color: #fff;
                    font-size: 1rem;
                    box-shadow: #18191A , 0px 50px 100px -20px, #18191A 0px 30px 60px -30px, #18191A 0px -2px 6px 0px inset;
                    cursor: pointer;
                    transition: all 0.3s ease-in-out;


                    
                                &:hover {
                                    background-color: #212121;
                                    color: #EEBB4D;
                                    border: 1px solid #EEBB4D;
                                }
        
                                &:disabled {
                                    background-color: #18191A;
                                    color: #EEBB4D;
                                    border: 1px solid #EEBB4D;
                                    cursor: not-allowed;
                                }

                }
            }

        &-register {
            width: 65%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 20px;

            &__text {
                color: #dcdcdc;
                font-size: 0.9rem;
            }

            &__link {
                color: #EEBB4D;
                font-size: 1rem;
                text-decoration: none;
                margin-left: 10px;
            }

        }    

        }



</style>