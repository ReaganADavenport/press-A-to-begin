import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/header';
import Home from './components/home/home';
import Contact from './components/contact/contact';
import RelicsList from './components/relics/relics';
import Spear from './components/relics/Spear';
import Breastplate from './components/relics/Breastplate';
import Cloak from './components/relics/Cloak';
import Shoes from './components/relics/Shoes';
import Hammer from './components/relics/Hammer';
import Lance from './components/relics/Lance';
import Shield from './components/relics/Shield';
import Checkout from './components/book/checkout';
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
      <Route path='/relics/breastplate' component={Breastplate}/>
      <Route path='/relics/cloak' component={Cloak}/>
      <Route path='/relics/hammer' component={Hammer}/>
      <Route path='/relics/lance' component={Lance}/>
      <Route path='/relics/shield' component={Shield}/>
      <Route path='/relics/shoes' component={Shoes}/>
      <Route path='/shop' component={Checkout}/>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
