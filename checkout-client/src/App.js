import React from "react";
import { Switch, Route, Redirect, HashRouter } from "react-router-dom";

import logo from "./logo.png";
import "./App.css";

import Login from "./components/LoginForm";
import Signup from "./components/SignupForm";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <div className="App">
      <body>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <HashRouter>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/checkout" component={Checkout} />
              <Redirect to="/" />
            </Switch>
          </HashRouter>
        </main>
      </body>
    </div>
  );
}

export default App;
