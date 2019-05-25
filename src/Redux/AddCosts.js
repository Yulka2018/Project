import Costs from "../Costs/Costs.js";
import {connect}   from 'react-redux';
import {sendDataPending, sendDataResolved, sendDataRejected} from './ActionCreators.js'


const addCosts = (categories, date, sum) => {
    console.log(categories, date, sum)
    return dispatch => {
      let fetchBody = JSON.stringify({ categories: categories, date: date, sum: sum, costs: true, income:  false})
      console.log(fetchBody)
      let promise = fetch("http://localhost:8000/costs",
        {
          method: 'POST',
          body: fetchBody,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      dispatch(sendDataPending())
      promise.then(() => dispatch(sendDataResolved()))
        .catch(() => dispatch(sendDataRejected()))
    }
  }
  
   const ConnectCosts = connect (null, {onSend2: addCosts})(Costs)
  
  export default ConnectCosts;