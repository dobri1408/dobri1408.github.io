import React from 'react';
import './App.css';
import Home from './components/pages/HomePage/Home';
import Services from './components/pages/Services/Services';
import Products from './components/pages/Products/Products';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/pages/Footer/Footer.js';
import ScrollToTop from './components/ScrollToTop';
import Sign from './Sign.js';
import Form from './Form';
import Login from './FormLogin.js';
import FormL from './FormL.js'
function App() {
  return (
   <Router>
      <ScrollToTop/>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/sign' component={Form} />
        <Route path = '/login' component={FormL}/>
       </Switch>
      <Footer />
    </Router>
  );
}

export default App;
