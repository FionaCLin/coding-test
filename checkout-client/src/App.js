import React from "react";
import { Switch, Route, Redirect, HashRouter } from "react-router-dom";

import "./App.css";

import Login from "./components/LoginForm";
import Signup from "./components/SignupForm";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <div className="App">
          <HashRouter>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/checkout" component={Checkout} />
              <Redirect to="/" />
            </Switch>
          </HashRouter>
    </div>
  );
}

export default App;
