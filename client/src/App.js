import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Header       from './components/Header';
import User         from './pages/User';
import ProgramForm  from './components/ProgramForm';
import SearchComp   from './components/Search';
import NavbarLand from './components/NavbarLand';
import Jumbo from './components/Jumbotron';

const Landing = () => <h2>Landing Page</h2>;
const Footer = () => <footer className='footer'>Footer</footer>;

const App = () => {
  return (
    <div className="App">
    <Router>
      <div className="container-fluid">
      <NavbarLand />
      <Route exact path="/" component={Landing} />
      </div>
      </Router>

      <Router>
      <div className="container-fluid">
      <Jumbo />
      <Route exact path="/" component={Landing} />
      </div>
      </Router>

      <Router>
        <div className="container">
          <Header />
          <hr/>
          <Route exact path="/" component={Landing} />
          <Route exact path="/user" component={User} />
          <Route exact path="/program" component={ProgramForm} />
          <Route exact path="/search" component={SearchComp} />
          <hr/>
          <Footer />
        </div>
      </Router>    
    </div>
  )
}

export default App;
