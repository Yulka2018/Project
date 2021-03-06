import Costs from "../Costs/Costs.js";
import {connect}   from 'react-redux';
import {authHeader} from '../Main/HeaderJwt.js';
import {sendDataPending, sendDataResolved, sendDataRejected} from './ActionCreators.js'


const addCosts = (categories, date, sum, comment) => {
    return dispatch => {
      let user = JSON.parse(localStorage.getItem('user'))
      let fetchBody
      if (user){
      fetchBody = JSON.stringify({ categories: categories, date: date, sum: sum, comment: comment, user: user.nick})
      }
      console.log(fetchBody)
      let promise = fetch("http://localhost:8000/costs",
        {
          method: 'POST',
          body: fetchBody,
          headers:authHeader()
        }
      )
      dispatch(sendDataPending())
      promise.then(() => dispatch(sendDataResolved()))
        .catch(() => dispatch(sendDataRejected()))
    }
  }
  
   const ConnectCosts = connect (null, {onSend2: addCosts})(Costs)
  
  export default ConnectCosts;