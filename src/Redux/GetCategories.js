import {getCategoriesPending, getCategoriesResolved,getCategoriesRejected} from './ActionCreators.js';

export const getCategories = () => {
      return dispatch => {
        let promise = fetch("http://localhost:8000/categories",
          {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          }
        )
        dispatch(getCategoriesPending())
        promise.then(res => res.json())
          .then(
            data => dispatch(getCategoriesResolved(data)),
            error => dispatch(getCategoriesRejected(error)))
      }
    }

    