import {createStore} from 'vuex'
import { getValueList } from '../service/local'

const store = createStore({

    state : {
        balance : 0, 
        type : "",
        isModalActive : false,
        isEditModalActive : false,
        valueList : getValueList() || [],
    },

    mutations : {
        changeType : (state, payload) => {
            state.type = payload
        },
        addValueList (state, payload){
            state.valueList = [...state.valueList , payload.list]
            const income = state.valueList.filter((item) => item.type === 'Income').map((item) => item.amount);
            const expense = state.valueList.filter((item) => item.type === 'Expense').map((item) => item.amount);
            const totalIncome = income.reduce((acc, item) => acc + item, 0);
            const totalExpense = expense.reduce((acc, item) => acc + item, 0);
            state.balance = totalIncome - totalExpense;
        },
        changeModalState (state){
            state.isModalActive = !state.isModalActive;
        },
        changeEditModalState (state){
            state.isEditModalActive = !state.isEditModalActive;
        },
        deleteValueList(state,payload){
            const selected = state.valueList.filter((item) => item.id === payload);
            console.log(selected);
            if(selected[0].type == 'Income'){
                console.log('income');
                state.balance = state.balance - selected[0].amount}
            else{
                console.log('expense');
                state.balance = state.balance + selected[0].amount}
            state.valueList =  state.valueList.filter((item) => item.id !== payload)
        },
        editValueList(state,payload){
            const selected = state.valueList.filter((item) => item.id === payload.id);
            if(selected[0].type == 'Income'){
                state.balance = state.balance - selected[0].amount + payload.amount}
            else{
                state.balance = state.balance + selected[0].amount - payload.amount}
            state.valueList =  state.valueList.filter((item) => item.id !== payload.id)
            state.valueList = [...state.valueList , payload]
        }
    },
})

export default store