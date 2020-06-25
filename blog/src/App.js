import React from 'react';
import './App.css';
import Home from './containers/Home/Home';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ContactUs from './containers/ContactUS/ContactUs';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />
        <Route path='/' exact component={Home} />
        <Route path='/contact' component={ContactUs} />
      </div>
    </Router>
  );
}

export default App;
