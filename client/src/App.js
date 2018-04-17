import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import User         from './pages/User';
import Landing      from './pages/Landing';

// import Header, ProgramForm, SearchComp, NavbarLand, TrainingPlan, WorkoutsForm from './components';
import Header       from './components/Header';
import ProgramForm  from './components/ProgramForm';
import Navbar   from './components/Navbar';
import TrainingPlan from './components/TrainingPlan';
import Footer from './components/Footer';
import SearchComponent from './components/Search';

const App = () => {
  return (
    <div className="App">
      <Router>
      <div>
        <Navbar />
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/user" component={User} />
          <Route exact path="/program" component={ProgramForm} />
          <Route exact path="/training-plan" component={TrainingPlan} />
          <Route exact path="/search" component={SearchComponent} />
        <Footer />
      </div>
      </Router>    
    </div>
  )
}

export default App;
