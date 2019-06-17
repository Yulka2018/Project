import {getCostsPending,getCostsResolved, getCostsRejected} from './ActionCreators.js';
import {authHeader} from '../Main/HeaderJwt.js';

export const getCosts = () => {
      return dispatch => {
        let promise = fetch("http://localhost:8000/costs",
          {
            method: 'GET',
            headers:authHeader()
          }
        )
        dispatch(getCostsPending())
        promise.then(res =>
          {
            return res.json().then(data => {
              //console.log(data)
                if (!res.ok) {
                   return dispatch(getCostsRejected(data));
                }
                return  dispatch(getCostsResolved(data));
            })}) 
      }
    }