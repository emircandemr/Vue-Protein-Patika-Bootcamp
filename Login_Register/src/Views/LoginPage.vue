<script setup>
    import Input from '../components/Input.vue';
    import InputPassword from '../components/InputPassword.vue';
    import { ref } from 'vue';
    import axios from "axios"
    import { useRouter } from 'vue-router'

    const route = useRouter()

    const inputValues = ref(
        {
            username : "",
            password : "",
        }
    );
    
    const loginHandler = async () => {
        const {username,password} = inputValues.value;
        await axios.get(`http://localhost:3000/users?username=${username}&password=${password}`)
        .then( res => {
            if(res.data.length > 0){
                route.push({name:"Home"})
            }
            else{  
                alert("Kullanıcı adı veya şifre hatalı")
            }
        })
    }


</script>

<template>
    <div class="login" >
        <h1 class="login__title" >Login</h1>
        <form class="login-content" @submit.prevent="loginHandler">
            <Input v-model:name="inputValues.username" label="Username" />
            <InputPassword v-model:name="inputValues.password" label="Password" />
            <button class="login-content__button">Login</button>
            <div class="login-register" >
                <p class="login-register__text">Don't have an account?</p>
                <router-link to="/register" class="login-register__link">Register</router-link>
            </div>
        </form>
    </div>
</template>

<style lang="scss" scoped>

    .login {
        width: 600px;
        height: 480px;
        background-color: #18191A;
        border : 2px solid #212121;
        border-radius: 20px;
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