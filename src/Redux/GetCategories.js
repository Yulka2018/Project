import {getCategoriesPending, getCategoriesResolved,getCategoriesRejected} from './ActionCreators.js';
import {authHeader} from '../Main/HeaderJwt.js';

export const getCategories = () => {
      return dispatch => {
        let promise = fetch("http://localhost:8000/categories",
          {
            method: 'GET',
            headers:authHeader()
          }
        )
        dispatch(getCategoriesPending())
        promise.then(res => res.json())
          .then(
            data => dispatch(getCategoriesResolved(data)),
            error => dispatch(getCategoriesRejected(error)))
      }
    }

    