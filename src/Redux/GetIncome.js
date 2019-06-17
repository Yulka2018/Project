import {getIncomePending, getIncomeResolved, getIncomeRejected} from './ActionCreators.js';
import {authHeader} from '../Main/HeaderJwt.js';

export const getIncome = () => {
      return dispatch => {
        let promise = fetch("http://localhost:8000/income",
          {
            method: 'GET',
            headers:authHeader()
          }
        )
        dispatch(getIncomePending())
        promise.then(res =>
          {
            return res.json().then(data => {
              //console.log(data)
                if (!res.ok) {
                   return dispatch(getIncomeRejected(data));
                }
                return  dispatch(getIncomeResolved(data));
            })}) 

        // promise.then(res => res.json())
        //   .then(
        //     data => dispatch(getIncomeResolved(data)),
        //     error => dispatch(getIncomeRejected(error)))
      }
    }
