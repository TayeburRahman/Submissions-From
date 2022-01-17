 import './App.css';
 import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
 import Payment from './Page/ Payment';
import cart from './Page/Cart';
import ShippingInfo from './Page/ ShippingInfo ';
import Review from './Page/Review';
import Service from './Page/Service';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/" component={Service} />
        <Route exact path="/Service" component={Service} />
         <Route exact path="/cards" component={cart} />
         <Route exact path="/payment" component={Payment} />
        <Route exact path="/shipping" component={ShippingInfo} />
        <Route exact path="/review" component={Review} />

        </Switch>
      </Router>
        
    </div>
  );
}

export default App;
