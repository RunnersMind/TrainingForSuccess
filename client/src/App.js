import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import User         from './pages/User';
import Landing      from './pages/Landing';

// import Header, ProgramForm, SearchComp, NavbarLand, TrainingPlan, WorkoutsForm from './components';
import Header       from './components/Header';
import ProgramForm  from './components/ProgramForm';
import NavbarLand   from './components/NavbarLand';
import TrainingPlan from './components/TrainingPlan';
import WorkoutsForm from './components/WorkoutsForm';

const Footer_tmp = () => <footer className='footer'>Footer</footer>;

const App = () => {
  return (
    <div className="App">
      <Router>
      <div>
        <NavbarLand />
        <Route exact path="/" component={NavbarLand} />
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/user" component={User} />
          <Route exact path="/program" component={ProgramForm} />
          <Route exact path="/training-plan" component={TrainingPlan} />
          <Footer_tmp />
      </div>
      </Router>    
    </div>
  )
}

export default App;
