import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/SigninPage';
import Shop from './pages/shop';
import Checkout from './pages/checkout';
import OrderConfirmationPage from './pages/OrderConfirmationPage'; // Import new page

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/shop" component={Shop} exact />
        <Route path="/checkout" component={Checkout} exact />
        <Route path="/signin" component={SigninPage} exact />
        <Route path="/order-confirmation" component={OrderConfirmationPage} exact /> {/* Add new route */}
      </Switch>
    </Router>
  );
}

export default App;
