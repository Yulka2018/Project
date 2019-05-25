export function sendDataPending(){
    return {type: 'SEND_STATUS', sendStatus: 'PENDING'}
}

export function sendDataResolved(){
  return {type: 'SEND_STATUS', sendStatus: 'RESOLVED'}
}

export function sendDataRejected(){
  return {type: 'SEND_STATUS', sendStatus: 'REJECTED'}
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