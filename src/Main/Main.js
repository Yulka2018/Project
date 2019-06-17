import React, { Component } from 'react';
import './Main.css';
import { Link } from 'react-router-dom';
import Header from './Header.js';
import DataGrid from './ReactDataGrid.js';
import ConnectCosts from '../Redux/AddCosts.js';


class Main extends Component {
    render() {
        return (
            <div className = 'container'>
                <Header />
                <div className='main-container'>
                    <div className='main-left'>
                        <Link to='/income' className='mainbtn'>Add Income</Link>
                        <Link to='/newCategory' className='mainbtn'>Add Castegory</Link>
                        <Link to='/statistic' className='mainbtn'>Statistic</Link>
                    </div>
                    <div className='main-right' >
                        <DataGrid />
                        <ConnectCosts />
                    </div>
                </div>
            </div>
        )
    }
}
export default Main;