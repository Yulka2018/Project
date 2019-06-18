import React, { Component } from 'react';
import './Main.css';
import { Link } from 'react-router-dom';
import Balance from '../Balance/Balance.js';
import Spent from '../Balance/Spent.js';
import User from './User'

class Header extends Component {
    render() {
        let userS = JSON.parse(localStorage.getItem('user'))
        console.log(userS)
        if (!userS)
            return (
                <div className='Header'>
                    <Link to='/users'>SIGH UP</Link>
                    <Balance />
                    <div></div>
                    <Spent />
                </div>)
        else return (
            <div className='Header'>
                <h4>Hi, {userS.nick}</h4>
                <Balance />
                <div></div>
                <Spent />
            </div>
        )
    }
}
export default Header;