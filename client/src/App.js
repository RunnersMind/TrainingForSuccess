import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";=
import logo from './logo.svg';
import './App.css';
import Athlete from "./pages/Athlete";


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
      <Switch>
        <Route exact path="/athlete" component={Athlete} />
        <Route component={NoMatch} />
      </Switch>
      </div>
    );
  }
}

export default App;
