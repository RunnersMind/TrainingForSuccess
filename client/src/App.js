import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import LogIn from "./components/LogIn";
import User from "./pages/User";
import ProgramForm from "./components/ProgramForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      <Router>
        <Switch>
          <Route exact path="/user" component={User} />
          <Route exact path="/program" component={ProgramForm} />
          <Route exact path="/login" component={LogIn} />
        </Switch>
      </Router>
      
      </div>
    );
  }
}

export default App;
