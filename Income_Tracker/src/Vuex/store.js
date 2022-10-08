import { ref } from 'vue';
import {createStore} from 'vuex'

const store = createStore({

    state : {
        balance : ref(0),
        incomeList : ref([]),
    },

    mutations : {
        addIncomeList (state, payload){
            const type = payload.radioType.value;
            state.incomeList = [...state.incomeList , payload.list]
            state.balance = (type === 'Income' ? state.balance + payload.list.amount : state.balance - payload.list.amount);
        },
        deleteIncomeList(state,payload){
          state.incomeList =  state.incomeList.filter((item) => item.id !== payload)

        }
    }



})

export default store