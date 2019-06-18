import User from '../Main/User';
import {connect}   from 'react-redux';
import {actionPendingUser, actionResolvedUser, actionRejectedUser, actionPendingUserLogin, actionResolvedUserLogin, actionRejectedUserLogin} from './ActionCreators.js'

function createUser (nick, email, pass, event){
  event.preventDefault()
    return dispatch => {
      let promise = fetch("http://localhost:8000/users",
                 {
                     headers: {
                     'Accept': 'application/json',
                     'Content-Type': 'application/json'
                 },
                 method: "POST",
                 body: JSON.stringify({nick: nick, email: email, pass: pass})
                 })
       dispatch(actionPendingUser())
       promise.then(res =>
         {
           return res.json().then(data => {
             //console.log(data)
               if (!res.ok) {
                  return dispatch(actionRejectedUser(data));
               }
               return  dispatch(actionResolvedUser(data));
           })})              
   }
 }
 
 function userLogin(nick, pass, event){
  event.preventDefault()
    return dispatch => {
      let promise = fetch('http://localhost:8000/authenticate', {
                                method: 'POST',
                                headers: {
  
                                  'Accept': 'application/json',
                                  'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({nick: nick, pass: pass}) 
                              }
              )
      dispatch(actionPendingUserLogin())
      promise.then (res =>
        {
          return res.json().then(data => {
            console.log(data)
              if (!res.ok) {
                 return dispatch(actionRejectedUserLogin(data));
              }
              localStorage.setItem('user', JSON.stringify (data))
              return  dispatch(actionResolvedUserLogin(data));
          })})                    
      }
  }

 const ConnectedUser = connect (null, {onSendSignin: createUser, onSendLogin: userLogin})(User)
 export default ConnectedUser;


 export function logOut(){
  localStorage.clear();
}
