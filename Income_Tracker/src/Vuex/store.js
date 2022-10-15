import {createStore} from 'vuex'
import { getValueList } from '../service/local'

const store = createStore({

    state : {
        balance : 0,
        type : "",
        isModalActive : false,
        isEditModalActive : false,
        valueList : getValueList() || [],  // get data from local storage
    },
    mutations : {
        changeType : (state, payload) => {
            state.type = payload
        },
        changeModalState (state){
            state.isModalActive = !state.isModalActive;
        },
        changeEditModalState (state){
            state.isEditModalActive = !state.isEditModalActive;
        },
        addValueList (state, payload){
            state.valueList.push(payload.list)
            const incomeList = state.valueList.filter((item) => item.type === 'Income')
            const expenseList = state.valueList.filter((item) => item.type === 'Expense')
            const incomeAmount = incomeList.map((item) => item.amount)
            const expenseAmount = expenseList.map((item) => item.amount)
            const totalIncome = incomeAmount.reduce((acc, item) => acc + item, 0);
            const totalExpense = expenseAmount.reduce((acc, item) => acc + item, 0);
            state.balance = totalIncome - totalExpense;
        },
        deleteValueList(state,payload){
            const selected = state.valueList.filter((item) => item.id === payload);
            if(selected[0].type == 'Income'){
                state.balance = state.balance - selected[0].amount}
            else{
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