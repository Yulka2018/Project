import React, {Component} from 'react';
import './Main.css';
import Balance from '../Balance/Balance.js';
import Spent from '../Balance/Spent.js';

class Header extends Component{
    render(){
        return(
            <div className = 'Header'>
                    <span><img className = 'logo' src ="Logo.png" alt = 'png'></img><span>Logo</span></span>
                    <div> 
                        <Balance/>
                        <Spent/>
                    </div> 
            </div>
        )
    }
}
export default Header;