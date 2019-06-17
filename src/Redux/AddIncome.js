import Income from "../Income/Income.js";
import {connect}   from 'react-redux';
import {authHeader} from '../Main/HeaderJwt.js';
import {sendDataPending, sendDataResolved, sendDataRejected} from './ActionCreators.js'


const addIncome = (categories, date, sum, comments, event) => {
  event.preventDefault()
    console.log(categories, date, sum)
    return dispatch => {
      let user = JSON.parse(localStorage.getItem('user'))
      let fetchBody
      if (user){
      fetchBody = JSON.stringify({ categories: categories, date: date, sum: sum, comment: comments, user: user.nick})
      }
      console.log(fetchBody)
      let promise = fetch("http://localhost:8000/income",
        {
          method: 'POST',
          body: fetchBody,
          headers:authHeader()
        }
      )
      dispatch(sendDataPending())
      promise.then (res =>
        {
          return res.json().then(data => {
            console.log(data)
              if (!res.ok) {
                 return dispatch(sendDataRejected(data));
              }

              return  dispatch(sendDataResolved(data));
          })})     
    }
  }
  
   const ConnectIncome = connect (null, {onSend: addIncome})(Income)
  
  export default ConnectIncome;
  