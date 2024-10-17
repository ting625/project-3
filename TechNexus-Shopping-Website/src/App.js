import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages'
import SigninPage from './pages/signin'
import Shop from './pages/shop'
import Checkout from './pages/checkout';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/shop" component={Shop} exact />
        <Route path="/checkout" component={Checkout} exact />
        <Route path="/signin" component={SigninPage} exact />
      </Switch>
    </Router>
  );
}

export default App;