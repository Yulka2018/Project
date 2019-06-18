import React, { Component } from 'react';
import './Main.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Balance from '../Balance/Balance.js';
import Spent from '../Balance/Spent.js';
// import logOut from '../Redux/SignInLogIn.js'

class Header extends Component {
    render() {
        const logOut = function logOut(){
            localStorage.clear();
          }
        let userS = JSON.parse(localStorage.getItem('user'))
        console.log(userS)
        if (!userS)
            return (
                <div className='Header'>
                    <Link to='/users'>SIGH UP</Link>
                     <div>
                    <Balance />
                    
                    <Spent />
                    </div>
                </div>)
        else return (
            <div className='Header'>
            <div >
                <div className = 'userHi'><h4 >Hi, {userS.nick}</h4></div> 
               <div> <Link onClick={logOut} to = '/'> Log out </Link></div>
                </div>
                <div>
                <Balance />
                <Spent />
                </div>
            </div>
        )
    }
}
export default Header;