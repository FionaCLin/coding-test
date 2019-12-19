import React from "react";
import { Switch, Route, Redirect, HashRouter } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import Login from "./components/LoginForm";
import Signup from "./components/SignupForm";
import Admin from "./pages/Admin";
import Checkout from "./pages/Checkout";

function App() {
  return (
      <div className="App">
        <HashRouter>
          <Route exact path="*" component={Header} />
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/checkout" component={Checkout} />
              <Route exact path="/admin" component={Admin} />
              <Redirect to="/" />
            </Switch>
        </HashRouter>
      </div>
  );
}

export default App;
