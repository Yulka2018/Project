import React, {Component} from 'react';
import '../Main/Main.css';
import Balance from '../Balance/Balance.js';
import Spent from '../Balance/Spent.js';
import {Link} from 'react-router-dom';


class Header2 extends Component{
    render(){
        return(
            <div className = 'Header'>
                    <Link to = '/'>Back</Link>
                    <div> 
                        <Balance/>
                        <Spent/>
                    </div> 
            </div>
        )
    }
}
export default Header2;