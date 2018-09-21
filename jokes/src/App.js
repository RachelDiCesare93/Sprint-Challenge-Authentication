import React, { Component } from 'react';
import {Route, withRouter} from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import Jokes from './components/jokes';



import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the world of JOKES</h1>
          <button onClick={this.logout}>Logout</button>
        </header>
          <Route path = "/login" component = {Login}> </Route>
          <Route path = "/register" component = {Register}> </Route>
          <Route path = "/jokes" component = {Jokes}> </Route>
      </div>
    );
  }
  logout = event => {
    localStorage.removeItem('jwt');
    this.props.history.push('/login');
  }
}

export default withRouter(App);
