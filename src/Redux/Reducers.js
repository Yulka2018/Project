import thunk from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {getCategories} from './GetCategories.js';
import {getCosts} from './GetCosts.js';
import {getIncome} from './GetIncome.js';

let sendDataReducer = (state,action) => {
    if (state === undefined){
        return {sendStatus: ''}
    }
    if (action.type === "SEND_STATUS"){
        console.log(action.sendStatus)
        return {sendStatus: action.sendStatus}
    }
    return state
}

let getCategoriesReduser = (state, action) => {
  if(state === undefined){
    return { categories: []}
  }
  if (action.type === "GET_CATEGORIES"){
    let allCategories = action.payload
    // console.log(allCategories)
    // console.log(action.status)
    if(action.status === "PENDING"){
      allCategories = state.categories
    }
    return {...state, categories: allCategories}
  }
  return state
}

let getIncomeReduser = (state, action) => {
  if(state === undefined){
    return { income: []}
  }
  if (action.type === "GET_INCOME"){
    let income = action.payload
    // console.log(allCategories)
    // console.log(action.status)
    if(action.status === "PENDING"){
      income = state.income
    }
    return {...state, income: income}
  }
  return state
}

let getCostsReduser = (state, action) => {
  if(state === undefined){
    return { costs: []}
  }
  if (action.type === "GET_COSTS"){
    let costs = action.payload
    // console.log(allCategories)
    // console.log(action.status)
    if(action.status === "PENDING"){
      costs = state.costs
    }
    return {...state, costs: costs}
  }
  return state
}

const reducers = combineReducers({
    sendData: sendDataReducer,
    getCategories: getCategoriesReduser,
    getIncome: getIncomeReduser,
    getCosts: getCostsReduser,
})

export const store = createStore(reducers, applyMiddleware(thunk))

store.subscribe(() => console.log(store.getState()))

setInterval(
  () => store.dispatch(getCategories()),
  8000
)

setInterval(
  () => store.dispatch(getCosts()),
  8000
)

setInterval(
  () => store.dispatch(getIncome()),
  8000
)

// let income = state => ({data: state.getIncome.income.incomeSum})
// console.log(income)
// function balance (income, costs){
//   let incomeSum = income.reduce(function(prevVal, currentVal){
//       return prevVal+currentVal
//   })
//   console.log(incomeSum)
// }
