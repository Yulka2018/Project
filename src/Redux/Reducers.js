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
    let income = action.payload ? action.payload : state.income
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
    return { costs: [], message: ''}
  }
  if (action.type === "GET_COSTS"){
    let costs = action.payload ? action.payload : state.costs
    let msg
    // console.log(allCategories)
    // console.log(action.status)
    if(action.status === "PENDING"){
      costs = state.costs
    }
    if(action.status === 'REJECTED'){
      msg = action.error
    }
    return {...state, costs: costs, message: msg}
  }
  return state
}

let userReducer = (state, action) => {
  if (state === undefined){
    return { signInMessage: '', signIn: false, logInMessage: '', logIn: false}
  }
   let signedIn
  if(action.type === "SIGNIN_USER"){
    let signInMsg = action.data || action.error
    if(action.status ==="PENDING"){
      signInMsg = state.signInMessage
    }
    if(action.status === 'RESOLVED'){
      signedIn =  true
    }
    if(action.status === 'REJECTED'){
      signedIn =  false
    }
    
    return { ...state, signInMessage: signInMsg, signIn: signedIn}
  }
  
  if(action.type === "LOGIN_USER"){
    let logInMsg = action.data || action.error
    let loggedIn
    if( action.status === "PENDING"){
      logInMsg = state.logInMessage
    }
    if(action.status === 'RESOLVED' ) {
      loggedIn =  true
    }
    if(action.status === 'REJECTED'){
      loggedIn =  false
    }
    console.log(logInMsg)
    return { ...state, logInMessage: logInMsg, logIn: loggedIn }
  }
  return state
}


const reducers = combineReducers({
    sendData: sendDataReducer,
    getCategories: getCategoriesReduser,
    getIncome: getIncomeReduser,
    getCosts: getCostsReduser,
    users: userReducer,
})

export const store = createStore(reducers, applyMiddleware(thunk))

store.subscribe(() => console.log(store.getState()))

setInterval(
  () => store.dispatch(getCategories()),
  2000
)

setInterval(
  () => store.dispatch(getCosts()),
  9000
)

setInterval(
  () => store.dispatch(getIncome()),
  9000
)
