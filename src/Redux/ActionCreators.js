export function sendDataPending(){
    return {type: 'SEND_STATUS', sendStatus: 'PENDING',data: null, error: null}
}

export function sendDataResolved(payload){
  return {type: 'SEND_STATUS', sendStatus: 'RESOLVED',  payload, error: null}
}

export function sendDataRejected( error){
  return {type: 'SEND_STATUS', sendStatus: 'REJECTED',data: null, error:  error}
}

export function getCategoriesPending(){
  return {type: 'GET_CATEGORIES', status: 'PENDING', data: null, error: null}
}

export function  getCategoriesResolved(payload){
  return {type: 'GET_CATEGORIES', status: 'RESOLVED', payload, error: null}
}

export function  getCategoriesRejected(error){
  return {type: 'GET_CATEGORIES', status: 'REJECTED', data: null, error}
}

export function getIncomePending(){
  return {type: 'GET_INCOME', status: 'PENDING', data: null, error: null}
}

export function  getIncomeResolved(payload){
  return {type: 'GET_INCOME', status: 'RESOLVED', payload, error: null}
}

export function  getIncomeRejected(error){
  return {type: 'GET_INCOME', status: 'REJECTED', data: null, error}
}

export function getCostsPending(){
  return {type: 'GET_COSTS', status: 'PENDING', data: null, error: null}
}

export function  getCostsResolved(payload){
  return {type: 'GET_COSTS', status: 'RESOLVED', payload, error: null}
}

export function  getCostsRejected(error){
  return {type: 'GET_COSTS', status: 'REJECTED', data: null, error}
}

export function actionPendingUser(){
  return { type: 'SIGNIN_USER', status: 'PENDING', data: null, error: null }
}
export function actionResolvedUser(data){
  return { type: 'SIGNIN_USER', status: 'RESOLVED', data, error: null }
}

export function actionRejectedUser(error){
  return { type: 'SIGNIN_USER', status: 'REJECTED', data: null, error }
}

export function actionPendingUserLogin(){
  return { type: 'LOGIN_USER', status: 'PENDING', data: null, error: null }
}

export function actionResolvedUserLogin(data){
  return { type: 'LOGIN_USER', status: 'RESOLVED', data, error: null }
}

export function actionRejectedUserLogin(error){
  return { type: 'LOGIN_USER', status: 'REJECTED', data:null, error }
}