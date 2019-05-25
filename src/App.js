import React, {Component} from 'react';
import './App.css';
import {Provider} from 'react-redux';
import {store} from './Redux/Reducers.js';
import Main from './Main/Main.js';
import {Switch, Router, Route} from 'react-router-dom';
import createHistory from "history/createBrowserHistory";
import ConnectCosts from './Redux/AddCosts.js';
import ConnectIncome from './Redux/AddIncome.js'
import NewCategory from './Income/NewCategory.js';


class App extends Component {
  render(){
    return (
      <Provider store = {store}> 
        <Router history = {createHistory()}>
          <div className="App">
            <Switch>
              <Route path = '/'  component = {Main} exact />
              <Route path = '/income'  component = {ConnectIncome}/>
              <Route path = '/newCategory'  component = {NewCategory}/>
              <Route path = '/costs'  component = {ConnectCosts}/>
            </Switch>  
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
