import {getCostsPending,getCostsResolved, getCostsRejected} from './ActionCreators.js';

export const getCosts = () => {
      return dispatch => {
        let promise = fetch("http://localhost:8000/costs",
          {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          }
        )
        dispatch(getCostsPending())
        promise.then(res => res.json())
          .then(
            data => dispatch(getCostsResolved(data)),
            error => dispatch(getCostsRejected(error)))
      }
    }