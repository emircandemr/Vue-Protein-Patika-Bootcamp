
<script setup>
    
    import axios from "axios"
    import { onMounted, ref } from "vue";
    import { useRoute } from "vue-router";

    const route = useRoute()
    const character = ref([])

    onMounted(() => {
        const id = route.params.id;
        axios.get(`https://www.breakingbadapi.com/api/characters/${id}`)
        .then(res => character.value = res.data[0])
        });
 
</script>

<template>
    <div class="character_details">
        <div class="character_details__img" >
            <img :src="character.img" />
        </div>
        <div class="character_details__info" >
            <div class="character_details__title">
                <span class="character_details__status" :class= "character.status" ></span>
                <h2> {{character.name}} </h2>
            </div>
            <div class="character_details__content">
                <span>Nickname- {{character.nickname}} </span>
                <span>Birthday - {{character.birthday}} </span>
                <span class="description_title" > Occupation </span>
                <li v-for="occupation in character.occupation">
                    {{occupation}}
                </li>
                <span class="description_title" > Portrayed</span>
                <span>
                    {{character.portrayed }}
                </span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

    .character_details{
        width: 40%;
        height: 44%;
        display: flex;
        position: relative;
        top: 28%;
        left: 30%;
        border-radius: 15px;
        background-color: #1b121b;

        &__img{
            width: 40%;
            height: 100%;
            border-radius: 10px;
            img{
                width: 100%;
                height: 100%;
                border-top-left-radius: 15px;
                border-bottom-left-radius: 15px
            }
        }
    
        &__info{
            width: 60%;
            height: 100%;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items: center;
            h2{
                font-family: 'Caveat Brush', cursive;
                font-size: 30px;
            }
        }

        &__title{
            width: 100%;
            height: 20%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            border-bottom:  1px solid #DCDCDC;
        }

        &__status{
            width: 18px;
            height: 18px;
            border-radius: 50%;
            margin-right: 10px;
        }

        &__content{
            width:100%;
            height: 80%;
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items: flex-start;
            padding: 10px 30px;

            span{
                font-family: 'Caveat Brush', cursive;
                font-size: 24px;
                margin: 8px 0px;
            }

        }

    }
    
    .description_title{
        font-size: 30px;
        color: gray;
    }

    .Alive{
        background-color: #00ff00;
    }
    .Deceased{
        background-color: #ff0000;
    }
    .Presumed.dead{
        background-color: #0000ff;
    }

    @media only screen and (max-width: 1000px){
        .character_details{
            width: 80%;
            height: 60%;
            position: relative;
            top: 20%;
            left: 10%;
        }
    }

    @media only screen and (max-width: 600px){
        .character_details{
            width: 90%;
            height: 50%;
            position: relative;
            top: 25%;
            left: 5%;
        }
    }

</style>