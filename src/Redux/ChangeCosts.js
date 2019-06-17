import Costs from "../Costs/Costs.js";
import {authHeader} from '../Main/HeaderJwt.js';
import {sendDataPending, sendDataResolved, sendDataRejected} from './ActionCreators.js'


const changeCosts = (categories, sum, id) => {
    console.log(categories, sum, id)
    return dispatch => {
      let fetchBody = JSON.stringify({ categories: categories, sum: sum, id: id})
      console.log(fetchBody)
      let promise = fetch("http://localhost:8000/costs",
        {
          
          method: 'PUT',
          body: fetchBody,
          headers:authHeader(),
        }
      )
      dispatch(sendDataPending())
      promise.then(() => dispatch(sendDataResolved()))
        .catch(() => dispatch(sendDataRejected()))
    }
  }
  export default changeCosts;