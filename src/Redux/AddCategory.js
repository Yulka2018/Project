import NewCategory from "../Costs/NewCategory.js";
import {connect}   from 'react-redux';
import {authHeader} from '../Main/HeaderJwt.js';
import {sendDataPending, sendDataResolved, sendDataRejected} from './ActionCreators.js'


const addCategory = (categories, type) => {
    console.log(categories)
    
    return dispatch => {
      let fetchBody
      type == 'costs' ? fetchBody = JSON.stringify({ categories: categories, costs: true, income:  false}) : 
      fetchBody = JSON.stringify({ categories: categories, costs: false, income:  true})
      console.log(fetchBody)
      let promise = fetch("http://localhost:8000/categories",
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
  
   const ConnectCategory = connect (null, {addCategory: addCategory})(NewCategory)
  
  export default ConnectCategory;