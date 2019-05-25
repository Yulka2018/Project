import {getIncomePending, getIncomeResolved, getIncomeRejected} from './ActionCreators.js';

export const getIncome = () => {
      return dispatch => {
        let promise = fetch("http://localhost:8000/income",
          {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          }
        )
        dispatch(getIncomePending())
        promise.then(res => res.json())
          .then(
            data => dispatch(getIncomeResolved(data)),
            error => dispatch(getIncomeRejected(error)))
      }
    }
