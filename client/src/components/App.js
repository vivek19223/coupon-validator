import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from './Header';
import Landing from './Landing';
import DashBoard from './Dashboard';
import CouponForm from './CouponForm';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Route path="/" exact component={Landing} />
          <Route path="/dashboard" component={DashBoard} />
          <Route path="/create" component={CouponForm} />
        </div>

      </BrowserRouter>
    );
  }
}

export default App;
