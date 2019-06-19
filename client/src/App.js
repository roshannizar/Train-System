import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './component/landing/Home';
import NavBar from './component/navigation/NavBar';
import Cart from './component/cart/Cart';
import { Provider } from 'react-redux';
import store from './store';
import DialogMobile from './component/payment/DialogMobile';
import PaymentSelection from './component/payment/PaymentSelection';
import SampathPayment from './component/payment/SampathPayment';

import './App.css';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <NavBar />
          <div id="apptwo">
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/payment" component={PaymentSelection}/>
            <Route exact path="/card" component={SampathPayment}/>
            <Route exact path="/mobile" component={DialogMobile}/>
          </div>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
