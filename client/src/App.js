import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './component/landing/Home';
import NavBar from './component/navigation/NavBar';
import Cart from './component/cart/Cart';
import { Provider } from 'react-redux';
import store from './store';

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
          </div>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
