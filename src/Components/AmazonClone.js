import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";

function AmazonClone() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/checkout">
            <h1>Checkout</h1>
          </Route>
          <Route exact path="/login">
            <h1>Login</h1>
          </Route>
          <Route path="/">
            <Header />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default AmazonClone;
