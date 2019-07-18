import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/header';
import Home from './components/home/home';
import Contact from './components/contact/contact';
import RelicsList from './components/relics/relics';
import Spear from './components/relics/Spear';
import Footer from './components/footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Route path='/' exact component={Home}/>
      <Route path='/contact' exact component={Contact}/>
      <Route path='/relics' exact component={RelicsList}/>
      <Route path='/relics/spear' component={Spear}/>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
