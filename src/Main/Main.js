import React, {Component} from 'react';
import './Main.css';
import {Link} from 'react-router-dom';
import Chart from '../Balance/Chart.js';
import Header from './Header.js'



class Main extends Component {
    render(){
        return(
            <div>
                <Header/>
                <div className = 'main-container'> 
                     <Link to = '/income' className = 'mainbtn'>Add Income</Link>
                     <Link to = '/costs' className = 'mainbtn'>Add costs</Link>
                </div> 
                <div className = 'statistic'> 
                    <h3>Statistic</h3>
                    <select > 
                        <option> for the week </option>    
                        <option> for the month </option>
                        <option> for the year </option>
                    </select>
                    <Chart/>
                </div>
            </div>    
        )
    }
}
export default Main;