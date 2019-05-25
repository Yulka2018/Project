import Income from "../Income/Income.js";
import {connect}   from 'react-redux';
import {sendDataPending, sendDataResolved, sendDataRejected} from './ActionCreators.js'


const addIncome = (categories, date, sum) => {
    console.log(categories, date, sum)
    return dispatch => {
      let fetchBody = JSON.stringify({ categories: categories, date: date, sum: sum, costs: false, income:  true})
      console.log(fetchBody)
      let promise = fetch("http://localhost:8000/income",
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
  
   const ConnectIncome = connect (null, {onSend: addIncome})(Income)
  
  export default ConnectIncome;
  