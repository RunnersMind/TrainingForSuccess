import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import User         from './pages/User';
import Landing      from './pages/Landing';
import Program from './pages/Program';

import ProgramForm  from './components/ProgramForm';
import Navbar   from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Router>
      <div>
        <Navbar />
        <div className='content'>
          <Route exact path="/" component={Landing} />
          <Route exact path="/user" component={User} />
          <Route path="/user/:id" component={User} />
          <Route exact path="/add-program" component={ProgramForm} />
          <Route path="/program/:id" component={Program} />
        </div>
        <Footer />
      </div>
      </Router>    
    </div>
  )
}

export default App;
