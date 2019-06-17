import React, {Component} from 'react';
import './App.css';
import {Provider} from 'react-redux';
import {store} from './Redux/Reducers.js';
import Main from './Main/Main.js';
import {Switch, Router, Route} from 'react-router-dom';
import createHistory from "history/createBrowserHistory";
import ConnectIncome from './Redux/AddIncome.js'
import ConnectCategory from './Redux/AddCategory.js';
import ConnectedUser from './Redux/SignInLogIn.js'
import Chart from './Chart/Chart.js'


class App extends Component {
  render(){
    return (
      <Provider store = {store}> 
        <Router history = {createHistory()}>
          <div className="App">
            <Switch>
              <Route exact path = '/'  component = {Main}  />
              <Route path = '/income'  component = {ConnectIncome}/>
              <Route path = '/users'  component = {ConnectedUser}/>
              <Route path = '/newCategory'  component = {ConnectCategory}/>
              <Route path = '/statistic'  component = {Chart}/>
              <Route exact path = '/:nick' component={Main} />
            </Switch>  
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
