import { ref } from 'vue';
import {createStore} from 'vuex'

const store = createStore({

    state : {
        balance : 0,
        incomeList : [],
    },

    mutations : {
        addIncomeList (state, payload){
            state.incomeList = [...state.incomeList , payload.list]
            const income = state.incomeList.filter((item) => item.type === 'Income').map((item) => item.amount);
            const expense = state.incomeList.filter((item) => item.type === 'Expense').map((item) => item.amount);
            const totalIncome = income.reduce((acc, item) => acc + item, 0);
            const totalExpense = expense.reduce((acc, item) => acc + item, 0);
            state.balance = totalIncome - totalExpense;
        },
        deleteIncomeList(state,payload){
            const selected = state.incomeList.filter((item) => item.id === payload);
            console.log(selected);
            if(selected[0].type == 'Income'){
                console.log('income');
                state.balance = state.balance - selected[0].amount}
            else{
                console.log('expense');
                state.balance = state.balance + selected[0].amount}
            state.incomeList =  state.incomeList.filter((item) => item.id !== payload)

        }
    },
})

export default store